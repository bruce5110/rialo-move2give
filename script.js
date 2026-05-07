const panels = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll(".nav-item");
const panelButtons = document.querySelectorAll("[data-panel-target]");
const sportTabs = document.querySelectorAll(".tab");
const sportPanels = document.querySelectorAll(".sport-panel");
const challengeCards = document.querySelectorAll(".challenge-card[data-challenge]");
const detailTitle = document.querySelector("#detail-title");
const selectedMeta = document.querySelector("#selected-meta");
const conditionList = document.querySelector("#condition-list");
const joinNote = document.querySelector("#join-note");
const selectedChallengeBoard = document.querySelector("#selected-challenge-board");
const executionStatus = document.querySelector("#execution-status");
const conditionResult = document.querySelector("#condition-result");
const conditionTitle = document.querySelector("#condition-title");
const conditionSubtitle = document.querySelector("#condition-subtitle");
const distanceValue = document.querySelector("#distance-value");
const timeValue = document.querySelector("#time-value");
const streakValue = document.querySelector("#streak-value");
const progressValue = document.querySelector("#progress-value");
const workoutProgressBar = document.querySelector("#workout-progress-bar");
const executionStepCards = document.querySelectorAll("[data-execution-step]");
const liveStatusSteps = document.querySelectorAll("[data-live-status-step]");
const engineActiveMessage = document.querySelector("#engine-active-message");
const executionFlowProgress = document.querySelector("#execution-flow-progress");
const executionProgressValue = document.querySelector("#execution-progress-value");
const sfsBudgetAmount = document.querySelector("#sfs-budget-amount");
const sfsBudgetNote = document.querySelector("#sfs-budget-note");
const joinButton = document.querySelector("#join-btn");
const walletButton = document.querySelector("#wallet-button");
const walletCard = document.querySelector("#wallet-card");
const walletMenu = document.querySelector("#wallet-menu");
const disconnectWalletButton = document.querySelector("#disconnect-wallet");
const walletShortcutButtons = document.querySelectorAll("[data-wallet-shortcut]");
const toast = document.querySelector("#toast");
const historyList = document.querySelector(".history-list");
const rewardAllocationCard = document.querySelector(".reward-allocation-card");
const settlementButton = document.querySelector("#settlement-button");
const settlementBadge = document.querySelector("#settlement-badge");
const settlementStatus = document.querySelector("#settlement-status");
const settlementCelebration = document.querySelector("#settlement-celebration");
const celebrationPayout = document.querySelector("#celebration-payout");
const celebrationWallet = document.querySelector("#celebration-wallet");
const celebrationDonation = document.querySelector("#celebration-donation");
const openFinalSettlementButton = document.querySelector("#open-final-settlement");
const finalSettlementModal = document.querySelector("#final-settlement-modal");
const finalSettlementClose = document.querySelector("#final-settlement-close");
const finalChallengeName = document.querySelector("#final-challenge-name");
const finalRank = document.querySelector("#final-rank");
const finalEarned = document.querySelector("#final-earned");
const finalDonated = document.querySelector("#final-donated");
const finalWallet = document.querySelector("#final-wallet");
const finalTransactionStatus = document.querySelector("#final-transaction-status");
const finalTransactionHash = document.querySelector("#final-transaction-hash");
const finalDonationRecipient = document.querySelector("#final-donation-recipient");
const finalReceiptType = document.querySelector("#final-receipt-type");
const finalStatusLine = document.querySelector("#final-status-line");
const finalPrivacyNote = document.querySelector("#final-privacy-note");
const finalImpactCreated = document.querySelector("#final-impact-created");
const viewOnchainResultButton = document.querySelector("#view-onchain-result");
const downloadReceiptButton = document.querySelector("#download-receipt");
const currentStatusBadge = document.querySelector("#current-status-badge");
const currentStatusCard = document.querySelector(".current-status");
const historyModal = document.querySelector("#history-modal");
const historyModalClose = document.querySelector("#history-modal-close");
const historyModalTitle = document.querySelector("#history-modal-title");
const approvalModal = document.querySelector("#approval-modal");
const approvalModalClose = document.querySelector("#approval-modal-close");
const approvalWalletEmpty = document.querySelector("#approval-wallet-empty");
const approvalContent = document.querySelector("#approval-content");
const approvalConnectWallet = document.querySelector("#approval-connect-wallet");
const approvalChallenge = document.querySelector("#approval-challenge");
const approvalEntry = document.querySelector("#approval-entry");
const approvalWallet = document.querySelector("#approval-wallet");
const approvalStatus = document.querySelector("#approval-status");
const approvalCancel = document.querySelector("#approval-cancel");
const approvalSign = document.querySelector("#approval-sign");
const historyPeriod = document.querySelector("#history-period");
const historyResult = document.querySelector("#history-result");
const historyEntry = document.querySelector("#history-entry");
const historyParticipants = document.querySelector("#history-participants");
const historyRankRow = document.querySelector("#history-rank-row");
const historyRank = document.querySelector("#history-rank");
const historyPayoutLabel = document.querySelector("#history-payout-label");
const historyPayout = document.querySelector("#history-payout");
const historyDonationRow = document.querySelector("#history-donation-row");
const historyDonation = document.querySelector("#history-donation");
const historyNetRow = document.querySelector("#history-net-row");
const historyNet = document.querySelector("#history-net");
const historyRankBonusRow = document.querySelector("#history-rank-bonus-row");
const historyRankBonus = document.querySelector("#history-rank-bonus");
const historyOrganizationRow = document.querySelector("#history-organization-row");
const historyOrganization = document.querySelector("#history-organization");
const historyPoolRow = document.querySelector("#history-pool-row");
const historyPoolContribution = document.querySelector("#history-pool-contribution");
const historyReceipt = document.querySelector("#history-receipt");
const historyOutcome = document.querySelector("#history-outcome");
const dataFlowHero = document.querySelector("#data-flow-hero");
const rialoFlowBlock = document.querySelector(".rialo-block");
const chainFlowBlock = document.querySelector(".chain-block");
const sourceNodes = document.querySelectorAll("[data-source-node]");
const dataPermissionModal = document.querySelector("#data-permission-modal");
const dataPermissionClose = document.querySelector("#data-permission-close");
const dataPermissionCancel = document.querySelector("#data-permission-cancel");
const dataPermissionAllow = document.querySelector("#data-permission-allow");
const dataPermissionTitle = document.querySelector("#data-permission-title");
const dataPermissionSubtitle = document.querySelector("#data-permission-subtitle");
const dataPermissionList = document.querySelector("#data-permission-list");
const dataPermissionNote = document.querySelector("#data-permission-note");
const privacyProtectedCard = document.querySelector(".privacy-protected-card");
const privacyInputs = document.querySelectorAll("[data-privacy-key]");
let walletConnected = false;
let connectedAccount = "";
let walletVerified = false;
let liveSyncStarted = false;
let streakLocked = false;
let rewardRankInterval = null;
let settlementPreviewActive = false;
let settlementCompleted = false;
let pendingDataSource = "apple";
let connectedDataSource = "";
let dataFlowTimer = null;
let dataFlowCompletionTimers = [];
let currentRewardAllocation = {
  rank: 2,
  estimatedPayout: 100,
  toWallet: 80,
  toDonation: 20,
};
const initialSfsBudget = 18.42;
let sfsBudget = initialSfsBudget;
let sfsSettlementCharged = false;

const initialMove2GiveState = {
  progressDay: 8,
  totalDays: 14,
  userStreak: 8,
  ranking: 2,
  minjiRank: 1,
  minjiStreak: 8,
  joonRank: 2,
  joonStreak: 7,
};

const completedMove2GiveState = {
  progressDay: 8,
  totalDays: 14,
  userStreak: 8,
  ranking: 2,
  minjiRank: 1,
  minjiStreak: 8,
  joonRank: 3,
  joonStreak: 7,
};

const historyDetails = {
  "run-streak": {
    title: "14-Day Run Streak",
    period: "May 13, 2026 ~ May 27, 2026",
    result: "Completed",
    entryAmount: 20,
    participants: 10,
    rank: "#2",
    finalPayout: 90,
    donationFromPayout: 16,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "UNICEF",
    receiptStatus: "Receipt issued",
    outcomeNote: "Final payout received and donation routed from payout",
  },
  "walk-meals": {
    title: "Walk for Meals",
    period: "May 1, 2026 ~ May 7, 2026",
    result: "Failed",
    entryAmount: 15,
    participants: 8,
    rank: null,
    finalPayout: 0,
    donationFromPayout: 0,
    rankBonus: null,
    poolContribution: 15,
    donationOrganization: "Red Cross",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Missed mission. Entry moved to winner reward pool",
  },
  "swim-water": {
    title: "Swim for Clean Water",
    period: "April 23, 2026 ~ April 30, 2026",
    result: "Completed",
    entryAmount: 25,
    participants: 12,
    rank: "#3",
    finalPayout: 84,
    donationFromPayout: 14,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Red Cross",
    receiptStatus: "Receipt issued",
    outcomeNote: "Final payout received and partial donation routed",
  },
  "morning-run": {
    title: "Morning Run Sprint",
    period: "April 15, 2026 ~ April 22, 2026",
    result: "Completed",
    entryAmount: 10,
    participants: 6,
    rank: "#1",
    finalPayout: 56,
    donationFromPayout: 10,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Greenpeace",
    receiptStatus: "Receipt issued",
    outcomeNote: "Top-rank payout received and donation routed from payout",
  },
  "weekend-cycling": {
    title: "Weekend Cycling Pool",
    period: "April 8, 2026 ~ April 14, 2026",
    result: "Completed",
    entryAmount: 30,
    participants: 14,
    rank: "#2",
    finalPayout: 70,
    donationFromPayout: 10,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "UNICEF",
    receiptStatus: "Receipt issued",
    outcomeNote: "Cycling goal completed and donation routed from payout",
  },
  "night-walk": {
    title: "Night Walk Crew",
    period: "April 1, 2026 ~ April 7, 2026",
    result: "Completed",
    entryAmount: 12,
    participants: 9,
    rank: "#2",
    finalPayout: 48,
    donationFromPayout: 8,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Red Cross",
    receiptStatus: "Receipt issued",
    outcomeNote: "Evening walk streak completed and donation routed from payout",
  },
  "morning-yoga": {
    title: "Morning Yoga Streak",
    period: "March 25, 2026 ~ March 31, 2026",
    result: "Completed",
    entryAmount: 18,
    participants: 11,
    rank: "#1",
    finalPayout: 66,
    donationFromPayout: 12,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Greenpeace",
    receiptStatus: "Receipt issued",
    outcomeNote: "Top-rank wellness streak completed",
  },
  "charity-5k": {
    title: "5K Charity Run",
    period: "March 18, 2026 ~ March 24, 2026",
    result: "Completed",
    entryAmount: 15,
    participants: 20,
    rank: "#4",
    finalPayout: 44,
    donationFromPayout: 8,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "UNICEF",
    receiptStatus: "Receipt issued",
    outcomeNote: "5K run verified and donation routed",
  },
  "step-battle": {
    title: "Step Battle Week",
    period: "March 10, 2026 ~ March 17, 2026",
    result: "Failed",
    entryAmount: 14,
    participants: 16,
    rank: null,
    finalPayout: 0,
    donationFromPayout: 0,
    rankBonus: null,
    poolContribution: 14,
    donationOrganization: "Red Cross",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Step goal missed. Entry moved to winner reward pool",
  },
  "bike-relief": {
    title: "Bike for Relief",
    period: "March 3, 2026 ~ March 9, 2026",
    result: "Completed",
    entryAmount: 22,
    participants: 13,
    rank: "#2",
    finalPayout: 78,
    donationFromPayout: 14,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Red Cross",
    receiptStatus: "Receipt issued",
    outcomeNote: "Cycling distance verified and donation routed",
  },
  "clean-water-sprint": {
    title: "Clean Water Sprint",
    period: "February 24, 2026 ~ March 2, 2026",
    result: "Completed",
    entryAmount: 16,
    participants: 8,
    rank: "#3",
    finalPayout: 52,
    donationFromPayout: 10,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Greenpeace",
    receiptStatus: "Receipt issued",
    outcomeNote: "Sprint mission completed and donation routed from payout",
  },
  "lunch-run": {
    title: "Lunch Break Run",
    period: "February 17, 2026 ~ February 23, 2026",
    result: "Failed",
    entryAmount: 11,
    participants: 7,
    rank: null,
    finalPayout: 0,
    donationFromPayout: 0,
    rankBonus: null,
    poolContribution: 11,
    donationOrganization: "Greenpeace",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Midday run goal missed. Entry moved to winner reward pool",
  },
};

let move2GiveState = { ...initialMove2GiveState };
const rewardPoolSize = 400;
let liveDistanceKm = 2.56;
let liveMinutes = 22;
let liveSeconds = 39;
let liveExecutionBase = 0;
let liveTelemetryStarted = false;
let rewardRankLoopStarted = false;
let rewardRankIndex = 0;
const rewardRankSequence = [3, 2, 1, 2, 3, 2];

function formatWorkoutTime() {
  return `${liveMinutes}min ${String(liveSeconds).padStart(2, "0")}sec`;
}

function renderLiveTelemetry() {
  if (distanceValue) distanceValue.textContent = `${liveDistanceKm.toFixed(2)} km`;
  if (timeValue) timeValue.textContent = formatWorkoutTime();
}

function startLiveTelemetry() {
  if (liveTelemetryStarted) return;
  liveTelemetryStarted = true;

  renderLiveTelemetry();
  window.setInterval(() => {
    liveSeconds += 1;
    if (liveSeconds === 60) {
      liveSeconds = 0;
      liveMinutes += 1;
    }
    liveDistanceKm += Math.random() * 0.02 + 0.01;
    renderLiveTelemetry();
  }, 1000);
}

function formatRialo(amount, options = {}) {
  const prefix = options.plus && amount > 0 ? "+" : "";
  return `${prefix}${amount} RIALO`;
}

function calculateHistoryImpactTotals() {
  const visibleHistoryItems = Array.from(historyList?.querySelectorAll("[data-history-id]") ?? [])
    .map((row) => historyDetails[row.dataset.historyId])
    .filter(Boolean);

  return visibleHistoryItems.reduce(
    (sum, item) => {
      const completed = item.result === "Completed";
      return {
        earned: sum.earned + (completed ? Number(item.finalPayout ?? 0) : 0),
        donated: sum.donated + (completed ? Number(item.donationFromPayout ?? 0) : 0),
        spent: sum.spent + Number(item.entryAmount ?? 0),
      };
    },
    { earned: 0, donated: 0, spent: 0 }
  );
}

function renderOverviewImpactVisibility() {
  const earnedTarget = document.querySelector('[data-impact-total="earned"]');
  const donatedTarget = document.querySelector('[data-impact-total="donated"]');
  const spentTarget = document.querySelector('[data-impact-total="spent"]');
  const impactValues = [earnedTarget, donatedTarget, spentTarget].filter(Boolean);
  if (!impactValues.length) return;

  impactValues.forEach((target) => {
    target.classList.toggle("locked", !walletConnected);
    if (!walletConnected) {
      target.classList.remove("revealed", "impact-value-updated");
      target.textContent = "Connect wallet";
    }
  });
}

function renderHistorySummary() {
  const earnedTarget = document.querySelector('[data-impact-total="earned"]');
  const donatedTarget = document.querySelector('[data-impact-total="donated"]');
  const spentTarget = document.querySelector('[data-impact-total="spent"]');
  if (!earnedTarget || !donatedTarget || !spentTarget) return;

  renderOverviewImpactVisibility();
  if (!walletConnected) return;

  const totals = calculateHistoryImpactTotals();

  earnedTarget.textContent = formatRialo(totals.earned);
  donatedTarget.textContent = formatRialo(totals.donated);
  spentTarget.textContent = formatRialo(totals.spent);

  [earnedTarget, donatedTarget, spentTarget].forEach((target) => {
    target.classList.remove("locked", "revealed");
    void target.offsetWidth;
    target.classList.add("revealed");
  });
}

function pulseImpactRows() {
  document.querySelectorAll(".impact-row").forEach((row) => {
    row.classList.remove("impact-updated");
    row.classList.add("impact-updated");
  });
  document.querySelectorAll("[data-impact-total]").forEach((value) => {
    value.classList.remove("impact-value-updated");
    void value.offsetWidth;
    value.classList.add("impact-value-updated");
  });
}

function pulseSfsBudget() {
  if (!sfsBudgetAmount) return;
  sfsBudgetAmount.classList.remove("sfs-budget-live");
  sfsBudgetAmount.classList.remove("sfs-budget-charged");
  void sfsBudgetAmount.offsetWidth;
  sfsBudgetAmount.classList.add("sfs-budget-charged");
}

function setSfsBudget(nextValue) {
  if (!sfsBudgetAmount) return;
  const normalizedValue = Math.max(0, nextValue);
  if (Math.abs(normalizedValue - sfsBudget) < 0.0005) return;
  sfsBudget = normalizedValue;
  sfsBudgetAmount.textContent = `${sfsBudget.toFixed(3)} RIALO`;
  pulseSfsBudget();
}

function chargeSfsSettlementFee() {
  if (!sfsBudgetAmount) return;
  if (sfsSettlementCharged) {
    pulseSfsBudget();
    return;
  }

  sfsSettlementCharged = true;
  setSfsBudget(sfsBudget - 0.114);
  if (sfsBudgetNote) {
    sfsBudgetNote.textContent = "SFS spent on final settlement.";
  }
}

function chargeSfsOperationFee(amount, note) {
  setSfsBudget(sfsBudget - amount);
  if (sfsBudgetNote) {
    sfsBudgetNote.textContent = note;
  }
}

function getRankRewardRate(rank) {
  const ranges = {
    1: [0.35, 0.42],
    2: [0.22, 0.28],
    3: [0.14, 0.18],
    default: [0.06, 0.1],
  };
  const [min, max] = ranges[rank] ?? ranges.default;
  return Math.random() * (max - min) + min;
}

function renderRewardAllocation(rank) {
  const estimatedPayout = Math.round(rewardPoolSize * getRankRewardRate(rank));
  const toDonation = Math.round(estimatedPayout * 0.2);
  const toWallet = estimatedPayout - toDonation;
  currentRewardAllocation = { rank, estimatedPayout, toWallet, toDonation };

  syncText("reward-rank", `#${rank}`);
  syncText("reward-payout", formatRialo(estimatedPayout));
  syncText("reward-wallet", formatRialo(toWallet));
  syncText("reward-donation", formatRialo(toDonation));
}

function startRewardRankLoop() {
  if (rewardRankLoopStarted) return;
  rewardRankLoopStarted = true;

  rewardRankInterval = window.setInterval(() => {
    if (settlementPreviewActive) return;
    rewardRankIndex = (rewardRankIndex + 1) % rewardRankSequence.length;
    setMove2GiveState({ ranking: rewardRankSequence[rewardRankIndex], userStreak: 8 }, { overviewDelay: 0 });
  }, 900);
}

function freezeRewardEstimate() {
  settlementPreviewActive = true;
  if (rewardRankInterval) {
    window.clearInterval(rewardRankInterval);
    rewardRankInterval = null;
  }

  syncText("reward-rank", `#${currentRewardAllocation.rank}`);
  syncText("reward-payout", formatRialo(currentRewardAllocation.estimatedPayout));
  syncText("reward-wallet", formatRialo(currentRewardAllocation.toWallet));
  syncText("reward-donation", formatRialo(currentRewardAllocation.toDonation));
}

function highlightHistoryPreview() {
  const row = historyList?.querySelector('[data-history-id="run-streak"]');
  if (!row) return;

  row.classList.remove("settlement-history-highlight");
  void row.offsetWidth;
  row.classList.add("settlement-history-highlight");
  window.setTimeout(() => row.classList.remove("settlement-history-highlight"), 3100);
}

function buildHistoryButton(id) {
  const detail = historyDetails[id];
  if (!detail) return null;

  const button = document.createElement("button");
  button.dataset.historyId = id;
  button.dataset.ngo = detail.donationOrganization;
  button.className = detail.result.toLowerCase();

  const heading = document.createElement("b");
  heading.append(detail.title, " ");
  if (detail.period) {
    const period = document.createElement("span");
    period.className = "history-date-range";
    period.textContent = `(${detail.period})`;
    heading.append(period, " ");
  }

  const resultBadge = document.createElement("span");
  resultBadge.className = `history-result-badge ${detail.result.toLowerCase()}`;
  resultBadge.textContent = detail.result;
  heading.append(resultBadge);

  const ngoChip = document.createElement("span");
  ngoChip.className = "ngo-chip";
  ngoChip.textContent = detail.donationOrganization;
  heading.append(ngoChip);

  const summary = document.createElement("small");
  summary.textContent =
    detail.result === "Completed"
      ? `Completed · Entry ${formatRialo(detail.entryAmount)} · Final payout ${formatRialo(detail.finalPayout)} · ${formatRialo(detail.donationFromPayout)} donated`
      : `Failed · Entry ${formatRialo(detail.entryAmount)} moved to winner reward pool`;

  button.append(heading, summary);
  return button;
}

function addSettledChallengeToHistory() {
  if (!historyList) return;

  Object.assign(historyDetails["run-streak"], {
    rank: `#${currentRewardAllocation.rank}`,
    finalPayout: currentRewardAllocation.estimatedPayout,
    donationFromPayout: currentRewardAllocation.toDonation,
    receiptStatus: "Receipt issued",
    donationOrganization: "UNICEF",
    outcomeNote: "Final payout received and donation routed from payout",
  });

  let row = historyList.querySelector('[data-history-id="run-streak"]');
  if (!row) {
    row = buildHistoryButton("run-streak");
    if (!row) return;
    historyList.prepend(row);
    row.classList.add("history-inserted");
  } else {
    const updatedRow = buildHistoryButton("run-streak");
    if (updatedRow) row.replaceWith(updatedRow);
    row = historyList.querySelector('[data-history-id="run-streak"]');
  }

  renderHistorySummary();
  pulseImpactRows();
  highlightHistoryPreview();
  window.setTimeout(() => row?.classList.remove("history-inserted"), 3200);
}

function showSettlementCelebration() {
  return Promise.resolve();
}

function receiptHashForDetail(detail) {
  const seed = (detail?.title ?? "Move2Give").replace(/[^a-z0-9]/gi, "").slice(0, 4).padEnd(4, "8f41");
  return `0x${seed}...92cA`;
}

function renderFinalSettlementReceipt(detail = historyDetails["run-streak"]) {
  if (!detail) return;

  const isCompleted = detail.result === "Completed";
  const finalPayout = Number(detail.finalPayout ?? 0);
  const donationAmount = Number(detail.donationFromPayout ?? 0);
  const netReceived = Math.max(0, finalPayout - donationAmount);
  const organization = detail.donationOrganization ?? "None";
  const receiptType = isCompleted && donationAmount > 0 ? "Proof of Impact" : detail.receiptStatus ?? "Settlement proof";

  if (finalChallengeName) finalChallengeName.textContent = detail.title ?? "Move2Give Challenge";
  if (finalRank) finalRank.textContent = isCompleted ? detail.rank ?? "#-" : "N/A";
  if (finalEarned) finalEarned.textContent = formatRialo(finalPayout);
  if (finalDonated) finalDonated.textContent = formatRialo(donationAmount);
  if (finalWallet) finalWallet.textContent = formatRialo(netReceived);
  if (finalTransactionStatus) finalTransactionStatus.textContent = isCompleted ? "Confirmed" : "Settled";
  if (finalTransactionHash) finalTransactionHash.textContent = receiptHashForDetail(detail);
  if (finalDonationRecipient) finalDonationRecipient.textContent = organization;
  if (finalReceiptType) finalReceiptType.textContent = receiptType;
  if (finalStatusLine) finalStatusLine.textContent = `Status: ${isCompleted ? "Confirmed" : "Settled"}`;
  if (finalImpactCreated) {
    finalImpactCreated.innerHTML = donationAmount > 0
      ? `<span>✓ ${formatRialo(donationAmount)} contributed to ${organization}</span><span>✓ Real-world impact recorded with private verification</span>`
      : `<span>Donation receipt available when contribution is made.</span><span>✓ Verified result recorded with private proof</span>`;
  }
  if (finalPrivacyNote) {
    finalPrivacyNote.textContent = isCompleted
      ? "Raw workout data stayed private. Only the verified outcome was recorded. No raw health data was exposed during this process."
      : "Raw workout data stayed private. The verified result was recorded without publishing raw fitness data. No raw health data was exposed during this process.";
  }
}

function openFinalSettlementReceipt(detail = historyDetails["run-streak"]) {
  if (!finalSettlementModal) return;
  renderFinalSettlementReceipt(detail);
  finalSettlementModal.hidden = false;
  finalSettlementModal.classList.remove("show");
  void finalSettlementModal.offsetWidth;
  finalSettlementModal.classList.add("show");
}

function closeFinalSettlementReceipt() {
  if (!finalSettlementModal) return;
  finalSettlementModal.classList.remove("show");
  finalSettlementModal.hidden = true;
}

function renderCurrentStatusPreview(progressDay, rank, streak = 8) {
  syncText("dashboard-current-progress", `Day ${progressDay} / ${move2GiveState.totalDays}`);
  syncProgressBar("dashboard-current-bar", progressDay, move2GiveState.totalDays);
  syncText("dashboard-streak", "8 days");
  syncText("dashboard-ranking", `#${rank}`);
  pulseSyncedElements(["dashboard-current-progress", "dashboard-current-bar", "dashboard-streak", "dashboard-ranking"]);
}

function renderSettlementCompletedStatus() {
  renderCurrentStatusPreview(14, currentRewardAllocation.rank, 8);
  currentStatusBadge.hidden = false;
  currentStatusBadge.classList.add("show");
}

async function animateCurrentStatusSettlement() {
  currentStatusCard?.classList.add("settlement-progress");
  if (currentStatusBadge) currentStatusBadge.hidden = true;
  renderCurrentStatusPreview(8, currentRewardAllocation.rank, 8);
  await new Promise((resolve) => window.setTimeout(resolve, 120));

  renderCurrentStatusPreview(14, currentRewardAllocation.rank, 8);
  await new Promise((resolve) => window.setTimeout(resolve, 900));

  settlementCompleted = true;
  renderSettlementCompletedStatus();
  currentStatusCard?.classList.remove("settlement-progress");
  currentStatusBadge.classList.remove("show");
  void currentStatusBadge.offsetWidth;
  currentStatusBadge.classList.add("show");
}

async function simulateSettlementPreview() {
  if (!rewardAllocationCard || !settlementButton) return;

  settlementCompleted = false;
  freezeRewardEstimate();
  settlementButton.disabled = true;
  if (settlementStatus) settlementStatus.hidden = true;
  settlementBadge.hidden = true;
  rewardAllocationCard.classList.remove("settlement-complete");
  rewardAllocationCard.classList.add("settlement-running");

  const phases = ["payout", "upstream", "split", "destinations"];
  for (const phase of phases) {
    rewardAllocationCard.dataset.settlementPhase = phase;
    await new Promise((resolve) => window.setTimeout(resolve, 380));
  }

  rewardAllocationCard.dataset.settlementPhase = "complete";
  settlementBadge.hidden = false;
  await animateCurrentStatusSettlement();
  addSettledChallengeToHistory();
  chargeSfsSettlementFee();
  window.setTimeout(() => openFinalSettlementReceipt(historyDetails["run-streak"]), 1500);

  await new Promise((resolve) => window.setTimeout(resolve, 320));
  rewardAllocationCard.classList.remove("settlement-running");
  rewardAllocationCard.classList.add("settlement-complete");
  settlementButton.textContent = "Replay Settlement";
  settlementButton.disabled = false;
}

function syncText(selector, value) {
  document.querySelectorAll(`[data-sync="${selector}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function syncProgressBar(selector, progressDay, totalDays) {
  document.querySelectorAll(`[data-sync="${selector}"]`).forEach((node) => {
    node.style.width = `${Math.round((progressDay / totalDays) * 100)}%`;
  });
}

function pulseSyncedElements(selectors) {
  selectors.forEach((selector) => {
    document.querySelectorAll(`[data-sync="${selector}"]`).forEach((node) => {
      node.classList.remove("state-updated");
      void node.offsetWidth;
      node.classList.add("state-updated");
    });
  });
}

function renderDashboardState() {
  if (settlementCompleted) {
    syncText("dashboard-stream-streak", "8 days");
    renderSettlementCompletedStatus();
    freezeRewardEstimate();
    return;
  }

  syncText("dashboard-stream-streak", `${move2GiveState.userStreak} days`);
  syncText("dashboard-current-progress", `Day ${move2GiveState.progressDay} / ${move2GiveState.totalDays}`);
  syncProgressBar("dashboard-current-bar", move2GiveState.progressDay, move2GiveState.totalDays);
  syncText("dashboard-streak", `${move2GiveState.userStreak} days`);
  syncText("dashboard-ranking", `#${move2GiveState.ranking}`);
  if (!settlementPreviewActive) {
    renderRewardAllocation(move2GiveState.ranking);
  } else {
    freezeRewardEstimate();
  }
  pulseSyncedElements([
    "dashboard-stream-streak",
    "dashboard-current-progress",
    "dashboard-current-bar",
    "dashboard-streak",
    "dashboard-ranking",
    "reward-rank",
    "reward-payout",
    "reward-wallet",
    "reward-donation",
  ]);
}

function renderOverviewState() {
  syncText("overview-progress-label", `Day ${move2GiveState.progressDay} / ${move2GiveState.totalDays}`);
  syncProgressBar("overview-progress-bar", move2GiveState.progressDay, move2GiveState.totalDays);
  syncText("overview-minji-rank", move2GiveState.minjiRank);
  syncText("overview-minji-streak", `${move2GiveState.minjiStreak} days`);
  syncText("overview-you-rank", move2GiveState.ranking);
  syncText("overview-you-streak", `${move2GiveState.userStreak} days`);
  syncText("overview-joon-rank", move2GiveState.joonRank);
  syncText("overview-joon-streak", `${move2GiveState.joonStreak} days`);
  pulseSyncedElements([
    "overview-progress-label",
    "overview-progress-bar",
    "overview-you-rank",
    "overview-you-streak",
    "overview-joon-rank",
  ]);
}

function setMove2GiveState(nextState, options = {}) {
  move2GiveState = { ...move2GiveState, ...nextState };
  renderDashboardState();

  window.clearTimeout(setMove2GiveState.overviewTimer);
  setMove2GiveState.overviewTimer = window.setTimeout(() => {
    renderOverviewState();
  }, options.overviewDelay ?? 0);
}

function openHistoryDetail(id) {
  const detail = historyDetails[id];
  if (!detail) return;

  historyList?.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.historyId === id);
  });
  openFinalSettlementReceipt(detail);
}

function openLegacyHistoryDetail(id) {
  const detail = historyDetails[id];
  if (!detail || !historyModal) return;

  historyModalTitle.textContent = detail.title;
  historyPeriod.textContent = detail.period;
  historyResult.textContent = detail.result;
  historyEntry.textContent = formatRialo(detail.entryAmount);
  historyParticipants.textContent = `${detail.participants} people`;
  const isCompleted = detail.result === "Completed";

  if (historyRankRow && historyRank) {
    historyRankRow.hidden = !isCompleted;
    historyRank.textContent = detail.rank ?? "-";
  }
  if (historyPayoutLabel && historyPayout) {
    historyPayoutLabel.textContent = isCompleted ? "Final payout" : "Earned payout";
    historyPayout.textContent = formatRialo(detail.finalPayout);
  }
  if (historyDonationRow && historyDonation) {
    historyDonationRow.hidden = !isCompleted;
    historyDonation.textContent = formatRialo(detail.donationFromPayout);
  }
  if (historyNetRow && historyNet) {
    historyNetRow.hidden = !isCompleted;
    historyNet.textContent = formatRialo(detail.finalPayout - detail.donationFromPayout);
  }
  if (historyRankBonusRow && historyRankBonus) {
    historyRankBonusRow.hidden = !isCompleted;
    historyRankBonus.textContent = detail.rankBonus ?? "-";
  }
  if (historyOrganizationRow && historyOrganization) {
    historyOrganizationRow.hidden = false;
    historyOrganization.textContent = detail.donationOrganization ?? "None";
  }
  if (historyPoolRow && historyPoolContribution) {
    const hasPoolContribution = detail.poolContribution > 0;
    historyPoolRow.hidden = !hasPoolContribution;
    historyPoolContribution.textContent = formatRialo(detail.poolContribution);
  }
  historyReceipt.textContent = detail.receiptStatus;
  historyOutcome.textContent = detail.outcomeNote;
  historyModal.dataset.organization = detail.donationOrganization ?? "";
  historyModal.hidden = false;
}

function closeHistoryDetail() {
  if (!historyModal) return;
  historyModal.hidden = true;
  historyModal.dataset.organization = "";
}

const dataSourcePermissions = {
  apple: {
    title: "Allow Move2Give to access Apple Health?",
    subtitle: "Move2Give will use selected health data for private challenge verification.",
    permissions: ["Workout type", "Duration", "Distance / steps", "Active calories"],
    note: "GPS route, heart-rate, and full workout logs are not published on-chain.",
    action: "Allow Apple Health",
  },
  strava: {
    title: "Connect Strava to Move2Give?",
    subtitle: "You will be redirected to Strava OAuth to authorize activity access.",
    permissions: ["Read activity type", "Read distance", "Read duration", "Read activity timestamp"],
    note: "Route details and full activity logs are processed privately and never published on-chain.",
    action: "Authorize Strava",
  },
  google: {
    title: "Allow Move2Give to access Health Connect?",
    subtitle: "Move2Give will read permitted Android health data for challenge verification.",
    permissions: ["Steps", "Workouts", "Distance", "Active calories"],
    note: "Personal health records are not published on-chain.",
    action: "Allow Health Connect",
  },
  m2g: {
    title: "Use M2G Smartphone App tracking?",
    subtitle: "Move2Give will track basic activity directly from the smartphone.",
    permissions: ["Step count", "Active minutes", "Workout session", "Device motion data"],
    note: "Direct tracking is useful for onboarding, but verification may be more limited than trusted health platforms.",
    action: "Enable M2G Tracking",
  },
};

const privacyDefaultsBySource = {
  apple: ["heartRate", "gpsRoute", "fullLogs", "startLocation", "endLocation", "healthRecords"],
  strava: ["gpsRoute", "fullLogs", "startLocation", "endLocation", "timestamp", "paceSpeed", "elevationGain"],
  google: ["heartRate", "activeCalories", "motionData", "sleepData", "recoveryData", "healthRecords"],
  m2g: ["gpsRoute", "motionData", "timestamp", "startLocation", "endLocation"],
};

const challengeDetails = {
  "run-hope": {
    title: "14-Day Run Streak",
    status: "Live",
    joinedCount: 10,
    maxParticipants: 10,
    entryAmount: 20,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Nike",
    rewardRule: "Rank-weighted Rewards",
    startDate: "May 1, 2026",
    endDate: "May 14, 2026",
    days: "14 days",
    donationTarget: "UNICEF",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Child relief",
    tieBreakers: ["Streak days", "Distance", "Active calories"],
    condition: { if: ["Run ≥ 3 km", "EVERY day", "FOR 14 days"], then: "Maintain streak", else: "Penalty → moved to reward pool" },
    verification: { source: "Apple Health", processing: "Encrypted input · TEE verification", output: "Condition result only" },
    privacy: { hidden: "GPS route · Raw heart-rate", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "run-100": {
    title: "7-Day 100km Challenge",
    status: "Upcoming",
    joinedCount: 4,
    maxParticipants: 8,
    entryAmount: 25,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Nike",
    rewardRule: "Winner Takes All Pool",
    startDate: "May 21, 2026",
    endDate: "May 27, 2026",
    days: "7 days",
    donationTarget: "Red Cross",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Emergency relief",
    tieBreakers: ["Total distance", "Active days", "Active calories"],
    condition: { if: ["Distance ≥ 100 km", "WITHIN 7 days"], then: "Win reward pool", else: "Stake moved to reward pool" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input · TEE verification", output: "Team progress result only" },
    privacy: { hidden: "GPS route · Raw heart-rate · Full workout logs", public: "Team progress · Rank" },
    economicRules: { failure: "Remaining stake moved to pool", success: "Reward split by contribution" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "night-5k": {
    title: "Night 5K Challenge",
    status: "Upcoming",
    joinedCount: 6,
    maxParticipants: 10,
    entryAmount: 18,
    poolAmount: 180,
    basePool: 180,
    sponsorBoost: 180,
    totalPool: 360,
    sponsorName: "Red Bull",
    rewardRule: "All Successors Share Pool",
    startDate: "June 1, 2026",
    endDate: "June 7, 2026",
    days: "7 days",
    donationTarget: "UNICEF",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Night safety and youth support",
    tieBreakers: ["Completion days", "Pace", "Active calories"],
    condition: { if: ["Run ≥ 5 km", "AFTER 7 PM", "WITHIN 7 days"], then: "Complete night run", else: "Stake moved to reward pool" },
    verification: { source: "Strava / Apple Health", processing: "Encrypted input · TEE verification", output: "Night run result only" },
    privacy: { hidden: "Exact route · Pace trace · Raw heart-rate", public: "Completed yes/no · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "morning-run": {
    title: "Morning Streak Run",
    status: "Upcoming",
    joinedCount: 9,
    maxParticipants: 12,
    entryAmount: 15,
    poolAmount: 180,
    basePool: 180,
    sponsorBoost: 180,
    totalPool: 360,
    sponsorName: "Adidas",
    rewardRule: "Top 3 Share the Pool",
    startDate: "May 25, 2026",
    endDate: "June 3, 2026",
    days: "10 days",
    donationTarget: "Greenpeace",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Climate action",
    tieBreakers: ["Morning streak", "Early start time", "Distance"],
    condition: { if: ["Run ≥ 30 min", "BEFORE 9 AM", "FOR 10 days"], then: "Maintain morning streak", else: "Penalty → moved to reward pool" },
    verification: { source: "Apple Health / Strava", processing: "Encrypted input · TEE verification", output: "Morning condition result only" },
    privacy: { hidden: "Start location · GPS route · Raw heart-rate", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "swim-water": {
    title: "7-Day Swim for Clean Water",
    status: "Upcoming",
    joinedCount: 5,
    maxParticipants: 8,
    entryAmount: 20,
    poolAmount: 160,
    basePool: 160,
    sponsorBoost: 160,
    totalPool: 320,
    sponsorName: "Red Bull",
    rewardRule: "Rank-weighted Rewards",
    startDate: "May 22, 2026",
    endDate: "May 28, 2026",
    days: "7 days",
    donationTarget: "Red Cross",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Clean water support",
    tieBreakers: ["Swim streak", "Distance", "Active minutes"],
    condition: { if: ["Swim ≥ 800m", "OR 30 min", "EVERY day"], then: "Maintain swim streak", else: "Penalty → moved to reward pool" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input · TEE verification", output: "Swim completion result only" },
    privacy: { hidden: "Lap details · Raw heart-rate", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "pool-5k": {
    title: "5K Pool Swim Week",
    status: "Upcoming",
    joinedCount: 12,
    maxParticipants: 20,
    entryAmount: 10,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Adidas",
    rewardRule: "All Successors Share Pool",
    startDate: "May 29, 2026",
    endDate: "June 4, 2026",
    days: "7 days",
    donationTarget: "UNICEF",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Youth swim access",
    tieBreakers: ["Total swim", "Active days", "Pace score"],
    condition: { if: ["Pool swim ≥ 5 km", "WITHIN 7 days"], then: "Complete mission", else: "Stake moved to reward pool" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input · TEE verification", output: "Completion result only" },
    privacy: { hidden: "Lap details · Heart-rate graph", public: "Completed yes/no · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "morning-swim": {
    title: "Morning Swim Sprint",
    status: "Upcoming",
    joinedCount: 7,
    maxParticipants: 12,
    entryAmount: 12,
    poolAmount: 144,
    basePool: 144,
    sponsorBoost: 144,
    totalPool: 288,
    sponsorName: "Nike",
    rewardRule: "Top 3 Share the Pool",
    startDate: "June 5, 2026",
    endDate: "June 11, 2026",
    days: "7 days",
    donationTarget: "Greenpeace",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Ocean and climate action",
    tieBreakers: ["Morning streak", "Swim distance", "Active minutes"],
    condition: { if: ["Swim ≥ 400m", "BEFORE 8 AM", "FOR 5 mornings"], then: "Maintain morning swim streak", else: "Stake moved to reward pool" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input · TEE verification", output: "Morning swim result only" },
    privacy: { hidden: "Lap logs · Raw heart-rate · Exact pool sessions", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "weekend-cycling": {
    title: "Weekend Cycling Pool", status: "Upcoming", joinedCount: 10, maxParticipants: 14, entryAmount: 30, poolAmount: 420, basePool: 420, sponsorBoost: 420, totalPool: 840, sponsorName: "Adidas", rewardRule: "Penalty-funded Rewards",
    startDate: "May 24, 2026", endDate: "May 25, 2026", days: "2 days", donationTarget: "UNICEF", donationLogo: "./assets/ngo-unicef.svg", donationPurpose: "Child relief",
    tieBreakers: ["Distance", "Elevation", "Active calories"],
    condition: { if: ["Cycle ≥ 25 km", "WITHIN weekend"], then: "Qualify for reward split", else: "Stake moved to reward pool" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input · TEE verification", output: "Ride completion result only" },
    privacy: { hidden: "GPS route · Speed trace · Raw heart-rate", public: "Distance band · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "bike-relief": {
    title: "Bike for Relief", status: "Upcoming", joinedCount: 11, maxParticipants: 16, entryAmount: 22, poolAmount: 352, basePool: 352, sponsorBoost: 352, totalPool: 704, sponsorName: "Red Bull", rewardRule: "Rank-weighted Rewards",
    startDate: "May 28, 2026", endDate: "June 3, 2026", days: "7 days", donationTarget: "Red Cross", donationLogo: "./assets/ngo-red-cross.svg", donationPurpose: "Emergency relief",
    tieBreakers: ["Ride count", "Distance", "Consistency"],
    condition: { if: ["Complete 3 rides", "WITHIN 7 days"], then: "Maintain ride streak", else: "Stake moved to reward pool" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input · TEE verification", output: "Ride count result only" },
    privacy: { hidden: "Exact route · Raw speed · Heart-rate", public: "Ride count · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "team-ride": {
    title: "50km Team Ride", status: "Upcoming", joinedCount: 7, maxParticipants: 10, entryAmount: 18, poolAmount: 180, basePool: 180, sponsorBoost: 180, totalPool: 360, sponsorName: "Nike", rewardRule: "Team Completion Pool",
    startDate: "June 8, 2026", endDate: "June 10, 2026", days: "3 days", donationTarget: "Greenpeace", donationLogo: "./assets/ngo-greenpeace.svg", donationPurpose: "Climate action",
    tieBreakers: ["Team distance", "Active players", "Finish time"],
    condition: { if: ["Team distance ≥ 50 km", "WITHIN 3 days"], then: "Share reward by team rank", else: "Stake moved to reward pool" },
    verification: { source: "Strava / phone sensors", processing: "Encrypted input · TEE verification", output: "Team distance result only" },
    privacy: { hidden: "Individual route · Ride logs", public: "Team total · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "walk-meals": {
    title: "Walk for Meals", status: "Upcoming", joinedCount: 6, maxParticipants: 8, entryAmount: 15, poolAmount: 120, basePool: 120, sponsorBoost: 120, totalPool: 240, sponsorName: "Red Bull", rewardRule: "Penalty-funded Rewards",
    startDate: "May 23, 2026", endDate: "May 29, 2026", days: "7 days", donationTarget: "Red Cross", donationLogo: "./assets/ngo-red-cross.svg", donationPurpose: "Meals support",
    tieBreakers: ["Step streak", "Total steps", "Active minutes"],
    condition: { if: ["Steps ≥ 8,000", "EVERY day", "FOR 7 days"], then: "Maintain walk streak", else: "Stake moved to reward pool" },
    verification: { source: "Phone step counter / Health Connect", processing: "Encrypted input · TEE verification", output: "Step condition result only" },
    privacy: { hidden: "Location trail · Full step logs", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "morning-yoga": {
    title: "Morning Yoga Streak", status: "Upcoming", joinedCount: 8, maxParticipants: 11, entryAmount: 18, poolAmount: 198, basePool: 198, sponsorBoost: 198, totalPool: 396, sponsorName: "Adidas", rewardRule: "All Successors Share Pool",
    startDate: "May 30, 2026", endDate: "June 8, 2026", days: "10 days", donationTarget: "Greenpeace", donationLogo: "./assets/ngo-greenpeace.svg", donationPurpose: "Climate action",
    tieBreakers: ["Streak days", "Active minutes", "Start time"],
    condition: { if: ["Yoga ≥ 20 min", "EVERY morning", "FOR 10 days"], then: "Maintain yoga streak", else: "Stake moved to reward pool" },
    verification: { source: "Apple Health / phone sensors", processing: "Encrypted input · TEE verification", output: "Session result only" },
    privacy: { hidden: "Session logs · Heart-rate", public: "Streak · Rank" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
  "step-battle": {
    title: "Step Battle Week", status: "Upcoming", joinedCount: 10, maxParticipants: 12, entryAmount: 14, poolAmount: 168, basePool: 168, sponsorBoost: 168, totalPool: 336, sponsorName: "Nike", rewardRule: "Rank-weighted Rewards",
    startDate: "June 6, 2026", endDate: "June 12, 2026", days: "7 days", donationTarget: "UNICEF", donationLogo: "./assets/ngo-unicef.svg", donationPurpose: "Youth support",
    tieBreakers: ["Total steps", "Active days", "Active minutes"],
    condition: { if: ["Highest verified steps", "WITHIN 7 days"], then: "Rank by verified total", else: "Stake moved to reward pool" },
    verification: { source: "Phone step counter / Health Connect", processing: "Encrypted input · TEE verification", output: "Leaderboard result only" },
    privacy: { hidden: "Full step logs · Location data", public: "Rank · Step band" },
    economicRules: { failure: "Stake moved to pool", success: "Reward distributed by rank" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Final settlement on-chain"],
  },
};

let selectedChallenge = "run-100";

const sponsorVideoSources = {
  Nike: "./assets/nike_new.mp4",
  "Red Bull": "./assets/redbull-ad.mp4",
  Adidas: "./assets/adidas-ad.mp4",
};

function withMatchedSponsorPool(detail) {
  const basePool = detail.basePool ?? detail.poolAmount ?? 0;
  const sponsorBoost = basePool;
  return {
    ...detail,
    basePool,
    sponsorBoost,
    totalPool: basePool + sponsorBoost,
  };
}

function normalizeTimeConditionText(text) {
  return String(text).replace(/\bbefore\b/gi, "BEFORE");
}

function formatConditionLine(conditionParts) {
  return normalizeTimeConditionText(
    conditionParts
      .join(" ")
      .replace("WITHIN", "within")
      .replace("EVERY", "every")
      .replace("FOR", "for")
  );
}

function renderSponsorMedia(sponsorName) {
  const videoSource = sponsorVideoSources[sponsorName];
  return `
    <div class="sponsor-video-frame" data-sponsor="${sponsorName}">
      <span class="sponsor-video-placeholder">Sponsor video coming soon</span>
      ${
        videoSource
          ? `<video class="sponsor-video" autoplay muted loop playsinline aria-label="${sponsorName} sponsor advertisement" oncanplay="this.classList.add('is-ready')" onerror="this.classList.add('is-missing')">
              <source src="${videoSource}" type="video/mp4" />
            </video>`
          : ""
      }
    </div>
  `;
}

function pulseSponsorVideo() {
  const video = selectedChallengeBoard?.querySelector(".sponsor-video.is-ready:not(.is-missing)");
  if (!video || video.readyState === 0) return;

  video.classList.remove("sponsor-video-impact");
  void video.offsetWidth;
  video.classList.add("sponsor-video-impact");
}

function showPanel(id) {
  panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.panel === id));
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function showSport(id) {
  sportTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.sport === id));
  sportPanels.forEach((panel) => panel.classList.toggle("active", panel.id === id));

  const firstChallenge = document.querySelector(`#${id} .challenge-card[data-challenge]`);
  if (firstChallenge?.dataset.challenge) {
    selectChallenge(firstChallenge.dataset.challenge);
  }
}

function renderSelectedChallenge(detail) {
  if (!detail || !selectedChallengeBoard) return;
  detail = withMatchedSponsorPool(detail);
  const isJoined = Boolean(detail.isJoined);
  const sponsorLabel = detail.sponsorName.toUpperCase();

  selectedChallengeBoard.classList.remove("detail-refresh");
  void selectedChallengeBoard.offsetWidth;
  selectedChallengeBoard.classList.add("detail-refresh");
  selectedChallengeBoard.innerHTML = `
    <div class="selected-header">
      <span class="eyebrow">Selected Challenge</span>
      <div class="selected-prize-hero">
        <h3>${detail.title}</h3>
        <strong>Total Prize: ${detail.totalPool} RIALO</strong>
      </div>
    </div>
    <div class="selected-sectors">
      <article class="sector-card contract-sector">
        <span class="challenge-contract-title">Challenge Contract</span>
        <h4 class="challenge-contract-name">${detail.title}</h4>
        <div class="story-cue challenge-story-cue">
          <span>Move</span><i>→</i><span>Verify Privately</span><i>→</i><span>Settle On-chain</span><i>→</i><span>Create Impact</span>
        </div>
        <div class="sector-facts">
          <div><small>Period</small><b>${detail.startDate} → ${detail.endDate}</b></div>
          <div><small>Entry</small><b>${detail.entryAmount} RIALO</b></div>
          <div><small>Reward Rule</small><b>${detail.rewardRule}</b></div>
        </div>
        <div class="contract-condition">
          <small>Auto-execution condition</small>
          <strong>${formatConditionLine(detail.condition.if)}</strong>
          <em>Private verification · raw data hidden</em>
        </div>
        <div class="ranking-compact">
          <small>Ranking Logic</small>
          <ol>${detail.tieBreakers.map((rule, index) => `<li><b>${index + 1}</b>${rule}</li>`).join("")}</ol>
        </div>
        <p class="auto-execution-note">This challenge is automatically verified and executed by Rialo when the conditions are met.</p>
        <p class="ranking-helper">Rialo checks the condition, ranks participants, and routes settlement automatically.</p>
      </article>
      <article class="sector-card donation-sector">
        <span>Donation</span>
        <div class="donation-hero">
          <img src="${detail.donationLogo}" alt="${detail.donationTarget} logo" />
          <h4>${detail.donationTarget}</h4>
          <b>${detail.donationPurpose}</b>
        </div>
        <p>Penalty / donation route supports this NGO.</p>
      </article>
      <article class="sector-card sponsor-sector">
        <span>Sponsor Boost : ${sponsorLabel}</span>
        ${renderSponsorMedia(detail.sponsorName)}
        <div class="boost-rows sponsor-boost-only">
          <div class="boost"><small>Sponsor Boost</small><b>+${detail.sponsorBoost} RIALO</b></div>
        </div>
      </article>
    </div>
    <div class="join-contract-cta ${isJoined ? "joined" : ""}">
      <button class="secondary-action" id="join-btn" type="button" ${isJoined ? "disabled" : ""}>${isJoined ? "Joined Pool" : "Join Pool"}</button>
      <span>${isJoined ? `Auto execution will be started on ${detail.startDate}` : `Wallet signature required · Deposit ${detail.entryAmount} RIALO into condition pool`}</span>
      ${isJoined ? `<button class="cancel-reservation" id="cancel-reservation" type="button">Cancel</button>` : ""}
    </div>
  `;
}

function selectChallenge(id) {
  const detail = challengeDetails[id];
  if (!detail) return;

  selectedChallenge = id;
  challengeCards.forEach((card) => card.classList.toggle("selected", card.dataset.challenge === id));
  renderSelectedChallenge(detail);
}

function animatePoolValue(element, fromPool, toPool, maxPool, duration = 650) {
  if (!element || fromPool === toPool) {
    if (element) element.textContent = `${toPool} / ${maxPool}`;
    return;
  }

  const startedAt = performance.now();
  const change = toPool - fromPool;

  function frame(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(fromPool + change * eased);
    element.textContent = `${current} / ${maxPool}`;

    if (progress < 1) {
      window.requestAnimationFrame(frame);
    } else {
      element.textContent = `${toPool} / ${maxPool}`;
    }
  }

  window.requestAnimationFrame(frame);
}

function updateJoinedCardState(id, animate = false, options = {}) {
  const card = document.querySelector(`.challenge-card[data-challenge="${id}"]`);
  if (!card) return;

  const detail = challengeDetails[id];
  const joined = Boolean(detail?.isJoined);
  updateChallengeCardMetrics(id, animate, options);
  card.classList.toggle("joined", joined);
  card.querySelector(".stamp-overlay")?.remove();

  if (!joined) return;

  const stamp = document.createElement("img");
  stamp.className = `stamp-overlay${animate ? " stamp-animate" : ""}`;
  stamp.src = "./assets/reserved-rialo-stamp.png";
  stamp.alt = "Reserved Rialo stamp";
  stamp.setAttribute("aria-hidden", "true");
  card.appendChild(stamp);
}

function updateChallengeCardMetrics(id, animate = false, options = {}) {
  const detail = challengeDetails[id];
  const card = document.querySelector(`.challenge-card[data-challenge="${id}"]`);
  if (!detail || !card) return;

  const currentPool = detail.joinedCount * detail.entryAmount;
  const maxPool = detail.poolAmount;
  const poolText = `${currentPool} / ${maxPool}`;
  const startsText = `${detail.joinedCount} players`;
  const progressPercent = Math.min(100, Math.round((currentPool / maxPool) * 1000) / 10);
  const statRows = card.querySelectorAll(".stats span");
  const progressFill = card.querySelector(".progress span");

  statRows.forEach((row) => {
    const label = row.textContent.trim();
    const value = row.querySelector("b");
    if (!value) return;

    if (label.startsWith("Pool")) {
      if (animate && Number.isFinite(options.fromPool)) {
        animatePoolValue(value, options.fromPool, currentPool, maxPool);
      } else {
        value.textContent = poolText;
      }
    }
    if (label.startsWith("Starts")) value.textContent = startsText;
  });

  if (progressFill) {
    progressFill.style.transition = animate ? "width 0.7s ease-out" : "";
    progressFill.style.width = `${progressPercent}%`;
    if (animate) {
      progressFill.classList.remove("state-updated");
      void progressFill.offsetWidth;
      progressFill.classList.add("state-updated");
    }
  }
}

function updateAllJoinedCards() {
  Object.keys(challengeDetails).forEach((id) => updateJoinedCardState(id));
}

function triggerJoinSuccessEffects(id, previousJoinedCount) {
  const detail = challengeDetails[id];
  if (!detail) return;

  const previousPool = previousJoinedCount * detail.entryAmount;
  detail.isJoined = true;
  detail.joinedCount = Math.min(detail.maxParticipants, previousJoinedCount + 1);

  chargeSfsOperationFee(0.042, "SFS spent on pool reservation approval.");
  renderSelectedChallenge(detail);
  updateJoinedCardState(id, true, { fromPool: previousPool });
  pulseSponsorVideo();
  window.setTimeout(pulseSponsorVideo, 120);
  showToast(`Pool joined successfully. ${detail.entryAmount} RIALO locked into condition pool.`, 1500);
}

function closeApprovalModal() {
  if (!approvalModal) return;
  approvalModal.hidden = true;
  approvalStatus.hidden = true;
  approvalStatus.classList.remove("success", "loading");
  approvalSign.disabled = false;
  approvalCancel.disabled = false;
  approvalSign.textContent = "Approve & Sign";
}

function openJoinApproval() {
  if (!approvalModal) return;

  const detail = challengeDetails[selectedChallenge];
  if (!detail) return;

  approvalModal.hidden = false;
  approvalStatus.hidden = true;
  approvalStatus.classList.remove("success", "loading");

  if (!walletConnected) {
    approvalWalletEmpty.hidden = false;
    approvalContent.hidden = true;
    return;
  }

  approvalWalletEmpty.hidden = true;
  approvalContent.hidden = false;
  approvalChallenge.textContent = detail.title;
  approvalEntry.textContent = `${detail.entryAmount} RIALO`;
  approvalWallet.textContent = formatAddress(connectedAccount);
  approvalSign.disabled = false;
  approvalCancel.disabled = false;
  approvalSign.textContent = "Approve & Sign";
}

function buildPoolSignatureMessage(detail, action) {
  if (action === "cancel") {
    return [
      "Cancel pool reservation",
      "",
      `Challenge: ${detail.title}`,
      `Refund amount: ${detail.entryAmount} RIALO`,
      `Wallet: ${connectedAccount}`,
      "Action: Cancel reservation and refund entry deposit",
    ].join("\n");
  }

  return [
    `Challenge: ${detail.title}`,
    `Entry amount: ${detail.entryAmount} RIALO`,
    `Wallet: ${connectedAccount}`,
    "Action: Approve RIALO entry deposit",
  ].join("\n");
}

async function requestWalletSignature(message) {
  const provider = getInjectedWalletProvider();
  if (!provider?.request || !connectedAccount) {
    throw new Error("No connected wallet");
  }

  return provider.request({
    method: "personal_sign",
    params: [message, connectedAccount],
  });
}

async function completeJoinApproval() {
  const approvalChallengeId = selectedChallenge;
  const detail = challengeDetails[approvalChallengeId];
  if (!detail || !approvalStatus) return;

  approvalStatus.hidden = false;
  approvalStatus.className = "approval-status loading";
  approvalStatus.textContent = "Waiting for wallet signature...";
  approvalSign.disabled = true;
  approvalCancel.disabled = true;
  approvalSign.textContent = "Signing";

  try {
    await requestWalletSignature(buildPoolSignatureMessage(detail, "join"));
    closeApprovalModal();
    triggerJoinSuccessEffects(approvalChallengeId, detail.joinedCount);
  } catch (error) {
    approvalStatus.className = "approval-status";
    approvalStatus.textContent = error?.code === 4001 ? "Signature rejected." : "Wallet signature failed.";
    approvalSign.disabled = false;
    approvalCancel.disabled = false;
    approvalSign.textContent = "Approve & Sign";
  }
}

async function cancelReservation() {
  const detail = challengeDetails[selectedChallenge];
  if (!detail?.isJoined) return;

  const cancelButton = document.querySelector("#cancel-reservation");
  if (cancelButton) {
    cancelButton.disabled = true;
    cancelButton.textContent = "Signing";
  }
  showToast("Waiting for wallet signature...");

  try {
    await requestWalletSignature(buildPoolSignatureMessage(detail, "cancel"));
    const previousPool = detail.joinedCount * detail.entryAmount;
    detail.isJoined = false;
    detail.joinedCount = Math.max(0, detail.joinedCount - 1);
    chargeSfsOperationFee(0.028, "SFS spent on reservation cancellation.");
    updateJoinedCardState(selectedChallenge, true, { fromPool: previousPool });
    renderSelectedChallenge(detail);
    showToast("Your entry deposit has been refunded.");
  } catch (error) {
    if (cancelButton) {
      cancelButton.disabled = false;
      cancelButton.textContent = "Cancel";
    }
    showToast(error?.code === 4001 ? "Cancellation rejected." : "Cancellation signature failed.");
  }
}

function showToast(message, duration = 2200) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

function simulateToday(button) {
  if (!button) return;

  const originalText = button.textContent;
  button.textContent = "Verified";
  showToast("Workout verified privately. Challenge state updated on Rialo.");
  setTimeout(() => {
    button.textContent = originalText;
  }, 2200);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function renderLiveStatusTimeline(activeStep = 0, completedAll = false) {
  liveStatusSteps.forEach((step) => {
    const stepNumber = Number(step.dataset.liveStatusStep);
    step.classList.toggle("active", !completedAll && stepNumber === activeStep);
    step.classList.toggle("complete", completedAll || stepNumber < activeStep);
  });
}

function resetLiveVerification() {
  setMove2GiveState({
    ...initialMove2GiveState,
    userStreak: completedMove2GiveState.userStreak,
  });
  conditionResult?.classList.remove("pending", "complete");
  conditionResult?.classList.add("running");
  if (conditionTitle) conditionTitle.textContent = "Live workout verification running";
  if (conditionSubtitle) conditionSubtitle.textContent = "Receiving real-time fitness updates";
  renderLiveTelemetry();
  if (streakValue) streakValue.textContent = `${move2GiveState.userStreak} days`;
  if (progressValue) progressValue.textContent = `${liveExecutionBase}%`;
  if (workoutProgressBar) workoutProgressBar.style.width = `${liveExecutionBase}%`;
  if (executionProgressValue) executionProgressValue.textContent = `${liveExecutionBase}%`;
  if (executionFlowProgress) executionFlowProgress.style.width = `${liveExecutionBase}%`;
  executionStepCards.forEach((card) => card.classList.remove("active", "complete"));
  executionStatus.classList.add("running");
  executionStatus.classList.remove("complete");
  executionStatus.innerHTML = "<span>Live workout verification running</span>";
  executionStatus.dataset.step = "";
  if (engineActiveMessage) engineActiveMessage.textContent = "Waiting for live fitness update...";
  renderLiveStatusTimeline(0, false);
}

async function runLiveVerificationCycle() {
  if (!executionStatus) return;

  const steps = [
    { message: "Auto-fetching workout data", flowStep: 1 },
    { message: "Privately verifying condition", flowStep: 3 },
    { message: "REX updating streak and rank", flowStep: 4 },
    { message: "Preparing automatic settlement", flowStep: 5 },
    { message: "Donation route ready", flowStep: 5 },
    { message: "Verified result prepared", flowStep: 5 },
  ];

  resetLiveVerification();

  const ticksPerStep = 4;
  const totalTicks = steps.length * ticksPerStep;

  for (let tick = 1; tick <= totalTicks; tick += 1) {
    const rawProgress = tick / totalTicks;
    const easedProgress = 1 - Math.pow(1 - rawProgress, 2);
    const progress = Math.min(100, Math.round(liveExecutionBase + easedProgress * (100 - liveExecutionBase)));
    const activeStatusStep = Math.min(steps.length, Math.ceil(tick / ticksPerStep));
    const activeFlowStep = steps[activeStatusStep - 1].flowStep;
    if (progressValue) progressValue.textContent = `${progress}%`;
    if (workoutProgressBar) workoutProgressBar.style.width = `${progress}%`;
    if (executionProgressValue) executionProgressValue.textContent = `${progress}%`;
    if (executionFlowProgress) executionFlowProgress.style.width = `${progress}%`;

    executionStepCards.forEach((card) => {
      const cardStep = Number(card.dataset.executionStep);
      card.classList.toggle("complete", cardStep < activeFlowStep);
      card.classList.toggle("active", cardStep === activeFlowStep);
    });

    renderLiveStatusTimeline(activeStatusStep, false);
    if (engineActiveMessage) engineActiveMessage.textContent = steps[activeStatusStep - 1].message;
    executionStatus.innerHTML = `<span>${steps[activeStatusStep - 1].message}</span>`;
    executionStatus.dataset.step = `${activeStatusStep} / ${steps.length}`;
    await wait(420);
  }

  await wait(120);
  liveExecutionBase = 0;
  renderLiveTelemetry();
  if (progressValue) progressValue.textContent = "100%";
  if (workoutProgressBar) workoutProgressBar.style.width = "100%";
  if (executionProgressValue) executionProgressValue.textContent = "100%";
  if (executionFlowProgress) executionFlowProgress.style.width = "100%";
  if (streakValue) streakValue.textContent = "8 days";
  if (conditionTitle) conditionTitle.textContent = "Live workout verification running";
  if (conditionSubtitle) conditionSubtitle.textContent = "Receiving real-time fitness updates";
  conditionResult?.classList.remove("pending", "complete");
  conditionResult?.classList.add("running");
  executionStepCards.forEach((card) => {
    card.classList.remove("active");
    card.classList.add("complete");
  });
  executionStatus.classList.remove("running");
  executionStatus.classList.add("complete");
  executionStatus.innerHTML = "<span>Rule check passed · Streak updated · Challenge state updated</span>";
  executionStatus.dataset.step = "6 / 6";
  if (engineActiveMessage) engineActiveMessage.textContent = "On-chain result prepared.";
  renderLiveStatusTimeline(6, true);
  streakLocked = true;
  setMove2GiveState({ ...completedMove2GiveState, ranking: move2GiveState.ranking }, { overviewDelay: 0 });
  if (conditionTitle) conditionTitle.textContent = "Live workout verification running";
  if (conditionSubtitle) conditionSubtitle.textContent = "Receiving real-time fitness updates";
}

async function startLiveVerificationLoop() {
  if (liveSyncStarted) return;
  liveSyncStarted = true;

  while (liveSyncStarted) {
    await runLiveVerificationCycle();
    await wait(260);
  }
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
  syncDataFlowWalletState();
  renderHistorySummary();
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

function clearDataFlowAnimation() {
  if (dataFlowTimer) {
    window.clearTimeout(dataFlowTimer);
    dataFlowTimer = null;
  }
  dataFlowCompletionTimers.forEach((timer) => window.clearTimeout(timer));
  dataFlowCompletionTimers = [];
  dataFlowHero?.classList.remove("is-connecting", "is-flowing", "flow-path-confirmed");
  rialoFlowBlock?.classList.remove("flow-complete-m2g");
  chainFlowBlock?.classList.remove("flow-complete-chain", "show-proof-check");
}

function setSourceNodeState(sourceId = "") {
  sourceNodes.forEach((node) => {
    const isActive = Boolean(sourceId) && node.dataset.sourceNode === sourceId;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function applyPrivacyDefaults(sourceId, animate = true) {
  const protectedKeys = new Set(privacyDefaultsBySource[sourceId] ?? []);

  if (animate) {
    privacyProtectedCard?.classList.add("is-updating");
  }

  privacyInputs.forEach((input) => {
    input.checked = protectedKeys.has(input.dataset.privacyKey);
  });

  if (animate) {
    window.setTimeout(() => {
      privacyProtectedCard?.classList.remove("is-updating");
    }, 420);
  }
}

function resetDataFlowConnection() {
  connectedDataSource = "";
  pendingDataSource = "";
  setSourceNodeState("");
  applyPrivacyDefaults("", false);
  clearDataFlowAnimation();
}

function syncDataFlowWalletState() {
  if (!dataFlowHero) return;

  const canConnectSources = walletVerified;
  dataFlowHero.classList.toggle("wallet-ready", canConnectSources);
  dataFlowHero.classList.toggle("wallet-locked", !canConnectSources);

  sourceNodes.forEach((node) => {
    node.setAttribute("aria-disabled", canConnectSources ? "false" : "true");
  });

  if (!canConnectSources) {
    resetDataFlowConnection();
    return;
  }

  if (!connectedDataSource) {
    connectedDataSource = "apple";
    pendingDataSource = "apple";
    setSourceNodeState("apple");
    applyPrivacyDefaults("apple", false);
    startDataFlowAnimation();
  }
}

function startDataFlowAnimation() {
  if (!dataFlowHero) return;
  clearDataFlowAnimation();
  dataFlowHero.classList.add("is-connecting");
  dataFlowTimer = window.setTimeout(() => {
    dataFlowHero.classList.remove("is-connecting");
    dataFlowHero.classList.add("is-flowing");
    dataFlowTimer = null;
    triggerDataFlowCompletionEffect();
  }, 2100);
}

function queueDataFlowCompletion(callback, delay) {
  const timer = window.setTimeout(() => {
    dataFlowCompletionTimers = dataFlowCompletionTimers.filter((item) => item !== timer);
    callback();
  }, delay);
  dataFlowCompletionTimers.push(timer);
}

function triggerDataFlowCompletionEffect() {
  rialoFlowBlock?.classList.remove("flow-complete-m2g");
  chainFlowBlock?.classList.remove("flow-complete-chain", "show-proof-check");
  dataFlowHero?.classList.remove("flow-path-confirmed");

  queueDataFlowCompletion(() => {
    rialoFlowBlock?.classList.add("flow-complete-m2g");
  }, 80);

  queueDataFlowCompletion(() => {
    rialoFlowBlock?.classList.remove("flow-complete-m2g");
    chainFlowBlock?.classList.add("flow-complete-chain");
  }, 520);

  queueDataFlowCompletion(() => {
    chainFlowBlock?.classList.add("show-proof-check");
    dataFlowHero?.classList.add("flow-path-confirmed");
  }, 980);

  queueDataFlowCompletion(() => {
    chainFlowBlock?.classList.remove("flow-complete-chain");
    dataFlowHero?.classList.remove("flow-path-confirmed");
  }, 1320);

  queueDataFlowCompletion(() => {
    chainFlowBlock?.classList.remove("show-proof-check");
  }, 2200);
}

function closeDataPermissionModal() {
  if (!dataPermissionModal) return;
  dataPermissionModal.hidden = true;
}

function openDataPermissionModal(sourceId) {
  if (!walletVerified) {
    showToast("Please connect your wallet before connecting exercise data.", 1400);
    return;
  }

  const config = dataSourcePermissions[sourceId];
  if (!config || !dataPermissionModal) return;

  connectedDataSource = "";
  setSourceNodeState("");
  clearDataFlowAnimation();
  pendingDataSource = sourceId;
  dataPermissionTitle.textContent = config.title;
  dataPermissionSubtitle.textContent = config.subtitle;
  dataPermissionNote.textContent = config.note;
  dataPermissionAllow.textContent = config.action;
  dataPermissionList.innerHTML = config.permissions.map((permission) => `<span>${permission}</span>`).join("");
  dataPermissionModal.hidden = false;
}

function approveDataSourcePermission() {
  connectedDataSource = pendingDataSource;
  setSourceNodeState(connectedDataSource);
  closeDataPermissionModal();
  applyPrivacyDefaults(connectedDataSource);
  startDataFlowAnimation();
  showToast("Data source connected. Private verification flow activated.", 1300);
}

navItems.forEach((item) => item.addEventListener("click", () => showPanel(item.dataset.panel)));
panelButtons.forEach((button) => button.addEventListener("click", () => showPanel(button.dataset.panelTarget)));
sportTabs.forEach((tab) => tab.addEventListener("click", () => showSport(tab.dataset.sport)));
challengeCards.forEach((card) => card.addEventListener("click", () => selectChallenge(card.dataset.challenge)));
walletShortcutButtons.forEach((button) => button.addEventListener("click", () => walletButton.click()));
settlementButton?.addEventListener("click", simulateSettlementPreview);
openFinalSettlementButton?.addEventListener("click", openFinalSettlementReceipt);
finalSettlementClose?.addEventListener("click", closeFinalSettlementReceipt);
finalSettlementModal?.addEventListener("click", (event) => {
  if (event.target === finalSettlementModal) closeFinalSettlementReceipt();
});
viewOnchainResultButton?.addEventListener("click", () => {
  showToast("Opening mock on-chain result: 0x8f41...92cA", 1500);
});
downloadReceiptButton?.addEventListener("click", () => {
  showToast("Receipt download simulated.", 1500);
});
sourceNodes.forEach((node) => {
  node.addEventListener("click", () => openDataPermissionModal(node.dataset.sourceNode));
});
dataPermissionClose?.addEventListener("click", closeDataPermissionModal);
dataPermissionCancel?.addEventListener("click", closeDataPermissionModal);
dataPermissionAllow?.addEventListener("click", approveDataSourcePermission);
dataPermissionModal?.addEventListener("click", (event) => {
  if (event.target === dataPermissionModal) closeDataPermissionModal();
});


historyList?.addEventListener("click", (event) => {
  const historyButton = event.target.closest("[data-history-id]");
  if (!historyButton) return;
  openHistoryDetail(historyButton.dataset.historyId);
});

historyModalClose?.addEventListener("click", closeHistoryDetail);
historyModal?.addEventListener("click", (event) => {
  if (event.target === historyModal) closeHistoryDetail();
});
approvalModalClose?.addEventListener("click", closeApprovalModal);
approvalCancel?.addEventListener("click", closeApprovalModal);
approvalModal?.addEventListener("click", (event) => {
  if (event.target === approvalModal) closeApprovalModal();
});
approvalConnectWallet?.addEventListener("click", () => {
  closeApprovalModal();
  walletButton.click();
});
approvalSign?.addEventListener("click", completeJoinApproval);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHistoryDetail();
    closeApprovalModal();
    closeDataPermissionModal();
    closeFinalSettlementReceipt();
  }
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

document.addEventListener("click", (event) => {
  const button = event.target.closest("#join-btn");
  if (!button) return;

  const detail = challengeDetails[selectedChallenge];
  if (!detail || detail.isJoined) return;

  if (!walletVerified) {
    openJoinApproval();
    return;
  }

  openJoinApproval();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("#cancel-reservation");
  if (!button) return;
  cancelReservation();
});

const initialPanel = new URLSearchParams(window.location.search).get("panel");
if (initialPanel && document.getElementById(initialPanel)) {
  showPanel(initialPanel);
} else {
  showPanel("dashboard");
}

renderHistorySummary();
renderSelectedChallenge(challengeDetails[selectedChallenge]);
updateAllJoinedCards();
syncDataFlowWalletState();
startLiveTelemetry();
startRewardRankLoop();
startLiveVerificationLoop();




