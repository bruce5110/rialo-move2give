const panels = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll(".nav-item");
const panelButtons = document.querySelectorAll("[data-panel-target]");
const sportTabs = document.querySelectorAll(".tab");
const sportPanels = document.querySelectorAll(".sport-panel");
const challengeCards = document.querySelectorAll(".challenge-card[data-challenge]");
const detailTitle = document.querySelector("#detail-title");
const detailCopy = document.querySelector("#detail-copy");
const conditionList = document.querySelector("#condition-list");
const simulateButton = document.querySelector("#simulate-btn");
const joinButton = document.querySelector("#join-btn");
const walletButton = document.querySelector("#wallet-button");
const walletCard = document.querySelector("#wallet-card");
const walletMenu = document.querySelector("#wallet-menu");
const disconnectWalletButton = document.querySelector("#disconnect-wallet");
const toast = document.querySelector("#toast");
let walletConnected = false;
let connectedAccount = "";
let walletVerified = false;

const challengeDetails = {
  "run-hope": {
    title: "14-Day Run Streak",
    copy: "Rialo waits until 10 runners join, then starts workout verification automatically.",
    conditions: [
      "Started with 10 / 10 runners",
      "Verify 3km daily run privately",
      "Tie-break by private distance and calories",
      "Donate missed-day penalties to child relief",
    ],
  },
  "run-100": {
    title: "7-Day 100km Challenge",
    copy: "The challenge starts when the pool reaches 200 USDC.",
    conditions: [
      "Start when 200 USDC pool is filled",
      "Track team distance for 7 days",
      "Publish total progress only",
      "Split rewards by contribution and donation rule",
    ],
  },
  "morning-run": {
    title: "Morning Streak Run",
    copy: "Rialo checks whether each run was completed before 9 AM.",
    conditions: [
      "Start when 12 runners join",
      "Verify 30-minute run before 9 AM",
      "Keep exact route and start location private",
      "Send missed-day penalty to school kits",
    ],
  },
  "swim-water": {
    title: "7-Day Swim for Clean Water",
    copy: "Smartwatch swim sessions are checked without putting raw health data on-chain.",
    conditions: [
      "Start when 8 swimmers join",
      "Verify 800m or 30-minute swim",
      "Use Apple Watch or smartwatch swim session",
      "Route donations to clean water campaign",
    ],
  },
  "pool-5k": {
    title: "5K Pool Swim Week",
    copy: "Rialo verifies pool swim sessions and publishes only completion status.",
    conditions: [
      "Start next Monday",
      "Verify total 5km pool swim",
      "Hide lap details and heart-rate graph",
      "Issue tax-ready donation receipt",
    ],
  },
};

function showPanel(id) {
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.panel === id));
}

function showSport(id) {
  sportTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.sport === id));
  sportPanels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
}

function selectChallenge(id) {
  const detail = challengeDetails[id];
  if (!detail) return;

  challengeCards.forEach((card) => card.classList.toggle("selected", card.dataset.challenge === id));
  detailTitle.textContent = detail.title;
  detailCopy.textContent = detail.copy;
  conditionList.innerHTML = detail.conditions.map((condition) => `<span>${condition}</span>`).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getInjectedWalletProvider() {
  const ethereum = window.ethereum;
  if (!ethereum) return null;

  if (Array.isArray(ethereum.providers)) {
    return ethereum.providers.find((provider) => provider.isMetaMask) ||
      ethereum.providers.find((provider) => provider.isOkxWallet || provider.isOKExWallet) ||
      ethereum.providers[0];
  }

  return ethereum;
}

function formatAddress(address) {
  if (!address) return "Connect";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function signWalletConnection(provider, account) {
  const message = [
    "Rialo Move2Give",
    "",
    "Confirm wallet ownership to connect.",
    "This signature does not send a transaction or move funds.",
    "",
    `Wallet: ${account}`,
    `Time: ${new Date().toISOString()}`,
  ].join("\n");

  await provider.request({
    method: "personal_sign",
    params: [message, account],
  });
}

function setWalletConnected(account, verified = false) {
  connectedAccount = account || "";
  walletConnected = Boolean(connectedAccount);
  walletVerified = walletConnected && verified;
  walletCard.classList.toggle("connected", walletConnected);
  document.body.classList.toggle("wallet-connected", walletVerified);
  walletButton.textContent = walletConnected ? formatAddress(connectedAccount) : "Connect";
  walletMenu.classList.remove("open");
  walletMenu.hidden = true;
}

async function revokeWalletPermissions() {
  const provider = getInjectedWalletProvider();
  if (!provider?.request) return false;

  try {
    await provider.request({
      method: "wallet_revokePermissions",
      params: [{ eth_accounts: {} }],
    });
    return true;
  } catch (error) {
    return false;
  }
}

navItems.forEach((item) => item.addEventListener("click", () => showPanel(item.dataset.panel)));
panelButtons.forEach((button) => button.addEventListener("click", () => showPanel(button.dataset.panelTarget)));
sportTabs.forEach((tab) => tab.addEventListener("click", () => showSport(tab.dataset.sport)));
challengeCards.forEach((card) => card.addEventListener("click", () => selectChallenge(card.dataset.challenge)));

simulateButton.addEventListener("click", () => {
  simulateButton.textContent = "Verified";
  showToast("Workout verified privately. Challenge state updated on Rialo.");
  setTimeout(() => {
    simulateButton.textContent = "Simulate Today";
  }, 2200);
});

walletButton.addEventListener("click", async () => {
  if (walletConnected) {
    const shouldOpen = walletMenu.hidden;
    walletMenu.hidden = !shouldOpen;
    walletMenu.classList.toggle("open", shouldOpen);
    return;
  }

  walletMenu.classList.remove("open");
  walletMenu.hidden = true;

  const provider = getInjectedWalletProvider();
  if (!provider) {
    showToast("No browser wallet found. Install MetaMask or OKX Wallet.");
    return;
  }

  try {
    walletButton.textContent = "Connecting";
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    if (!accounts[0]) {
      throw new Error("No account returned");
    }
    walletButton.textContent = "Confirm";
    await signWalletConnection(provider, accounts[0]);
    setWalletConnected(accounts[0], true);
    showToast("Wallet confirmed. You can now deposit into a challenge pool.");
  } catch (error) {
    setWalletConnected("");
    showToast(error?.code === 4001 ? "Wallet confirmation rejected." : "Wallet connection failed.");
  }
});

disconnectWalletButton.addEventListener("click", async () => {
  walletButton.textContent = "Disconnecting";
  const revoked = await revokeWalletPermissions();
  setWalletConnected("");
  showToast(revoked ? "Wallet permission revoked. Connect will ask again." : "Wallet disconnected in Move2Give.");
});

document.addEventListener("click", (event) => {
  if (!walletCard.contains(event.target)) {
    walletMenu.classList.remove("open");
    walletMenu.hidden = true;
  }
});

const provider = getInjectedWalletProvider();
if (provider) {
  provider.on?.("accountsChanged", () => {
    setWalletConnected("");
    showToast("Wallet changed. Please connect and sign again.");
  });
}

joinButton.addEventListener("click", () => {
  if (!walletConnected) {
    showToast("Connect a wallet first to deposit into the pool.");
    return;
  }

  showToast("20 USDC deposited into the selected challenge pool.");
});
