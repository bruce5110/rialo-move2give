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
const walletProfileButton = document.querySelector("#wallet-profile-button");
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
const sponsorStoreModal = document.querySelector("#sponsor-store-modal");
const sponsorStoreClose = document.querySelector("#sponsor-store-close");
const sponsorStorePreview = document.querySelector("#sponsor-store-preview");
const sponsorStoreFallback = document.querySelector("#sponsor-store-fallback");
const sponsorStoreName = document.querySelector("#sponsor-store-name");
const visitSponsorStoreButton = document.querySelector("#visit-sponsor-store");
const closeSponsorStoreButton = document.querySelector("#close-sponsor-store");
const luckyAirDropModal = document.querySelector("#lucky-airdrop-modal");
const luckyDropsWalletModal = document.querySelector("#lucky-drops-wallet-modal");
const luckyDropsWalletClose = document.querySelector("#lucky-drops-wallet-close");
const closeLuckyDropsWalletButton = document.querySelector("#close-lucky-drops-wallet");
const luckyDropsReward = document.querySelector("#lucky-drops-reward");
const luckyDropsSource = document.querySelector("#lucky-drops-source");
const luckyDropsDetailStatus = document.querySelector("#lucky-drops-detail-status");
const luckyDropsCode = document.querySelector("#lucky-drops-code");
const luckyDropsValid = document.querySelector("#lucky-drops-valid");
const luckyDropsBarcodeNumber = document.querySelector("#lucky-drops-barcode-number");
const luckyDropsProvider = document.querySelector("#lucky-drops-provider");
const luckyDropsUsedStamp = document.querySelector("#lucky-drops-used-stamp");
const luckyDropsWalletCard = document.querySelector("[data-lucky-drops-wallet-card]");
const donationHistoryTitle = document.querySelector("#donation-history-title");
const donationHistorySubtitle = document.querySelector("#donation-history-subtitle");
const luckyDropHistoryTable = document.querySelector("[data-lucky-drop-history-table]");
const luckyDropHistoryBack = document.querySelector("[data-lucky-history-back]");
const currentStatusBadge = document.querySelector("#current-status-badge");
const currentStatusCard = document.querySelector(".current-status");
const historyModal = document.querySelector("#history-modal");
const historyModalClose = document.querySelector("#history-modal-close");
const historyModalTitle = document.querySelector("#history-modal-title");
const donationReceiptPreviewModal = document.querySelector("#donation-receipt-preview-modal");
const donationReceiptPreviewClose = document.querySelector("#donation-receipt-preview-close");
const donationReceiptPreviewId = document.querySelector("#donation-receipt-preview-id");
const donationReceiptPreviewProgram = document.querySelector("#donation-receipt-preview-program");
const donationReceiptPreviewNgo = document.querySelector("#donation-receipt-preview-ngo");
const donationReceiptPreviewDate = document.querySelector("#donation-receipt-preview-date");
const donationReceiptPreviewMyDonation = document.querySelector("#donation-receipt-preview-my-donation");
const donationReceiptPreviewSponsorMatch = document.querySelector("#donation-receipt-preview-sponsor-match");
const donationReceiptPreviewTotal = document.querySelector("#donation-receipt-preview-total");
const donationReceiptPreviewStatus = document.querySelector("#donation-receipt-preview-status");
const donationReceiptPreviewVerification = document.querySelector("#donation-receipt-preview-verification");
const donationReceiptDownload = document.querySelector("#donation-receipt-download");
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
const editProfileButton = document.querySelector("#edit-profile-button");
const profileModal = document.querySelector("#profile-modal");
const profileModalClose = document.querySelector("#profile-modal-close");
const profileCancel = document.querySelector("#profile-cancel");
const profileSave = document.querySelector("#profile-save");
const profileNicknameInput = document.querySelector("#profile-nickname-input");
const profilePhotoInput = document.querySelector("#profile-photo-input");
const overviewProfileName = document.querySelector("#overview-profile-name");
const dashboardProfileTitle = document.querySelector("#dashboard-profile-title");
const overviewProfilePhoto = document.querySelector("#overview-profile-photo");
const overviewRankScroll = document.querySelector(".rank-scroll");
const bruceAvatarNodes = document.querySelectorAll(".bruce-avatar");
const profileModalPreview = document.querySelector("#profile-modal-preview");
const profileModalPreviewName = document.querySelector("#profile-modal-preview-name");
const dashboardPeriodButtons = document.querySelectorAll("[data-dashboard-period]");
const dashboardPeriodMenus = document.querySelectorAll("[data-dashboard-period-menu]");
const dashboardSummaryValues = document.querySelectorAll("[data-dashboard-summary]");
const dashboardPeriodLabels = document.querySelectorAll("[data-dashboard-period-label]");
const dashboardRingNodes = document.querySelectorAll("[data-ring]");
const dashboardRingTotal = document.querySelector("[data-ring-total]");
const dashboardRingLabel = document.querySelector("[data-ring-label]");
const dashboardRingStats = document.querySelectorAll("[data-ring-stat]");
const dashboardChartGuides = document.querySelector("[data-chart-guides]");
const dashboardChartYAxis = document.querySelector("[data-chart-y-axis]");
const dashboardChartAreas = document.querySelector("[data-chart-areas]");
const dashboardChartLines = document.querySelector("[data-chart-lines]");
const dashboardChartPoints = document.querySelector("[data-chart-points]");
const dashboardChartXLabels = document.querySelector("[data-chart-x-labels]");
const dashboardChartPeriodTitle = document.querySelector("[data-chart-period-title]");
const dashboardChartCaption = document.querySelector("[data-chart-caption]");
const dashboardChartUnit = document.querySelector("[data-chart-unit]");
const dashboardActiveAreaStops = document.querySelectorAll("[data-active-area-stop]");
const dashboardWorkoutCards = document.querySelectorAll("[data-workout-type]");
const dashboardWorkoutTitle = document.querySelector("[data-workout-title]");
const dashboardWorkoutKicker = document.querySelector("[data-workout-kicker]");
const dashboardWorkoutMetrics = document.querySelector("[data-workout-metrics]");
const dashboardActivityCalendar = document.querySelector("[data-activity-calendar]");
const healthDashboard = document.querySelector("#activity .health-dashboard");
const addActivityCard = document.querySelector("[data-add-activity-card]");
const addActivityPicker = document.querySelector("[data-activity-add-picker]");
const addActivityOptions = document.querySelectorAll("[data-add-activity-option]");
const privacyProtectedCard = document.querySelector(".privacy-protected-card");
const privacyInputs = document.querySelectorAll("[data-privacy-key]");
let walletConnected = false;
let connectedAccount = "";
let walletVerified = false;
let liveSyncStarted = false;
let streakLocked = false;
let rewardRankInterval = null;
let customDashboardActivity = null;
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
let activeDashboardPeriod = "monthly";
let activeDashboardWorkout = "walking";
let openDashboardPeriodMenu = "";
const dashboardDemoToday = new Date(2026, 5, 17);
const todayForDashboardPeriodMenu = dashboardDemoToday;
const dashboardPeriodMenuState = {
  weekly: `${Math.min(5, Math.floor((todayForDashboardPeriodMenu.getDate() - 1) / 7) + 1)}week`,
  monthly: todayForDashboardPeriodMenu.toLocaleString("en-US", { month: "long" }),
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
    title: "Children's Education Run",
    period: "May 13, 2026 ~ May 27, 2026",
    result: "Completed",
    entryAmount: 20,
    participants: 10,
    rank: "#2",
    finalPayout: 90,
    donationFromPayout: 16,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Children First",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified movement completed; sponsor match unlocked and receipt issued",
  },
  "walk-meals": {
    title: "Local Community Food Support Walk",
    period: "May 1, 2026 ~ May 7, 2026",
    result: "Failed",
    entryAmount: 15,
    participants: 8,
    rank: null,
    finalPayout: 0,
    donationFromPayout: 0,
    rankBonus: null,
    poolContribution: 15,
    donationOrganization: "Disaster Relief",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Goal missed; participation contribution donated and receipt issued",
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
    donationOrganization: "Disaster Relief",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified movement completed; sponsor match unlocked and receipt issued",
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
    donationOrganization: "Climate Action",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified movement completed; sponsor match unlocked and receipt issued",
  },
  "weekend-cycling": {
    title: "Swiss Hill Cycling Challenge",
    period: "April 8, 2026 ~ April 14, 2026",
    result: "Completed",
    entryAmount: 30,
    participants: 14,
    rank: "#2",
    finalPayout: 70,
    donationFromPayout: 10,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Children First",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified cycling completed; sponsor match unlocked and receipt issued",
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
    donationOrganization: "Disaster Relief",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified walk completed; sponsor match unlocked and receipt issued",
  },
  "morning-yoga": {
    title: "Refugee Support Movement Challenge",
    period: "March 25, 2026 ~ March 31, 2026",
    result: "Completed",
    entryAmount: 18,
    participants: 11,
    rank: "#1",
    finalPayout: 66,
    donationFromPayout: 12,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Climate Action",
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
    donationOrganization: "Children First",
    receiptStatus: "Receipt issued",
    outcomeNote: "5K run verified and donation routed",
  },
  "step-battle": {
    title: "Children's Education Step Challenge",
    period: "March 10, 2026 ~ March 17, 2026",
    result: "Failed",
    entryAmount: 14,
    participants: 16,
    rank: null,
    finalPayout: 0,
    donationFromPayout: 0,
    rankBonus: null,
    poolContribution: 14,
    donationOrganization: "Disaster Relief",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Step goal missed; participation contribution donated and receipt issued",
  },
  "bike-relief": {
    title: "Disaster Relief Cycling Challenge",
    period: "March 3, 2026 ~ March 9, 2026",
    result: "Completed",
    entryAmount: 22,
    participants: 13,
    rank: "#2",
    finalPayout: 78,
    donationFromPayout: 14,
    rankBonus: "Included",
    poolContribution: 0,
    donationOrganization: "Disaster Relief",
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
    donationOrganization: "Climate Action",
    receiptStatus: "Receipt issued",
    outcomeNote: "Verified sprint completed; sponsor match unlocked and receipt issued",
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
    donationOrganization: "Climate Action",
    receiptStatus: "Donation receipt available when contribution is made.",
    outcomeNote: "Midday goal missed; participation contribution donated and receipt issued",
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
  return `${prefix}$${amount}`;
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
    sfsBudgetNote.textContent = "SFS spent on Donation Receipt.";
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
  syncText("reward-wallet", "Pending");
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
  syncText("reward-wallet", "Issued");
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
  if (detail.result === "Completed") {
    summary.textContent = `Completed - ${formatRialo(detail.entryAmount)} contribution - ${formatRialo(detail.finalPayout)} sponsor match unlocked`;
  } else {
    summary.textContent = `Missed goal - ${formatRialo(detail.entryAmount)} contribution donated - Receipt issued`;
  }
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
    donationOrganization: "Children First",
    outcomeNote: "Verified movement completed; sponsor match unlocked and receipt issued",
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
  
  const organization = detail.donationOrganization ?? "None";
  const receiptType = isCompleted && donationAmount > 0 ? "Proof of Impact" : detail.receiptStatus ?? "Impact proof";

  if (finalChallengeName) finalChallengeName.textContent = detail.title ?? "Move2Give Challenge";
  if (finalRank) finalRank.textContent = isCompleted ? detail.rank ?? "#-" : "N/A";
  if (finalEarned) finalEarned.textContent = formatRialo(finalPayout);
  if (finalDonated) finalDonated.textContent = formatRialo(donationAmount);
  if (finalWallet) finalWallet.textContent = "Issued";
  if (finalTransactionStatus) finalTransactionStatus.textContent = isCompleted ? "Confirmed" : "Recorded";
  if (finalTransactionHash) finalTransactionHash.textContent = receiptHashForDetail(detail);
  if (finalDonationRecipient) finalDonationRecipient.textContent = organization;
  if (finalReceiptType) finalReceiptType.textContent = receiptType;
  if (finalStatusLine) finalStatusLine.textContent = `Status: ${isCompleted ? "Confirmed" : "Recorded"}`;
  if (finalImpactCreated) {
    finalImpactCreated.innerHTML = donationAmount > 0
      ? `<span>${formatRialo(donationAmount)} sponsor match contributed to ${organization}</span><span>Real-world impact recorded with private verification</span>`
      : `<span>Donation receipt available when contribution is made.</span><span>Verified result recorded with private proof</span>`;
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

  const phases = ["verification", "ngo-route", "sponsor-match", "receipt"];
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
  settlementButton.textContent = "Replay Donation Receipt";
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

function monthlyAxisLabels(monthName, days) {
  const anchors = new Set([1, 5, 10, 15, 20, 25, days]);
  return Array.from({ length: days }, (_, index) => {
    const day = index + 1;
    return anchors.has(day) ? `${monthName} ${day}` : "";
  });
}

const dashboardActivityMockData = {
  weekly: {
    May: {
      "1week": {
        label: "May · 1week",
        title: "May Week 1 · May 1 → May 7",
        summary: { activeDays: "5", activeTrend: "May launch week", time: "3 h 24 m", timeTrend: "Strong start", calories: "1,420 kcal", caloriesTrend: "May baseline", score: "80", scoreTrend: "Consistent start" },
        rings: { movement: 80, consistency: 72, recovery: 78, total: 78 },
        labels: ["May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7"],
        workoutCards: {
          walking: ["52,100 steps", "35.1 km · 5 days"],
          running: ["11.6 km", "Avg pace 6'24\"/km"],
          cycling: ["19.2 km", "Avg speed 18.0 km/h"],
          swimming: ["1.0 km", "20 laps · 24 min"],
          strength: ["10 sets", "3 sessions · 1h 36m"],
        },
        chartValues: {
          walking: [7600, 8200, 7900, 8800, 8400, 9100, 6100],
          running: [0, 4.2, 0, 0, 3.6, 0, 3.8],
          cycling: [0, 0, 12.4, 0, 0, 6.8, 0],
          swimming: [0, 8, 0, 0, 12, 0, 0],
          strength: [4, 0, 0, 3, 0, 3, 0],
        },
      },
      "2week": {
        label: "May · 2week",
        title: "May Week 2 · May 8 → May 14",
        summary: { activeDays: "6", activeTrend: "▲ May momentum", time: "4 h 08 m", timeTrend: "▲ 14% vs week 1", calories: "1,690 kcal", caloriesTrend: "▲ 12% vs week 1", score: "84", scoreTrend: "Higher consistency" },
        rings: { movement: 84, consistency: 80, recovery: 76, total: 82 },
        labels: ["May 8", "May 9", "May 10", "May 11", "May 12", "May 13", "May 14"],
        workoutCards: {
          walking: ["61,300 steps", "41.0 km · 6 days"],
          running: ["14.7 km", "Avg pace 6'18\"/km"],
          cycling: ["27.6 km", "Avg speed 18.7 km/h"],
          swimming: ["1.2 km", "24 laps · 29 min"],
          strength: ["13 sets", "4 sessions · 2h 05m"],
        },
        chartValues: {
          walking: [9300, 8600, 9500, 9000, 9700, 8900, 10400],
          running: [0, 3.8, 0, 0, 6.4, 0, 4.5],
          cycling: [0, 16.2, 0, 0, 0, 11.4, 0],
          swimming: [10, 0, 0, 14, 0, 0, 0],
          strength: [0, 4, 0, 0, 5, 0, 4],
        },
      },
      "3week": {
        label: "May · 3week",
        title: "May Week 3 · May 15 → May 21",
        summary: { activeDays: "4", activeTrend: "Recovery focus", time: "3 h 12 m", timeTrend: "▼ lighter week", calories: "1,260 kcal", caloriesTrend: "Recovery week", score: "77", scoreTrend: "Balanced recovery" },
        rings: { movement: 74, consistency: 66, recovery: 86, total: 76 },
        labels: ["May 15", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
        workoutCards: {
          walking: ["54,600 steps", "36.5 km · 4 days"],
          running: ["12.1 km", "Avg pace 6'28\"/km"],
          cycling: ["22.4 km", "Avg speed 18.1 km/h"],
          swimming: ["1.2 km", "24 laps · 27 min"],
          strength: ["9 sets", "2 sessions · 1h 28m"],
        },
        chartValues: {
          walking: [9200, 9900, 0, 9300, 10100, 9600, 10100],
          running: [4.6, 0, 0, 7.2, 0, 0, 0.3],
          cycling: [0, 0, 14.6, 0, 0, 7.8, 0],
          swimming: [8, 0, 0, 0, 16, 0, 0],
          strength: [0, 0, 5, 0, 0, 4, 0],
        },
      },
      "4week": {
        label: "May · 4week",
        title: "May Week 4 · May 22 → May 28",
        summary: { activeDays: "6", activeTrend: "▲ strongest May week", time: "4 h 42 m", timeTrend: "▲ 25% vs week 3", calories: "1,940 kcal", caloriesTrend: "▲ 28% vs week 3", score: "89", scoreTrend: "Peak May week" },
        rings: { movement: 90, consistency: 86, recovery: 78, total: 88 },
        labels: ["May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28"],
        workoutCards: {
          walking: ["70,900 steps", "47.6 km · 6 days"],
          running: ["16.2 km", "Avg pace 6'10\"/km"],
          cycling: ["34.0 km", "Avg speed 19.2 km/h"],
          swimming: ["1.8 km", "36 laps · 39 min"],
          strength: ["15 sets", "4 sessions · 2h 24m"],
        },
        chartValues: {
          walking: [9400, 10200, 9700, 10300, 9900, 10400, 10000],
          running: [0, 5.8, 0, 0, 4.9, 0, 5.5],
          cycling: [0, 0, 24.2, 0, 0, 9.8, 0],
          swimming: [0, 12, 0, 0, 10, 0, 14],
          strength: [4, 0, 0, 5, 0, 0, 6],
        },
      },
      "5week": {
        label: "May · 5week",
        title: "May Week 5 · May 29 → May 31",
        summary: { activeDays: "3", activeTrend: "Month close", time: "2 h 02 m", timeTrend: "Final May push", calories: "890 kcal", caloriesTrend: "Short week", score: "81", scoreTrend: "Solid finish" },
        rings: { movement: 80, consistency: 70, recovery: 82, total: 79 },
        labels: ["May 29", "May 30", "May 31", "", "", "", ""],
        workoutCards: {
          walking: ["29,400 steps", "19.8 km · 3 days"],
          running: ["3.7 km", "Avg pace 6'34\"/km"],
          cycling: ["20.4 km", "Avg speed 18.5 km/h"],
          swimming: ["0.0 km", "0 laps · rest"],
          strength: ["5 sets", "1 session · 46m"],
        },
        chartValues: {
          walking: [9800, 10100, 9500, 0, 0, 0, 0],
          running: [0, 3.7, 0, 0, 0, 0, 0],
          cycling: [0, 20.4, 0, 0, 0, 0, 0],
          swimming: [0, 0, 0, 0, 0, 0, 0],
          strength: [0, 0, 5, 0, 0, 0, 0],
        },
      },
    },
    June: {
    "1week": {
      label: "1week",
      title: "Week 1 · Jun 1 → Jun 7",
      summary: { activeDays: "5", activeTrend: "▲ steady start", time: "3 h 05 m", timeTrend: "▲ 8% vs prior week", calories: "1,280 kcal", caloriesTrend: "▲ 9% vs prior week", score: "78", scoreTrend: "Fresh week baseline" },
      rings: { movement: 76, consistency: 68, recovery: 82, total: 75 },
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      workoutCards: {
        walking: ["51,800 steps", "34.7 km · 5 days"],
        running: ["12.4 km", "Avg pace 6'18\"/km"],
        cycling: ["18.6 km", "Avg speed 18.1 km/h"],
        swimming: ["1.2 km", "24 laps · 28 min"],
        strength: ["11 sets", "3 sessions · 1h 45m"],
      },
      chartValues: {
        walking: [7200, 8400, 6100, 9300, 7800, 10200, 8600],
        running: [0, 4.2, 0, 5.4, 0, 2.8, 0],
        cycling: [0, 0, 9.4, 0, 0, 18.6, 0],
        swimming: [0, 12, 0, 0, 0, 12, 0],
        strength: [4, 0, 3, 0, 4, 0, 0],
      },
    },
    "2week": {
      label: "2week",
      title: "Week 2 · Jun 8 → Jun 14",
      summary: { activeDays: "6", activeTrend: "▲ 16% vs week 1", time: "4 h 20 m", timeTrend: "▲ 21% vs week 1", calories: "1,720 kcal", caloriesTrend: "▲ 19% vs week 1", score: "82", scoreTrend: "More balanced week" },
      rings: { movement: 82, consistency: 76, recovery: 80, total: 80 },
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      workoutCards: {
        walking: ["62,400 steps", "41.5 km · 6 days"],
        running: ["15.8 km", "Avg pace 6'12\"/km"],
        cycling: ["26.4 km", "Avg speed 18.9 km/h"],
        swimming: ["1.6 km", "32 laps · 36 min"],
        strength: ["14 sets", "4 sessions · 2h 10m"],
      },
      chartValues: {
        walking: [7800, 9100, 8600, 10400, 7200, 11800, 9500],
        running: [3.6, 0, 5.2, 0, 0, 7.0, 0],
        cycling: [0, 12.8, 0, 0, 13.6, 0, 26.4],
        swimming: [0, 0, 14, 0, 0, 18, 0],
        strength: [0, 5, 0, 4, 0, 5, 0],
      },
    },
    "3week": {
      label: "3week",
      title: "Week 3 · Jun 15 → Jun 21",
      summary: { activeDays: "4", activeTrend: "▼ recovery week", time: "2 h 55 m", timeTrend: "▼ 12% vs week 2", calories: "1,180 kcal", caloriesTrend: "▼ 10% vs week 2", score: "74", scoreTrend: "Recovery balanced" },
      rings: { movement: 70, consistency: 62, recovery: 88, total: 73 },
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      workoutCards: {
        walking: ["45,900 steps", "30.4 km · 4 days"],
        running: ["9.6 km", "Avg pace 6'30\"/km"],
        cycling: ["14.2 km", "Avg speed 17.8 km/h"],
        swimming: ["0.8 km", "16 laps · 19 min"],
        strength: ["9 sets", "2 sessions · 1h 20m"],
      },
      chartValues: {
        walking: [6200, 0, 7600, 8900, 0, 10400, 12800],
        running: [0, 0, 4.4, 0, 0, 5.2, 0],
        cycling: [0, 0, 0, 14.2, 0, 0, 0],
        swimming: [0, 0, 0, 8, 0, 8, 0],
        strength: [5, 0, 0, 0, 4, 0, 0],
      },
    },
    "4week": {
      label: "4week",
      title: "Week 4 · Jun 22 → Jun 28",
      summary: { activeDays: "6", activeTrend: "▲ strong finish", time: "4 h 48 m", timeTrend: "▲ 24% vs week 3", calories: "1,940 kcal", caloriesTrend: "▲ 28% vs week 3", score: "88", scoreTrend: "Peak consistency" },
      rings: { movement: 90, consistency: 84, recovery: 78, total: 86 },
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      workoutCards: {
        walking: ["70,200 steps", "47.9 km · 6 days"],
        running: ["18.4 km", "Avg pace 6'05\"/km"],
        cycling: ["38.5 km", "Avg speed 19.4 km/h"],
        swimming: ["2.0 km", "40 laps · 44 min"],
        strength: ["16 sets", "4 sessions · 2h 30m"],
      },
      chartValues: {
        walking: [8600, 9800, 7600, 11200, 10400, 12600, 9600],
        running: [0, 5.4, 0, 6.2, 0, 6.8, 0],
        cycling: [0, 0, 18.5, 0, 0, 20.0, 0],
        swimming: [10, 0, 0, 14, 0, 16, 0],
        strength: [4, 0, 4, 0, 4, 0, 4],
      },
    },
    "5week": {
      label: "5week",
      title: "Week 5 · Jun 29 → Jun 30",
      summary: { activeDays: "2", activeTrend: "Partial week", time: "1 h 30 m", timeTrend: "New short week", calories: "690 kcal", caloriesTrend: "Partial week", score: "76", scoreTrend: "Early week data" },
      rings: { movement: 66, consistency: 58, recovery: 84, total: 70 },
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      workoutCards: {
        walking: ["20,400 steps", "13.6 km · 2 days"],
        running: ["4.8 km", "Avg pace 6'22\"/km"],
        cycling: ["9.2 km", "Avg speed 18.2 km/h"],
        swimming: ["0.4 km", "8 laps · 11 min"],
        strength: ["5 sets", "1 session · 42m"],
      },
      chartValues: {
        walking: [9600, 10800, 0, 0, 0, 0, 0],
        running: [0, 4.8, 0, 0, 0, 0, 0],
        cycling: [9.2, 0, 0, 0, 0, 0, 0],
        swimming: [0, 8, 0, 0, 0, 0, 0],
        strength: [5, 0, 0, 0, 0, 0, 0],
      },
    },
    },
  },
  monthly: {
    May: {
      label: "May",
      title: "May 2026",
      summary: { activeDays: "18", activeTrend: "▲ 20% vs April", time: "12 h 34 m", timeTrend: "▲ 18% vs April", calories: "5,642 kcal", caloriesTrend: "▲ 22% vs April", score: "86", scoreTrend: "▲ 14% vs April" },
      rings: { movement: 86, consistency: 82, recovery: 78, total: 86 },
      labels: Array.from({ length: 31 }, (_, index) => String(index + 1)),
      axisLabels: monthlyAxisLabels("May", 31),
      workoutCards: {
        walking: ["68,420 steps", "46.2 km · 18 days"],
        running: ["21.3 km", "Avg pace 6'20\"/km"],
        cycling: ["31.8 km", "Avg speed 18.6 km/h"],
        swimming: ["2.4 km", "48 laps · 52 min"],
        strength: ["18 sets", "5 sessions · 3h 10m"],
      },
      chartValues: {
        walking: [7600, 8200, 7900, 8800, 8400, 9100, 8700, 9300, 8600, 9500, 9000, 9700, 8900, 9400, 9200, 9900, 9300, 10100, 9600, 9800, 9400, 10200, 9700, 10300, 9900, 10400, 9600, 10000, 9800, 10100, 9500],
        running: [0, 4.2, 0, 6.1, 0, 0, 5.3, 0, 3.8, 0, 0, 6.4, 0, 0, 4.6, 0, 0, 7.2, 0, 0, 5.8, 0, 0, 4.9, 0, 0, 6.5, 0, 0, 3.7, 0],
        cycling: [0, 0, 12.4, 0, 0, 18.6, 0, 0, 0, 16.2, 0, 0, 22.0, 0, 0, 0, 14.6, 0, 0, 19.8, 0, 0, 0, 24.2, 0, 0, 13.8, 0, 0, 20.4, 0],
        swimming: [0, 8, 0, 0, 12, 0, 0, 0, 10, 0, 0, 14, 0, 0, 0, 8, 0, 0, 16, 0, 0, 0, 12, 0, 0, 10, 0, 0, 14, 0, 0],
        strength: [4, 0, 0, 5, 0, 0, 4, 0, 0, 0, 5, 0, 0, 4, 0, 0, 5, 0, 0, 0, 4, 0, 0, 5, 0, 0, 4, 0, 0, 0, 5],
      },
    },
    June: {
      label: "June",
      title: "June 2026",
      summary: { activeDays: "17", activeTrend: "Updated through Jun 17", time: "19 h 48 m", timeTrend: "Live June activity", calories: "14,860 kcal", caloriesTrend: "Verified through Jun 17", score: "94", scoreTrend: "Current June score" },
      rings: { movement: 92, consistency: 88, recovery: 80, total: 90 },
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"],
      axisLabels: ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17"],
      workoutCards: {
        walking: ["136,360 steps", "92.1 km · 17 days"],
        running: ["43.5 km", "Avg pace 6'24\"/km"],
        cycling: ["137.8 km", "Avg speed 18.2 km/h"],
        swimming: ["4.3 km", "86 laps · 103 min"],
        strength: ["42 sets", "10 sessions · 2h 48m"],
      },
      chartValues: {
        walking: [4920, 5940, 6100, 7200, 6800, 8400, 7900, 8600, 7350, 9100, 8800, 9400, 8250, 10100, 8700, 9600, 9200],
        running: [0, 3.4, 0, 4.8, 0, 5.2, 0, 0, 4.1, 6.0, 0, 4.4, 0, 5.6, 0, 3.8, 6.2],
        cycling: [8.8, 0, 9.4, 0, 14.2, 0, 20.6, 0, 0, 16.8, 12.4, 0, 18.6, 0, 21.2, 0, 15.8],
        swimming: [0, 8, 0, 0, 12, 0, 0, 14, 0, 10, 0, 12, 0, 16, 0, 0, 14],
        strength: [4, 0, 3, 0, 5, 0, 0, 4, 0, 6, 5, 0, 4, 0, 6, 0, 5],
      },
    },
  },
  yearly: {
    label: "This Year",
    title: "May → June 2026",
    summary: { activeDays: "35", activeTrend: "May + June summary", time: "32 h 22 m", timeTrend: "Year-to-date demo", calories: "20,502 kcal", caloriesTrend: "Year-to-date demo", score: "92", scoreTrend: "Strong YTD activity" },
    rings: { movement: 92, consistency: 88, recovery: 80, total: 90 },
    labels: ["May", "June"],
    axisLabels: ["May", "June"],
    workoutCards: {
      walking: ["204,780 steps", "138.4 km · 35 days"],
      running: ["64.8 km", "Avg pace 6'22\"/km"],
      cycling: ["169.6 km", "Avg speed 18.4 km/h"],
      swimming: ["6.7 km", "134 laps · 155 min"],
      strength: ["60 sets", "15 sessions · 8h 02m"],
    },
    chartValues: {
      walking: [68420, 136360],
      running: [21.3, 43.5],
      cycling: [31.8, 137.8],
      swimming: [48, 86],
      strength: [18, 42],
    },
  },
};

function getActiveDashboardActivityData() {
  const selectedMonth = dashboardPeriodMenuState.monthly || todayForDashboardPeriodMenu.toLocaleString("en-US", { month: "long" });
  const selectedWeek = dashboardPeriodMenuState.weekly || "1week";
  let activityData;

  if (activeDashboardPeriod === "weekly") {
    activityData = (
      dashboardActivityMockData.weekly[selectedMonth]?.[selectedWeek] ||
      dashboardActivityMockData.weekly.June?.[selectedWeek] ||
      dashboardActivityMockData.weekly.May?.[selectedWeek] ||
      dashboardActivityMockData.weekly.June?.["1week"]
    );
    return applyCurrentMonthActivityCutoff(activityData, selectedMonth, selectedWeek);
  }
  if (activeDashboardPeriod === "monthly") {
    activityData = dashboardActivityMockData.monthly[selectedMonth] || dashboardActivityMockData.monthly.May;
    return applyCurrentMonthActivityCutoff(activityData, selectedMonth);
  }
  return dashboardActivityMockData.yearly;
}

function isSelectedCurrentDashboardMonth(selectedMonth) {
  const today = dashboardDemoToday;
  return selectedMonth === today.toLocaleString("en-US", { month: "long" });
}

function getDashboardWeekStartDay(selectedWeek) {
  const weekNumber = Number(String(selectedWeek).match(/\d+/)?.[0] || 1);
  return (Math.max(1, weekNumber) - 1) * 7 + 1;
}

function getAvailableDashboardDayCount(selectedMonth, selectedWeek = "") {
  if (!isSelectedCurrentDashboardMonth(selectedMonth)) return Infinity;
  const currentDay = dashboardDemoToday.getDate();
  if (!selectedWeek) return currentDay;
  const weekStartDay = getDashboardWeekStartDay(selectedWeek);
  return Math.max(0, Math.min(7, currentDay - weekStartDay + 1));
}

function summarizeFilteredDashboardActivity(baseData, chartValues) {
  const dateCount = Math.max(...Object.values(chartValues).map((values) => values.length), 0);
  const activeDays = Array.from({ length: dateCount }, (_, index) => {
    return Object.values(chartValues).some((values) => isChartValue(values[index]) && Number(values[index]) > 0);
  }).filter(Boolean).length;
  const walkingSteps = sumChartValues(chartValues.walking);
  const runningKm = sumChartValues(chartValues.running);
  const cyclingKm = sumChartValues(chartValues.cycling);
  const swimLaps = sumChartValues(chartValues.swimming);
  const strengthSets = sumChartValues(chartValues.strength);
  const workoutMinutes = Math.round(activeDays * 22 + runningKm * 6.2 + cyclingKm * 2.4 + swimLaps * 1.2 + strengthSets * 4);
  const calories = Math.round(walkingSteps * 0.045 + runningKm * 68 + cyclingKm * 32 + swimLaps * 7 + strengthSets * 18);
  const score = activeDays ? Math.min(94, Math.round(58 + activeDays * 5 + Math.min(18, calories / 110))) : 0;

  return {
    ...baseData.summary,
    activeDays: String(activeDays),
    activeTrend: activeDays ? "Current period only" : "No issued activity yet",
    time: formatDashboardMinutes(workoutMinutes),
    timeTrend: activeDays ? "Future days excluded" : "No current activity",
    calories: `${calories.toLocaleString("en-US")} kcal`,
    caloriesTrend: activeDays ? "Based on visible days" : "No current activity",
    score: String(score),
    scoreTrend: activeDays ? "Future data hidden" : "Waiting for activity",
  };
}

function sumChartValues(values = []) {
  return values.reduce((sum, value) => sum + (isChartValue(value) ? Number(value) : 0), 0);
}

function countActiveChartValues(values = []) {
  return values.filter((value) => isChartValue(value) && Number(value) > 0).length;
}

function formatDashboardMinutes(totalMinutes) {
  const minutes = Math.max(0, Math.round(totalMinutes));
  return `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} m`;
}

function buildFilteredWorkoutCards(baseCards = {}, chartValues = {}) {
  const walkingSteps = sumChartValues(chartValues.walking);
  const runningKm = sumChartValues(chartValues.running);
  const cyclingKm = sumChartValues(chartValues.cycling);
  const swimLaps = sumChartValues(chartValues.swimming);
  const strengthSets = sumChartValues(chartValues.strength);
  const walkingDays = countActiveChartValues(chartValues.walking);
  const runningDays = countActiveChartValues(chartValues.running);
  const cyclingDays = countActiveChartValues(chartValues.cycling);
  const swimDays = countActiveChartValues(chartValues.swimming);
  const strengthDays = countActiveChartValues(chartValues.strength);

  return {
    ...baseCards,
    walking: [`${Math.round(walkingSteps).toLocaleString("en-US")} steps`, `${(walkingSteps / 1480).toFixed(1)} km · ${walkingDays} days`],
    running: [`${runningKm.toFixed(1)} km`, runningDays ? `Avg pace 6'24"/km` : "No runs yet"],
    cycling: [`${cyclingKm.toFixed(1)} km`, cyclingDays ? "Avg speed 18.2 km/h" : "No rides yet"],
    swimming: [`${(swimLaps * 0.05).toFixed(1)} km`, swimDays ? `${Math.round(swimLaps)} laps · ${Math.round(swimLaps * 1.2)} min` : "0 laps · rest"],
    strength: [`${Math.round(strengthSets)} sets`, strengthDays ? `${strengthDays} sessions · ${formatDashboardMinutes(strengthSets * 4)}` : "0 sessions · rest"],
  };
}

function applyCurrentMonthActivityCutoff(activityData, selectedMonth, selectedWeek = "") {
  if (!activityData || !isSelectedCurrentDashboardMonth(selectedMonth)) return activityData;

  const availableDays = getAvailableDashboardDayCount(selectedMonth, selectedWeek);
  const chartValues = Object.fromEntries(
    Object.entries(activityData.chartValues || {}).map(([key, values]) => [
      key,
      values.map((value, index) => (index < availableDays ? value : null)),
    ])
  );

  return {
    ...activityData,
    chartValues,
    summary: summarizeFilteredDashboardActivity(activityData, chartValues),
    workoutCards: buildFilteredWorkoutCards(activityData.workoutCards, chartValues),
  };
}

function updateDashboardWorkoutCardDetails(activityData) {
  dashboardWorkoutCards.forEach((card) => {
    const workoutKey = card.dataset.workoutType;
    const datasetKey = getWorkoutDatasetKey(workoutKey);
    const details = activityData.workoutCards?.[datasetKey] || activityData.workoutCards?.[workoutKey];
    if (!details) return;
    const detailNodes = card.querySelectorAll(".m2g-workout-card-details small");
    detailNodes.forEach((node, index) => {
      node.textContent = details[index] || "";
    });
  });
}

function getDashboardMonthOptions() {
  const startMonthIndex = 4;
  const currentMonthIndex = new Date().getMonth();
  const endMonthIndex = Math.max(startMonthIndex, currentMonthIndex);
  return Array.from({ length: endMonthIndex - startMonthIndex + 1 }, (_, index) => {
    const date = new Date(2026, startMonthIndex + index, 1);
    return date.toLocaleString("en-US", { month: "long" });
  });
}

function renderDashboardPeriodMenus() {
  dashboardPeriodMenus.forEach((menu) => {
    const menuType = menu.dataset.dashboardPeriodMenu;
    const options =
      menuType === "weekly"
        ? ["1week", "2week", "3week", "4week", "5week"]
        : getDashboardMonthOptions();

    menu.hidden = openDashboardPeriodMenu !== menuType;
    menu.innerHTML = options
      .map((option) => {
        const isActive = dashboardPeriodMenuState[menuType] === option;
        return `<button type="button" class="${isActive ? "is-active" : ""}" data-dashboard-period-option="${menuType}" data-dashboard-period-value="${option}" role="option" aria-selected="${String(isActive)}">${option}</button>`;
      })
      .join("");
  });

  dashboardPeriodButtons.forEach((button) => {
    const period = button.dataset.dashboardPeriod;
    if (period === "weekly" || period === "monthly") {
      button.setAttribute("aria-expanded", String(openDashboardPeriodMenu === period));
    }
  });
}

function toggleDashboardPeriodMenu(period) {
  openDashboardPeriodMenu = openDashboardPeriodMenu === period ? "" : period;
  renderDashboardPeriodMenus();
}

const dashboardPeriodData = {
  weekly: {
    label: "This Week",
    title: "May 25 → May 31, 2026",
    caption: "Verified movement · weekly average 2.8 km",
    summary: {
      activeDays: "5",
      activeTrend: "▲ 12% vs last week",
      time: "3 h 10 m",
      timeTrend: "▲ 11% vs last week",
      calories: "1,320 kcal",
      caloriesTrend: "▲ 14% vs last week",
      score: "82",
      scoreTrend: "▲ 8% vs last week",
    },
    rings: { walking: 78, running: 52, cycling: 64, swimming: 35, total: 62 },
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    guides: false,
    chart: {
      walking: [3.2, 4.5, 4.0, 5.6, 4.8, 6.4, 7.1],
      running: [1.2, 2.4, 1.8, 3.1, 2.6, 3.8, 4.2],
      cycling: [2.0, 3.2, 2.5, 4.8, 3.8, 5.6, 6.0],
      swimming: [0.6, 1.0, 0.9, 1.4, 1.2, 1.8, 2.1],
    },
    donation: ["$42", "$84", "$126", "2"],
    historyDates: ["May 31", "May 29", "May 28", "May 26", "May 25"],
  },
  monthly: {
    label: "This Month",
    title: "May 2026",
    caption: "Verified movement · daily average 4.6 km",
    summary: {
      activeDays: "18",
      activeTrend: "▲ 20% vs last month",
      time: "12 h 34 m",
      timeTrend: "▲ 18% vs last month",
      calories: "5,642 kcal",
      caloriesTrend: "▲ 22% vs last month",
      score: "86",
      scoreTrend: "▲ 14% vs last month",
    },
    rings: { walking: 86, running: 74, cycling: 91, swimming: 48, total: 78 },
    labels: ["May 1", "May 5", "May 10", "May 15", "May 20", "May 25", "May 30"],
    guides: true,
    chart: {
      walking: [6.8, 8.4, 9.7, 11.2, 12.8, 14.1, 16.4],
      running: [3.9, 5.4, 5.9, 7.1, 8.6, 9.2, 11.0],
      cycling: [2.4, 4.8, 7.8, 8.6, 11.5, 13.0, 14.4],
      swimming: [1.5, 2.0, 2.7, 3.1, 4.0, 4.6, 5.3],
    },
    donation: ["$150", "$300", "$450", "7"],
    historyDates: ["May 24", "May 19", "May 13", "May 8", "May 2"],
  },
  yearly: {
    label: "This Year",
    title: "2026",
    caption: "Verified movement · yearly average 81.8 km per month",
    summary: {
      activeDays: "214",
      activeTrend: "▲ 24% vs last year",
      time: "148 h",
      timeTrend: "▲ 17% vs last year",
      calories: "68,420 kcal",
      caloriesTrend: "▲ 21% vs last year",
      score: "89",
      scoreTrend: "▲ 16% vs last year",
    },
    rings: { walking: 82, running: 68, cycling: 78, swimming: 55, total: 71 },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    guides: false,
    chart: {
      walking: [7.1, 7.8, 8.4, 9.0, 10.2, 11.0, 11.8, 12.4, 13.2, 14.0, 15.1, 16.0],
      running: [3.8, 4.1, 4.7, 5.2, 5.8, 6.4, 7.0, 7.5, 8.0, 8.7, 9.4, 10.2],
      cycling: [4.5, 5.0, 5.8, 6.9, 8.0, 9.2, 10.3, 11.0, 12.2, 13.1, 13.8, 14.6],
      swimming: [1.8, 2.0, 2.4, 2.8, 3.4, 3.7, 4.2, 4.8, 5.1, 5.6, 6.0, 6.4],
    },
    donation: ["$338", "$676", "$1,014", "16"],
    historyDates: ["Dec 2026", "Oct 2026", "Aug 2026", "May 2026", "Feb 2026"],
  },
};

const dashboardWorkoutData = {
  walking: {
    label: "Walking",
    title: "Walking Trend",
    metrics: "Steps · Distance",
    unit: "steps",
    color: "#34c38f",
    max: { weekly: 12000, monthly: 12000, yearly: 320000 },
    summary: "68,420 steps · 46.2 km",
    className: "chart-walking",
    areaClass: "walking-area",
    gradient: "walkingAreaFill",
    values: {
      weekly: [8600, 9100, 8800, 9400, 9000, 9800, 9300],
      monthly: [7600, 8400, 7900, 9100, 8600, 9500, 8800],
      yearly: [206000, 214000, 208000, 226000, 218000, 232000, 224000, 238000, 229000, 241000, 233000, 246000],
    },
  },
  running: {
    label: "Running",
    title: "Running Trend",
    metrics: "Distance · Pace",
    unit: "km",
    color: "#f08a58",
    max: { weekly: 8, monthly: 12, yearly: 120 },
    summary: "21.3 km · avg pace 6'20\"/km",
    className: "chart-running",
    areaClass: "running-area",
    gradient: "runningAreaFill",
    values: {
      weekly: [0, 5.8, 0, 7.2, 0, 3.6, 6.4],
      monthly: [0, 6.8, 0, 9.6, 0, 4.2, 7.8],
      yearly: [28, 54, 34, 82, 46, 62, 38, 92, 52, 74, 40, 88],
    },
  },
  cycling: {
    label: "Cycling",
    title: "Cycling Trend",
    metrics: "Distance · Avg Speed",
    unit: "km",
    color: "#4bb7d8",
    max: { weekly: 12, monthly: 20, yearly: 180 },
    summary: "31.8 km · avg speed 18.6 km/h",
    className: "chart-cycling",
    areaClass: "cycling-area",
    gradient: "cyclingAreaFill",
    values: {
      weekly: [0, 0, 11.2, 0, 5.6, 15.8, 0],
      monthly: [0, 14.6, 0, 6.8, 18.2, 0, 11.4],
      yearly: [34, 72, 46, 138, 62, 118, 40, 156, 70, 132, 52, 164],
    },
  },
  swimming: {
    label: "Swimming",
    title: "Swimming Trend",
    metrics: "Laps · Swim Distance",
    unit: "laps",
    color: "#8a7cf6",
    max: { weekly: 18, monthly: 60, yearly: 420 },
    summary: "48 laps · 2.4 km",
    className: "chart-swimming",
    areaClass: "swimming-area",
    gradient: "swimmingAreaFill",
    values: {
      weekly: [0, 8, 0, 0, 12, 0, 6],
      monthly: [0, 22, 0, 14, 0, 30, 0],
      yearly: [58, 96, 72, 128, 84, 116, 68, 142, 90, 132, 76, 104],
    },
  },
  strength: {
    label: "Strength",
    title: "Strength Training Trend",
    metrics: "Sets · Training Time",
    unit: "sets",
    color: "#d6a333",
    max: { weekly: 16, monthly: 28, yearly: 260 },
    summary: "18 sets · 5 sessions",
    className: "chart-strength",
    areaClass: "strength-area",
    gradient: "strengthAreaFill",
    values: {
      weekly: [12, 0, 10, 0, 14, 0, 8],
      monthly: [16, 0, 22, 0, 18, 0, 24],
      yearly: [94, 118, 82, 146, 106, 134, 88, 158, 112, 152, 96, 126],
    },
  },
  others: {
    label: "Others",
    title: "Other Activities Trend",
    metrics: "Active Time · Calories",
    unit: "min",
    color: "#20a79f",
    max: { weekly: 80, monthly: 180, yearly: 1800 },
    summary: "2h 25m · 410 kcal",
    className: "chart-others",
    areaClass: "others-area",
    gradient: "othersAreaFill",
    values: {
      weekly: [0, 35, 18, 0, 52, 0, 28],
      monthly: [24, 0, 92, 38, 0, 130, 46],
      yearly: [260, 520, 340, 880, 420, 700, 300, 980, 560, 820, 380, 740],
    },
  },
};

const dashboardMonthlyWorkoutValues = {
  walking: [
    7600, 8200, 7900, 8800, 8400, 9100, 8700, 9300, 8600, 9500,
    9000, 9700, 8900, 9400, 9200, 9900, 9300, 10100, 9600, 9800,
    9400, 10200, 9700, 10300, 9900, 10400, 9600, 10000, 9800, 10100,
  ],
  running: [
    0, 6.8, 0, 0, 9.6, 0, 4.2, 0, 0, 7.8,
    0, 0, 5.4, 0, 10.2, 0, 0, 3.8, 0, 8.4,
    0, 0, 6.2, 0, 0, 11.0, 0, 0, 4.6, 0,
  ],
  cycling: [
    0, 0, 14.6, 0, 0, 6.8, 0, 18.2, 0, 0,
    11.4, 0, 0, 16.8, 0, 0, 7.2, 0, 19.4, 0,
    0, 12.6, 0, 0, 17.8, 0, 0, 8.6, 0, 15.2,
  ],
  swimming: [
    0, 0, 18, 0, 0, 0, 24, 0, 0, 16,
    0, 0, 0, 28, 0, 0, 20, 0, 0, 0,
    32, 0, 0, 14, 0, 0, 0, 26, 0, 0,
  ],
  strength: [
    16, 0, 0, 22, 0, 0, 18, 0, 0, 24,
    0, 0, 20, 0, 0, 26, 0, 0, 18, 0,
    0, 24, 0, 0, 22, 0, 0, 16, 0, 0,
  ],
  others: [
    0, 24, 0, 92, 38, 0, 0, 64, 0, 0,
    130, 46, 0, 0, 84, 0, 58, 0, 0, 112,
    0, 40, 0, 0, 96, 0, 72, 0, 0, 118,
  ],
  yoga: [
    42, 0, 46, 44, 0, 50, 43, 0, 48, 45,
    0, 52, 44, 0, 49, 47, 0, 54, 46, 0,
    50, 48, 0, 53, 45, 0, 51, 47, 0, 49,
  ],
  hiking: [
    0, 0, 0, 0, 4.6, 0, 0, 0, 0, 0,
    14.8, 0, 0, 2.2, 0, 0, 0, 0, 18.6, 0,
    0, 0, 0, 6.4, 0, 0, 0, 0, 12.2, 0,
  ],
  climbing: [
    0, 14, 0, 0, 0, 24, 0, 0, 8, 0,
    0, 0, 18, 0, 0, 0, 28, 0, 0, 12,
    0, 0, 0, 22, 0, 0, 16, 0, 0, 0,
  ],
  pilates: [
    58, 0, 84, 0, 76, 0, 92, 0, 68, 0,
    96, 0, 72, 0, 88, 0, 80, 0, 100, 0,
    74, 0, 90, 0, 82, 0, 94, 0, 70, 0,
  ],
  rowing: [
    0, 1.8, 0, 6.8, 3.4, 0, 0, 5.6, 0, 0,
    10.6, 4.8, 0, 0, 7.2, 0, 2.8, 0, 0, 9.4,
    0, 5.2, 0, 0, 11.8, 0, 3.6, 0, 0, 8.0,
  ],
};

const customActivityColors = {
  yoga: { main: "#d94f8a", bg: "rgba(255, 235, 246, 0.92)" },
  hiking: { main: "#4f8a35", bg: "rgba(237, 249, 229, 0.92)" },
  climbing: { main: "#0ea5b7", bg: "rgba(226, 250, 252, 0.92)" },
  pilates: { main: "#8b5cf6", bg: "rgba(243, 237, 255, 0.92)" },
  rowing: { main: "#2563eb", bg: "rgba(232, 240, 255, 0.92)" },
};

const addActivityDemoData = {
  yoga: {
    label: "Yoga",
    title: "Yoga Trend",
    metrics: "Sessions · Active Time",
    unit: "min",
    color: customActivityColors.yoga.main,
    summary: "5 sessions · 3h 20m",
    cardPrimary: "5 sessions",
    cardSecondary: "3h 20m · mindful",
    tint: customActivityColors.yoga.bg,
    values: {
      weekly: [30, 34, 28, 36, 32, 35, 31],
      monthly: [42, 48, 40, 54, 46, 52, 44],
      yearly: [430, 470, 440, 510, 480, 520, 460, 540, 500, 530, 490, 515],
    },
    max: { weekly: 80, monthly: 180, yearly: 900 },
  },
  hiking: {
    label: "Hiking",
    title: "Hiking Trend",
    metrics: "Distance · Elevation",
    unit: "km",
    color: customActivityColors.hiking.main,
    summary: "18.6 km · 640 m gain",
    cardPrimary: "18.6 km",
    cardSecondary: "640 m gain",
    tint: customActivityColors.hiking.bg,
    values: {
      weekly: [0, 0, 0, 0, 2.2, 7.4, 0],
      monthly: [0, 0, 4.6, 0, 0, 14.8, 2.2],
      yearly: [8, 18, 12, 36, 22, 52, 16, 68, 28, 46, 14, 30],
    },
    max: { weekly: 8, monthly: 24, yearly: 80 },
  },
  climbing: {
    label: "Climbing",
    title: "Climbing Trend",
    metrics: "Sessions · Routes",
    unit: "routes",
    color: customActivityColors.climbing.main,
    summary: "4 sessions · 28 routes",
    cardPrimary: "28 routes",
    cardSecondary: "4 sessions",
    tint: customActivityColors.climbing.bg,
    values: {
      weekly: [0, 5, 0, 8, 0, 0, 6],
      monthly: [0, 14, 0, 24, 8, 0, 18],
      yearly: [18, 46, 24, 62, 34, 58, 20, 74, 42, 66, 28, 54],
    },
    max: { weekly: 10, monthly: 34, yearly: 90 },
  },
  pilates: {
    label: "Pilates",
    title: "Pilates Trend",
    metrics: "Sessions · Active Time",
    unit: "min",
    color: customActivityColors.pilates.main,
    summary: "6 sessions · 4h 10m",
    cardPrimary: "6 sessions",
    cardSecondary: "4h 10m · core",
    tint: customActivityColors.pilates.bg,
    values: {
      weekly: [40, 0, 45, 38, 0, 50, 42],
      monthly: [58, 84, 0, 96, 72, 0, 88],
      yearly: [420, 560, 480, 610, 520, 640, 500, 680, 560, 620, 510, 590],
    },
    max: { weekly: 80, monthly: 200, yearly: 900 },
  },
  rowing: {
    label: "Rowing",
    title: "Rowing Trend",
    metrics: "Distance · Active Time",
    unit: "km",
    color: customActivityColors.rowing.main,
    summary: "12.4 km · 58 min",
    cardPrimary: "12.4 km",
    cardSecondary: "58 min · indoor",
    tint: customActivityColors.rowing.bg,
    values: {
      weekly: [0, 2.8, 1.6, 0, 4.4, 2.2, 0],
      monthly: [1.8, 0, 6.8, 3.4, 0, 10.6, 4.8],
      yearly: [14, 38, 24, 56, 32, 48, 20, 66, 40, 58, 28, 52],
    },
    max: { weekly: 6, monthly: 18, yearly: 70 },
  },
};

function iconForAddedActivity(key) {
  if (key === "hiking") return `<svg viewBox="0 0 24 24"><path d="M5 19 L10 8 L14 15 L17 11 L21 19 Z" /><path d="M10 8 L12 12" /></svg>`;
  if (key === "climbing") return `<svg viewBox="0 0 24 24"><path d="M8 20 L12 4 L16 20" /><path d="M9 12 H15 M7 17 H17" /></svg>`;
  if (key === "pilates") return `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2" /><path d="M8 20 C10 15 14 15 16 20 M7 12 C10 9 14 9 17 12" /></svg>`;
  if (key === "rowing") return `<svg viewBox="0 0 24 24"><path d="M4 17 H20 M7 13 L12 8 L17 13 M12 8 V18" /><path d="M5 20 C9 18 15 18 19 20" /></svg>`;
  return `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.2" /><path d="M8 12 C10 8 14 8 16 12 M7 19 C10 16 14 16 17 19" /></svg>`;
}

function applyAddedActivity(optionKey) {
  const option = addActivityDemoData[optionKey];
  if (!option || !addActivityCard) return;
  const colorConfig = customActivityColors[optionKey] || { main: option.color, bg: option.tint };

  customDashboardActivity = optionKey;
  dashboardWorkoutData.others = {
    ...dashboardWorkoutData.others,
    label: option.label,
    title: option.title,
    metrics: option.metrics,
    unit: option.unit,
    color: colorConfig.main,
    summary: option.summary,
    max: option.max,
    values: option.values,
  };

  addActivityCard.classList.remove("workout-add-activity");
  addActivityCard.classList.add("workout-custom-activity");
  addActivityCard.dataset.customActivity = optionKey;
  addActivityCard.style.setProperty("--custom-activity-color", colorConfig.main);
  addActivityCard.style.setProperty("--custom-activity-bg", colorConfig.bg);
  addActivityCard.style.setProperty("--workout-color", colorConfig.main);
  addActivityCard.style.background = colorConfig.bg;
  addActivityCard.setAttribute("aria-expanded", "false");
  addActivityCard.querySelector(".m2g-workout-card-icon").innerHTML = iconForAddedActivity(optionKey);
  addActivityCard.querySelector(".m2g-workout-card-title").textContent = option.label;
  addActivityCard.querySelector(".m2g-workout-card-details").innerHTML = `<small>${option.cardPrimary}</small><small>${option.cardSecondary}</small>`;
  addActivityPicker?.parentElement?.classList.remove("add-picker-open");

  activeDashboardWorkout = "others";
  renderHealthDashboardView();
}

function toggleAddActivityPicker(open) {
  if (!addActivityPicker || !addActivityCard) return;
  addActivityPicker.parentElement?.classList.toggle("add-picker-open", open);
  addActivityCard.setAttribute("aria-expanded", String(open));
}

function dashboardPoint(value, index, length, maxValue = 20) {
  const left = 96;
  const top = 32;
  const width = 620;
  const height = 140;
  const x = left + (index / Math.max(length - 1, 1)) * width;
  const y = top + (1 - value / maxValue) * height;
  return { x, y };
}

function isChartValue(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function getWorkoutDatasetKey(workoutKey) {
  return workoutKey === "others" && customDashboardActivity ? customDashboardActivity : workoutKey;
}

function getSelectedWorkoutValues(activityData, datasetKey, workout) {
  const directValues = activityData.chartValues?.[datasetKey];
  if (directValues) return directValues;

  if (activeDashboardPeriod === "weekly") {
    const weekNumber = Number(String(dashboardPeriodMenuState.weekly).match(/\d+/)?.[0] || 1);
    const baseValues = workout.values.weekly || workout.values.monthly || [];
    const scale = 0.84 + weekNumber * 0.08;
    const values = baseValues.map((value, index) => {
      if (!isChartValue(value) || value <= 0) return value;
      return Number((value * scale + (index % 2 ? 2 : 0)).toFixed(1));
    });
    return applyDashboardSelectedValueCutoff(values);
  }

  if (activeDashboardPeriod === "monthly") {
    const monthlyValues = dashboardMonthlyWorkoutValues[datasetKey] || workout.values.monthly || [];
    if (dashboardPeriodMenuState.monthly === "June") {
      const values = monthlyValues.slice(0, 2).map((value, index) => {
        if (!isChartValue(value) || value <= 0) return value;
        return Number((value * (index === 0 ? 0.42 : 0.48)).toFixed(1));
      });
      return applyDashboardSelectedValueCutoff(values);
    }
    return applyDashboardSelectedValueCutoff(monthlyValues);
  }

  const yearlyValues = workout.values.yearly || workout.values.monthly || [];
  return yearlyValues.slice(0, activityData.labels?.length || yearlyValues.length);
}

function applyDashboardSelectedValueCutoff(values) {
  const selectedMonth = dashboardPeriodMenuState.monthly || todayForDashboardPeriodMenu.toLocaleString("en-US", { month: "long" });
  if (!isSelectedCurrentDashboardMonth(selectedMonth) || activeDashboardPeriod === "yearly") return values;
  const availableDays =
    activeDashboardPeriod === "weekly"
      ? getAvailableDashboardDayCount(selectedMonth, dashboardPeriodMenuState.weekly)
      : getAvailableDashboardDayCount(selectedMonth);
  return values.map((value, index) => (index < availableDays ? value : null));
}

function isWorkoutEntryInPast(periodKey, label, index) {
  const today = dashboardDemoToday;
  if (periodKey === "weekly") {
    const todayIndex = (today.getDay() + 6) % 7;
    return index < todayIndex;
  }
  if (periodKey === "monthly") {
    const day = Number(String(label).match(/\d+/)?.[0] || index + 1);
    return day < today.getDate();
  }
  if (periodKey === "yearly") {
    return index <= today.getMonth();
  }
  return true;
}

function formatWorkoutCalendarValue(value, workout) {
  if (!isChartValue(value) || value <= 0) return "";
  if (workout.unit === "steps") {
    return value >= 1000 ? `${Math.round(value / 1000)}k` : String(value);
  }
  if (workout.unit === "km") return `${Number(value).toFixed(value % 1 ? 1 : 0)}km`;
  if (workout.unit === "min") return `${Math.round(value)}m`;
  return `${Math.round(value)}${workout.unit ? workout.unit[0] : ""}`;
}

function buildWorkoutPeriodEntries(workoutKey, periodKey, periodData) {
  const workout = dashboardWorkoutData[workoutKey] || dashboardWorkoutData.walking;
  const datasetKey = getWorkoutDatasetKey(workoutKey);
  const activityData = getActiveDashboardActivityData();
  const selectedValues = getSelectedWorkoutValues(activityData, datasetKey, workout);

  if (selectedValues?.length) {
    const labels = activityData.labels || selectedValues.map((_, index) => String(index + 1));
    const axisLabels = activityData.axisLabels || labels;
    return labels.map((label, index) => {
      const rawValue = selectedValues[index];
      const value = isChartValue(rawValue) ? rawValue : null;
      const active = isChartValue(rawValue) && rawValue > 0;
      return {
        label,
        axisLabel: axisLabels[index] ?? label,
        value,
        active,
        calendarText: active ? formatWorkoutCalendarValue(rawValue, workout) : "",
        isFuture: rawValue === null,
      };
    });
  }

  const monthlyValues = dashboardMonthlyWorkoutValues[datasetKey] || dashboardMonthlyWorkoutValues.others;
  const rawValues = periodKey === "monthly" ? monthlyValues : workout.values[periodKey] || workout.values.monthly;
  const axisDays = new Set([1, 5, 10, 15, 20, 25, 30]);
  const labels =
    periodKey === "monthly"
      ? Array.from({ length: rawValues.length }, (_, index) => String(index + 1))
      : periodData.labels;

  return labels.map((label, index) => {
    const rawValue = rawValues[index];
    const isPast = isWorkoutEntryInPast(periodKey, label, index);
    const value = isPast && isChartValue(rawValue) ? rawValue : null;
    const active = isPast && isChartValue(rawValue) && rawValue > 0;
    const calendarText = active ? formatWorkoutCalendarValue(rawValue, workout) : "";
    let axisLabel = label;
    if (periodKey === "monthly") {
      const day = index + 1;
      axisLabel = axisDays.has(day) ? `May ${day}` : "";
    }
    return { label, axisLabel, value, active, calendarText, isFuture: !isPast };
  });
}

function buildSmoothPath(values, maxValue) {
  const points = values.map((value, index) => dashboardPoint(value, index, values.length, maxValue));
  if (!points.length) return "";
  if (points.length === 1) return `M${points[0].x} ${points[0].y}`;
  let path = `M${points[0].x} ${points[0].y}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const controlOffset = (next.x - current.x) * 0.42;
    path += ` C${current.x + controlOffset} ${current.y} ${next.x - controlOffset} ${next.y} ${next.x} ${next.y}`;
  }
  return path;
}

function buildAreaPath(values, maxValue) {
  const line = buildSmoothPath(values, maxValue);
  const points = values.map((value, index) => dashboardPoint(value, index, values.length, maxValue));
  if (!points.length) return "";
  const baseY = 172;
  return `${line} L${points[points.length - 1].x} ${baseY} L${points[0].x} ${baseY} Z`;
}

function getWorkoutChartPoints(values, maxValue) {
  return values
    .map((value, index) => (isChartValue(value) ? dashboardPoint(Number(value), index, values.length, maxValue) : null))
    .filter(Boolean);
}

function buildWorkoutLinePath(values, maxValue) {
  const points = getWorkoutChartPoints(values, maxValue);
  if (!points.length) return "";
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");
}

function buildWorkoutAreaPath(values, maxValue) {
  const points = getWorkoutChartPoints(values, maxValue);
  if (!points.length) return "";
  const baselineY = 172;
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");
  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  return `${linePath} L${lastPoint.x} ${baselineY} L${firstPoint.x} ${baselineY} Z`;
}

function colorToRgba(color, alpha) {
  const hex = String(color || "").replace("#", "").trim();
  if (/^[0-9a-f]{6}$/i.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return color || `rgba(38, 190, 130, ${alpha})`;
}

function renderWorkoutCalendar(workoutKey, periodKey, entries) {
  if (!dashboardActivityCalendar) return;

  const workout = dashboardWorkoutData[workoutKey] || dashboardWorkoutData.walking;
  let cells = "";

  if (periodKey === "weekly") {
    cells = entries
      .map((entry) => {
        return `<span class="m2g-calendar-cell ${entry.active ? "is-active" : ""} ${entry.isFuture ? "is-future" : ""}"><b class="m2g-calendar-date">${entry.label}</b></span>`;
      })
      .join("");
  } else if (periodKey === "yearly") {
    const maxValue = Math.max(...entries.map((entry) => (entry.active ? Number(entry.value) : 0)), 1);
    cells = entries
      .map((entry) => {
        const strong = entry.active && Number(entry.value) >= maxValue * 0.58;
        return `<span class="m2g-calendar-cell ${strong ? "is-active" : ""} ${entry.isFuture ? "is-future" : ""}"><b class="m2g-calendar-date">${entry.label}</b></span>`;
      })
      .join("");
  } else {
    cells = entries
      .map((entry) => {
        return `<span class="m2g-calendar-cell ${entry.active ? "is-active" : ""} ${entry.isFuture ? "is-future" : ""}"><b class="m2g-calendar-date">${entry.label}</b></span>`;
      })
      .join("");
  }

  dashboardActivityCalendar.dataset.workout = workoutKey;
  dashboardActivityCalendar.classList.add("m2g-workout-calendar");
  dashboardActivityCalendar.innerHTML = `
    <strong class="m2g-calendar-label">Workout Days</strong>
    <div class="calendar-cells m2g-calendar-cells calendar-${periodKey}" style="--workout-color: ${workout.color};">${cells}</div>
  `;
}

function renderDashboardChart(periodData) {
  if (!dashboardChartAreas || !dashboardChartLines || !dashboardChartPoints || !dashboardChartXLabels || !dashboardChartYAxis || !dashboardChartGuides) return;

  const workout = dashboardWorkoutData[activeDashboardWorkout] || dashboardWorkoutData.walking;
  const datasetKey = getWorkoutDatasetKey(activeDashboardWorkout);
  const activityData = getActiveDashboardActivityData();
  const entries = buildWorkoutPeriodEntries(activeDashboardWorkout, activeDashboardPeriod, periodData);
  const values = entries.map((entry) => entry.value);
  const validValues = values.filter(isChartValue).map(Number);
  const hasSelectedValues = Boolean(activityData.chartValues?.[datasetKey]);
  const maxValue = hasSelectedValues
    ? Math.max(1, Math.ceil(Math.max(...validValues, 1) * 1.18))
    : workout.max[activeDashboardPeriod] || workout.max.monthly;

  dashboardWorkoutCards.forEach((card) => {
    const isSelected = card.dataset.workoutType === activeDashboardWorkout;
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  if (dashboardWorkoutTitle) dashboardWorkoutTitle.textContent = workout.title;
  if (dashboardWorkoutKicker) dashboardWorkoutKicker.textContent = workout.label;
  if (dashboardWorkoutMetrics) dashboardWorkoutMetrics.textContent = workout.metrics;
  if (dashboardChartUnit) {
    dashboardChartUnit.textContent = workout.unit;
    dashboardChartUnit.setAttribute("x", "86");
    dashboardChartUnit.setAttribute("text-anchor", "end");
  }

  const linePath = buildWorkoutLinePath(values, maxValue);
  const areaPath = buildWorkoutAreaPath(values, maxValue);

  const areaFillColors = {
    walking: "rgba(38, 190, 130, 0.30)",
    running: "rgba(249, 115, 77, 0.30)",
    cycling: "rgba(56, 174, 222, 0.30)",
    swimming: "rgba(132, 115, 255, 0.30)",
    strength: "rgba(214, 163, 51, 0.30)",
    others: "rgba(35, 170, 160, 0.30)",
  };
  const areaFill =
    activeDashboardWorkout === "others" && customDashboardActivity
      ? colorToRgba(workout.color, 0.30)
      : areaFillColors[activeDashboardWorkout] || "rgba(38, 190, 130, 0.30)";
  dashboardChartAreas.innerHTML = `
    <path class="chart-area workout-area-path m2g-chart-area-fill" d="${areaPath}" style="fill: ${areaFill}; fill-opacity: 1;"></path>
  `;
  dashboardChartLines.innerHTML = `<path class="chart-line ${workout.className} workout-line-path" d="${linePath}" style="stroke: ${workout.color}; fill: none;"></path>`;
  dashboardChartPoints.innerHTML = values
    .map((value, index) => {
      if (!isChartValue(value)) return "";
      const { x, y } = dashboardPoint(Number(value), index, values.length, maxValue);
      return `<circle class="chart-point ${workout.className}" cx="${x}" cy="${y}" r="2.4" style="r: 2.4px; fill: ${workout.color}; stroke: ${workout.color};"></circle>`;
    })
    .join("");

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((ratio) => Math.round(maxValue * ratio));
  dashboardChartYAxis.innerHTML = ticks
    .map((tick) => {
      const { y } = dashboardPoint(tick, 0, 2, maxValue);
      return `<line class="chart-grid-line" x1="96" x2="716" y1="${y}" y2="${y}"></line><text x="86" y="${y + 4}" text-anchor="end">${tick}</text>`;
    })
    .join("");

  dashboardChartGuides.innerHTML = "";

  dashboardChartXLabels.innerHTML = entries
    .map((entry, index) => {
      if (!entry.axisLabel) return "";
      const { x } = dashboardPoint(0, index, entries.length, maxValue);
      return `<text x="${x}" y="196">${entry.axisLabel}</text>`;
    })
    .join("");

  if (dashboardChartCaption) {
    const detailSummary = activityData.workoutCards?.[datasetKey] || activityData.workoutCards?.[activeDashboardWorkout];
    dashboardChartCaption.textContent = detailSummary ? detailSummary.join(" · ") : workout.summary;
  }
  renderWorkoutCalendar(activeDashboardWorkout, activeDashboardPeriod, entries);
}

function renderHealthDashboardView() {
  const periodData = dashboardPeriodData[activeDashboardPeriod] || dashboardPeriodData.monthly;
  const activityPeriodData = getActiveDashboardActivityData();
  const isActivityLocked = !walletConnected;

  healthDashboard?.classList.toggle("activity-data-locked", isActivityLocked);
  document.querySelector("#activity .donation-receipt-dashboard")?.classList.toggle("donation-data-locked", isActivityLocked);

  dashboardPeriodButtons.forEach((button) => {
    const isActive = button.dataset.dashboardPeriod === activeDashboardPeriod;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (isActivityLocked) return;

  dashboardSummaryValues.forEach((node) => {
    const key = node.dataset.dashboardSummary;
    if (activityPeriodData.summary[key]) node.textContent = activityPeriodData.summary[key];
  });

  dashboardPeriodLabels.forEach((node) => {
    node.textContent = activityPeriodData.label;
  });

  dashboardRingNodes.forEach((ring) => {
    const value = activityPeriodData.rings[ring.dataset.ring] ?? 0;
    const radius = Number(ring.getAttribute("r"));
    const circumference = Math.round(2 * Math.PI * radius);
    ring.style.strokeDasharray = `${Math.round((value / 100) * circumference)} ${circumference}`;
  });

  if (dashboardRingTotal) dashboardRingTotal.textContent = `${activityPeriodData.rings.total}%`;
  if (dashboardRingLabel) dashboardRingLabel.textContent = `${activityPeriodData.label} activity goal`;
  dashboardRingStats.forEach((node) => {
    const key = node.dataset.ringStat;
    node.textContent = `${activityPeriodData.rings[key]}%`;
  });

  updateDashboardWorkoutCardDetails(activityPeriodData);
  renderDashboardChart(activityPeriodData);
  if (dashboardChartPeriodTitle) dashboardChartPeriodTitle.textContent = activityPeriodData.title;

}

function renderDashboardState() {
  renderHealthDashboardView();

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

const addNgoDemoData = {
  medical: {
    name: "Medical Relief",
    program: "Medical Relief Mission",
    meta: "2 receipts · $18",
    donation: "$18",
    match: "$36",
    icon: "+",
    className: "receipt-added-medical",
    bg: "linear-gradient(135deg, rgba(255, 238, 242, 0.96), rgba(255, 255, 255, 0.86))",
    accent: "#d85870",
  },
  children: {
    name: "Save the Children",
    program: "Save the Children Fund",
    meta: "1 receipt · $16",
    donation: "$16",
    match: "$32",
    icon: "S",
    className: "receipt-added-children",
    bg: "linear-gradient(135deg, rgba(255, 244, 221, 0.96), rgba(255, 255, 255, 0.86))",
    accent: "#d9862c",
  },
  doctors: {
    name: "Doctors Without Borders",
    program: "Doctors Without Borders Aid",
    meta: "1 receipt · $22",
    donation: "$22",
    match: "$44",
    icon: "+",
    className: "receipt-added-doctors",
    bg: "linear-gradient(135deg, rgba(232, 244, 255, 0.96), rgba(255, 255, 255, 0.86))",
    accent: "#2878c8",
  },
  vision: {
    name: "World Vision",
    program: "World Vision Support",
    meta: "2 receipts · $20",
    donation: "$20",
    match: "$40",
    icon: "W",
    className: "receipt-added-vision",
    bg: "linear-gradient(135deg, rgba(236, 247, 232, 0.96), rgba(255, 255, 255, 0.86))",
    accent: "#6a9d3f",
  },
};

const donationNgoFilterAliases = {
  unicef: ["unicef", "children-first", "education", "children"],
  redcross: ["redcross", "red-cross", "disaster-relief", "emergency-aid", "disaster", "emergency"],
  greenpeace: ["greenpeace", "climate-action", "climate"],
  water: ["water", "cleanwater", "one-drop", "clean-water"],
  refugee: ["refugee", "refugee-support", "unhcr", "refugee-aid"],
  medical: ["medical", "medical-relief"],
  children: ["children", "save-children", "save-the-children", "children-first"],
  doctors: ["doctors", "doctors-without-borders"],
  vision: ["vision", "world-vision"],
};

let activeDonationNgoFilter = "all";
let activeDonationReceiptData = null;
const submittedDonationHistoryTags = ["unicef", "children-first", "education", "children", "redcross", "red-cross", "disaster-relief", "emergency-aid", "disaster", "emergency", "greenpeace", "climate-action", "climate"];

const donationHistoryRowsByPeriod = {
  weekly: [
    { tags: "unicef children-first education children", program: "Children First Run Match", date: "Jun 17", donation: "$22", match: "$44", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Disaster Recovery Cycling Match", date: "Jun 16", donation: "$27", match: "$54", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Greenpeace Morning Steps", date: "Jun 15", donation: "$31", match: "$62", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
  ],
  monthly: [
    { tags: "unicef children-first education children", program: "Children First Run Match", date: "Jun 17", donation: "$22", match: "$44", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Disaster Recovery Cycling Match", date: "Jun 16", donation: "$27", match: "$54", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Greenpeace Morning Steps", date: "Jun 15", donation: "$31", match: "$62", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Education Walk Donation Route", date: "Jun 13", donation: "$18", match: "$36", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Red Cross Evening Ride", date: "Jun 12", donation: "$23", match: "$46", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Climate Action Swim Match", date: "Jun 11", donation: "$26", match: "$52", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Morning Miles for Children First", date: "Jun 10", donation: "$19", match: "$38", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Red Cross Recovery Walk", date: "Jun 09", donation: "$25", match: "$50", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Climate Ride Match", date: "Jun 08", donation: "$29", match: "$58", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Clean Water Step Challenge", date: "Jun 06", donation: "$16", match: "$32", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Emergency Relief Strength Session", date: "Jun 04", donation: "$21", match: "$42", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Green Commute Cycling Match", date: "Jun 03", donation: "$24", match: "$48", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Morning Steps for Children First", date: "May 27", donation: "$18", match: "$36", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Strength Sessions for Disaster Relief", date: "May 25", donation: "$24", match: "$48", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Weekend Cycling for Climate Action", date: "May 24", donation: "$22", match: "$44", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef education children-first children", program: "14-Day Run Streak for Education", date: "May 22", donation: "$21", match: "$42", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Bike Commute Carbon Cut Challenge", date: "May 20", donation: "$19", match: "$38", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Emergency Aid Step Sprint", date: "May 19", donation: "$26", match: "$52", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "School Miles for Children First", date: "May 17", donation: "$20", match: "-", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
  ],
  yearly: [
    { tags: "unicef children-first education children", program: "Children First Run Match", date: "Jun 17", donation: "$22", match: "$44", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Disaster Recovery Cycling Match", date: "Jun 16", donation: "$27", match: "$54", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Greenpeace Morning Steps", date: "Jun 15", donation: "$31", match: "$62", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Education Walk Donation Route", date: "Jun 13", donation: "$18", match: "$36", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Red Cross Evening Ride", date: "Jun 12", donation: "$23", match: "$46", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Climate Action Swim Match", date: "Jun 11", donation: "$26", match: "$52", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Morning Miles for Children First", date: "Jun 10", donation: "$19", match: "$38", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Red Cross Recovery Walk", date: "Jun 09", donation: "$25", match: "$50", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Climate Ride Match", date: "Jun 08", donation: "$29", match: "$58", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Clean Water Step Challenge", date: "Jun 06", donation: "$16", match: "$32", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Emergency Relief Strength Session", date: "Jun 04", donation: "$21", match: "$42", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Green Commute Cycling Match", date: "Jun 03", donation: "$24", match: "$48", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Morning Steps for Children First", date: "May 27", donation: "$18", match: "$36", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster emergency disaster-relief", program: "Strength Sessions for Disaster Relief", date: "May 25", donation: "$24", match: "$48", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "greenpeace climate climate-action", program: "Weekend Cycling for Climate Action", date: "May 24", donation: "$22", match: "$44", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "unicef education children-first children", program: "14-Day Run Streak for Education", date: "May 22", donation: "$21", match: "$42", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Bike Commute Carbon Cut Challenge", date: "May 20", donation: "$19", match: "$38", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Emergency Aid Step Sprint", date: "May 19", donation: "$26", match: "$52", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "School Miles for Children First", date: "May 17", donation: "$20", match: "-", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Green Trails Cycling Challenge", date: "May 15", donation: "$23", match: "$46", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster-relief disaster", program: "Disaster Relief Morning Circuit", date: "May 14", donation: "$28", match: "$56", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "After-School Walk Donation Run", date: "May 12", donation: "$13", match: "$26", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Climate Action Long Ride", date: "May 10", donation: "$32", match: "-", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "redcross red-cross emergency-aid emergency", program: "Red Cross Emergency Ride", date: "May 09", donation: "$18", match: "-", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Move Together Global Challenge", date: "May 07", donation: "$27", match: "$54", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
    { tags: "greenpeace climate-action climate", program: "Low-Carbon Morning Steps", date: "May 05", donation: "$11", match: "-", ngo: "Greenpeace", ngoClass: "history-greenpeace", status: "Receipt Issued" },
    { tags: "redcross red-cross disaster-relief disaster", program: "Disaster Relief Strength Streak", date: "May 04", donation: "$22", match: "-", ngo: "Red Cross", ngoClass: "history-redcross", status: "Receipt Issued" },
    { tags: "unicef children-first education children", program: "Children First Weekend Steps", date: "May 02", donation: "$14", match: "-", ngo: "UNICEF", ngoClass: "history-unicef", status: "Receipt Issued" },
  ],
};

const addedDonationHistoryRowsByPeriod = {
  weekly: [],
  monthly: [],
  yearly: [],
};

function toggleAddNgoPicker(open) {
  const addNgoCard = document.querySelector("[data-add-ngo-card]");
  const picker = document.querySelector("[data-ngo-add-picker]");
  if (!addNgoCard || !picker) return;
  const shouldOpen = Boolean(open);
  picker.closest(".receipt-wallet-card")?.classList.toggle("ngo-picker-open", shouldOpen);
  addNgoCard.setAttribute("aria-expanded", String(shouldOpen));
}

function createDonationHistoryRow(rowData) {
  const row = document.createElement("div");
  row.dataset.ngoHistoryTags = rowData.tags;
  if (rowData.addedNgoHistory) row.dataset.addedNgoHistory = rowData.addedNgoHistory;
  if (rowData.addedNgoPrimary) row.dataset.addedNgoPrimary = rowData.addedNgoPrimary;
  row.innerHTML = `
    <span>${rowData.program}</span>
    <span>${rowData.date}</span>
    <span>${rowData.donation}</span>
    <span>${rowData.match}</span>
    <span class="history-ngo ${rowData.ngoClass || ""}">${rowData.ngo}</span>
    <b>${rowData.status}</b>
  `;
  return row;
}

function renderDonationHistoryRows() {
  const table = document.querySelector("#activity .donation-history-table");
  if (!table) return;
  table.querySelectorAll(":scope > div:not(.history-head)").forEach((row) => row.remove());
  const baseRows = donationHistoryRowsByPeriod[activeDashboardPeriod] || donationHistoryRowsByPeriod.monthly;
  baseRows
    .filter((rowData) => submittedDonationHistoryTags.some((tag) => rowData.tags.includes(tag)))
    .forEach((rowData) => table.appendChild(createDonationHistoryRow(rowData)));
  setDonationHistoryFilter(activeDonationNgoFilter);
}

function ensureAddedNgoHistoryRow(optionKey, option) {
  if (addedDonationHistoryRowsByPeriod.yearly.some((row) => row.addedNgoHistory === optionKey)) return;
  const optionTag = option.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const yearlyRows = [
    {
      program: optionKey === "medical" ? "Hiking for Medical Relief" : `${option.name} Morning Movement Challenge`,
      date: "May 27",
      donation: option.donation,
      match: option.match,
      status: "Receipt Issued",
    },
    {
      program: optionKey === "doctors" ? "Run Miles for Mobile Clinics" : `${option.name} Weekend Steps Match`,
      date: "May 20",
      donation: "$16",
      match: "$32",
      status: "Receipt Issued",
    },
    {
      program: optionKey === "children" ? "Morning Steps for Children First" : `${option.name} Global Support Streak`,
      date: "May 11",
      donation: "$19",
      match: "$38",
      status: "Receipt Issued",
    },
  ];

  const normalizedRows = yearlyRows.map((historyRow, index) => ({
    ...historyRow,
    tags: `${optionKey} ${optionTag}`,
    ngo: option.name,
    ngoClass: "",
    addedNgoHistory: optionKey,
    addedNgoPrimary: index === 0 ? optionKey : "",
  }));
  addedDonationHistoryRowsByPeriod.weekly = [normalizedRows[0]];
  addedDonationHistoryRowsByPeriod.monthly = normalizedRows.slice(0, 2);
  addedDonationHistoryRowsByPeriod.yearly = normalizedRows;
  renderDonationHistoryRows();
}

function setDonationHistoryFilter(filterKey = "all") {
  activeDonationNgoFilter = filterKey;
  const aliases = donationNgoFilterAliases[filterKey] || [filterKey];
  const showAll = filterKey === "all";
  const table = document.querySelector("#activity .donation-history-table:not(.lucky-drop-history-table)");
  document.querySelectorAll("#activity [data-ngo-filter-card]").forEach((card) => {
    card.classList.toggle("selected", !showAll && card.dataset.ngoFilterCard === filterKey);
  });
  const rows = Array.from(document.querySelectorAll("#activity .donation-history-table:not(.lucky-drop-history-table) > div:not(.history-head):not(.history-empty-state)"));
  rows.forEach((row) => {
    const tags = (row.dataset.ngoHistoryTags || row.textContent || "").toLowerCase();
    row.hidden = !showAll && !aliases.some((alias) => tags.includes(alias));
  });
  let emptyState = table?.querySelector(".history-empty-state");
  if (table && !emptyState) {
    emptyState = document.createElement("div");
    emptyState.className = "history-empty-state";
    emptyState.textContent = "No issued receipts yet. Complete tax setup to enable receipt issuance.";
    table.appendChild(emptyState);
  }
  if (emptyState) {
    emptyState.hidden = rows.some((row) => !row.hidden);
  }
  const resetButton = document.querySelector("[data-ngo-filter-reset]");
  if (resetButton) resetButton.hidden = showAll;
  toggleAddNgoPicker(false);
}

function parseDonationMoney(value) {
  const amount = Number(String(value || "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(amount) ? amount : 0;
}

function formatDonationMoney(amount) {
  if (!Number.isFinite(amount)) return "$0";
  return Number.isInteger(amount) ? `$${amount}` : `$${amount.toFixed(2)}`;
}

function buildDonationReceiptId(dateText, row) {
  const monthIndex = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12",
  };
  const [, monthRaw = "May", dayRaw = "01"] = String(dateText || "").match(/^([A-Za-z]+)\s+(\d{1,2})/) || [];
  const month = monthIndex[monthRaw.slice(0, 3).toLowerCase()] || "05";
  const day = String(dayRaw).padStart(2, "0");
  const rows = Array.from(document.querySelectorAll("#activity .donation-history-table > div:not(.history-head)"));
  const rowNumber = String(Math.max(1, rows.indexOf(row) + 1)).padStart(3, "0");
  return `M2G-RCPT-2026-${month}${day}-${rowNumber}`;
}

function getDonationHistoryReceiptData(row) {
  const cells = row ? Array.from(row.querySelectorAll("span")) : [];
  const program = cells[0]?.textContent.trim() || "Move2Give Challenge";
  const date = cells[1]?.textContent.trim() || "May 27";
  const myDonation = cells[2]?.textContent.trim() || "$0";
  const sponsorMatch = cells[3]?.textContent.trim() || "$0";
  const ngo = cells[4]?.textContent.trim() || "Move2Give partner";
  const status = row?.querySelector("b")?.textContent.trim() || "Receipt Issued";
  const total = parseDonationMoney(myDonation) + parseDonationMoney(sponsorMatch);
  return {
    program,
    date,
    myDonation,
    sponsorMatch,
    ngo,
    status,
    total: formatDonationMoney(total),
    receiptId: buildDonationReceiptId(date, row),
  };
}

function closeDonationReceiptPreview() {
  if (!donationReceiptPreviewModal) return;
  donationReceiptPreviewModal.hidden = true;
}

function openDonationReceiptPreview(row) {
  if (!donationReceiptPreviewModal || !row) return;
  const receipt = getDonationHistoryReceiptData(row);
  activeDonationReceiptData = receipt;
  if (donationReceiptPreviewId) donationReceiptPreviewId.textContent = receipt.receiptId;
  if (donationReceiptPreviewProgram) donationReceiptPreviewProgram.textContent = receipt.program;
  if (donationReceiptPreviewNgo) donationReceiptPreviewNgo.textContent = receipt.ngo;
  if (donationReceiptPreviewDate) donationReceiptPreviewDate.textContent = receipt.date;
  if (donationReceiptPreviewMyDonation) donationReceiptPreviewMyDonation.textContent = receipt.myDonation;
  if (donationReceiptPreviewSponsorMatch) donationReceiptPreviewSponsorMatch.textContent = receipt.sponsorMatch;
  if (donationReceiptPreviewTotal) donationReceiptPreviewTotal.textContent = receipt.total;
  if (donationReceiptPreviewStatus) donationReceiptPreviewStatus.textContent = receipt.status;
  if (donationReceiptPreviewVerification) donationReceiptPreviewVerification.textContent = "Verified movement · Receipt issued";
  donationReceiptPreviewModal.hidden = false;
}

function downloadDonationReceiptPreview() {
  if (!activeDonationReceiptData) return;
  const receipt = activeDonationReceiptData;
  const lines = [
    "Donation Receipt",
    "Move2Give Demo Receipt",
    "",
    `Receipt ID: ${receipt.receiptId}`,
    `Program / Challenge: ${receipt.program}`,
    `NGO / Cause: ${receipt.ngo}`,
    `Date: ${receipt.date}`,
    `My Donation: ${receipt.myDonation}`,
    `Sponsor Match: ${receipt.sponsorMatch}`,
    `Total Donation: ${receipt.total}`,
    `Receipt Status: ${receipt.status}`,
    "Verification Note: Verified movement · Receipt issued",
    "",
    "Demo receipt preview — downloadable for tax-benefit documentation demo.",
    "This is not an official tax document.",
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${receipt.receiptId}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function applyAddedNgo(optionKey) {
  const option = addNgoDemoData[optionKey];
  const addNgoCard = document.querySelector("[data-add-ngo-card]");
  if (!option || !addNgoCard) return;

  addNgoCard.className = `receipt-card receipt-added-ngo ${option.className}`;
  addNgoCard.setAttribute("role", "button");
  addNgoCard.setAttribute("tabindex", "0");
  addNgoCard.removeAttribute("aria-haspopup");
  addNgoCard.removeAttribute("aria-expanded");
  addNgoCard.dataset.ngoFilterCard = optionKey;
  addNgoCard.dataset.addedNgoLabel = option.name;
  addNgoCard.style.setProperty("--added-ngo-bg", option.bg);
  addNgoCard.style.setProperty("--added-ngo-accent", option.accent);
  addNgoCard.innerHTML = `
    <div class="donation-wallet-card-logo-zone"><span class="receipt-logo donation-wallet-card-logo added-ngo-receipt">${option.icon}</span></div>
    <div class="donation-wallet-card-text-zone"><b class="donation-wallet-card-title">${option.name}</b><small class="donation-wallet-card-detail">${option.meta}</small></div>
  `;
  ensureAddedNgoHistoryRow(optionKey, option);
  toggleAddNgoPicker(false);
  setDonationHistoryFilter(optionKey);
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
    historyPayoutLabel.textContent = isCompleted ? "Matched donation" : "Contribution donated";
    historyPayout.textContent = formatRialo(detail.finalPayout);
  }
  if (historyDonationRow && historyDonation) {
    historyDonationRow.hidden = !isCompleted;
    historyDonation.textContent = formatRialo(detail.donationFromPayout);
  }
  if (historyNetRow && historyNet) {
    historyNetRow.hidden = !isCompleted;
    historyNet.textContent = isCompleted ? "Issued" : "Pending";
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
    title: "Connect Samsung Health to Move2Give?",
    subtitle: "Move2Give will use selected Samsung Health data for private challenge verification.",
    permissions: ["Read activity type", "Read distance", "Read duration", "Read activity timestamp"],
    note: "Route details and full activity logs are processed privately and never published on-chain.",
    action: "Allow Samsung Health",
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

const taxSetupState = {
  selected: "unicef",
  editing: false,
  submitted: {
    unicef: true,
    redcross: true,
    greenpeace: true,
    onedrop: false,
    unhcr: false,
    add: false,
  },
  profiles: {
    unicef: { name: "Bruce Lee", ssn: "XXX-XX-1234", country: "United States", region: "CA", address: "100 Mission St, San Francisco", postal: "94105" },
    redcross: { name: "Bruce Lee", ssn: "XXX-XX-1234", country: "United States", region: "CA", address: "100 Mission St, San Francisco", postal: "94105" },
    greenpeace: { name: "Bruce Lee", ssn: "XXX-XX-1234", country: "United States", region: "CA", address: "100 Mission St, San Francisco", postal: "94105" },
    onedrop: { name: "Bruce Lee", ssn: "", country: "", region: "", address: "", postal: "" },
    unhcr: { name: "Bruce Lee", ssn: "", country: "", region: "", address: "", postal: "" },
    add: { name: "Bruce Lee", ssn: "", country: "", region: "", address: "", postal: "" },
  },
};

const challengeDetails = {
  "run-hope": {
    title: "Children's Education Run",
    status: "Live",
    joinedCount: 10,
    maxParticipants: 10,
    entryAmount: 20,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Global Brand Sponsor",
    rewardRule: "Contribution Ranking",
    startDate: "May 1, 2026",
    endDate: "May 14, 2026",
    days: "14 days",
    donationTarget: "Children First",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Children's education",
    tieBreakers: ["Streak days", "Distance", "Active calories"],
    condition: { if: ["Run ??3 km", "EVERY day", "FOR 14 days"], then: "Maintain streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Health", processing: "Encrypted input - TEE verification", output: "Condition result only" },
    privacy: { hidden: "GPS route ??Raw heart-rate", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "run-100": {
    title: "Clean Water Walk Challenge",
    status: "Impact Campaigns",
    joinedCount: 4,
    maxParticipants: 8,
    entryAmount: 25,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Global Brand Sponsor",
    rewardRule: "Sponsor Match Challenge",
    startDate: "May 21, 2026",
    endDate: "May 27, 2026",
    days: "7 days",
    donationTarget: "Disaster Relief",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Disaster relief",
    tieBreakers: ["Total distance", "Active days", "Active calories"],
    condition: { if: ["Distance ??100 km", "WITHIN 7 days"], then: "Unlock sponsor match", else: "Contribution donated; no sponsor match" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Team progress result only" },
    privacy: { hidden: "GPS route ??Raw heart-rate ??Full workout logs", public: "Team progress ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match allocated to NGO" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "night-5k": {
    title: "Local Community Food Support Challenge",
    status: "Impact Campaigns",
    joinedCount: 6,
    maxParticipants: 10,
    entryAmount: 18,
    poolAmount: 180,
    basePool: 180,
    sponsorBoost: 180,
    totalPool: 360,
    sponsorName: "Community Cafe Sponsor",
    rewardRule: "Completion Match Challenge",
    startDate: "June 1, 2026",
    endDate: "June 7, 2026",
    days: "7 days",
    donationTarget: "Children First",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Night safety and youth support",
    tieBreakers: ["Completion days", "Pace", "Active calories"],
    condition: { if: ["Run ??5 km", "AFTER 7 PM", "WITHIN 7 days"], then: "Complete night run", else: "Contribution donated; no sponsor match" },
    verification: { source: "Strava / Apple Health", processing: "Encrypted input - TEE verification", output: "Night run result only" },
    privacy: { hidden: "Exact route ??Pace trace ??Raw heart-rate", public: "Completed yes/no - Impact band" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "morning-run": {
    title: "Paris Seine Charity Run",
    status: "Impact Campaigns",
    joinedCount: 9,
    maxParticipants: 12,
    entryAmount: 15,
    poolAmount: 180,
    basePool: 180,
    sponsorBoost: 180,
    totalPool: 360,
    sponsorName: "Local Gym Sponsor",
    rewardRule: "Top Impact Contributors",
    startDate: "May 25, 2026",
    endDate: "June 3, 2026",
    days: "10 days",
    donationTarget: "Climate Action",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Climate action",
    tieBreakers: ["Morning streak", "Early start time", "Distance"],
    condition: { if: ["Run ??30 min", "BEFORE 9 AM", "FOR 10 days"], then: "Maintain morning streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Health / Strava", processing: "Encrypted input - TEE verification", output: "Morning condition result only" },
    privacy: { hidden: "Start location ??GPS route ??Raw heart-rate", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "swim-water": {
    title: "Ocean Cleanup Swim Challenge",
    status: "Impact Campaigns",
    joinedCount: 5,
    maxParticipants: 8,
    entryAmount: 20,
    poolAmount: 160,
    basePool: 160,
    sponsorBoost: 160,
    totalPool: 320,
    sponsorName: "Community Cafe Sponsor",
    rewardRule: "Contribution Ranking",
    startDate: "May 22, 2026",
    endDate: "May 28, 2026",
    days: "7 days",
    donationTarget: "Disaster Relief",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Clean water support",
    tieBreakers: ["Swim streak", "Distance", "Active minutes"],
    condition: { if: ["Swim ??800m", "OR 30 min", "EVERY day"], then: "Maintain swim streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input - TEE verification", output: "Swim completion result only" },
    privacy: { hidden: "Lap details ??Raw heart-rate", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "pool-5k": {
    title: "Clean Water Swim Week",
    status: "Impact Campaigns",
    joinedCount: 12,
    maxParticipants: 20,
    entryAmount: 10,
    poolAmount: 200,
    basePool: 200,
    sponsorBoost: 200,
    totalPool: 400,
    sponsorName: "Local Gym Sponsor",
    rewardRule: "Completion Match Challenge",
    startDate: "May 29, 2026",
    endDate: "June 4, 2026",
    days: "7 days",
    donationTarget: "Children First",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Youth swim access",
    tieBreakers: ["Total swim", "Active days", "Pace score"],
    condition: { if: ["Swim >= 5 km", "WITHIN 7 days"], then: "Complete mission", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input - TEE verification", output: "Completion result only" },
    privacy: { hidden: "Lap details - Heart-rate graph", public: "Completed yes/no - Impact band" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "morning-swim": {
    title: "Disability Sports Swim Support",
    status: "Impact Campaigns",
    joinedCount: 7,
    maxParticipants: 12,
    entryAmount: 12,
    poolAmount: 144,
    basePool: 144,
    sponsorBoost: 144,
    totalPool: 288,
    sponsorName: "Global Brand Sponsor",
    rewardRule: "Top Impact Contributors",
    startDate: "June 5, 2026",
    endDate: "June 11, 2026",
    days: "7 days",
    donationTarget: "Climate Action",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Ocean and climate action",
    tieBreakers: ["Morning streak", "Swim distance", "Active minutes"],
    condition: { if: ["Swim ??400m", "BEFORE 8 AM", "FOR 5 mornings"], then: "Maintain morning swim streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input - TEE verification", output: "Morning swim result only" },
    privacy: { hidden: "Lap logs ??Raw heart-rate ??Exact pool sessions", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "weekend-cycling": {
    title: "Swiss Hill Cycling Challenge", status: "Impact Campaigns", joinedCount: 10, maxParticipants: 14, entryAmount: 30, poolAmount: 420, basePool: 420, sponsorBoost: 420, totalPool: 840, sponsorName: "Local Gym Sponsor", rewardRule: "Donation Commitment",
    startDate: "May 24, 2026", endDate: "May 25, 2026", days: "2 days", donationTarget: "Children First", donationLogo: "./assets/ngo-unicef.svg", donationPurpose: "Children's education",
    tieBreakers: ["Distance", "Elevation", "Active calories"],
    condition: { if: ["Cycle ??25 km", "WITHIN weekend"], then: "Unlock sponsor match", else: "Contribution donated; no sponsor match" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Ride completion result only" },
    privacy: { hidden: "GPS route ??Speed trace ??Raw heart-rate", public: "Distance band ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "bike-relief": {
    title: "Disaster Relief Cycling Challenge", status: "Impact Campaigns", joinedCount: 11, maxParticipants: 16, entryAmount: 22, poolAmount: 352, basePool: 352, sponsorBoost: 352, totalPool: 704, sponsorName: "Community Cafe Sponsor", rewardRule: "Contribution Ranking",
    startDate: "May 28, 2026", endDate: "June 3, 2026", days: "7 days", donationTarget: "Disaster Relief", donationLogo: "./assets/ngo-red-cross.svg", donationPurpose: "Disaster relief",
    tieBreakers: ["Ride count", "Distance", "Consistency"],
    condition: { if: ["Complete 3 rides", "WITHIN 7 days"], then: "Maintain ride streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Ride count result only" },
    privacy: { hidden: "Exact route ??Raw speed ??Heart-rate", public: "Ride count ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "team-ride": {
    title: "Tokyo Community Ride", status: "Impact Campaigns", joinedCount: 7, maxParticipants: 10, entryAmount: 18, poolAmount: 180, basePool: 180, sponsorBoost: 180, totalPool: 360, sponsorName: "Global Brand Sponsor", rewardRule: "Team Impact Match",
    startDate: "June 8, 2026", endDate: "June 10, 2026", days: "3 days", donationTarget: "Climate Action", donationLogo: "./assets/ngo-greenpeace.svg", donationPurpose: "Climate action",
    tieBreakers: ["Team distance", "Active supporters", "Finish time"],
    condition: { if: ["Team distance ??50 km", "WITHIN 3 days"], then: "Unlock team sponsor match", else: "Contribution donated; no sponsor match" },
    verification: { source: "Strava / phone sensors", processing: "Encrypted input - TEE verification", output: "Team distance result only" },
    privacy: { hidden: "Individual route ??Ride logs", public: "Team total ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "walk-meals": {
    title: "Local Community Food Support Walk", status: "Impact Campaigns", joinedCount: 6, maxParticipants: 8, entryAmount: 15, poolAmount: 120, basePool: 120, sponsorBoost: 120, totalPool: 240, sponsorName: "Community Cafe Sponsor", rewardRule: "Donation Commitment",
    startDate: "May 23, 2026", endDate: "May 29, 2026", days: "7 days", donationTarget: "Disaster Relief", donationLogo: "./assets/ngo-red-cross.svg", donationPurpose: "Food support",
    tieBreakers: ["Step streak", "Total steps", "Active minutes"],
    condition: { if: ["Steps ??8,000", "EVERY day", "FOR 7 days"], then: "Maintain walk streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Phone step counter / Health Connect", processing: "Encrypted input - TEE verification", output: "Step condition result only" },
    privacy: { hidden: "Location trail ??Full step logs", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "morning-yoga": {
    title: "Refugee Support Movement Challenge", status: "Impact Campaigns", joinedCount: 8, maxParticipants: 11, entryAmount: 18, poolAmount: 198, basePool: 198, sponsorBoost: 198, totalPool: 396, sponsorName: "Local Gym Sponsor", rewardRule: "Completion Match Challenge",
    startDate: "May 30, 2026", endDate: "June 8, 2026", days: "10 days", donationTarget: "Climate Action", donationLogo: "./assets/ngo-greenpeace.svg", donationPurpose: "Climate action",
    tieBreakers: ["Streak days", "Active minutes", "Start time"],
    condition: { if: ["Yoga ??20 min", "EVERY morning", "FOR 10 days"], then: "Maintain yoga streak", else: "Contribution donated; no sponsor match" },
    verification: { source: "Apple Health / phone sensors", processing: "Encrypted input - TEE verification", output: "Session result only" },
    privacy: { hidden: "Session logs ??Heart-rate", public: "Streak ??Rank" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
  "step-battle": {
    title: "Children's Education Step Challenge", status: "Impact Campaigns", joinedCount: 10, maxParticipants: 12, entryAmount: 14, poolAmount: 168, basePool: 168, sponsorBoost: 168, totalPool: 336, sponsorName: "Global Brand Sponsor", rewardRule: "Contribution Ranking",
    startDate: "June 6, 2026", endDate: "June 12, 2026", days: "7 days", donationTarget: "Children First", donationLogo: "./assets/ngo-unicef.svg", donationPurpose: "Children's education",
    tieBreakers: ["Total steps", "Active days", "Active minutes"],
    condition: { if: ["Highest verified steps", "WITHIN 7 days"], then: "Rank by verified total", else: "Contribution donated; no sponsor match" },
    verification: { source: "Phone step counter / Health Connect", processing: "Encrypted input - TEE verification", output: "Leaderboard result only" },
    privacy: { hidden: "Full step logs ??Location data", public: "Rank ??Step band" },
    economicRules: { failure: "Contribution donated to NGO", success: "Sponsor match unlocked by verified completion" },
    executionRules: ["Auto-run by REX engine", "No manual validation", "Donation Receipt on-chain"],
  },
};

Object.assign(challengeDetails, {
  "run-100": {
    title: "7-Day Walk for Clean Water",
    status: "Donation Program",
    joinedCount: 4,
    maxParticipants: 8,
    entryAmount: 10,
    poolAmount: 80,
    basePool: 80,
    sponsorBoost: 20,
    totalPool: 100,
    sponsorName: "Evian",
    rewardRule: "Sponsor Match",
    startDate: "Jun 12, 2026",
    endDate: "Jun 18, 2026",
    days: "7 days",
    workoutType: "Walking",
    donationTarget: "Greenpeace",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Clean water access",
    tieBreakers: ["Verified movement", "Daily completion", "Donation receipt"],
    condition: { if: ["Walk 8,000 steps", "EVERY day", "FOR 7 days"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Apple Health / Health Connect", processing: "Encrypted input - TEE verification", output: "Verified movement result only" },
    privacy: { hidden: "GPS route - raw heart-rate - full workout logs", public: "Completion result only" },
    economicRules: { failure: "$10 contribution donated and receipt issued", success: "$10 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "morning-run": {
    title: "Morning Run for Children's Education",
    status: "Donation Program",
    joinedCount: 9,
    maxParticipants: 12,
    entryAmount: 15,
    poolAmount: 120,
    basePool: 120,
    sponsorBoost: 20,
    totalPool: 140,
    sponsorName: "NIKE",
    rewardRule: "Sponsor Match",
    startDate: "Jun 19, 2026",
    endDate: "Jun 27, 2026",
    days: "11 days",
    workoutType: "Running",
    donationTarget: "UNICEF",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Children's education",
    tieBreakers: ["Verified run", "Morning completion", "Donation receipt"],
    condition: { if: ["Run 30 minutes", "BEFORE 9 AM", "FOR 10 days"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Apple Health / Strava", processing: "Encrypted input - TEE verification", output: "Morning run result only" },
    privacy: { hidden: "Start location - GPS route - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$15 contribution donated and receipt issued", success: "$15 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "night-5k": {
    title: "Weekend Cycling for Hunger Relief",
    status: "Donation Program",
    joinedCount: 6,
    maxParticipants: 10,
    entryAmount: 20,
    poolAmount: 100,
    basePool: 100,
    sponsorBoost: 18,
    totalPool: 118,
    sponsorName: "RedBull",
    rewardRule: "Sponsor Match",
    startDate: "Jun 20, 2026",
    endDate: "Jun 30, 2026",
    days: "11 days",
    workoutType: "Cycling",
    donationTarget: "UNICEF",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Food support",
    tieBreakers: ["Verified ride", "Weekend completion", "Donation receipt"],
    condition: { if: ["Cycle 20 km", "WITHIN weekend"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Cycling result only" },
    privacy: { hidden: "Exact route - speed trace - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$20 contribution donated and receipt issued", success: "$20 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "swim-water": {
    title: "Swim for Medical Relief",
    status: "Donation Program",
    joinedCount: 5,
    maxParticipants: 8,
    entryAmount: 25,
    poolAmount: 80,
    basePool: 80,
    sponsorBoost: 16,
    totalPool: 96,
    sponsorName: "Adidas",
    rewardRule: "Sponsor Match",
    startDate: "July 3, 2026",
    endDate: "July 10, 2026",
    days: "8 days",
    workoutType: "Swimming",
    donationTarget: "Red Cross",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Medical relief",
    tieBreakers: ["Verified swim", "Active minutes", "Donation receipt"],
    condition: { if: ["Swim 800m", "OR 30 minutes"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input - TEE verification", output: "Swim result only" },
    privacy: { hidden: "Lap details - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$25 contribution donated and receipt issued", success: "$25 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "paris-seine-run": {
    title: "Paris Seine Charity Run",
    status: "Special Event",
    joinedCount: 11,
    maxParticipants: 16,
    entryAmount: 30,
    poolAmount: 160,
    basePool: 160,
    sponsorBoost: 20,
    totalPool: 180,
    sponsorName: "Raduree",
    rewardRule: "Sponsor Match",
    startDate: "Jun 20, 2026",
    endDate: "Jun 30, 2026",
    days: "14 days",
    workoutType: "Running",
    location: "Paris Seine",
    donationTarget: "Children's Education",
    donationLogo: "./assets/ngo-unicef.svg",
    donationPurpose: "Children's education",
    tieBreakers: ["Verified run", "Community participation", "Donation receipt"],
    condition: { if: ["Run 30 minutes", "BEFORE 9 AM", "FOR 10 days"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Apple Health / Strava", processing: "Encrypted input - TEE verification", output: "Verified run result only" },
    privacy: { hidden: "GPS route - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$30 contribution donated and receipt issued", success: "$30 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "tokyo-sakura-half": {
    title: "Tokyo Cherry Blossom Half Marathon",
    status: "Special Event",
    joinedCount: 8,
    maxParticipants: 14,
    entryAmount: 25,
    poolAmount: 140,
    basePool: 140,
    sponsorBoost: 25,
    totalPool: 165,
    sponsorName: "Sushiro",
    rewardRule: "Sponsor Match",
    startDate: "Jun 18, 2026",
    endDate: "Jun 30, 2026",
    days: "13 days",
    workoutType: "Running",
    location: "Tokyo",
    donationTarget: "Refugee Support",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Refugee support",
    tieBreakers: ["Verified distance", "Community participation", "Donation receipt"],
    condition: { if: ["Complete half marathon distance"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Distance result only" },
    privacy: { hidden: "Route details - raw health logs", public: "Completion result only" },
    economicRules: { failure: "$25 contribution donated and receipt issued", success: "$25 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "swiss-hill-cycling": {
    title: "Swiss Hill Cycling Program",
    status: "Special Event",
    joinedCount: 10,
    maxParticipants: 14,
    entryAmount: 30,
    poolAmount: 140,
    basePool: 140,
    sponsorBoost: 22,
    totalPool: 162,
    sponsorName: "AirBnb",
    rewardRule: "Sponsor Match",
    startDate: "July 1, 2026",
    endDate: "July 8, 2026",
    days: "8 days",
    workoutType: "Cycling",
    location: "Swiss Alps",
    donationTarget: "Disaster Relief",
    donationLogo: "./assets/ngo-red-cross.svg",
    donationPurpose: "Disaster relief",
    tieBreakers: ["Verified ride", "Elevation completion", "Donation receipt"],
    condition: { if: ["Cycle 25 km", "WITHIN weekend"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Strava / Health Connect", processing: "Encrypted input - TEE verification", output: "Ride result only" },
    privacy: { hidden: "GPS route - speed trace - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$30 contribution donated and receipt issued", success: "$30 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
  "han-river-swim": {
    title: "Seoul Han River Summer Swim",
    status: "Special Event",
    joinedCount: 12,
    maxParticipants: 18,
    entryAmount: 20,
    poolAmount: 180,
    basePool: 180,
    sponsorBoost: 20,
    totalPool: 200,
    sponsorName: "Jinsa Galbi",
    rewardRule: "Sponsor Match",
    startDate: "Jun 12, 2026",
    endDate: "Jun 27, 2026",
    days: "16 days",
    workoutType: "Swimming",
    location: "Seoul Han River",
    donationTarget: "Ocean Cleanup",
    donationLogo: "./assets/ngo-greenpeace.svg",
    donationPurpose: "Ocean cleanup",
    tieBreakers: ["Verified swim", "Active minutes", "Donation receipt"],
    condition: { if: ["Swim 1km in Han River"], then: "Unlock sponsor matching", else: "Contribution still donated" },
    verification: { source: "Apple Watch / Health Connect", processing: "Encrypted input - TEE verification", output: "Swim result only" },
    privacy: { hidden: "Lap details - raw heart-rate", public: "Completion result only" },
    economicRules: { failure: "$20 contribution donated and receipt issued", success: "$20 contribution + sponsor match donated" },
    executionRules: ["Verified movement", "Sponsor match unlocked", "Donation routed", "Donation receipt generated"],
  },
});

let selectedChallenge = "run-100";
const selectedDonationAmounts = {};
const luckyAirDropChallengeIds = new Set(["run-100", "han-river-swim"]);
const luckyAirDropChallengeLabels = {
  "run-100": "Clean Water Donation Challenge",
  "han-river-swim": "Han River Donation Challenge",
};
const luckyDropHistoryDetails = {
  ecobottle: {
    reward: "EcoBottle 15% OFF",
    source: "Clean Water Donation Challenge",
    code: "VX321TE",
    valid: "Dec 18, 2026",
    barcode: "8 802 321 041 578",
    provider: "Provided by EcoBottle Sponsor",
    status: "Active",
  },
  rungear: {
    reward: "Sunblock Cream 20% OFF",
    source: "Han River Donation Challenge",
    code: "SUN20-K8P2",
    valid: "Dec 11, 2026",
    barcode: "8 802 117 330 921",
    provider: "Provided by Sunblock Cream Sponsor",
    status: "Used",
  },
  greencafe: {
    reward: "Green Cafe 20% OFF",
    source: "Han River Donation Challenge",
    code: "GC20-M7Q9",
    valid: "Dec 09, 2026",
    barcode: "8 802 209 774 063",
    provider: "Provided by Green Cafe Sponsor",
    status: "Used",
  },
};
const luckyAirDropShown = new Set();
const luckyAirDropSaved = new Set();
const luckyAirDropAnimating = new Set();
let latestLuckyAirDropId = "";

function getMinimumDonation(detail) {
  return Number(detail?.entryAmount ?? 10);
}

function getSelectedDonationAmount(id = selectedChallenge) {
  const detail = challengeDetails[id];
  if (!detail) return 10;
  const minimum = getMinimumDonation(detail);
  const selected = Number(selectedDonationAmounts[id] ?? minimum);
  return Math.max(minimum, selected);
}

function setSelectedDonationAmount(id, amount) {
  const detail = challengeDetails[id];
  if (!detail) return getSelectedDonationAmount(id);
  const minimum = getMinimumDonation(detail);
  const nextAmount = Math.max(minimum, Number(amount) || minimum);
  selectedDonationAmounts[id] = nextAmount;
  return nextAmount;
}

function getSponsorMatchMultiplier(detail) {
  return detail?.status === "Special Event" ? 3 : 2;
}

const sponsorVideoSources = {
  "Global Brand Sponsor": "./assets/nike_new.mp4",
  "Community Cafe Sponsor": "./assets/redbull-ad.mp4",
  "Local Gym Sponsor": "./assets/adidas-ad.mp4",
};

const sponsorVideoByChallenge = {
  "run-100": "./assets/evian.mp4",
  "morning-run": "./assets/nike_new.mp4",
  "night-5k": "./assets/redbull-ad.mp4",
  "swim-water": "./assets/adidas-ad.mp4",
  "paris-seine-run": "./assets/paris.mp4",
  "tokyo-sakura-half": "./assets/sushi.mp4",
  "swiss-hill-cycling": "./assets/AirBnb.mp4",
  "han-river-swim": "./assets/restaurant.mp4",
};

const sponsorWebsiteByChallenge = {
  "run-100": "https://www.evian.com/en_int/",
  "morning-run": "https://www.nike.com/",
  "night-5k": "https://www.redbullshopus.com/",
  "swim-water": "https://www.adidas.com/us",
  "paris-seine-run": "https://laduree.com/en-us",
  "tokyo-sakura-half": "https://www.akindo-sushiro.co.jp/en/",
  "swiss-hill-cycling": "https://www.airbnb.ca/",
  "han-river-swim": "https://xn--w39at6wpzax3i7sdctt.kr/",
};

const sponsorStorePreviews = {
  "Global Brand Sponsor": {
    buttonText: "Open Sponsor Website",
    image: "./assets/nike-store-preview.png",
    label: "NIKE",
  },
  "Local Gym Sponsor": {
    buttonText: "Open Sponsor Website",
    image: "./assets/adidas-store-preview.png",
    label: "Local Gym Sponsor",
  },
  "Community Cafe Sponsor": {
    buttonText: "Open Sponsor Website",
    image: "./assets/redbull-store-preview.png",
    label: "Community Cafe Sponsor",
  },
};

function withMatchedSponsorPool(detail) {
  const basePool = detail.basePool ?? detail.poolAmount ?? 0;
  const sponsorBoost = detail.sponsorBoost ?? basePool;
  return {
    ...detail,
    basePool,
    sponsorBoost,
    totalPool: basePool + sponsorBoost,
    donationPercent: detail.donationPercent ?? 20,
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

function renderSponsorMedia(sponsorName, challengeId = selectedChallenge) {
  const videoSource = sponsorVideoByChallenge[challengeId] ?? sponsorVideoSources[sponsorName];
  return `
    <div class="sponsor-video-frame" data-sponsor="${sponsorName}">
      ${videoSource ? "" : `<span class="sponsor-video-placeholder">Sponsor video coming soon</span>`}
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

function renderSponsorStoreButton(sponsorName, challengeId = selectedChallenge) {
  const preview = sponsorStorePreviews[sponsorName];
  const buttonText = preview?.buttonText ?? `Open Sponsor Website`;
  const sponsorUrl = sponsorWebsiteByChallenge[challengeId] ?? "";
  return `<button class="sponsor-store-button" type="button" data-sponsor-url="${sponsorUrl}">${buttonText}</button>`;
}

function renderDonationLogo(detail) {
  const isRedCross = detail.donationTarget === "Disaster Relief";
  const fallback = isRedCross
    ? `<div class="donation-logo-fallback red-cross-fallback" aria-label="Disaster Relief logo"><i></i><strong>Disaster Relief</strong></div>`
    : `<div class="donation-logo-fallback" aria-label="${detail.donationTarget} logo">${detail.donationTarget}</div>`;

  return `
    <div class="donation-logo-wrap">
      <img src="${detail.donationLogo}" alt="${detail.donationTarget} logo" onerror="this.hidden=true; this.nextElementSibling.hidden=false;" />
      <div hidden>${fallback}</div>
    </div>
  `;
}

function openSponsorStorePreview(sponsorName) {
  if (!sponsorStoreModal) return;

  const preview = sponsorStorePreviews[sponsorName] ?? {
    image: "",
    label: sponsorName || "Sponsor",
  };

  sponsorStoreModal.dataset.sponsor = preview.label;
  if (sponsorStoreName) sponsorStoreName.textContent = preview.label;

  if (sponsorStorePreview) {
    sponsorStorePreview.classList.remove("is-missing");
    sponsorStorePreview.alt = `${preview.label} sponsor website preview`;
    sponsorStorePreview.src = preview.image || "";
    sponsorStorePreview.hidden = !preview.image;
  }

  if (sponsorStoreFallback) {
    sponsorStoreFallback.textContent = `${preview.label} sponsor website preview`;
    sponsorStoreFallback.hidden = Boolean(preview.image);
  }

  sponsorStoreModal.hidden = false;
  window.requestAnimationFrame(() => sponsorStoreModal.classList.add("show"));
}

function closeSponsorStorePreview() {
  if (!sponsorStoreModal) return;
  sponsorStoreModal.classList.remove("show");
  sponsorStoreModal.hidden = true;
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

function dateOnly(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseChallengeStartDate(detail) {
  const date = new Date(detail?.startDate || "");
  return Number.isNaN(date.getTime()) ? null : dateOnly(date);
}

function hasChallengeStarted(detail) {
  const startDate = parseChallengeStartDate(detail);
  if (!startDate) return false;
  return startDate.getTime() <= dateOnly(new Date()).getTime();
}

function getJoinStateForChallenge(detail) {
  return hasChallengeStarted(detail) ? "participating" : "reserved";
}

function isParticipatingChallenge(id) {
  const detail = challengeDetails[id];
  return Boolean(detail?.isJoined && detail.joinState === "participating");
}

function isChallengeEffectivelyJoined(id) {
  return Boolean(challengeDetails[id]?.isJoined);
}

function renderSelectedChallenge(detail) {
  if (!detail || !selectedChallengeBoard) return;
  detail = withMatchedSponsorPool(detail);
  const isParticipating = isParticipatingChallenge(selectedChallenge);
  const isJoined = isChallengeEffectivelyJoined(selectedChallenge);
  const joinButtonLabel = isParticipating ? `<span class="participating-status-main">Participating ...</span><span class="participating-status-detail">Move2Give is tracking your workout</span>` : "Joined Donation";
  const minimumDonation = getMinimumDonation(detail);
  const selectedDonation = getSelectedDonationAmount(selectedChallenge);
  const sponsorMultiplier = getSponsorMatchMultiplier(detail);
  const sponsorMatchDonation = selectedDonation * sponsorMultiplier;
  const totalDonation = selectedDonation + sponsorMatchDonation;
  const programTypeLabel = detail.status === "Special Event" ? "Special Event" : "Donation Program";
  const quickAmounts = [10, 20, 30, 50];
  selectedChallengeBoard.classList.remove("detail-refresh");
  void selectedChallengeBoard.offsetWidth;
  selectedChallengeBoard.classList.add("detail-refresh");
  selectedChallengeBoard.innerHTML = `
    <div class="donation-detail-panel" aria-labelledby="donation-detail-title">
      <div class="selected-header">
        <span class="eyebrow">Selected Donation Program</span>
        <div class="selected-prize-hero">
          <h3 id="donation-detail-title">${detail.title}</h3>
        </div>
      </div>
      <div class="selected-sectors">
        <article class="sector-card contract-sector">
          <span class="challenge-contract-title">Donation Program Details</span>
          <div class="contract-condition">
            <small>Sponsor Unlock Condition</small>
            <strong>${formatConditionLine(detail.condition.if)}</strong>
            <em>Private verification · raw data hidden</em>
          </div>
          <div class="sponsor-match-rules">
            <span>Your donation is sent whether completed or missed.</span>
            <span>Complete verified goal → sponsor match unlocked.</span>
            <span>${programTypeLabel}: ×${sponsorMultiplier} match.</span>
            <span>Sponsor match runs only within campaign budget.</span>
            <span>Receipt issued either way.</span>
          </div>
          <div class="donation-amount-control" data-min-donation="${minimumDonation}">
            <div class="donation-amount-head">
              <strong>Change Donation Amount</strong>
              <span>Minimum: ${formatRialo(minimumDonation)}</span>
            </div>
            <div class="donation-quick-buttons" aria-label="Quick donation amounts">
              ${quickAmounts.map((amount) => `<button class="${selectedDonation === amount ? "active" : ""}" data-donation-amount="${amount}" type="button" ${amount < minimumDonation ? "disabled" : ""}>${formatRialo(amount)}</button>`).join("")}
            </div>
            <label class="custom-donation-field">
              Custom amount
              <input id="custom-donation-amount" type="number" min="${minimumDonation}" step="1" value="${selectedDonation}" />
            </label>
            <p class="donation-warning" id="donation-warning" hidden>Donation amount cannot be lower than ${formatRialo(minimumDonation)}.</p>
          </div>
        </article>
        <article class="sector-card donation-sector">
          <span>Donation Destination</span>
          <div class="donation-match-summary" aria-label="Donation calculation">
            <div class="match-medal match-${sponsorMultiplier === 3 ? "special" : "daily"}" data-match-stamp>
              <i aria-hidden="true"></i>
              <strong>×${sponsorMultiplier}</strong>
              <span>MATCH</span>
            </div>
            <div class="donation-calculation">
              <div><span>Your Donation</span><b data-selected-donation>${formatRialo(selectedDonation)}</b></div>
              <div><span>Sponsor Match</span><b>×<span data-sponsor-multiplier>${sponsorMultiplier}</span> = <span data-sponsor-match>${formatRialo(sponsorMatchDonation)}</span></b></div>
              <div class="total"><span>Total Donation</span><b data-total-donation>${formatRialo(totalDonation)}</b></div>
            </div>
          </div>
          <div class="donation-hero">
            ${renderDonationLogo(detail)}
            <h4>${detail.donationTarget}</h4>
            <b>${detail.donationPurpose}</b>
          </div>
          <p>If completed: total donation goes to the NGO.</p>
          <p>If missed: <span data-selected-donation>${formatRialo(selectedDonation)}</span> donation still sent to NGO.</p>
          <p>Donation receipt issued either way.</p>
        </article>
        <article class="sector-card sponsor-sector">
          <span>Sponsor Match : Donation Partner</span>
          <div class="sponsor-commerce-group">
            ${renderSponsorMedia(detail.sponsorName, selectedChallenge)}
            ${renderSponsorStoreButton(detail.sponsorName, selectedChallenge)}
          </div>
          <div class="boost-rows sponsor-boost-only">
            <div class="boost"><b>Sponsor Match : +<span data-sponsor-match>${formatRialo(sponsorMatchDonation)}</span></b></div>
          </div>
        </article>
      </div>
      <div class="join-contract-cta ${isJoined ? "joined" : ""} ${isParticipating ? "participating" : ""}">
        <button class="secondary-action" id="join-btn" type="button" ${isJoined ? "disabled" : ""}>${isJoined ? joinButtonLabel : "Join Donation"}</button>
        ${isParticipating && luckyAirDropChallengeIds.has(selectedChallenge) ? `<button class="lucky-airdrop-status-button ${luckyAirDropSaved.has(selectedChallenge) ? "drop-received" : ""}" id="open-lucky-drops-from-status" type="button">${luckyAirDropSaved.has(selectedChallenge) ? "You got a Lucky Drop" : "Lucky Drop Demo"}</button>` : ""}
        ${isJoined && !isParticipating ? `<button class="cancel-reservation" id="cancel-reservation" type="button">Cancel</button>` : ""}
      </div>
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

function openDonationDetail(id = selectedChallenge) {
  selectChallenge(id);
}

function updateSelectedDonationUI(amount, showWarning = false) {
  const detail = challengeDetails[selectedChallenge];
  if (!detail || !selectedChallengeBoard) return;

  const selectedAmount = setSelectedDonationAmount(selectedChallenge, amount);
  const multiplier = getSponsorMatchMultiplier(detail);
  const sponsorMatchAmount = selectedAmount * multiplier;
  const totalDonationAmount = selectedAmount + sponsorMatchAmount;
  selectedChallengeBoard.querySelectorAll("[data-selected-donation]").forEach((node) => {
    node.textContent = formatRialo(selectedAmount);
  });
  selectedChallengeBoard.querySelectorAll("[data-sponsor-match]").forEach((node) => {
    node.textContent = formatRialo(sponsorMatchAmount);
  });
  selectedChallengeBoard.querySelectorAll("[data-total-donation]").forEach((node) => {
    node.textContent = formatRialo(totalDonationAmount);
  });
  selectedChallengeBoard.querySelectorAll("[data-sponsor-multiplier]").forEach((node) => {
    node.textContent = multiplier;
  });
  selectedChallengeBoard.querySelectorAll("[data-match-stamp]").forEach((node) => {
    node.classList.toggle("match-special", multiplier === 3);
    node.classList.toggle("match-daily", multiplier !== 3);
    const value = node.querySelector("strong");
    if (value) value.textContent = `×${multiplier}`;
  });
  selectedChallengeBoard.querySelectorAll("[data-donation-amount]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.donationAmount) === selectedAmount);
  });

  const input = selectedChallengeBoard.querySelector("#custom-donation-amount");
  if (input) input.value = selectedAmount;

  const warning = selectedChallengeBoard.querySelector("#donation-warning");
  if (warning) warning.hidden = !showWarning;

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
  const joined = isChallengeEffectivelyJoined(id);
  updateChallengeCardMetrics(id, animate, options);
  card.classList.toggle("joined", joined);
  card.querySelector(".stamp-overlay")?.remove();

  if (!joined) return;

  const stamp = document.createElement("img");
  stamp.className = `stamp-overlay${animate ? " stamp-animate" : ""}`;
  stamp.src = isParticipatingChallenge(id) ? "./assets/Stamp2.png" : "./assets/reserved-rialo-stamp.png";
  stamp.alt = isParticipatingChallenge(id) ? "Participating Rialo stamp" : "Reserved Rialo stamp";
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
  const startsText = `${detail.joinedCount} supporters`;
  const progressPercent = Math.min(100, Math.round((currentPool / maxPool) * 1000) / 10);
  const statRows = card.querySelectorAll(".stats span");
  const progressFill = card.querySelector(".progress span");

  statRows.forEach((row) => {
    const label = row.textContent.trim();
    const value = row.querySelector("b");
    if (!value) return;

    if (label.startsWith("Impact Goal")) {
      if (animate && Number.isFinite(options.fromPool)) {
        animatePoolValue(value, options.fromPool, currentPool, maxPool);
      } else {
        value.textContent = poolText;
      }
    }
    if (label.startsWith("Starts") || label.startsWith("Supporters")) value.textContent = startsText;
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

function clearWalletScopedReservations() {
  let clearedSelectedChallenge = false;

  Object.entries(challengeDetails).forEach(([id, detail]) => {
    if (!detail?.isJoined) return;

    detail.isJoined = false;
    detail.joinState = "";
    detail.joinedCount = Math.max(0, Number(detail.joinedCount ?? 0) - 1);
    updateJoinedCardState(id);
    if (id === selectedChallenge) clearedSelectedChallenge = true;
  });

  if (clearedSelectedChallenge) {
    renderSelectedChallenge(challengeDetails[selectedChallenge]);
  }
  luckyAirDropShown.clear();
  luckyAirDropSaved.clear();
  luckyAirDropAnimating.clear();
  latestLuckyAirDropId = "";
}

function isLuckyAirDropEligible(id) {
  return luckyAirDropChallengeIds.has(id) && isParticipatingChallenge(id);
}

function openLuckyAirDrop(id) {
  if (!luckyAirDropModal) return;
  luckyAirDropModal.hidden = false;
  luckyAirDropModal.classList.add("show");
  window.setTimeout(closeLuckyAirDrop, 3300);
}

function closeLuckyAirDrop() {
  if (!luckyAirDropModal) return;
  luckyAirDropModal.hidden = true;
  luckyAirDropModal.classList.remove("show");
}

function saveLuckyAirDrop(id) {
  if (!luckyAirDropChallengeIds.has(id)) return;
  luckyAirDropSaved.add(id);
  latestLuckyAirDropId = id;
  if (id === selectedChallenge) renderSelectedChallenge(challengeDetails[selectedChallenge]);
}

function setLuckyDropHistoryMode(isLuckyMode) {
  const historyCard = document.querySelector("#activity .donation-history-card");
  const donationTable = document.querySelector("#activity .donation-history-table:not(.lucky-drop-history-table)");
  historyCard?.classList.toggle("lucky-drop-history-mode", isLuckyMode);
  luckyDropsWalletCard?.classList.toggle("selected", isLuckyMode);
  if (isLuckyMode) {
    document.querySelectorAll("#activity [data-ngo-filter-card]").forEach((card) => card.classList.remove("selected"));
  }
  if (donationHistoryTitle) donationHistoryTitle.textContent = isLuckyMode ? "Lucky Drop History" : "Donation History";
  if (donationHistorySubtitle) donationHistorySubtitle.textContent = isLuckyMode ? "Personal reward record" : "Personal giving record";
  if (donationTable) donationTable.hidden = isLuckyMode;
  if (luckyDropHistoryTable) luckyDropHistoryTable.hidden = !isLuckyMode;
  if (isLuckyMode) {
    luckyDropHistoryTable?.querySelectorAll("[data-lucky-drop-history]").forEach((row) => {
      row.hidden = false;
    });
  }
  if (luckyDropHistoryBack) luckyDropHistoryBack.hidden = !isLuckyMode;
  const resetButton = document.querySelector("[data-ngo-filter-reset]");
  if (resetButton) resetButton.hidden = isLuckyMode || activeDonationNgoFilter === "all";
}

function openLuckyDropsHistory() {
  if (!walletConnected) {
    setLuckyDropHistoryMode(false);
    return;
  }
  setLuckyDropHistoryMode(true);
  const historyCard = document.querySelector("#activity .donation-history-card");
  historyCard?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openLuckyDropDetails(dropKey = "ecobottle") {
  if (!luckyDropsWalletModal) return;
  const details = luckyDropHistoryDetails[dropKey] || luckyDropHistoryDetails.ecobottle;
  if (luckyDropsReward) luckyDropsReward.textContent = details.reward;
  if (luckyDropsSource) luckyDropsSource.textContent = `From ${details.source}`;
  if (luckyDropsDetailStatus) luckyDropsDetailStatus.textContent = `Status: ${details.status}`;
  if (luckyDropsCode) luckyDropsCode.textContent = details.code;
  if (luckyDropsValid) luckyDropsValid.textContent = details.valid;
  if (luckyDropsBarcodeNumber) luckyDropsBarcodeNumber.textContent = details.barcode || "8 802 321 041 578";
  if (luckyDropsProvider) luckyDropsProvider.textContent = details.provider;
  const isUsed = details.status.toLowerCase() === "used";
  luckyDropsWalletModal.classList.toggle("used-drop", isUsed);
  if (luckyDropsUsedStamp) luckyDropsUsedStamp.hidden = !isUsed;
  luckyDropsWalletModal.hidden = false;
  luckyDropsWalletModal.classList.add("show");
}

function openLuckyDropsWallet(id = latestLuckyAirDropId || "run-100") {
  const dropKey = id === "han-river-swim" ? "rungear" : "ecobottle";
  openLuckyDropDetails(dropKey);
}

function closeLuckyDropsWallet() {
  if (!luckyDropsWalletModal) return;
  luckyDropsWalletModal.hidden = true;
  luckyDropsWalletModal.classList.remove("show");
}

function highlightLuckyDropsWallet() {
  if (!luckyDropsWalletCard) return;
  luckyDropsWalletCard.scrollIntoView({ behavior: "smooth", block: "center" });
  luckyDropsWalletCard.classList.remove("lucky-wallet-highlight");
  void luckyDropsWalletCard.offsetWidth;
  luckyDropsWalletCard.classList.add("lucky-wallet-highlight");
  window.setTimeout(() => luckyDropsWalletCard.classList.remove("lucky-wallet-highlight"), 3000);
}

function goToLuckyDropsWallet() {
  showPanel("activity");
  window.setTimeout(highlightLuckyDropsWallet, 180);
}

function triggerLuckyAirDropDemo(id) {
  if (!isLuckyAirDropEligible(id)) return;
  if (luckyAirDropSaved.has(id)) {
    goToLuckyDropsWallet();
    return;
  }
  if (luckyAirDropAnimating.has(id)) return;

  luckyAirDropAnimating.add(id);
  openLuckyAirDrop(id);
  window.setTimeout(() => {
    luckyAirDropAnimating.delete(id);
    luckyAirDropShown.add(id);
    saveLuckyAirDrop(id);
  }, 3300);
}

function triggerJoinSuccessEffects(id, previousJoinedCount) {
  const detail = challengeDetails[id];
  if (!detail) return;

  const previousPool = previousJoinedCount * detail.entryAmount;
  detail.isJoined = true;
  detail.joinState = getJoinStateForChallenge(detail);
  detail.joinedCount = Math.min(detail.maxParticipants, previousJoinedCount + 1);

  chargeSfsOperationFee(0.042, "SFS spent on donation commitment approval.");
  renderSelectedChallenge(detail);
  updateJoinedCardState(id, true, { fromPool: previousPool });
  pulseSponsorVideo();
  window.setTimeout(pulseSponsorVideo, 120);
  showToast(`Donation challenge joined. ${formatRialo(getSelectedDonationAmount(id))} donation committed.`, 1500);
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
  approvalEntry.textContent = formatRialo(getSelectedDonationAmount(selectedChallenge));
  approvalWallet.textContent = formatAddress(connectedAccount);
  approvalSign.disabled = false;
  approvalCancel.disabled = false;
  approvalSign.textContent = "Approve & Sign";
}

function buildPoolSignatureMessage(detail, action) {
  if (action === "cancel") {
    return [
      "Cancel donation commitment",
      "",
      `Program: ${detail.title}`,
      `Donation amount: ${formatRialo(getSelectedDonationAmount(selectedChallenge))}`,
      `Wallet: ${connectedAccount}`,
      "Action: Cancel local donation commitment reservation",
    ].join("\n");
  }

  return [
    `Program: ${detail.title}`,
    `Donation amount: ${formatRialo(getSelectedDonationAmount(selectedChallenge))}`,
    `Wallet: ${connectedAccount}`,
    "Action: Approve participation contribution",
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
  if (detail.joinState === "participating") return;

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
    detail.joinState = "";
    detail.joinedCount = Math.max(0, detail.joinedCount - 1);
    chargeSfsOperationFee(0.028, "SFS spent on reservation cancellation.");
    updateJoinedCardState(selectedChallenge, true, { fromPool: previousPool });
    renderSelectedChallenge(detail);
    showToast("Your local donation commitment reservation was cancelled.");
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
    { message: "REX updating impact progress", flowStep: 4 },
    { message: "Preparing donation execution", flowStep: 5 },
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
  executionStatus.innerHTML = "<span>Rule check passed ??Impact progress updated ??Donation route ready</span>";
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
  const hadVerifiedWallet = walletVerified;
  connectedAccount = account || "";
  walletConnected = Boolean(connectedAccount);
  walletVerified = walletConnected && verified;
  walletCard.classList.toggle("connected", walletConnected);
  document.body.classList.toggle("wallet-connected", walletVerified);
  walletButton.textContent = walletConnected ? formatAddress(connectedAccount) : "Connect";
  if (walletProfileButton) walletProfileButton.hidden = !walletConnected;
  walletMenu.classList.remove("open");
  walletMenu.hidden = true;
  syncDataFlowWalletState();
  syncOverviewWalletState();
  renderHealthDashboardView();
  renderHistorySummary();
  if (!walletVerified) taxSetupState.editing = false;
  renderTaxSetupPanel();
  updateAllJoinedCards();
  renderSelectedChallenge(challengeDetails[selectedChallenge]);
  if (!walletConnected) {
    setLuckyDropHistoryMode(false);
  }
  if (hadVerifiedWallet && !walletVerified) {
    clearWalletScopedReservations();
  }
}

function syncOverviewWalletState() {
  if (!overviewRankScroll) return;
  overviewRankScroll.scrollTop = 0;
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

function renderTaxSetupPanel() {
  const buttons = document.querySelectorAll("[data-tax-ngo]");
  if (!buttons.length) return;
  const panel = document.querySelector("[data-tax-setup-panel]");
  const canShowTaxData = walletVerified;
  panel?.classList.toggle("tax-wallet-locked", !canShowTaxData);

  const selected = taxSetupState.selected;
  const profile = taxSetupState.profiles[selected] || taxSetupState.profiles.unicef;
  const isSubmitted = Boolean(taxSetupState.submitted[selected]);
  const isLockedSubmitted = isSubmitted && !taxSetupState.editing;

  buttons.forEach((button) => {
    const key = button.dataset.taxNgo;
    const selectedButton = key === selected;
    button.classList.toggle("active", selectedButton);
    button.setAttribute("aria-pressed", String(selectedButton));
  });

  document.querySelectorAll("[data-tax-status]").forEach((node) => {
    const key = node.dataset.taxStatus;
    node.textContent = taxSetupState.submitted[key] ? "Form submitted" : "Setup required";
    node.classList.toggle("is-submitted", Boolean(taxSetupState.submitted[key]));
  });

  document.querySelectorAll("[data-tax-field]").forEach((field) => {
    const key = field.dataset.taxField;
    field.value = canShowTaxData && isSubmitted ? (profile[key] || "") : "";
    field.placeholder = field.closest("label")?.childNodes[0]?.textContent?.trim() || "";
    field.disabled = !canShowTaxData || isLockedSubmitted;
    field.readOnly = !canShowTaxData || isLockedSubmitted;
    field.classList.toggle("tax-field-locked", !canShowTaxData || isLockedSubmitted);
  });

  const submitButton = document.querySelector("[data-tax-submit]");
  if (submitButton) {
    submitButton.textContent = isSubmitted ? (taxSetupState.editing ? "Save" : "Edit") : "Submit";
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

function openProfileModal() {
  if (!profileModal) return;
  if (profileNicknameInput && overviewProfileName) {
    profileNicknameInput.value = overviewProfileName.textContent.trim() || "Bruce";
  }
  if (profileModalPreviewName && overviewProfileName) {
    profileModalPreviewName.textContent = overviewProfileName.textContent.trim() || "Bruce";
  }
  profileModal.hidden = false;
}

function closeProfileModal() {
  if (!profileModal) return;
  profileModal.hidden = true;
}

function setProfilePhotoPreview(dataUrl) {
  [...bruceAvatarNodes, profileModalPreview].forEach((node) => {
    if (!node) return;
    node.style.backgroundImage = `url("${dataUrl}")`;
  });
}

function saveProfile() {
  const nextName = profileNicknameInput?.value.trim() || "Bruce";
  if (overviewProfileName) overviewProfileName.textContent = nextName;
  if (dashboardProfileTitle) dashboardProfileTitle.textContent = nextName ? `${nextName} Dashboard` : "My Dashboard";
  if (profileModalPreviewName) profileModalPreviewName.textContent = nextName;
  closeProfileModal();
  showToast("Profile updated for this local demo.", 1300);
}

function previewProfilePhoto(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result === "string") setProfilePhotoPreview(reader.result);
  });
  reader.readAsDataURL(file);
}

navItems.forEach((item) => item.addEventListener("click", () => showPanel(item.dataset.panel)));
panelButtons.forEach((button) => button.addEventListener("click", () => showPanel(button.dataset.panelTarget)));
sportTabs.forEach((tab) => tab.addEventListener("click", () => showSport(tab.dataset.sport)));
challengeCards.forEach((card) => card.addEventListener("click", () => openDonationDetail(card.dataset.challenge)));
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
sponsorStoreClose?.addEventListener("click", closeSponsorStorePreview);
closeSponsorStoreButton?.addEventListener("click", closeSponsorStorePreview);
visitSponsorStoreButton?.addEventListener("click", () => {
  showToast("External store connection demo", 1400);
});
sponsorStorePreview?.addEventListener("error", () => {
  sponsorStorePreview.hidden = true;
  sponsorStorePreview.classList.add("is-missing");
  if (sponsorStoreFallback) sponsorStoreFallback.hidden = false;
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
editProfileButton?.addEventListener("click", openProfileModal);
profileModalClose?.addEventListener("click", closeProfileModal);
profileCancel?.addEventListener("click", closeProfileModal);
profileSave?.addEventListener("click", saveProfile);
profileNicknameInput?.addEventListener("input", () => {
  if (profileModalPreviewName) profileModalPreviewName.textContent = profileNicknameInput.value.trim() || "Bruce";
});
profilePhotoInput?.addEventListener("change", () => {
  previewProfilePhoto(profilePhotoInput.files?.[0]);
});
dashboardPeriodButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const period = button.dataset.dashboardPeriod || "monthly";
    if (period === "weekly" || period === "monthly") {
      event.stopPropagation();
      toggleDashboardPeriodMenu(period);
    } else {
      openDashboardPeriodMenu = "";
      renderDashboardPeriodMenus();
    }
    activeDashboardPeriod = period;
    renderHealthDashboardView();
  });
});
dashboardPeriodMenus.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-dashboard-period-option]");
    if (!option) return;
    event.stopPropagation();
    const menuType = option.dataset.dashboardPeriodOption;
    dashboardPeriodMenuState[menuType] = option.dataset.dashboardPeriodValue;
    renderDashboardPeriodMenus();
    renderHealthDashboardView();
  });
});
document.addEventListener("click", (event) => {
  if (event.target.closest(".dashboard-period-tabs")) return;
  if (!openDashboardPeriodMenu) return;
  openDashboardPeriodMenu = "";
  renderDashboardPeriodMenus();
});
dashboardWorkoutCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.workoutType === "others" && !customDashboardActivity) {
      toggleAddActivityPicker(true);
      return;
    }
    activeDashboardWorkout = card.dataset.workoutType || "walking";
    toggleAddActivityPicker(false);
    renderHealthDashboardView();
  });
});
addActivityOptions.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    applyAddedActivity(button.dataset.addActivityOption);
  });
});
profileModal?.addEventListener("click", (event) => {
  if (event.target === profileModal) closeProfileModal();
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
    closeProfileModal();
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
    showToast("Wallet confirmed. You can now join a donation challenge.");
  } catch (error) {
    setWalletConnected("");
    showToast(error?.code === 4001 ? "Wallet confirmation rejected." : "Wallet connection failed.");
  }
});

walletProfileButton?.addEventListener("click", () => {
  if (!walletConnected) return;
  const shouldOpen = walletMenu.hidden;
  walletMenu.hidden = !shouldOpen;
  walletMenu.classList.toggle("open", shouldOpen);
});

disconnectWalletButton.addEventListener("click", async () => {
  walletButton.textContent = "Disconnecting";
  const revoked = await revokeWalletPermissions();
  setWalletConnected("");
  showToast(revoked ? "Wallet permission revoked. Connect will ask again." : "Wallet disconnected in Move2Give.");
});

donationReceiptPreviewClose?.addEventListener("click", closeDonationReceiptPreview);
donationReceiptDownload?.addEventListener("click", downloadDonationReceiptPreview);

donationReceiptPreviewModal?.addEventListener("click", (event) => {
  if (event.target === donationReceiptPreviewModal) closeDonationReceiptPreview();
});

document.addEventListener("click", (event) => {
  const taxNgoButton = event.target.closest("[data-tax-ngo]");
  if (taxNgoButton) {
    taxSetupState.selected = taxNgoButton.dataset.taxNgo || "unicef";
    taxSetupState.editing = false;
    renderTaxSetupPanel();
    return;
  }

  const taxSubmitButton = event.target.closest("[data-tax-submit]");
  if (taxSubmitButton) {
    const selected = taxSetupState.selected;
    const isSubmitted = Boolean(taxSetupState.submitted[selected]);
    if (isSubmitted && !taxSetupState.editing) {
      taxSetupState.editing = true;
      renderTaxSetupPanel();
      return;
    }

    taxSetupState.profiles[selected] = {
      name: document.querySelector('[data-tax-field="name"]')?.value.trim() || "",
      ssn: document.querySelector('[data-tax-field="ssn"]')?.value.trim() || "",
      country: document.querySelector('[data-tax-field="country"]')?.value.trim() || "",
      region: document.querySelector('[data-tax-field="region"]')?.value.trim() || "",
      address: document.querySelector('[data-tax-field="address"]')?.value.trim() || "",
      postal: document.querySelector('[data-tax-field="postal"]')?.value.trim() || "",
    };
    taxSetupState.submitted[selected] = true;
    taxSetupState.editing = false;
    renderTaxSetupPanel();
    return;
  }

  const luckyHistoryRow = event.target.closest("[data-lucky-drop-history]");
  if (luckyHistoryRow) {
    openLuckyDropDetails(luckyHistoryRow.dataset.luckyDropHistory);
    return;
  }

  const luckyHistoryBackButton = event.target.closest("[data-lucky-history-back]");
  if (luckyHistoryBackButton) {
    setLuckyDropHistoryMode(false);
    setDonationHistoryFilter(activeDonationNgoFilter);
    return;
  }

  const receiptProgramCell = event.target.closest("#activity .donation-history-table:not(.lucky-drop-history-table) > div:not(.history-head) > span:first-child");
  if (receiptProgramCell) {
    openDonationReceiptPreview(receiptProgramCell.closest("[data-ngo-history-tags]"));
    return;
  }

  const filterReset = event.target.closest("[data-ngo-filter-reset]");
  if (filterReset) {
    setDonationHistoryFilter("all");
    return;
  }

  const ngoOption = event.target.closest("[data-add-ngo-option]");
  if (ngoOption) {
    applyAddedNgo(ngoOption.dataset.addNgoOption);
    return;
  }

  const ngoCard = event.target.closest("#activity .receipt-card-grid .receipt-card");
  if (ngoCard) {
    if (ngoCard.matches("[data-lucky-drops-wallet-card]")) {
      openLuckyDropsHistory();
      return;
    }
    const addNgoCard = document.querySelector("[data-add-ngo-card]");
    if (ngoCard === addNgoCard && addNgoCard?.classList.contains("receipt-add-ngo")) {
      toggleAddNgoPicker(addNgoCard.getAttribute("aria-expanded") !== "true");
      return;
    }
    if (ngoCard.dataset.ngoFilterCard) {
      setLuckyDropHistoryMode(false);
      setDonationHistoryFilter(ngoCard.dataset.ngoFilterCard);
      return;
    }
  }

  if (!event.target.closest(".receipt-wallet-card")) {
    toggleAddNgoPicker(false);
  }

  if (!walletCard.contains(event.target)) {
    walletMenu.classList.remove("open");
    walletMenu.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const luckyHistoryRow = event.target.closest("[data-lucky-drop-history]");
  if (luckyHistoryRow) {
    event.preventDefault();
    openLuckyDropDetails(luckyHistoryRow.dataset.luckyDropHistory);
    return;
  }
  const card = event.target.closest("#activity .receipt-card-grid .receipt-card");
  if (!card) return;
  event.preventDefault();
  if (card.matches("[data-lucky-drops-wallet-card]")) {
    openLuckyDropsHistory();
    return;
  }
  if (card.matches("[data-add-ngo-card]") && card.classList.contains("receipt-add-ngo")) {
    toggleAddNgoPicker(card.getAttribute("aria-expanded") !== "true");
    return;
  }
  if (card.dataset.ngoFilterCard) {
    setLuckyDropHistoryMode(false);
    setDonationHistoryFilter(card.dataset.ngoFilterCard);
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
  const amountButton = event.target.closest("[data-donation-amount]");
  if (amountButton) {
    updateSelectedDonationUI(Number(amountButton.dataset.donationAmount));
    return;
  }

  const inlineJoinButton = event.target.closest(".inline-join");
  if (inlineJoinButton) {
    const card = inlineJoinButton.closest(".challenge-card[data-challenge]");
    if (card?.dataset.challenge) openDonationDetail(card.dataset.challenge);
    return;
  }

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

document.addEventListener("change", (event) => {
  const input = event.target.closest("#custom-donation-amount");
  if (!input) return;

  const detail = challengeDetails[selectedChallenge];
  const minimum = getMinimumDonation(detail);
  const requestedAmount = Number(input.value);
  updateSelectedDonationUI(requestedAmount, requestedAmount < minimum);
});

sponsorStoreModal?.addEventListener("click", (event) => {
  if (event.target === sponsorStoreModal) closeSponsorStorePreview();
});

luckyAirDropModal?.addEventListener("click", (event) => {
  if (event.target === luckyAirDropModal) closeLuckyAirDrop();
});

luckyDropsWalletModal?.addEventListener("click", (event) => {
  if (event.target === luckyDropsWalletModal) closeLuckyDropsWallet();
});

luckyDropsWalletClose?.addEventListener("click", closeLuckyDropsWallet);
closeLuckyDropsWalletButton?.addEventListener("click", closeLuckyDropsWallet);

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sponsor-url]");
  if (!button) return;
  const url = button.dataset.sponsorUrl;
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
});

document.addEventListener("click", (event) => {
  const luckyStatusButton = event.target.closest("#open-lucky-drops-from-status");
  if (luckyStatusButton) {
    if (luckyAirDropSaved.has(selectedChallenge)) {
      goToLuckyDropsWallet();
    } else {
      triggerLuckyAirDropDemo(selectedChallenge);
    }
    return;
  }

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
renderDashboardPeriodMenus();
renderHealthDashboardView();
renderTaxSetupPanel();
updateAllJoinedCards();
syncDataFlowWalletState();
startLiveTelemetry();
startRewardRankLoop();
startLiveVerificationLoop();




