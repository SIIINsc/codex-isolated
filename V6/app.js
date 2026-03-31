/* Local editor mode only. Real public operator access belongs behind hosted server-side auth. */

const STORAGE_KEY = "scscp_state";
const ADMIN_KEY = "scscp_admin";
const THEME_KEY = "scscp_theme";
const MODE_KEY = "scscp_view_mode";
const ROLE_COLOR_OPTIONS = [
  { label: "Azure", value: "#4cc3ff" },
  { label: "Violet", value: "#9e62ff" },
  { label: "Crimson", value: "#ff6b6b" },
  { label: "Slate", value: "#8fa1b8" },
  { label: "Steel", value: "#7f93ad" },
  { label: "Pearl", value: "#b6c4d6" },
  { label: "Teal", value: "#5fa6a0" },
  { label: "Amber", value: "#c39a5f" },
  { label: "Rust", value: "#b36a4c" },
  { label: "Olive", value: "#8d9960" },
];
const ONLINE_BUILD = Boolean(window.__ONLINE_BUILD__);
const VIEWER_ONLY_BUILD = Boolean(window.__VIEWER_ONLY_BUILD__);
const ONLINE_AUTH_KEY = "scscp_online_auth";
const VISIBILITY_OPTIONS = [
  { value: "basic", label: "Basic only" },
  { value: "both", label: "Basic + Advanced" },
  { value: "advanced", label: "Advanced only" },
];
const DEFAULT_SUB_ELEMENTS = [
  "When to use",
  "Expected Outcome",
  "Context",
  "Meaning",
];
const DEFAULT_THEME_NAME = "stanton";

const CORE_PAGE_DEFINITIONS = {
  home: { id: "home", title: "Home", navLabel: "Home" },
  protocol: { id: "protocol", title: "Communication Doctrine", navLabel: "Communication" },
  "meta-space": { id: "meta-space", title: "Ship Meta", navLabel: "Ship Meta" },
  "meta-fps": { id: "meta-fps", title: "FPS Combat", navLabel: "FPS Combat" },
  "recommended-orgs": { id: "recommended-orgs", title: "Organizations", navLabel: "Organizations" },
};

const DEFAULT_STATE = {
  header: {
    eyebrow: "Spacecombat.gg",
    title: "SpaceCombat.gg",
    subtitle: "Doctrine-first Star Citizen PvP guidance: cleaner decisions, sharper reps, interpreted meta, trusted recommendations, and competitive direction.",
    intro: "SpaceCombat.gg is built for players who want signal over noise: practical doctrine, better habits, clearer org discovery, and meta interpretation that actually helps you fight better.",
    logoSrc: "",
    logoAlt: "Header logo",
    backgroundSrc: "",
    themeBackgrounds: {},
    themePageBackgrounds: {},
    socialIcons: [
      { src: "", url: "" },
      { src: "", url: "" },
      { src: "", url: "" },
    ],
  },
  ui: {
    theme: DEFAULT_THEME_NAME,
    viewMode: "basic",
  },
  proPage: {
    title: "Operator access",
    body: "SpaceCombat.gg is evolving into a doctrine-first PvP authority: advanced training modules, curated organization recommendations, interpreted ship/component meta, and premium competitive tooling. This page is the staging ground for that next layer.",
    features: [
      "Recommended organizations with clear editorial vs sponsored separation",
      "Advanced training modules and practical combat breakdowns",
      "Interpreted ship and component meta, not raw stat dumps",
      "Premium operator notes, return-value briefings, and curated competitive insight",
    ],
    ctaText: "Request access",
    ctaUrl: "",
  },
  roleLabels: [
    { id: "shotCaller", label: "Shot caller", color: "#9e62ff" },
    { id: "yourself", label: "Yourself", color: "#4cc3ff" },
    { id: "enemyTarget", label: "Enemy target", color: "#ff6b6b" },
  ],
  onlineAuth: [],
  footer: {
    lines: ["SpaceCombat.gg — doctrine, training, trusted recommendations, and competitive PvP insight for Star Citizen."],
    note: "Public launch should emphasize editorial trust, structured training value, and real hosted authentication for operator access.",
  },
  blocks: [
    {
      id: "rules-block",
      type: "rules",
      title: "Doctrine Modules",
      sections: [
        {
          id: "rules-core",
          title: "Core Comms Rules",
          subtitle: "Short calls. Clear state. No wasted breath.",
          body:
            "One call equals one state. No narration. Silence is often correct.\nSame breath rule (3–5 seconds): same breath means the name can stay omitted; once time passes, the name comes back in.\nCategory change means the name comes back in.\nPersonal state uses the speaker name; shared truth does not.",
          note: "",
        },
        {
          id: "rules-critical",
          title: "Critical Definitions",
          subtitle: "Standardize intent, reset logic, and survival language.",
          body:
            "Remove 'Push' entirely. It is vague and it muddies intent.\nRegroup on: re-center on anchor while staying in the fight or ready to re-enter quickly.\nReset: break contact and rebuild the fight state cleanly.\nRed (PERSONAL): critical health — fragile, urgent, but not automatically seconds from death.",
          note: "",
        },
      ],
    },
    {
      id: "flows-block",
      type: "flows",
      title: "Execution Modules",
      contextText: "",
      flows: [
        {
          id: "flow-target",
          title: "Target Cycle",
          exampleLabel: "Example",
          exampleTargetId: "",
          rows: [
            {
              id: "flow-target-row-1",
              rowTitle: "Target acquisition",
              rowContext: "Lead calls target, team moves through visual states.",
              elements: [
                { id: "el-1", type: "node", text: "Target", role: "shotCaller", emphasis: false },
                { id: "el-2", type: "node", text: "Looking / Seen", role: "yourself", emphasis: false },
                { id: "el-3", type: "node", text: "Merging", role: "yourself", emphasis: false },
              ],
            },
            {
              id: "flow-target-row-2",
              rowTitle: "Effectiveness states",
              rowContext: "Shared truth drives next step.",
              elements: [
                { id: "el-4", type: "node", text: "Effective / Not effective", role: "yourself", emphasis: false },
                { id: "el-5", type: "node", text: "Red (TARGET)", role: "enemyTarget", emphasis: false },
                { id: "el-6", type: "node", text: "Splash", role: "enemyTarget", emphasis: false },
                { id: "el-7", type: "divider", text: "or" },
                { id: "el-8", type: "node", text: "Target out", role: "shotCaller", emphasis: false },
              ],
            },
            {
              id: "flow-target-row-3",
              rowTitle: "Cycle restart",
              rowContext: "",
              elements: [{ id: "el-9", type: "node", text: "New Target", role: "shotCaller", emphasis: false }],
            },
          ],
        },
        {
          id: "flow-regroup",
          title: "Regroup Cycle",
          exampleLabel: "Example",
          exampleTargetId: "",
          rows: [
            {
              id: "flow-regroup-row-1",
              rowTitle: "Regroup flow",
              rowContext: "Anchor call with readiness confirmation.",
              elements: [
                { id: "el-10", type: "node", text: "Regroup on", role: "shotCaller", emphasis: false },
                { id: "el-11", type: "node", text: "Distance (optional)", role: "yourself", emphasis: false },
                { id: "el-12", type: "node", text: "Ready", role: "yourself", emphasis: false },
              ],
            },
          ],
        },
        {
          id: "flow-threat",
          title: "Threat Interrupt",
          exampleLabel: "Example",
          exampleTargetId: "",
          rows: [
            {
              id: "flow-threat-row-1",
              rowTitle: "Threat chain",
              rowContext: "Personal threat interrupts at any time.",
              elements: [
                { id: "el-13", type: "node", text: "Aggro", role: "yourself", emphasis: false },
                { id: "el-14", type: "node", text: "Evasive", role: "yourself", emphasis: false },
                { id: "el-15", type: "node", text: "Low boost", role: "yourself", emphasis: false },
                { id: "el-16", type: "node", text: "Clear", role: "yourself", emphasis: false },
              ],
            },
            {
              id: "flow-threat-row-2",
              rowTitle: "",
              rowContext: "",
              elements: [
                { id: "el-17", type: "node", text: "Red (PERSONAL)", role: "yourself", emphasis: true },
                { id: "el-18", type: "note", text: "Critical state interrupt at any time" },
              ],
            },
          ],
        },
      ],
    },
    { id: "group-team-lead", type: "calloutGroup", title: "TEAM LEAD (INTENT)" },
    { id: "group-regroup", type: "calloutGroup", title: "REGROUP RESPONSES" },
    { id: "group-threat", type: "calloutGroup", title: "PILOT PERSONAL THREAT" },
    { id: "group-geometry", type: "calloutGroup", title: "TEAM GEOMETRY" },
    { id: "group-attachment", type: "calloutGroup", title: "ATTACHMENT" },
    { id: "group-awareness", type: "calloutGroup", title: "TARGET AWARENESS" },
    { id: "group-effectiveness", type: "calloutGroup", title: "ENGAGEMENT EFFECTIVENESS" },
    { id: "group-target-status", type: "calloutGroup", title: "TARGET STATUS (SHARED TRUTH)" },
    { id: "group-kill", type: "calloutGroup", title: "KILL / DEATH" },
  ],
  callouts: [
    {
      id: "call-forward",
      callName: "Forward",
      groupId: "group-team-lead",
      context: "Team lead sets forward pressure or push direction.",
      meaning: "Advance toward target space with intent.",
      whenToUse: ["Lead wants team to press"],
      responseExpected: "No response required unless queried.",
      notes: "Used to initiate aggressive movement without narration.",
    },
    {
      id: "call-target",
      callName: "Target",
      groupId: "group-team-lead",
      context: "Team lead designates a new focus target.",
      meaning: "Primary engagement target for the team.",
      whenToUse: ["Switching focus", "Calling a fresh target"],
      responseExpected: "Acknowledge via action; optional verbal.",
      notes: "Name required if time has passed or category change occurs.",
    },
    {
      id: "call-target-out",
      callName: "Target out",
      groupId: "group-team-lead",
      context: "Lead confirms target is no longer valid or lost.",
      meaning: "Drop target, shift awareness.",
      whenToUse: ["Target destroyed", "Target lost or no longer relevant"],
      responseExpected: "Team reacquires or awaits new target.",
      notes: "Triggers new target cycle.",
    },
    {
      id: "call-regroup-on",
      callName: "Regroup on",
      groupId: "group-team-lead",
      context: "Regroup on an anchor while remaining engaged or ready to re-engage.",
      meaning: "Re-center on anchor without breaking contact.",
      whenToUse: ["Team needs cohesion", "Resetting formation quickly"],
      responseExpected: "Distance optional, Ready when set.",
      notes: "Regroup on is not Reset.",
    },
    {
      id: "call-reset",
      callName: "Reset",
      groupId: "group-team-lead",
      context: "Lead calls disengage and reset fight state.",
      meaning: "Break contact and reset.",
      whenToUse: ["Fight state compromised", "Need clean reset"],
      responseExpected: "Distance, Ready once reset.",
      notes: "Breaks engagement.",
    },
    {
      id: "call-hold",
      callName: "Hold",
      groupId: "group-team-lead",
      context: "Lead holds current position or state.",
      meaning: "Maintain state; no new push.",
      whenToUse: ["Stabilize", "Wait for additional info"],
      responseExpected: "No response required.",
      notes: "Silence is correct unless changed.",
    },
    {
      id: "call-distance",
      callName: "Distance",
      groupId: "group-regroup",
      context: "Report distance from anchor.",
      meaning: "Time/distance until regroup complete.",
      whenToUse: ["During regroup calls"],
      responseExpected: "Optional follow-up.",
      notes: "Optional in regroup cycle.",
    },
    {
      id: "call-ready",
      callName: "Ready",
      groupId: "group-regroup",
      context: "Confirm regroup completion.",
      meaning: "Regroup complete and ready.",
      whenToUse: ["Once regrouped"],
      responseExpected: "Lead continues flow.",
      notes: "Ends regroup cycle.",
    },
    {
      id: "call-aggro",
      callName: "Aggro",
      groupId: "group-threat",
      context: "Pilot is currently targeted or pressured.",
      meaning: "Threat on me.",
      whenToUse: ["Receiving focused fire"],
      responseExpected: "Team awareness; support if possible.",
      notes: "Personal state uses speaker name if time passes.",
    },
    {
      id: "call-evasive",
      callName: "Evasive",
      groupId: "group-threat",
      context: "Pilot is evading to survive.",
      meaning: "I'm defensive and maneuvering hard.",
      whenToUse: ["Under pressure"],
      responseExpected: "Team aware of reduced firepower.",
      notes: "Followed by Clear when safe.",
    },
    {
      id: "call-low-boost",
      callName: "Low boost",
      groupId: "group-threat",
      context: "Pilot is low on boost/escape energy.",
      meaning: "Limited evasive capability.",
      whenToUse: ["Boost nearly depleted"],
      responseExpected: "Team aware of constraint.",
      notes: "Critical in threat chain.",
    },
    {
      id: "call-clear",
      callName: "Clear",
      groupId: "group-threat",
      context: "Pilot is no longer threatened.",
      meaning: "Threat resolved; back to normal.",
      whenToUse: ["Aggro cleared"],
      responseExpected: "Resume normal comms.",
      notes: "Ends threat interrupt.",
    },
    {
      id: "call-red-personal",
      callName: "Red (PERSONAL)",
      groupId: "group-threat",
      context: "Pilot is critical health but not necessarily dying.",
      meaning: "Critical state, fragile even if safe.",
      whenToUse: ["Hull/health critical"],
      responseExpected: "Team aware of fragility.",
      notes: "Personal state.",
    },
    {
      id: "call-ball-in",
      callName: "Ball in",
      groupId: "group-geometry",
      context: "Team tightens formation.",
      meaning: "Compress formation around anchor.",
      whenToUse: ["Need tighter geometry"],
      responseExpected: "Adjust positioning.",
      notes: "No narration; respond with action.",
    },
    {
      id: "call-ball-out",
      callName: "Ball out",
      groupId: "group-geometry",
      context: "Team expands formation.",
      meaning: "Spread out for coverage.",
      whenToUse: ["Need wider spacing"],
      responseExpected: "Adjust spacing.",
      notes: "Used by lead.",
    },
    {
      id: "call-with",
      callName: "With",
      groupId: "group-attachment",
      context: "Pilot is attached to lead/anchor.",
      meaning: "I'm on the anchor.",
      whenToUse: ["Confirming attachment"],
      responseExpected: "Lead acknowledges implicitly.",
      notes: "Attachment state.",
    },
    {
      id: "call-with-pilot",
      callName: "With pilot",
      groupId: "group-attachment",
      context: "Pilot is attached to another pilot.",
      meaning: "I'm with a named pilot.",
      whenToUse: ["Buddy pairing"],
      responseExpected: "Named pilot aware.",
      notes: "Name required by rule.",
    },
    {
      id: "call-looking",
      callName: "Looking",
      groupId: "group-awareness",
      context: "Searching for target.",
      meaning: "Target not seen yet.",
      whenToUse: ["After target call"],
      responseExpected: "Seen or No contact.",
      notes: "Target cycle.",
    },
    {
      id: "call-no-contact",
      callName: "No contact",
      groupId: "group-awareness",
      context: "Cannot see target.",
      meaning: "Target not in sight.",
      whenToUse: ["Target lost"],
      responseExpected: "Lead adjusts.",
      notes: "Shared truth; no name.",
    },
    {
      id: "call-seen",
      callName: "Seen",
      groupId: "group-awareness",
      context: "Target visual acquired.",
      meaning: "Target in sight.",
      whenToUse: ["Target located"],
      responseExpected: "Proceed to merge.",
      notes: "Shared truth.",
    },
    {
      id: "call-merging",
      callName: "Merging",
      groupId: "group-effectiveness",
      context: "Closing into merge.",
      meaning: "Entering merge stage.",
      whenToUse: ["After seen"],
      responseExpected: "Team aligns.",
      notes: "Target cycle.",
    },
    {
      id: "call-effective",
      callName: "Effective",
      groupId: "group-effectiveness",
      context: "Attack is effective.",
      meaning: "Hits/pressure landing.",
      whenToUse: ["Shots on target"],
      responseExpected: "Continue pressure.",
      notes: "Shared truth.",
    },
    {
      id: "call-very-effective",
      callName: "Very effective",
      groupId: "group-effectiveness",
      context: "Attack is highly effective.",
      meaning: "Significant damage.",
      whenToUse: ["Target crumbling"],
      responseExpected: "Maintain focus.",
      notes: "Shared truth.",
    },
    {
      id: "call-not-effective",
      callName: "Not effective",
      groupId: "group-effectiveness",
      context: "Attack is not landing.",
      meaning: "Shots missing or not damaging.",
      whenToUse: ["No effect"],
      responseExpected: "Adjust tactics.",
      notes: "Shared truth.",
    },
    {
      id: "call-chasing",
      callName: "Chasing",
      groupId: "group-effectiveness",
      context: "Target is running and being chased.",
      meaning: "Pursuit state.",
      whenToUse: ["Target disengaging"],
      responseExpected: "Team keeps awareness.",
      notes: "Shared truth.",
    },
    {
      id: "call-red-target",
      callName: "Red (TARGET)",
      groupId: "group-target-status",
      context: "Target critical.",
      meaning: "Target is fragile.",
      whenToUse: ["Target at critical health"],
      responseExpected: "Press for splash.",
      notes: "Shared truth only.",
    },
    {
      id: "call-splash",
      callName: "Splash",
      groupId: "group-kill",
      context: "Target destroyed.",
      meaning: "Confirmed kill.",
      whenToUse: ["Target destroyed"],
      responseExpected: "Lead selects new target.",
      notes: "Shared truth.",
    },
    {
      id: "call-full-kill",
      callName: "Full kill",
      groupId: "group-kill",
      context: "Final confirmation of kill.",
      meaning: "Target confirmed dead.",
      whenToUse: ["Kill fully confirmed"],
      responseExpected: "Team shifts focus.",
      notes: "Shared truth.",
    },
    {
      id: "call-down-target",
      callName: "Down (TARGET)",
      groupId: "group-kill",
      context: "Target downed or disabled.",
      meaning: "Target neutralized.",
      whenToUse: ["Target disabled"],
      responseExpected: "Assess follow-up.",
      notes: "Shared truth.",
    },
    {
      id: "call-down-personal",
      callName: "Down (PERSONAL)",
      groupId: "group-kill",
      context: "Pilot is downed.",
      meaning: "I'm down.",
      whenToUse: ["Personal down state"],
      responseExpected: "Team aware of loss.",
      notes: "Personal state uses speaker name if time passes.",
    },
    {
      id: "call-dead",
      callName: "Dead",
      groupId: "group-kill",
      context: "Pilot is dead.",
      meaning: "I'm out.",
      whenToUse: ["Personal death state"],
      responseExpected: "Team adapts.",
      notes: "Personal state.",
    },
  ],
};

const THEMES = {
  stanton: {
    label: "Stanton",
    colors: {
      "--bg": "#090c12",
      "--panel": "#121720",
      "--panel-elev": "#1a2230",
      "--line": "#2c394e",
      "--text": "#e4ebf3",
      "--muted": "#9dabbc",
      "--accent": "#7fa6c9",
      "--accent-strong": "#b9c8d8",
      "--danger": "#b8707f",
      "--success": "#7fb6a0",
      "--warning": "#bda980",
    },
  },
  grimhex: {
    label: "Grimex",
    colors: {
      "--bg": "#0b0c0f",
      "--panel": "#14161b",
      "--panel-elev": "#1b1e25",
      "--line": "#2b2f39",
      "--text": "#e4e7ec",
      "--muted": "#9ba2ae",
      "--accent": "#b44f4f",
      "--accent-strong": "#c86262",
      "--danger": "#d66a6a",
      "--success": "#7fbfa1",
      "--warning": "#c2a878",
    },
  },
  pyro: {
    label: "Pyro",
    colors: {
      "--bg": "#070607",
      "--panel": "#141013",
      "--panel-elev": "#1d161b",
      "--line": "#34262d",
      "--text": "#ece5e8",
      "--muted": "#b9a7af",
      "--accent": "#8d3f4f",
      "--accent-strong": "#aa5568",
      "--danger": "#b65a63",
      "--success": "#7ea08d",
      "--warning": "#af8a76",
    },
  },
};

let stateLoadWarning = "";
let state = loadState();
let adminMode = loadAdmin();
let activeTheme = loadTheme();
let activeMode = loadViewMode();
let expandedIds = new Set();
let editingBlocks = new Set();
let openFlowEditors = new Set();
let pendingScrollY = null;
let currentPageId = "home";
let shouldAnimatePageContent = false;
let shouldAnimateNavDeploy = false;
let draggedPageId = "";
let sharedNavIndicatorTarget = null;
const pinnedStudyCardIds = new Set();
let studyOverlayBackdrop = null;

const headerContent = document.getElementById("headerContent");
const footerContent = document.getElementById("footerContent");
const categoryNav = document.getElementById("categoryNav");
const blocksContainer = document.getElementById("blocksContainer");
const adminToggle = document.getElementById("adminToggle");
const adminStatus = document.getElementById("adminStatus");
const themeSelect = document.getElementById("themeSelect");
const adminBox = document.getElementById("adminBox");
const headerSocials = document.getElementById("headerSocials");
const pageNav = document.getElementById("pageNav");
const headerModeToggle = document.getElementById("headerModeToggle");
const siteHeader = document.querySelector(".site-header");
const studyHoverCloseTimers = new Map();
let headerBgTransitionTimer = null;
let pageBgTransitionTimer = null;

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    if (window.__EXPORTED_STATE__ && typeof window.__EXPORTED_STATE__ === "object") {
      return normalizeState(deepClone(window.__EXPORTED_STATE__));
    }
    return normalizeState(deepClone(DEFAULT_STATE));
  }
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return normalizeState(migrateLegacyCallouts(parsed));
    }
    if (parsed && typeof parsed === "object") {
      return normalizeState(parsed);
    }
  } catch (error) {
    console.warn("Failed to parse stored data", error);
    stateLoadWarning = "State reset due to load error";
  }
  return normalizeState(deepClone(DEFAULT_STATE));
}

function migrateLegacyCallouts(callouts) {
  const nextState = deepClone(DEFAULT_STATE);
  const groupMap = new Map(
    nextState.blocks
      .filter((block) => block.type === "calloutGroup")
      .map((block) => [block.title, block.id])
  );
  nextState.callouts = callouts.map((item) => {
    const groupId = groupMap.get(item.category) || createId("group");
    if (!groupMap.has(item.category)) {
      groupMap.set(item.category, groupId);
      nextState.blocks.splice(nextState.blocks.length - 1, 0, {
        id: groupId,
        type: "calloutGroup",
        title: item.category,
      });
    }
    return {
      id: createId("callout"),
      callName: item.callName,
      groupId,
      context: item.context,
      meaning: item.meaning,
      whenToUse: item.whenToUse || [],
      responseExpected: item.responseExpected,
      notes: item.notes,
    };
  });
  return nextState;
}


function createBlankInfoBlock() {
  return {
    id: createId("rules"),
    type: "rules",
    title: "Information Box",
    videos: [],
    sections: [
      {
        id: createId("rules-section"),
        title: "New Information Sub-Box",
        subtitle: "",
        body: "",
        mediaType: "",
        mediaSrc: "",
        mediaVideoType: "local",
        backgroundSrc: "",
        visibility: "both",
      },
    ],
  };
}

function createBlankExampleBlock() {
  return {
    id: createId("flows"),
    type: "flows",
    title: "Flow Box",
    contextText: "",
    flows: [],
  };
}

function createBlankStudyBlock() {
  return {
    id: createId("group"),
    type: "calloutGroup",
    title: "Study Box",
    contextText: "",
    subBoxes: [{ id: createId("study-sub"), title: "Study Sub-Box", description: "" }],
  };
}


function createBlankShipMetaBlock() {
  return {
    id: createId("ship-meta"),
    type: "shipMeta",
    title: "Ship Meta Box",
    metaItems: [createBlankShipMetaItem()],
  };
}

function createBlankOrgShowcaseBlock() {
  return {
    id: createId("org-showcase"),
    type: "orgShowcase",
    title: "Organization Presentation",
    intro: "Use this block to present sponsored organizations, recommended organizations, org of the month, or editorial spotlights.",
    orgCards: [createBlankOrgCard()],
  };
}

function createBlankOrgCard() {
  return {
    id: createId("org-card"),
    name: "New Organization",
    classification: "Recommended Organization",
    status: "Open Recruitment",
    fit: "Best for pilots who want structure, reps, and serious comms.",
    logoSrc: "",
    backgroundSrc: "",
    achievements: ["Achievement or credibility point"],
    contactName: "",
    contactRole: "",
    contactHandle: "",
    discordUrl: "",
    discordLogoSrc: "",
    websiteUrl: "",
    rsiUrl: "",
    rsiLogoSrc: "",
    mediaCaption: "",
    body: "Explain what makes this org worth attention, who it fits, and why it stands out.",
    notes: "Description text for the organization.",
    ctaText: "Visit Organization",
    ctaUrl: "",
  };
}

function createBlankShipMetaItem() {
  const createModeData = () => ({
    components: [
      { id: createId("ship-component"), key: "weapon", component: "", whereToBuy: "", quantity: 1 },
      { id: createId("ship-component"), key: "shield", component: "", whereToBuy: "", quantity: 1 },
      { id: createId("ship-component"), key: "powerplant", component: "", whereToBuy: "", quantity: 1 },
      { id: createId("ship-component"), key: "cooler", component: "", whereToBuy: "", quantity: 1 },
    ],
    signatures: { em: "", ir: "", crossSection: "", sustainedDps: "", alphaDamage: "", shieldHp: "", armorHp: "", totalHp: "" },
    summary: "",
    lifeSupportOffRequired: false,
  });
  return {
    id: createId("ship-meta-item"),
    shipName: "",
    roleTagline: "",
    backgroundSrc: "",
    infoUrl: "",
    activeMode: "premium",
    modes: {
      premium: createModeData(),
      pu: createModeData(),
    },
  };
}


function inferShipComponentIcon(slot) {
  const value = String(slot || "").toLowerCase();
  if (value.includes("shield")) return "shield";
  if (value.includes("power")) return "powerplant";
  if (value.includes("cool")) return "cooler";
  return "weapon";
}

function createDefaultHeroItem(type = "text") {
  if (type === "image") {
    return { id: createId("hero"), type: "image", src: "", alt: "" };
  }
  if (type === "video") {
    return { id: createId("hero"), type: "video", src: "" };
  }
  return { id: createId("hero"), type: "text", text: "" };
}

function createDefaultHomePage() {
  return {
    id: "home",
    title: "SpaceCombat.gg Training Center",
    subtitle: "Doctrine, interpreted meta, and recommendation systems for serious Star Citizen PvP players.",
    heroEnabled: false,
    heroBackgroundSrc: "",
    heroColumns: [
      { id: createId("hero-col"), text: "", mediaItems: [] },
      { id: createId("hero-col"), text: "", mediaItems: [] },
    ],
    heroItems: [createDefaultHeroItem("text")],
    blocks: [createBlankInfoBlock()],
    callouts: [],
    subPages: [
      { id: "protocol", title: CORE_PAGE_DEFINITIONS.protocol.navLabel, navLabel: CORE_PAGE_DEFINITIONS.protocol.navLabel, backgroundSrc: "", staticSrc: "", mediaType: "" },
      { id: "meta-space", title: CORE_PAGE_DEFINITIONS["meta-space"].title, navLabel: CORE_PAGE_DEFINITIONS["meta-space"].navLabel, backgroundSrc: "", staticSrc: "", mediaType: "" },
      { id: "meta-fps", title: CORE_PAGE_DEFINITIONS["meta-fps"].title, navLabel: CORE_PAGE_DEFINITIONS["meta-fps"].navLabel, backgroundSrc: "", staticSrc: "", mediaType: "" },
      { id: "recommended-orgs", title: CORE_PAGE_DEFINITIONS["recommended-orgs"].title, navLabel: CORE_PAGE_DEFINITIONS["recommended-orgs"].navLabel, backgroundSrc: "", staticSrc: "", mediaType: "" },
    ],
  };
}

function createDefaultHeroColumn() {
  return { id: createId("hero-col"), text: "", mediaItems: [] };
}

function createMetaPage(pageId, title) {
  return {
    id: pageId,
    title,
    hero: {
      title: title,
      subtitle: "",
      items: [createDefaultHeroItem("text")],
    },
    blocks: [createBlankInfoBlock()],
    callouts: [],
  };
}

function createDefaultProtocolPage() {
  return {
    id: "protocol",
    title: CORE_PAGE_DEFINITIONS.protocol.title,
    hero: {
      title: CORE_PAGE_DEFINITIONS.protocol.title,
      subtitle: "",
      items: [createDefaultHeroItem("text")],
    },
    blocks: [createBlankInfoBlock()],
    callouts: [],
  };
}

function createRecommendedOrgsPage() {
  return {
    id: "recommended-orgs",
    title: CORE_PAGE_DEFINITIONS["recommended-orgs"].title,
    hero: {
      title: CORE_PAGE_DEFINITIONS["recommended-orgs"].title,
      subtitle: "Editorial org discovery for players who want structure, cleaner comms, better reps, and a serious PvP home — not random hype.",
      items: [createDefaultHeroItem("text")],
    },
    blocks: [
      {
        id: createId("rules"),
        type: "rules",
        title: "Editorial Standard",
        videos: [],
        sections: [
          {
            id: createId("rules-section"),
            title: "What this page is for",
            subtitle: "Doctrine-first org discovery",
            body: "This page should answer a brutally practical question: what org should I actually join if I want structure, accountability, reps, and a credible PvP culture?\nRecommendations should make fit obvious fast instead of hiding behind vague prestige language.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
          {
            id: createId("rules-section"),
            title: "Trust rules",
            subtitle: "Authority dies when incentives get blurry",
            body: "Sponsored placement must be labeled. Editorial recommendations must stand on their own.\nTraining quality, comms standards, roster activity, leadership quality, and player fit should be visible trust signals from day one.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
          {
            id: createId("rules-section"),
            title: "What strong org discovery looks like",
            subtitle: "Fast fit, clear standards, honest tradeoffs",
            body: "Every org card should quickly tell the reader: who this is for, who this is not for, how serious it is, what kind of reps exist, and whether the culture actually helps people improve.\nThat is the product. Not logo spam. Not generic recruiting copy.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
        ],
      },
      {
        id: createId("rules"),
        type: "rules",
        title: "Recommendation Layers",
        videos: [],
        sections: [
          {
            id: createId("rules-section"),
            title: "Sponsored placement",
            subtitle: "Monetization lane",
            body: "Paid visibility is allowed if it stays visibly separate and still clears a minimum quality bar. Sponsored should never masquerade as editorial judgment.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
          {
            id: createId("rules-section"),
            title: "Org of the Month",
            subtitle: "Editorial spotlight lane",
            body: "A rotating spotlight for an org doing something genuinely worth showing: strong training loop, good leadership, clear doctrine, or real improvement culture.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
          {
            id: createId("rules-section"),
            title: "Recommended organizations",
            subtitle: "Best-fit discovery lane",
            body: "The main recommendation layer should help users find best fit by seriousness, role, schedule, and training style — not just browse a giant undifferentiated wall.",
            mediaType: "",
            mediaSrc: "",
            mediaVideoType: "local",
            backgroundSrc: "",
            visibility: "both",
          },
        ],
      },
      {
        id: createId("org-showcase"),
        type: "orgShowcase",
        title: "Organization Presentation",
        intro: "Use this section for high-trust org presentation: sponsored placement, editorial recommendation, org of the month, and recruitment contact info without the page feeling like an ad wall.",
        orgCards: [
          {
            id: createId("org-card"),
            name: "Org of the Month",
            classification: "Editorial Spotlight",
            status: "Spotlight Active",
            fit: "Best for players looking for a serious improvement culture with visible structure.",
            logoSrc: "",
            backgroundSrc: "",
            achievements: ["Strong training loop", "Clear leadership", "Recognizable PvP identity"],
            contactName: "Recruitment Lead",
            contactRole: "Primary Contact",
            contactHandle: "@handle",
            discordUrl: "",
            websiteUrl: "",
            rsiUrl: "",
            mediaCaption: "Optional caption for logo, screenshot, or org artwork.",
            body: "Use this card to explain why the org is featured right now, what kind of player it fits, and what makes it different from generic recruitment spam.",
            notes: "Editorial spotlight — not sponsored unless labeled otherwise.",
            ctaText: "Open Org Profile",
            ctaUrl: "",
          }
        ],
      },
      {
        id: "recommended-orgs-group",
        type: "calloutGroup",
        title: "Organizations Framework",
        contextText: "Editorial org discovery built around training quality, comms discipline, seriousness, and fit — with paid placement kept visibly separate.",
        videos: [],
        subBoxes: [
          { id: "recommended-sponsored", title: "Sponsored Organization", description: "Clearly separated paid placement." },
          { id: "recommended-spotlight", title: "Org of the Month", description: "Merit-based editorial spotlight." },
          { id: "recommended-editorial", title: "Recommended Organizations", description: "Curated recommendations by player fit and training value." },
          { id: "recommended-filters", title: "Player Fit Filters", description: "How discovery should narrow by seriousness, role, and schedule." }
        ],
      },
    ],
    callouts: [
      {
        id: createId("callout"),
        callName: "How recommendations should work",
        groupId: "recommended-orgs-group",
        subBoxId: "recommended-editorial",
        subElements: [
          { id: createId("subel"), title: "Who it fits", content: "Pilots looking for structure, active training, clear comms standards, and real competitive intent." },
          { id: createId("subel"), title: "Evaluation criteria", content: "Training cadence, leadership quality, roster activity, doctrine clarity, onboarding quality, and whether the org actually improves people." },
          { id: createId("subel"), title: "Trust rule", content: "Recommendations should explain why an org is included and who should skip it. No mystery rankings. No vague hype." },
          { id: createId("subel"), title: "Monetization boundary", content: "Sponsored placement is allowed, but it must never be confused with editorial recommendation." },
        ],
        notes: "This becomes the editorial standard for future org entries.",
        importantNote: "Authority dies the second paid placement and real recommendations blur together.",
        visibility: "both",
        imageSrc: "",
        videos: [],
      },
      {
        id: createId("callout"),
        callName: "Org profile template",
        groupId: "recommended-orgs-group",
        subBoxId: "recommended-spotlight",
        subElements: [
          { id: createId("subel"), title: "Fields to show", content: "Primary focus, timezone coverage, expected seriousness, training style, comms expectations, and ideal member profile." },
          { id: createId("subel"), title: "What matters", content: "Make fit obvious fast: who should join, who should not, and what kind of improvement culture exists." },
          { id: createId("subel"), title: "Editorial angle", content: "Highlight actual strengths instead of listing generic org marketing copy." },
          { id: createId("subel"), title: "Red flags", content: "Low activity, fake competitiveness, vague structure, or no clear training loop should be called out or excluded." },
        ],
        notes: "Good profiles reduce browsing friction and increase trust.",
        importantNote: "This page should feel like a serious recommendation engine, not an ad wall.",
        visibility: "both",
        imageSrc: "",
        videos: [],
      },
      {
        id: createId("callout"),
        callName: "Sponsored slot rules",
        groupId: "recommended-orgs-group",
        subBoxId: "recommended-sponsored",
        subElements: [
          { id: createId("subel"), title: "Labeling", content: "Use clear sponsored labeling on the card and in any surrounding section heading." },
          { id: createId("subel"), title: "Minimum quality bar", content: "Even sponsored entries should meet baseline activity, conduct, and usefulness standards." },
          { id: createId("subel"), title: "Separation", content: "Keep layout, badge treatment, and copy framing distinct from editorial recommendations." },
          { id: createId("subel"), title: "Reader promise", content: "Users should never have to guess whether money influenced a recommendation." },
        ],
        notes: "Monetization can exist, but trust has to stay intact.",
        importantNote: "Sponsored does not mean endorsed.",
        visibility: "both",
        imageSrc: "",
        videos: [],
      },
      {
        id: createId("callout"),
        callName: "Player-fit filters",
        groupId: "recommended-orgs-group",
        subBoxId: "recommended-filters",
        subElements: [
          { id: createId("subel"), title: "Seriousness", content: "Casual-but-organized, improvement-focused, or hard-competitive. Users should filter this immediately." },
          { id: createId("subel"), title: "Role focus", content: "Dogfighting, multicrew, logistics, FPS, mixed-arms, or general PvP training." },
          { id: createId("subel"), title: "Schedule fit", content: "Prime activity windows, event cadence, and expected attendance should be visible without digging." },
          { id: createId("subel"), title: "Culture fit", content: "Comms discipline, coaching patience, tolerance for ego, and whether mistakes get reviewed constructively." },
        ],
        notes: "Fit should narrow quickly instead of forcing readers to inspect every org manually.",
        importantNote: "Best org is contextual. Best fit is the actual product.",
        visibility: "both",
        imageSrc: "",
        videos: [],
      },
      {
        id: createId("callout"),
        callName: "Editorial scorecard",
        groupId: "recommended-orgs-group",
        subBoxId: "recommended-editorial",
        subElements: [
          { id: createId("subel"), title: "Training quality", content: "Are reps structured, recurring, and useful, or is training just a decorative word?" },
          { id: createId("subel"), title: "Leadership quality", content: "Do leads communicate clearly, set standards, and create a stable improvement loop?" },
          { id: createId("subel"), title: "Activity reliability", content: "Can a member reasonably expect people to actually be there when the org says it is active?" },
          { id: createId("subel"), title: "Retention signal", content: "Do players stick around because the environment is useful, or churn because the org only sells an image?" },
        ],
        notes: "This can later become visible score chips or editorial badges.",
        importantNote: "If the scorecard becomes fake, the whole page becomes fake.",
        visibility: "both",
        imageSrc: "",
        videos: [],
      }
    ],
  };
}

function ensureCalloutSubElements(callout) {
  if (!Array.isArray(callout.subElements) || !callout.subElements.length) {
    callout.subElements = [
      { id: createId("subel"), title: "When to use", content: callout.whenToUse || "" },
      { id: createId("subel"), title: "Expected Outcome", content: callout.responseExpected || "" },
      { id: createId("subel"), title: "Context", content: callout.context || "" },
      { id: createId("subel"), title: "Meaning", content: callout.meaning || "" },
    ];
  }
  callout.subElements = callout.subElements
    .slice(0, 4)
    .map((sub, index) => ({
      id: sub.id || createId("subel"),
      title: typeof sub.title === "string" && sub.title.trim() ? sub.title : `Field ${index + 1}`,
      content: typeof sub.content === "string" ? sub.content : "",
      visibility: normalizeVisibility(sub.visibility || "both"),
    }));
}

function migrateToPages(nextState) {
  if (nextState.pages && typeof nextState.pages === "object") {
    return nextState;
  }
  const protocolPage = createDefaultProtocolPage();
  nextState.pages = {
    protocol: protocolPage,
    "meta-space": createMetaPage("meta-space", CORE_PAGE_DEFINITIONS["meta-space"].title),
    "meta-fps": createMetaPage("meta-fps", CORE_PAGE_DEFINITIONS["meta-fps"].title),
    "recommended-orgs": createRecommendedOrgsPage(),
  };
  nextState.home = createDefaultHomePage();
  delete nextState.blocks;
  delete nextState.callouts;
  return nextState;
}

function getCurrentPage() {
  if (currentPageId === "home" || currentPageId === "pro") {
    return null;
  }
  return state.pages[currentPageId] || state.pages.protocol;
}

function getPageBlocks() {
  if (currentPageId === "home") {
    state.home.blocks = normalizeBlocks(state.home.blocks || []);
    return state.home.blocks;
  }
  const page = getCurrentPage();
  return page ? page.blocks : [];
}

function getPageCallouts() {
  if (currentPageId === "home") {
    state.home.callouts = normalizeCallouts(state.home.callouts || []);
    return state.home.callouts;
  }
  const page = getCurrentPage();
  return page ? page.callouts : [];
}

function getHomeSubPages() {
  return Array.isArray(state.home?.subPages) ? state.home.subPages : [];
}
function getSubPageEntry(pageId) {
  return getHomeSubPages().find((entry) => entry.id === pageId);
}

function setSubPageDisplay(pageId, value, sourceState = state) {
  const next = (value || "").trim() || "Untitled page";
  const subPages = Array.isArray(sourceState?.home?.subPages) ? sourceState.home.subPages : [];
  const sub = subPages.find((entry) => entry.id === pageId);
  if (sub) {
    sub.title = next;
    sub.navLabel = next;
  }
  if (sourceState?.pages && sourceState.pages[pageId]) {
    sourceState.pages[pageId].title = next;
    if (sourceState.pages[pageId].hero && typeof sourceState.pages[pageId].hero === "object") {
      sourceState.pages[pageId].hero.title = next;
    }
  }
}

function normalizeHeroColumns(columns) {
  const source = Array.isArray(columns) ? columns : [];
  const normalized = source
    .map((col) => {
      const legacyMedia = col?.mediaSrc
        ? [{ id: createId("hero-media"), src: col.mediaSrc, linkUrl: "" }]
        : [];
      const mediaItems = Array.isArray(col?.mediaItems) && col.mediaItems.length
        ? col.mediaItems
            .map((item) => ({
              id: item?.id || createId("hero-media"),
              src: typeof item?.src === "string" ? item.src : "",
              linkUrl: typeof item?.linkUrl === "string" ? item.linkUrl : "",
            }))
            .filter((item) => item.src)
        : legacyMedia;
      return {
        id: col?.id || createId("hero-col"),
        text: typeof col?.text === "string" ? col.text : "",
        mediaItems,
      };
    })
    .slice(0, 3);
  while (normalized.length < 2) {
    normalized.push(createDefaultHeroColumn());
  }
  return normalized;
}

function renderEditableText(tag, value, onChange, options = {}) {
  const node = document.createElement(tag);
  node.className = options.className || "";
  const hasValue = typeof value === "string" && value.length;
  const text = hasValue ? value : (options.placeholder || "");
  node.textContent = text;
  if (!hasValue && options.placeholder) {
    node.dataset.placeholder = options.placeholder;
    if (adminMode && options.showPlaceholderInAdmin !== false) {
      node.classList.add("admin-empty-placeholder");
    }
  }
  if (options.multiline) {
    node.style.whiteSpace = "pre-wrap";
  }
  if (adminMode && options.editable !== false) {
    node.setAttribute("contenteditable", "true");
    node.classList.add("click-edit");
    node.addEventListener("input", () => {
      const value = options.multiline ? (node.innerText || "").replace(/\r/g, "") : (node.textContent || "");
      onChange(value);
      if (options.onInput) options.onInput(value);
    });
  }
  return node;
}

function applyAdminReachabilityPlaceholder(node, value, placeholder, className = "") {
  if (!node || !adminMode || String(value || "").trim()) {
    return node;
  }
  node.textContent = placeholder;
  node.classList.add("admin-empty-placeholder");
  if (className) {
    node.classList.add(className);
  }
  node.dataset.placeholder = placeholder;
  return node;
}

function getPageDefinitionMap() {
  const map = { ...CORE_PAGE_DEFINITIONS };
  getHomeSubPages().forEach((subPage) => {
    if (!subPage?.id || subPage.id === "home") {
      return;
    }
    map[subPage.id] = {
      id: subPage.id,
      title: subPage.title || subPage.navLabel || "Untitled page",
      navLabel: subPage.title || subPage.navLabel || "Page",
    };
  });
  return map;
}

function getVisiblePageDefinitions() {
  const map = getPageDefinitionMap();
  return [map.home, ...getHomeSubPages().map((subPage) => map[subPage.id]).filter(Boolean)];
}

function ensureHomeSubPages(nextState) {
  const home = nextState.home || createDefaultHomePage();
  const defaults = createDefaultHomePage().subPages;
  const subPages = Array.isArray(home.subPages) && home.subPages.length ? home.subPages : defaults;
  const normalized = subPages
    .filter((entry) => entry && entry.id && entry.id !== "home")
    .map((entry, index) => ({
      id: entry.id,
      title: entry.id === "protocol"
        ? CORE_PAGE_DEFINITIONS.protocol.navLabel
        : (typeof entry.title === "string" ? entry.title : `Sub Page ${index + 1}`),
      navLabel: entry.id === "protocol"
        ? CORE_PAGE_DEFINITIONS.protocol.navLabel
        : (typeof entry.navLabel === "string" && entry.navLabel.trim() ? entry.navLabel : (typeof entry.title === "string" && entry.title.trim() ? entry.title.trim() : `Page ${index + 1}`)),
      backgroundSrc: typeof entry.backgroundSrc === "string" ? entry.backgroundSrc : "",
      staticSrc: typeof entry.staticSrc === "string" ? entry.staticSrc : (typeof entry.backgroundSrc === "string" ? entry.backgroundSrc : ""),
      mediaType: entry.mediaType === "video" ? "video" : (entry.mediaType === "gif" ? "gif" : "image"),
    }));
  home.subPages = normalized;
  nextState.home = home;
}

function normalizeHeroItems(items) {
  if (!Array.isArray(items) || !items.length) {
    return [createDefaultHeroItem("text")];
  }
  return items.map((item) => {
    const type = item?.type === "image" || item?.type === "video" ? item.type : "text";
    const base = { id: item?.id || createId("hero"), type };
    if (type === "image") {
      return { ...base, src: typeof item?.src === "string" ? item.src : "", alt: typeof item?.alt === "string" ? item.alt : "" };
    }
    if (type === "video") {
      return { ...base, src: typeof item?.src === "string" ? item.src : "" };
    }
    return { ...base, text: typeof item?.text === "string" ? item.text : "" };
  });
}

function normalizeState(source) {
  const nextState = deepClone(source);
  nextState.header = nextState.header || {};
  if (typeof nextState.header.logoSrc !== "string") {
    nextState.header.logoSrc = "";
  }
  if (typeof nextState.header.logoAlt !== "string") {
    nextState.header.logoAlt = "Header logo";
  }
  if (typeof nextState.header.backgroundSrc !== "string") {
    nextState.header.backgroundSrc = "";
  }
  if (!nextState.header.themeBackgrounds || typeof nextState.header.themeBackgrounds !== "object") {
    nextState.header.themeBackgrounds = {};
  }
  if (!nextState.header.themePageBackgrounds || typeof nextState.header.themePageBackgrounds !== "object") {
    nextState.header.themePageBackgrounds = {};
  }
  if (!Array.isArray(nextState.header.socialIcons)) {
    nextState.header.socialIcons = deepClone(DEFAULT_STATE.header.socialIcons);
  } else {
    nextState.header.socialIcons = nextState.header.socialIcons.map((icon, index) => ({
      src: typeof icon?.src === "string" ? icon.src : "",
      url: typeof icon?.url === "string" ? icon.url : "",
    }));
    if (!nextState.header.socialIcons.length) {
      nextState.header.socialIcons.push({ src: "", url: "" });
    }
  }
  nextState.ui = {
    ...deepClone(DEFAULT_STATE.ui),
    ...(nextState.ui || {}),
  };
  nextState.ui.theme = resolveThemeName(nextState.ui.theme || DEFAULT_THEME_NAME);
  nextState.ui.viewMode = normalizeViewMode(nextState.ui.viewMode || "basic");
  nextState.header.themeBackgrounds[nextState.ui.theme] = nextState.header.themeBackgrounds[nextState.ui.theme] || nextState.header.backgroundSrc || "";
  nextState.header.backgroundSrc = nextState.header.themeBackgrounds[nextState.ui.theme] || "";
  nextState.header.themePageBackgrounds[nextState.ui.theme] = nextState.header.themePageBackgrounds[nextState.ui.theme] || "";
  nextState.roleLabels = normalizeRoleLabels(nextState.roleLabels);
  const defaultAccounts = deepClone(DEFAULT_STATE.onlineAuth);
  const sourceAuth = Array.isArray(nextState.onlineAuth)
    ? nextState.onlineAuth
    : (nextState.onlineAuth && typeof nextState.onlineAuth === "object"
        ? [nextState.onlineAuth]
        : defaultAccounts);
  nextState.proPage = {
    ...deepClone(DEFAULT_STATE.proPage),
    ...(nextState.proPage || {}),
  };
  if (!Array.isArray(nextState.proPage.features)) nextState.proPage.features = deepClone(DEFAULT_STATE.proPage.features);
  nextState.proPage.features = nextState.proPage.features.map((item) => String(item || ""));

  nextState.onlineAuth = sourceAuth
    .map((entry) => ({
      id: entry?.id || createId("online-auth"),
      username: typeof entry?.username === "string" ? entry.username : "",
      password: typeof entry?.password === "string" ? entry.password : "",
      role: entry?.role === "editor" ? "editor" : "admin",
    }))
    .filter((entry) => entry.username || entry.password);
  if (!nextState.onlineAuth.length) {
    nextState.onlineAuth = defaultAccounts;
  }

  migrateToPages(nextState);
  if (!nextState.home) {
    nextState.home = createDefaultHomePage();
  }
  nextState.home = { ...createDefaultHomePage(), ...nextState.home };
  if (typeof nextState.home.heroEnabled !== "boolean") nextState.home.heroEnabled = true;
  if (typeof nextState.home.heroBackgroundSrc !== "string") nextState.home.heroBackgroundSrc = "";
  nextState.home.heroColumns = normalizeHeroColumns(nextState.home.heroColumns);
  nextState.home.heroItems = normalizeHeroItems(nextState.home.heroItems || []);
  nextState.home.blocks = normalizeBlocks(nextState.home.blocks || []);
  nextState.home.callouts = normalizeCallouts(nextState.home.callouts || []);
  ensureHomeSubPages(nextState);

  Object.values(nextState.pages || {}).forEach((page) => {
    page.blocks = normalizeBlocks(page.blocks || []);
    page.callouts = normalizeCallouts(page.callouts || []);
  });

  const subIds = new Set(nextState.home.subPages.map((sub) => sub.id));
  Object.keys(nextState.pages).forEach((pageId) => {
    if (!subIds.has(pageId) && pageId !== "protocol" && pageId !== "meta-space" && pageId !== "meta-fps") {
      delete nextState.pages[pageId];
    }
  });
  nextState.home.subPages.forEach((subPage) => {
    if (!nextState.pages[subPage.id]) {
      nextState.pages[subPage.id] = subPage.id === "recommended-orgs"
        ? createRecommendedOrgsPage()
        : createMetaPage(subPage.id, subPage.title || subPage.navLabel || "New Sub Page");
    }
    const label = subPage.title || subPage.navLabel || "New Sub Page";
    if (subPage.id === "protocol") {
      subPage.title = CORE_PAGE_DEFINITIONS.protocol.navLabel;
      subPage.navLabel = CORE_PAGE_DEFINITIONS.protocol.navLabel;
      if (nextState.pages[subPage.id]) {
        nextState.pages[subPage.id].title = CORE_PAGE_DEFINITIONS.protocol.title;
        if (nextState.pages[subPage.id].hero) {
          nextState.pages[subPage.id].hero.title = CORE_PAGE_DEFINITIONS.protocol.title;
        }
      }
    } else {
      setSubPageDisplay(subPage.id, label, nextState);
    }
  });

  if (nextState.pages.protocol) {
    const protocol = nextState.pages.protocol;
    protocol.title = CORE_PAGE_DEFINITIONS.protocol.title;
    if (protocol.hero) protocol.hero.title = CORE_PAGE_DEFINITIONS.protocol.title;
    protocol.blocks = normalizeBlocks(protocol.blocks || []);
    protocol.callouts = normalizeCallouts(protocol.callouts || []);
  }
  Object.keys(nextState.pages).forEach((pageId) => {
    if (pageId === "protocol") return;
    nextState.pages[pageId].blocks = normalizeBlocks(nextState.pages[pageId].blocks || []);
    nextState.pages[pageId].callouts = normalizeCallouts(nextState.pages[pageId].callouts || []);
  });

  return nextState;
}

function normalizeCallouts(callouts) {
  return (callouts || []).map((callout) => {
    const normalizedVideos = (callout.videos || []).map((video) => ({
      id: video.id || createId("video"),
      title: video.title || "",
      type: video.type,
      src: video.src,
    }));
    const normalized = {
      ...callout,
      callName: callout.callName || "New Element",
      notes: callout.notes || "",
      imageSrc: typeof callout.imageSrc === "string" ? callout.imageSrc : "",
      importantNote: callout.importantNote || "",
      visibility: normalizeVisibility(callout.visibility),
      videos: normalizedVideos,
      subBoxId: typeof callout.subBoxId === "string" ? callout.subBoxId : "",
    };
    ensureCalloutSubElements(normalized);
    return normalized;
  });
}

function normalizeBlocks(blocks) {
  return (blocks || []).map((block) => {
    if (block.type === "adminTools") {
      return null;
    }
    if (block.type === "youtube") {
      return {
        id: block.id,
        type: "video",
        title: block.title || "Video",
        videos: block.url ? [{ id: createId("video"), type: "youtube", src: block.url, title: "" }] : [],
      };
    }
    block.videos = (block.videos || []).map((video) => ({
      id: video.id || createId("video"),
      title: video.title || "",
      type: video.type,
      src: video.src,
    }));
    if (block.type === "rules") {
      if (block.title === "Rules of Use") {
        block.title = "Information Box";
      }
      block.sections = (block.sections || []).map((section) => ({
        title: section.title || "New Information Sub-Box",
        subtitle: section.subtitle || "",
        body: section.body || (Array.isArray(section.items) ? section.items.join("\n") : ""),
        mediaType: ["image", "video", "youtube"].includes(section.mediaType) ? section.mediaType : "",
        mediaSrc: section.mediaSrc || "",
        mediaVideoType: section.mediaVideoType || "local",
        backgroundSrc: typeof section.backgroundSrc === "string" ? section.backgroundSrc : "",
        visibility: normalizeVisibility(section.visibility || "both"),
      }));
    }
    if (block.type === "flows") {
      block.contextText = typeof block.contextText === "string" ? block.contextText : "";
      block.flows = (block.flows || []).map((flow) => ({
        ...flow,
        exampleLabel: flow.exampleLabel || "Example",
        exampleTargetId: flow.exampleTargetId || "",
        imageSrc: typeof flow.imageSrc === "string" ? flow.imageSrc : "",
        visibility: normalizeVisibility(flow.visibility),
        videos: (flow.videos || []).map((video) => ({ id: video.id || createId("video"), title: video.title || "", type: video.type, src: video.src })),
        rows: (flow.rows || []).map((row) => ({ ...row, rowTitle: row.rowTitle || "", rowContext: row.rowContext || row.rowExample || "", elements: row.elements || [] })),
      }));
    }
    if (block.type === "calloutGroup") {
      block.contextText = typeof block.contextText === "string" ? block.contextText : "";
      block.subBoxes = Array.isArray(block.subBoxes) && block.subBoxes.length
        ? block.subBoxes.map((sub, idx) => ({
            id: sub?.id || createId("study-sub"),
            title: typeof sub?.title === "string" && sub.title ? sub.title : `Study Sub-Box ${idx + 1}`,
            description: typeof sub?.description === "string" ? sub.description : "",
          }))
        : [{ id: `${block.id}-subbox-1`, title: "Study Sub-Box", description: "" }];
    }
    if (block.type === "orgShowcase") {
      block.title = typeof block.title === "string" && block.title ? block.title : "Organization Presentation";
      block.intro = typeof block.intro === "string" ? block.intro : "";
      block.orgCards = Array.isArray(block.orgCards) && block.orgCards.length
        ? block.orgCards.map((card, idx) => ({
            id: card?.id || createId("org-card"),
            name: typeof card?.name === "string" && card.name ? card.name : `Organization ${idx + 1}`,
            classification: typeof card?.classification === "string" ? card.classification : "Recommended Organization",
            status: typeof card?.status === "string" ? card.status : "",
            fit: typeof card?.fit === "string" ? card.fit : "",
            logoSrc: typeof card?.logoSrc === "string" ? card.logoSrc : "",
            backgroundSrc: typeof card?.backgroundSrc === "string" ? card.backgroundSrc : "",
            achievements: Array.isArray(card?.achievements) && card.achievements.length ? card.achievements.map((item) => String(item || "")) : [""],
            contactName: typeof card?.contactName === "string" ? card.contactName : "",
            contactRole: typeof card?.contactRole === "string" ? card.contactRole : "",
            contactHandle: typeof card?.contactHandle === "string" ? card.contactHandle : "",
            discordUrl: typeof card?.discordUrl === "string" ? card.discordUrl : "",
            discordLogoSrc: typeof card?.discordLogoSrc === "string" ? card.discordLogoSrc : "",
            websiteUrl: typeof card?.websiteUrl === "string" ? card.websiteUrl : "",
            rsiUrl: typeof card?.rsiUrl === "string" ? card.rsiUrl : "",
            rsiLogoSrc: typeof card?.rsiLogoSrc === "string" ? card.rsiLogoSrc : "",
            mediaCaption: typeof card?.mediaCaption === "string" ? card.mediaCaption : "",
            body: typeof card?.body === "string" ? card.body : "",
            notes: typeof card?.notes === "string" ? card.notes : "",
            ctaText: typeof card?.ctaText === "string" ? card.ctaText : "Visit Organization",
            ctaUrl: typeof card?.ctaUrl === "string" ? card.ctaUrl : "",
          }))
        : [createBlankOrgCard()];
    }
    if (block.type === "shipMeta") {
      block.title = typeof block.title === "string" && block.title ? block.title : "Ship Meta Box";
      const legacyItem = {
        id: createId("ship-meta-item"),
        shipName: typeof block.shipName === "string" ? block.shipName : "",
        roleTagline: typeof block.roleTagline === "string" ? block.roleTagline : "",
        components: Array.isArray(block.components) ? block.components : [],
        signatures: block.signatures,
        coolingBars: Array.isArray(block.metrics) && block.metrics[0] ? (Number(block.metrics[0].value) || 0) : 1,
        summary: typeof block.summary === "string" ? block.summary : "",
      };
      const sourceItems = Array.isArray(block.metaItems) && block.metaItems.length ? block.metaItems : [legacyItem];
      const componentKeys = ["weapon", "shield", "powerplant", "cooler"];
      const normalizeModeData = (modeSource, fallbackSource) => {
        const base = modeSource || fallbackSource || {};
        const signatures = base.signatures || {};
        const cross = signatures.crossSection || {};
        const legacyCross = [cross.front, cross.side, cross.top].filter(Boolean).join(" / ");
        const defaultComponents = createBlankShipMetaItem().modes.premium.components;
        const sourceComponents = Array.isArray(base.components) && base.components.length
          ? base.components
          : Array.isArray(fallbackSource?.components) && fallbackSource.components.length
            ? fallbackSource.components
            : defaultComponents;
        return {
          components: componentKeys.map((key, idx) => {
            const legacy = sourceComponents[idx] || sourceComponents.find((entry) => inferShipComponentIcon(entry?.slot || entry?.icon) === key) || {};
            return {
              id: legacy.id || createId("ship-component"),
              key,
              component: typeof legacy.component === "string" ? legacy.component : "",
              whereToBuy: typeof legacy.whereToBuy === "string" ? legacy.whereToBuy : "",
              quantity: Number(legacy.quantity) > 0 ? Number(legacy.quantity) : 1,
            };
          }),
          signatures: {
            em: typeof signatures.em === "number" || typeof signatures.em === "string" ? signatures.em : "",
            ir: typeof signatures.ir === "number" || typeof signatures.ir === "string" ? signatures.ir : "",
            crossSection: typeof signatures.crossSection === "string" ? signatures.crossSection : legacyCross,
            sustainedDps: typeof signatures.sustainedDps === "number" || typeof signatures.sustainedDps === "string" ? signatures.sustainedDps : "",
            alphaDamage: typeof signatures.alphaDamage === "number" || typeof signatures.alphaDamage === "string" ? signatures.alphaDamage : "",
            shieldHp: typeof signatures.shieldHp === "number" || typeof signatures.shieldHp === "string" ? signatures.shieldHp : "",
            armorHp: typeof signatures.armorHp === "number" || typeof signatures.armorHp === "string" ? signatures.armorHp : "",
            totalHp: typeof signatures.totalHp === "number" || typeof signatures.totalHp === "string" ? signatures.totalHp : "",
          },
          summary: typeof base.summary === "string" ? base.summary : "",
          lifeSupportOffRequired: Boolean(base.lifeSupportOffRequired),
        };
      };
      block.metaItems = sourceItems.map((item) => {
        const legacyMode = {
          components: item?.components,
          signatures: item?.signatures,
          summary: item?.summary,
        };
        const premiumSource = item?.modes?.premium || item?.premium || legacyMode;
        const puSource = item?.modes?.pu || item?.pu || legacyMode;
        return {
          id: item?.id || createId("ship-meta-item"),
          shipName: typeof item?.shipName === "string" ? item.shipName : "",
          roleTagline: typeof item?.roleTagline === "string" ? item.roleTagline : "",
          backgroundSrc: typeof item?.backgroundSrc === "string" ? item.backgroundSrc : "",
          infoUrl: typeof item?.infoUrl === "string" ? item.infoUrl : "",
          activeMode: item?.activeMode === "pu" ? "pu" : "premium",
          modes: {
            premium: normalizeModeData(premiumSource, legacyMode),
            pu: normalizeModeData(puSource, legacyMode),
          },
        };
      });
    }
    return block;
  }).filter(Boolean);
}

function loadAdmin() {
  if (VIEWER_ONLY_BUILD) {
    return false;
  }
  if (ONLINE_BUILD) {
    try {
      const auth = JSON.parse(localStorage.getItem(ONLINE_AUTH_KEY) || "null");
      return Boolean(auth && auth.loggedIn);
    } catch (error) {
      return false;
    }
  }
  return localStorage.getItem(ADMIN_KEY) === "true";
}

function normalizeRoleLabels(value) {
  const defaults = deepClone(DEFAULT_STATE.roleLabels);
  if (Array.isArray(value)) {
    const normalized = value
      .map((entry) => {
        if (!entry) {
          return null;
        }
        if (typeof entry === "string") {
          return {
            id: createId("role"),
            label: entry,
            color: ROLE_COLOR_OPTIONS[0].value,
          };
        }
        return {
          id: entry.id || createId("role"),
          label: typeof entry.label === "string" ? entry.label : "Role",
          color: typeof entry.color === "string" ? entry.color : ROLE_COLOR_OPTIONS[0].value,
        };
      })
      .filter(Boolean);
    return normalized.length ? normalized : defaults;
  }
  if (value && typeof value === "object") {
    const used = new Set();
    const mapped = defaults.map((role, index) => {
      used.add(role.id);
      return {
        ...role,
        label: typeof value[role.id] === "string" ? value[role.id] : role.label,
        color: role.color || ROLE_COLOR_OPTIONS[index % ROLE_COLOR_OPTIONS.length].value,
      };
    });
    Object.entries(value).forEach(([key, label]) => {
      if (used.has(key)) {
        return;
      }
      mapped.push({
        id: key,
        label: typeof label === "string" ? label : "Role",
        color: ROLE_COLOR_OPTIONS[mapped.length % ROLE_COLOR_OPTIONS.length].value,
      });
    });
    return mapped;
  }
  return defaults;
}

function getRoleLabels(sourceState = state) {
  return normalizeRoleLabels(sourceState.roleLabels);
}

function getRoleMeta(roleId, sourceState = state) {
  const roles = getRoleLabels(sourceState);
  return roles.find((role) => role.id === roleId) || null;
}

function normalizeViewMode(mode) {
  return mode === "advanced" ? "advanced" : "basic";
}

function loadViewMode() {
  const stored = localStorage.getItem(MODE_KEY) || state?.ui?.viewMode || "basic";
  return normalizeViewMode(stored);
}

function loadTheme() {
  const stored = localStorage.getItem(THEME_KEY) || state?.ui?.theme || DEFAULT_THEME_NAME;
  return resolveThemeName(stored);
}

function resolveThemeName(themeName) {
  const legacyMap = {
    blue: "stanton",
    green: "grimhex",
    amber: "pyro",
    violet: "stanton",
    default: "stanton",
    shadowMoses: "pyro",
    avs: "stanton",
    blightveil: "pyro",
  };
  const normalized = legacyMap[themeName] || themeName;
  return THEMES[normalized] ? normalized : DEFAULT_THEME_NAME;
}

function normalizeVisibility(value) {
  return VISIBILITY_OPTIONS.some((option) => option.value === value) ? value : "both";
}

function getVisibilityClass(value) {
  return `visibility-${normalizeVisibility(value)}`;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clearSiteDataAndReload() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ADMIN_KEY);
    localStorage.removeItem(THEME_KEY);
    localStorage.removeItem(MODE_KEY);
    localStorage.removeItem(ONLINE_AUTH_KEY);
    sessionStorage.clear();

    document.cookie.split(";").forEach((cookie) => {
      const eqIndex = cookie.indexOf("=");
      const name = (eqIndex > -1 ? cookie.slice(0, eqIndex) : cookie).trim();
      if (!name) return;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
    });
  } catch (error) {
    console.warn("Failed clearing local site data", error);
  }
  window.location.reload();
}

function applyTheme(themeName) {
  const theme = THEMES[themeName] || THEMES[DEFAULT_THEME_NAME];
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

function setTheme(themeName) {
  if (state?.header?.themeBackgrounds && activeTheme) {
    state.header.themeBackgrounds[activeTheme] = state.header.backgroundSrc || "";
  }
  activeTheme = THEMES[themeName] ? themeName : DEFAULT_THEME_NAME;
  localStorage.setItem(THEME_KEY, activeTheme);
  if (state.ui) {
    state.ui.theme = activeTheme;
  }
  const nextHeaderBg = state?.header?.themeBackgrounds?.[activeTheme] || "";
  const nextPageBg = state?.header?.themePageBackgrounds?.[activeTheme] || "";
  state.header.backgroundSrc = nextHeaderBg;
  applyTheme(activeTheme);
  applyHeaderBackground(nextHeaderBg, true);
  applyPageBackground(nextPageBg, true);
  renderHeader();
}

function applyViewMode() {
  document.body.classList.toggle("mode-basic", activeMode === "basic");
  document.body.classList.toggle("mode-advanced", activeMode === "advanced");
}

function updateModeToggleUI() {
  if (!headerModeToggle) {
    return;
  }
  const buttons = headerModeToggle.querySelectorAll(".mode-btn");
  buttons.forEach((button) => {
    const isActive = !button.classList.contains("is-pro") && button.textContent?.trim().toLowerCase().startsWith(activeMode);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function setViewMode(mode) {
  activeMode = normalizeViewMode(mode);
  localStorage.setItem(MODE_KEY, activeMode);
  if (state.ui) {
    state.ui.viewMode = activeMode;
  }
  applyViewMode();
  updateModeToggleUI();
}

function renderThemeSelector() {
  if (!themeSelect) {
    return;
  }
  themeSelect.innerHTML = "";
  Object.entries(THEMES).forEach(([key, theme]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = theme.label;
    option.selected = key === activeTheme;
    themeSelect.appendChild(option);
  });
  themeSelect.onchange = () => {
    setTheme(themeSelect.value);
  };
}

function deepClone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function updateAdminUI() {
  if (adminStatus) {
    adminStatus.textContent = adminMode ? "Edit mode" : "Viewer mode";
    adminStatus.style.color = adminMode ? "var(--success)" : "var(--muted)";
    adminStatus.style.display = adminMode ? "inline-flex" : "none";
  }
  if (adminToggle) {
    adminToggle.textContent = adminMode ? "Exit edit" : "Edit";
    adminToggle.style.display = VIEWER_ONLY_BUILD ? "none" : "inline-flex";
  }
  document.body.classList.toggle("admin-active", adminMode);
  if (!adminMode) {
    editingBlocks = new Set();
  }
  render();
}

function syncPageFromHash() {
  const raw = (window.location.hash || "#home").slice(1);
  const [pageId] = raw.split("/");
  const pages = getPageDefinitionMap();
  const nextPageId = pageId === "pro" ? "pro" : (pages[pageId] ? pageId : "home");
  const changed = nextPageId !== currentPageId;
  currentPageId = nextPageId;
  return changed;
}

window.addEventListener("hashchange", () => {
  const previousPageId = currentPageId;
  const changed = syncPageFromHash();
  shouldAnimatePageContent = changed;
  shouldAnimateNavDeploy = changed && previousPageId !== "home" && currentPageId !== "home" && currentPageId !== "pro";
  render();
});

function scrollToHashTarget() {
  const raw = (window.location.hash || "").slice(1);
  if (!raw) {
    return;
  }
  const [pageId, targetId] = raw.split("/");
  if (!targetId || pageId !== currentPageId) {
    return;
  }
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }
  const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

function updateScrollOffset() {
  const header = document.querySelector(".site-header");
  const offset = header ? header.offsetHeight + 12 : 180;
  document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
}

function closeStudyOverlaysOnOutsideClick(event) {
  const expanded = document.querySelectorAll(".study-overlay-callout.expanded");
  if (!expanded.length) {
    teardownStudyOverlayBackdrop();
    return;
  }
  const clickedInside = event.target.closest && event.target.closest(".study-overlay-callout");
  if (clickedInside) {
    return;
  }
  collapseExpandedStudyOverlays();
}

function collapseExpandedStudyOverlays() {
  const expanded = document.querySelectorAll(".study-overlay-callout.expanded");
  expanded.forEach((card) => {
    card.classList.remove("expanded");
    const cardId = card.dataset.cardId;
    if (cardId) {
      setExpanded(cardId, false);
      pinnedStudyCardIds.delete(cardId);
    }
  });
}

function ensureStudyOverlayBackdrop() {
  if (studyOverlayBackdrop) {
    studyOverlayBackdrop.classList.add("is-visible");
    return;
  }
  studyOverlayBackdrop = document.createElement("div");
  studyOverlayBackdrop.className = "study-overlay-backdrop is-visible";
  studyOverlayBackdrop.setAttribute("aria-hidden", "true");
  studyOverlayBackdrop.addEventListener("click", () => {
    collapseExpandedStudyOverlays();
    teardownStudyOverlayBackdrop();
  });
  document.body.appendChild(studyOverlayBackdrop);
}

function teardownStudyOverlayBackdrop() {
  if (!studyOverlayBackdrop) {
    return;
  }
  studyOverlayBackdrop.classList.remove("is-visible");
  studyOverlayBackdrop.remove();
  studyOverlayBackdrop = null;
}

function rerenderPreservingScroll() {
  pendingScrollY = window.scrollY;
  render();
}

function toggleAdmin() {
  if (VIEWER_ONLY_BUILD) {
    return;
  }
  adminMode = !adminMode;
  localStorage.setItem(ADMIN_KEY, adminMode ? "true" : "false");
  updateAdminUI();
}

function toggleBlockEditing(blockId) {
  if (editingBlocks.has(blockId)) {
    editingBlocks.delete(blockId);
  } else {
    editingBlocks.add(blockId);
  }
  render();
}

function isBlockEditing(blockId) {
  return adminMode && editingBlocks.has(blockId);
}

function setExpanded(id, expanded) {
  if (expanded) {
    expandedIds.add(id);
  } else {
    expandedIds.delete(id);
  }
}

function getCalloutGroups() {
  return getPageBlocks().filter((block) => block.type === "calloutGroup");
}

function getSubBoxOptions(groupId) {
  const group = getCalloutGroups().find((block) => block.id === groupId);
  if (!group || !Array.isArray(group.subBoxes)) {
    return [];
  }
  return group.subBoxes.map((subBox) => ({
    value: subBox.id,
    label: subBox.title || "Study Sub-Box",
  }));
}

function updateDocumentTitle() {
  document.title = String(state?.header?.title || "").trim() || "Space Combat Doctrine Platform";
}

function renderHeader() {
  headerContent.innerHTML = "";
  updateDocumentTitle();
  applyHeaderBackground(state.header.backgroundSrc, false);
  const brand = document.createElement("div");
  brand.className = `header-brand${state.header.logoSrc ? "" : " no-logo"}`;

  const logoSlot = document.createElement("div");
  logoSlot.className = "header-logo-slot";
  if (state.header.logoSrc) {
    const logo = document.createElement("img");
    logo.className = "header-logo";
    logo.src = state.header.logoSrc;
    logo.alt = state.header.logoAlt || "Header logo";
    logoSlot.appendChild(logo);
  }
  brand.appendChild(logoSlot);

  const wrapper = document.createElement("div");
  wrapper.className = "header-text";

  const eyebrowText = String(state.header.eyebrow || "").trim();
  const titleText = String(state.header.title || "").trim();
  const subtitleText = String(state.header.subtitle || "").trim();

  if (adminMode || eyebrowText) {
    wrapper.appendChild(
      renderEditableText("div", state.header.eyebrow, (value) => {
        state.header.eyebrow = value;
      }, { className: "eyebrow header-eyebrow", placeholder: "Spacecombat.gg" })
    );
  }

  if (adminMode || titleText) {
    const title = renderEditableText("h1", state.header.title, (value) => {
      state.header.title = value;
    }, { className: "header-title", placeholder: "Space Combat Doctrine Platform" });
    wrapper.appendChild(title);
  }

  if (adminMode || subtitleText) {
    const subhead = renderEditableText("p", state.header.subtitle, (value) => {
      state.header.subtitle = value;
    }, { className: "subhead header-subtitle-multiline", placeholder: "Structured training and data-driven meta for Star Citizen competitive players.", multiline: true });
    wrapper.appendChild(subhead);
  }

  if (adminMode || wrapper.childNodes.length) {
    brand.appendChild(wrapper);
  }
  headerContent.appendChild(brand);

  renderAdminBox();
  renderHeaderSocials();
}

function createHeaderMediaSection() {
  const headerSection = document.createElement("div");
  headerSection.className = "admin-section";
  const headerTitle = document.createElement("div");
  headerTitle.className = "admin-section-title";
  headerTitle.textContent = "Header editing";
  headerSection.appendChild(headerTitle);

  const toolbar = document.createElement("div");
  toolbar.className = "admin-header-toolbar";

  // Logo control
  const logoWrap = document.createElement("div");
  logoWrap.className = "admin-toolbar-item";
  const logoUploadLabel = document.createElement("label");
  logoUploadLabel.className = "btn btn-outline";
  logoUploadLabel.textContent = state.header.logoSrc ? "Replace Logo" : "Logo";
  logoUploadLabel.setAttribute("for", "headerLogoUpload");
  const logoUploadInput = document.createElement("input");
  logoUploadInput.type = "file";
  logoUploadInput.id = "headerLogoUpload";
  logoUploadInput.accept = "image/*";
  logoUploadInput.style.display = "none";
  logoUploadInput.addEventListener("change", () => {
    const file = logoUploadInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        logoUploadInput.value = "";
        state.header.logoSrc = reader.result;
        renderHeader();
        render();
      };
      reader.readAsDataURL(file);
    }
  });
  logoWrap.appendChild(logoUploadLabel);
  logoWrap.appendChild(logoUploadInput);
  if (state.header.logoSrc) {
    const logoRemoveBtn = document.createElement("button");
    logoRemoveBtn.className = "btn btn-ghost";
    logoRemoveBtn.type = "button";
    logoRemoveBtn.textContent = "Remove";
    logoRemoveBtn.addEventListener("click", () => { state.header.logoSrc = ""; renderHeader(); render(); });
    logoWrap.appendChild(logoRemoveBtn);
  }
  toolbar.appendChild(logoWrap);

  // Background control
  const bgWrap = document.createElement("div");
  bgWrap.className = "admin-toolbar-item";
  const bgUploadLabel = document.createElement("label");
  bgUploadLabel.className = "btn btn-outline";
  bgUploadLabel.textContent = state.header.backgroundSrc ? "Replace Background" : "Background";
  bgUploadLabel.setAttribute("for", "headerBgUpload");
  const bgUploadInput = document.createElement("input");
  bgUploadInput.type = "file";
  bgUploadInput.id = "headerBgUpload";
  bgUploadInput.accept = "image/*";
  bgUploadInput.style.display = "none";
  bgUploadInput.addEventListener("change", () => {
    const file = bgUploadInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        bgUploadInput.value = "";
        state.header.backgroundSrc = reader.result;
        state.header.themeBackgrounds[activeTheme] = reader.result;
        applyHeaderBackground(reader.result, true);
        render();
      };
      reader.readAsDataURL(file);
    }
  });
  bgWrap.appendChild(bgUploadLabel);
  bgWrap.appendChild(bgUploadInput);
  if (state.header.backgroundSrc) {
    const bgClearBtn = document.createElement("button");
    bgClearBtn.className = "btn btn-ghost";
    bgClearBtn.type = "button";
    bgClearBtn.textContent = "Remove";
    bgClearBtn.addEventListener("click", () => {
      state.header.backgroundSrc = "";
      state.header.themeBackgrounds[activeTheme] = "";
      applyHeaderBackground("", true);
      render();
    });
    bgWrap.appendChild(bgClearBtn);
  }
  toolbar.appendChild(bgWrap);

  // Mini-icon items + + mini-icon button (all in same toolbar row)
  const socialIcons = Array.isArray(state.header.socialIcons) ? state.header.socialIcons : [];
  if (socialIcons.length > 0) {
    socialIcons.forEach((icon, index) => {
      const iconItem = document.createElement("div");
      iconItem.className = "admin-toolbar-item";
      const uploadLabel = document.createElement("label");
      uploadLabel.className = "btn btn-outline";
      uploadLabel.textContent = icon.src ? "Replace" : "mini icon";
      const uploadInput = document.createElement("input");
      uploadInput.type = "file";
      uploadInput.accept = "image/*";
      uploadInput.id = `headerIconUpload-${index}`;
      uploadLabel.setAttribute("for", uploadInput.id);
      uploadInput.addEventListener("change", () => {
        const file = uploadInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            uploadInput.value = "";
            state.header.socialIcons[index].src = reader.result;
            render();
          };
          reader.readAsDataURL(file);
        }
      });
      const urlInput = document.createElement("input");
      urlInput.type = "text";
      urlInput.className = "panel-title-input";
      urlInput.placeholder = "https://";
      urlInput.value = icon.url || "";
      urlInput.addEventListener("input", () => { state.header.socialIcons[index].url = urlInput.value; });
      const removeBtn = document.createElement("button");
      removeBtn.className = "btn btn-danger";
      removeBtn.type = "button";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => { state.header.socialIcons.splice(index, 1); render(); });
      iconItem.appendChild(uploadLabel);
      iconItem.appendChild(uploadInput);
      iconItem.appendChild(urlInput);
      iconItem.appendChild(removeBtn);
      toolbar.appendChild(iconItem);
    });
  }
  const addIconBtn = document.createElement("button");
  addIconBtn.className = "btn btn-outline btn-mini-icon-add";
  addIconBtn.type = "button";
  addIconBtn.textContent = "+ mini-icon";
  addIconBtn.addEventListener("click", () => {
    state.header.socialIcons.push({ src: "", url: "" });
    render();
  });
  toolbar.appendChild(addIconBtn);

  headerSection.appendChild(toolbar);

  return headerSection;
}


function renderAdminBox() {
  if (!adminBox) {
    return;
  }
  adminBox.innerHTML = "";
  if (!adminMode) {
    return;
  }

  const isHomePage = currentPageId === "home";

  const leftCol = document.createElement("div");
  leftCol.className = "admin-col admin-col--left";

  const rightCol = document.createElement("div");
  rightCol.className = "admin-col admin-col--right";

  const actionSegments = document.createElement("div");
  actionSegments.className = isHomePage ? "admin-action-sections admin-action-sections--home" : "admin-action-sections";

  const createSegment = (title) => {
    const segment = document.createElement("div");
    segment.className = "admin-action-segment";
    const st = document.createElement("div");
    st.className = "admin-subtitle";
    st.textContent = title;
    segment.appendChild(st);
    return segment;
  };

  if (isHomePage) {
    if (!ONLINE_BUILD) {
      const authSeg = createSegment("Account creation:");
      const ensureAccount = () => {
        if (!state.onlineAuth.length) {
          state.onlineAuth.push({ id: createId("online-auth"), username: "", password: "", role: "editor" });
        }
      };
      ensureAccount();
      state.onlineAuth.forEach((account, index) => {
        const row = document.createElement("div");
        row.className = "admin-row admin-row-wrap admin-row-wrap--account";
        const u = document.createElement("input");
        u.type = "text";
        u.className = "panel-title-input";
        u.placeholder = "Name";
        u.value = account.username || "";
        u.addEventListener("input", () => { state.onlineAuth[index].username = u.value; });
        const p = document.createElement("input");
        p.type = "password";
        p.className = "panel-title-input";
        p.placeholder = "Password";
        p.value = account.password || "";
        p.addEventListener("input", () => { state.onlineAuth[index].password = p.value; });
        const s = document.createElement("select");
        s.className = "panel-title-input";
        [{ value: "admin", label: "Admin" }, { value: "editor", label: "Editor" }].forEach((opt) => {
          const o = document.createElement("option");
          o.value = opt.value;
          o.textContent = opt.label;
          o.selected = (account.role || "admin") === opt.value;
          s.appendChild(o);
        });
        s.addEventListener("change", () => { state.onlineAuth[index].role = s.value; });
        const rm = document.createElement("button");
        rm.className = "btn btn-danger";
        rm.type = "button";
        rm.textContent = "Remove";
        rm.disabled = state.onlineAuth.length <= 1;
        rm.addEventListener("click", () => { state.onlineAuth.splice(index, 1); render(); });
        const addBtn = document.createElement("button");
        addBtn.className = "btn btn-outline";
        addBtn.type = "button";
        addBtn.textContent = "+ account";
        addBtn.addEventListener("click", () => {
          state.onlineAuth.push({ id: createId("online-auth"), username: "", password: "", role: "editor" });
          render();
        });
        row.appendChild(u);
        row.appendChild(p);
        row.appendChild(s);
        row.appendChild(rm);
        row.appendChild(addBtn);
        authSeg.appendChild(row);
      });
      actionSegments.appendChild(authSeg);
    }

    const projectSeg = createSegment("Project action:");
    const projectRow = document.createElement("div");
    projectRow.className = "admin-row admin-row-wrap";
    const exportZipBtn = document.createElement("button");
    exportZipBtn.className = "btn btn-outline";
    exportZipBtn.type = "button";
    exportZipBtn.textContent = "Project ZIP";
    exportZipBtn.addEventListener("click", () => { handleExportZip(); });
    const resetSiteDataBtn = document.createElement("button");
    resetSiteDataBtn.className = "btn btn-warning";
    resetSiteDataBtn.type = "button";
    resetSiteDataBtn.textContent = "Reset Data";
    resetSiteDataBtn.title = "Clears this site's localStorage, sessionStorage, cookies, then reloads";
    resetSiteDataBtn.addEventListener("click", () => {
      if (confirm("Clear this site's local data and reload?")) clearSiteDataAndReload();
    });
    const onlineExportBtn = document.createElement("button");
    onlineExportBtn.className = "btn btn-outline";
    onlineExportBtn.type = "button";
    onlineExportBtn.textContent = "Online Build";
    onlineExportBtn.addEventListener("click", () => { handleExportOnlineZip(); });
    const onlineViewerOnlyBtn = document.createElement("button");
    onlineViewerOnlyBtn.className = "btn btn-outline";
    onlineViewerOnlyBtn.type = "button";
    onlineViewerOnlyBtn.textContent = "Online Build (Viewer Only)";
    onlineViewerOnlyBtn.addEventListener("click", () => { handleExportOnlineViewerZip(); });
    projectRow.appendChild(exportZipBtn);
    projectRow.appendChild(resetSiteDataBtn);
    if (!ONLINE_BUILD) {
      projectRow.appendChild(onlineExportBtn);
      projectRow.appendChild(onlineViewerOnlyBtn);
    }
    projectSeg.appendChild(projectRow);
    actionSegments.appendChild(projectSeg);
  }

  const pageSeg = createSegment("Page action:");

  if (!isHomePage) {
    const renameInput = document.createElement("input");
    renameInput.type = "text";
    renameInput.className = "panel-title-input";
    renameInput.placeholder = "Rename Page";
    const currentSubPage = getSubPageEntry(currentPageId);
    renameInput.value = currentSubPage?.title || currentSubPage?.navLabel || getCurrentPage()?.title || "";
    renameInput.addEventListener("input", () => {
      setSubPageDisplay(currentPageId, renameInput.value || "Untitled page");
      renderPageNav();
      renderNav();
    });
    const renameRow = document.createElement("div");
    renameRow.className = "admin-row";
    renameRow.appendChild(renameInput);
    pageSeg.appendChild(renameRow);
  }

  const mkBtn = (text, handler) => {
    const b = document.createElement("button");
    b.className = "btn btn-outline";
    b.type = "button";
    b.textContent = text;
    b.addEventListener("click", handler);
    return b;
  };

  const addBoxRow = document.createElement("div");
  addBoxRow.className = "admin-row admin-row-wrap";
  addBoxRow.appendChild(mkBtn("Info", () => {
    getPageBlocks().push({ id: createId("rules"), type: "rules", title: "Information Box", videos: [], sections: [{ id: createId("rules-section"), title: "New Information Sub-Box", subtitle: "", body: "", note: "", mediaType: "", mediaSrc: "", mediaVideoType: "local", backgroundSrc: "" }] });
    render();
  }));
  addBoxRow.appendChild(mkBtn("Flow", () => {
    getPageBlocks().push({ id: createId("flows"), type: "flows", title: "Flow Box", videos: [], contextText: "", flows: [{ id: createId("flow"), title: "New Flow Sub-Box", exampleLabel: "Example", exampleTargetId: "", imageSrc: "", visibility: "both", videos: [], rows: [] }] });
    render();
  }));
  addBoxRow.appendChild(mkBtn("Study", () => {
    getPageBlocks().push({ id: createId("group"), type: "calloutGroup", title: "New Study Box", videos: [], subBoxes: [{ id: createId("study-sub"), title: "Study Sub-Box", description: "" }] });
    render();
  }));
  addBoxRow.appendChild(mkBtn("Video", () => {
    getPageBlocks().push({ id: createId("video"), type: "video", title: "Video", videos: [] });
    render();
  }));
  addBoxRow.appendChild(mkBtn("Ship Meta", () => {
    getPageBlocks().push(createBlankShipMetaBlock());
    render();
  }));
  addBoxRow.appendChild(mkBtn("Org", () => {
    getPageBlocks().push(createBlankOrgShowcaseBlock());
    render();
  }));
  pageSeg.appendChild(addBoxRow);
  actionSegments.appendChild(pageSeg);

  leftCol.appendChild(actionSegments);

  if (isHomePage) {
    const headerSeg = createHeaderMediaSection();
    rightCol.appendChild(headerSeg);
  }

  adminBox.appendChild(leftCol);
  adminBox.appendChild(rightCol);
}


function renderHeaderSocials() {
  if (!headerSocials) {
    return;
  }
  headerSocials.innerHTML = "";
  state.header.socialIcons.forEach((icon) => {
    if (!icon.src) {
      return;
    }
    const img = document.createElement("img");
    img.src = icon.src;
    img.alt = "Social icon";
    if (icon.url) {
      const link = document.createElement("a");
      link.href = icon.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.appendChild(img);
      headerSocials.appendChild(link);
    } else {
      const wrap = document.createElement("span");
      wrap.appendChild(img);
      headerSocials.appendChild(wrap);
    }
  });
}

function renderHeaderActions() {
  if (headerModeToggle) {
    headerModeToggle.innerHTML = "";
    const stack = document.createElement("div");
    stack.className = "mode-toggle-stack";
    const wrap = document.createElement("div");
    wrap.className = "mode-toggle-buttons";
    [
      { id: "basic", label: "Basic" },
      { id: "advanced", label: "Advanced" },
      { id: "pro", label: "Pro", isPro: true },
    ].forEach((mode) => {
      const button = document.createElement("button");
      button.type = "button";
      const isActive = !mode.isPro && activeMode === mode.id;
      button.className = `mode-btn${isActive ? " is-active" : ""}`;
      button.textContent = mode.label;
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (mode.isPro) {
        button.classList.add("is-pro");
        button.dataset.tooltip = "In progress";
        const lock = document.createElement("span");
        lock.className = "mode-lock";
        lock.textContent = "✦";
        button.appendChild(lock);
        button.addEventListener("click", () => {
          window.location.hash = "#pro";
        });
      } else {
        button.addEventListener("click", () => setViewMode(mode.id));
      }
      wrap.appendChild(button);
    });
    stack.appendChild(wrap);
    const difficulty = document.createElement("div");
    difficulty.className = "eyebrow difficulty-label";
    difficulty.textContent = "Difficulty";
    stack.appendChild(difficulty);
    headerModeToggle.appendChild(stack);
  }
}

function ensureSharedNavIndicator() {
  const host = document.querySelector(".header-navs");
  if (!host) return null;
  let indicator = host.querySelector(".nav-shared-indicator");
  if (!indicator) {
    indicator = document.createElement("span");
    indicator.className = "nav-shared-indicator";
    host.appendChild(indicator);
  }
  return indicator;
}

function moveSharedNavIndicator(target, animateFromMain = false) {
  const host = document.querySelector(".header-navs");
  const indicator = ensureSharedNavIndicator();
  if (!host || !indicator) return;
  if (!target) {
    indicator.style.opacity = "0";
    sharedNavIndicatorTarget = null;
    return;
  }
  const hostRect = host.getBoundingClientRect();
  const rect = target.getBoundingClientRect();
  const nextX = rect.left - hostRect.left;
  const nextY = rect.top - hostRect.top;
  indicator.style.width = `${rect.width}px`;
  indicator.style.height = `${rect.height}px`;
  indicator.style.transform = `translate(${nextX}px, ${nextY}px)`;
  indicator.style.opacity = "1";
  if (animateFromMain) {
    indicator.classList.add("is-shifting");
    setTimeout(() => indicator.classList.remove("is-shifting"), 420);
  }
  sharedNavIndicatorTarget = target;
}

function updateSharedIndicatorFromState() {
  const activeCategory = categoryNav?.querySelector("a.is-active");
  const activePage = pageNav?.querySelector("a.is-active");
  moveSharedNavIndicator(activeCategory || activePage || null);
}

function applyPageBackground(src, withFade = true) {
  const value = src ? `url('${src}')` : "";
  if (pageBgTransitionTimer) {
    clearTimeout(pageBgTransitionTimer);
    pageBgTransitionTimer = null;
  }
  const setBackground = () => {
    if (value) {
      document.body.style.setProperty("--page-bg-image", value);
      document.body.classList.add("has-page-bg");
    } else {
      document.body.style.removeProperty("--page-bg-image");
      document.body.classList.remove("has-page-bg");
    }
  };
  if (!withFade) {
    setBackground();
    document.body.style.setProperty("--page-bg-opacity", "1");
    return;
  }
  document.body.style.setProperty("--page-bg-opacity", "0");
  pageBgTransitionTimer = setTimeout(() => {
    setBackground();
    document.body.style.setProperty("--page-bg-opacity", "1");
  }, 160);
}

function applyHeaderBackground(src, withFade = true) {
  if (!siteHeader) return;
  if (headerBgTransitionTimer) {
    clearTimeout(headerBgTransitionTimer);
    headerBgTransitionTimer = null;
  }
  const setBackground = () => {
    if (src) {
      siteHeader.classList.add("has-bg");
      siteHeader.style.setProperty("--header-bg", `url('${src}')`);
    } else {
      siteHeader.classList.remove("has-bg");
      siteHeader.style.removeProperty("--header-bg");
    }
  };
  if (!withFade) {
    setBackground();
    siteHeader.style.setProperty("--header-bg-opacity", "1");
    return;
  }
  siteHeader.style.setProperty("--header-bg-opacity", "0");
  headerBgTransitionTimer = setTimeout(() => {
    setBackground();
    requestAnimationFrame(() => {
      siteHeader.style.setProperty("--header-bg-opacity", "1");
    });
    headerBgTransitionTimer = null;
  }, 160);
}

function getHeaderSizeText() {
  if (!siteHeader) {
    return "1920 px x 480 px";
  }
  const width = Math.round(siteHeader.offsetWidth);
  const height = Math.round(siteHeader.offsetHeight);
  if (!width || !height) {
    return "1920 px x 480 px";
  }
  return `${width} px x ${height} px`;
}

function createInlineInput(kind, value, onChange) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = value || "";
  input.className = `inline-input ${kind}`;
  input.addEventListener("input", () => onChange(input.value));
  return input;
}

function createInlineTextarea(kind, value, onChange) {
  const textarea = document.createElement("textarea");
  textarea.value = value || "";
  textarea.className = `inline-input ${kind}`;
  textarea.rows = 3;
  textarea.addEventListener("input", () => onChange(textarea.value));
  return textarea;
}

function createImageUploadControl(labelText, onLoad, onClear, className = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `image-upload${className ? ` ${className}` : ""}`;

  const uploadBtn = document.createElement("button");
  uploadBtn.className = "btn btn-outline btn-compact";
  uploadBtn.type = "button";
  uploadBtn.textContent = labelText;

  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.id = createId("image-upload");
  uploadBtn.addEventListener("click", () => uploadInput.click());
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files && uploadInput.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      uploadInput.value = "";
      if (!result) {
        return;
      }
      onLoad(result);
    };
    reader.onerror = () => {
      uploadInput.value = "";
    };
    reader.readAsDataURL(file);
  });

  wrapper.appendChild(uploadBtn);
  wrapper.appendChild(uploadInput);

  if (onClear) {
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-ghost btn-compact";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      onClear();
    });
    wrapper.appendChild(removeBtn);
  }

  return wrapper;
}

function createVideoUploadControl(labelText, onLoad, onClear, className = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `image-upload${className ? ` ${className}` : ""}`;

  const uploadLabel = document.createElement("label");
  uploadLabel.className = "btn btn-outline btn-compact";
  uploadLabel.textContent = labelText;

  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "video/*";
  uploadInput.id = createId("video-upload");
  uploadLabel.setAttribute("for", uploadInput.id);
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      uploadInput.value = "";
      onLoad(reader.result);
    };
    reader.readAsDataURL(file);
  });

  wrapper.appendChild(uploadLabel);
  wrapper.appendChild(uploadInput);

  if (onClear) {
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-ghost btn-compact";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      onClear();
    });
    wrapper.appendChild(removeBtn);
  }

  return wrapper;
}

function createMediaUploadControl(labelText, onLoad, onClear, className = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `image-upload${className ? ` ${className}` : ""}`;
  const uploadLabel = document.createElement("label");
  uploadLabel.className = "btn btn-outline btn-compact";
  uploadLabel.textContent = labelText;
  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/gif,video/*";
  uploadInput.id = createId("media-upload");
  uploadLabel.setAttribute("for", uploadInput.id);
  uploadInput.addEventListener("change", () => {
    const file = uploadInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      uploadInput.value = "";
      onLoad(reader.result, file.type || "");
    };
    reader.readAsDataURL(file);
  });
  wrapper.appendChild(uploadLabel);
  wrapper.appendChild(uploadInput);
  if (onClear) {
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-ghost btn-compact";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => onClear());
    wrapper.appendChild(removeBtn);
  }
  return wrapper;
}

function renderRuleMedia(section, editable) {
  const hasMedia = Boolean(section.mediaType && section.mediaSrc);
  if (!editable && !hasMedia) {
    return null;
  }

  const wrap = document.createElement("div");
  wrap.className = "rule-media";

  if (section.mediaType === "image" && section.mediaSrc) {
    const image = document.createElement("img");
    image.className = "flow-image rule-media-image";
    image.src = section.mediaSrc;
    image.alt = section.title ? `${section.title} media` : "Information media";
    wrap.appendChild(image);
  }

  if (section.mediaType === "video" && section.mediaSrc) {
    const video = document.createElement("video");
    video.className = "local-video";
    video.src = section.mediaSrc;
    video.controls = true;
    wrap.appendChild(video);
  }

  if (section.mediaType === "youtube" && section.mediaSrc) {
    const embedUrl = toYoutubeEmbed(section.mediaSrc);
    if (embedUrl) {
      const frame = document.createElement("iframe");
      frame.className = "youtube-frame";
      frame.src = embedUrl;
      frame.allowFullscreen = true;
      wrap.appendChild(frame);
    }
  }

  if (editable) {
    const mediaSelect = renderSelect(
      "Media type",
      section.mediaType || "",
      [
        { value: "", label: "None" },
        { value: "image", label: "Image" },
        { value: "video", label: "Video" },
        { value: "youtube", label: "YouTube link" },
      ],
      (value) => {
        section.mediaType = value;
        if (!value) {
          section.mediaSrc = "";
        }
        render();
      },
      {
        editable: true,
        className: "visibility-control",
      }
    );
    wrap.appendChild(mediaSelect);

    if (section.mediaType === "image") {
      wrap.appendChild(
        createImageUploadControl(
          section.mediaSrc ? "Replace image" : "Upload image",
          (src) => {
            section.mediaSrc = src;
            render();
          },
          section.mediaSrc
            ? () => {
                section.mediaSrc = "";
                render();
              }
            : null
        )
      );
    }

    if (section.mediaType === "video") {
      wrap.appendChild(
        createVideoUploadControl(
          section.mediaSrc ? "Replace video" : "Upload video",
          (src) => {
            section.mediaSrc = src;
            render();
          },
          section.mediaSrc
            ? () => {
                section.mediaSrc = "";
                render();
              }
            : null
        )
      );
    }

    if (section.mediaType === "youtube") {
      const youtubeInput = document.createElement("input");
      youtubeInput.type = "text";
      youtubeInput.className = "panel-title-input";
      youtubeInput.placeholder = "https://youtube.com/watch?v=...";
      youtubeInput.value = section.mediaSrc || "";
      youtubeInput.addEventListener("input", () => {
        section.mediaSrc = youtubeInput.value.trim();
      });
      wrap.appendChild(youtubeInput);
    }
  }

  return wrap;
}

function renderOnlineAdminEntry() {
  if (!ONLINE_BUILD || VIEWER_ONLY_BUILD) {
    return null;
  }
  const container = document.createElement("div");
  container.className = "online-admin-entry";

  if (adminMode) {
    const logoutBtn = document.createElement("button");
    logoutBtn.className = "btn btn-ghost btn-compact";
    logoutBtn.type = "button";
    logoutBtn.textContent = "Logout";
    logoutBtn.addEventListener("click", () => {
      adminMode = false;
      localStorage.removeItem(ONLINE_AUTH_KEY);
      updateAdminUI();
    });
    container.appendChild(logoutBtn);
    return container;
  }

  const details = document.createElement("details");
  details.className = "online-admin-details";
  const summary = document.createElement("summary");
  summary.textContent = "Login";
  details.appendChild(summary);

  const form = document.createElement("form");
  form.className = "online-admin-form";
  const userInput = document.createElement("input");
  userInput.type = "text";
  userInput.placeholder = "Username";
  userInput.autocomplete = "username";
  const passInput = document.createElement("input");
  passInput.type = "password";
  passInput.placeholder = "Password";
  passInput.autocomplete = "current-password";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "btn btn-outline btn-compact";
  submit.textContent = "Login";
  const message = document.createElement("span");
  message.className = "online-admin-message";
  form.appendChild(userInput);
  form.appendChild(passInput);
  form.appendChild(submit);
  form.appendChild(message);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const authEntries = Array.isArray(window.__ONLINE_AUTH__)
      ? window.__ONLINE_AUTH__
      : (Array.isArray(state.onlineAuth) ? state.onlineAuth : DEFAULT_STATE.onlineAuth);
    const match = authEntries.find((entry) => userInput.value === entry.username && passInput.value === entry.password);
    if (match) {
      adminMode = true;
      localStorage.setItem(ONLINE_AUTH_KEY, JSON.stringify({ loggedIn: true, role: match.role === "editor" ? "editor" : "admin", username: match.username || "" }));
      message.textContent = "";
      updateAdminUI();
      details.removeAttribute("open");
      userInput.value = "";
      passInput.value = "";
    } else {
      message.textContent = "Invalid login";
    }
  });

  details.appendChild(form);
  container.appendChild(details);
  return container;
}

function renderFooter() {
  footerContent.innerHTML = "";
  if (!adminMode) {
    state.footer.lines.forEach((line) => {
      const p = document.createElement("p");
      p.className = "footer-line";
      p.textContent = line;
      footerContent.appendChild(p);
    });
    if (state.footer.note) {
      const note = document.createElement("p");
      note.className = "footer-note";
      note.textContent = state.footer.note;
      footerContent.appendChild(note);
    }
    const onlineEntry = renderOnlineAdminEntry();
    if (onlineEntry) {
      footerContent.appendChild(onlineEntry);
    }
    return;
  }

  const editor = document.createElement("div");
  editor.className = "footer-editor";
  state.footer.lines.forEach((line, index) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    const input = document.createElement("input");
    input.type = "text";
    input.value = line;
    input.addEventListener("input", () => {
      state.footer.lines[index] = input.value;
    });
    const remove = document.createElement("button");
    remove.className = "btn btn-ghost";
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      state.footer.lines.splice(index, 1);
      render();
    });
    row.appendChild(input);
    row.appendChild(remove);
    editor.appendChild(row);
  });

  const add = document.createElement("button");
  add.className = "btn btn-outline";
  add.type = "button";
  add.textContent = "Add footer line";
  add.addEventListener("click", () => {
    state.footer.lines.push("");
    render();
  });
  editor.appendChild(add);

  const noteLabel = document.createElement("label");
  noteLabel.textContent = "Footer note";
  const note = document.createElement("textarea");
  note.value = state.footer.note;
  note.addEventListener("input", () => {
    state.footer.note = note.value;
  });
  editor.appendChild(noteLabel);
  editor.appendChild(note);

  footerContent.appendChild(editor);
  const onlineEntry = renderOnlineAdminEntry();
  if (onlineEntry) {
    footerContent.appendChild(onlineEntry);
  }
}

function renderNav() {
  if (!categoryNav) return;
  categoryNav.innerHTML = "";
  categoryNav.classList.remove("nav-deploy");
  if (currentPageId === "home" || currentPageId === "pro") {
    updateSharedIndicatorFromState();
    return;
  }
  if (shouldAnimateNavDeploy) {
    requestAnimationFrame(() => {
      categoryNav.classList.add("nav-deploy");
    });
  }
  const activeBlockId = (window.location.hash || "").slice(1).split("/")[1];
  getPageBlocks().forEach((block, index) => {
    const navTitle = String(block.title || "").trim();
    if (!navTitle) {
      return;
    }
    const link = document.createElement("a");
    link.href = `#${currentPageId}/${block.id}`;
    link.textContent = navTitle;
    link.style.setProperty("--deploy-order", String(index));
    if (activeBlockId && activeBlockId === block.id) {
      link.classList.add("is-active");
    }
    link.addEventListener("click", () => {
      moveSharedNavIndicator(link, true);
    });
    categoryNav.appendChild(link);
  });
  requestAnimationFrame(updateSharedIndicatorFromState);
}

function renderPageNav() {
  if (!pageNav) return;
  pageNav.innerHTML = "";

  const pages = getVisiblePageDefinitions();
  pages.forEach((page, index) => {
    if (index === 1) {
      const separator = document.createElement("span");
      separator.className = "page-nav-separator";
      separator.textContent = "|";
      separator.setAttribute("aria-hidden", "true");
      pageNav.appendChild(separator);
    }

    const link = document.createElement("a");
    link.href = `#${page.id}`;
    link.textContent = page.navLabel || page.title;
    link.title = page.navLabel || page.title;
    link.dataset.pageId = page.id;
    if (page.id === "home") link.classList.add("is-home-link");
    if (page.id === currentPageId) link.classList.add("is-active");
    link.style.setProperty("--deploy-order", String(index));

    if (adminMode && page.id !== "home") {
      link.draggable = true;
      link.classList.add("is-draggable");
      link.addEventListener("dragstart", (event) => {
        draggedPageId = page.id;
        event.dataTransfer.effectAllowed = "move";
      });
      link.addEventListener("dragover", (event) => {
        event.preventDefault();
        link.classList.add("drop-target");
      });
      link.addEventListener("dragleave", () => {
        link.classList.remove("drop-target");
      });
      link.addEventListener("drop", (event) => {
        event.preventDefault();
        link.classList.remove("drop-target");
        if (!draggedPageId || draggedPageId === page.id) return;
        const list = getHomeSubPages();
        const from = list.findIndex((item) => item.id === draggedPageId);
        const to = list.findIndex((item) => item.id === page.id);
        if (from < 0 || to < 0) return;
        const [moved] = list.splice(from, 1);
        list.splice(to, 0, moved);
        draggedPageId = "";
        render();
      });
      link.addEventListener("dragend", () => {
        draggedPageId = "";
        pageNav.querySelectorAll(".drop-target").forEach((item) => item.classList.remove("drop-target"));
      });
    }

    link.addEventListener("click", () => moveSharedNavIndicator(link));
    pageNav.appendChild(link);
  });

  requestAnimationFrame(updateSharedIndicatorFromState);
}

function renderHomePage() {
  const home = state.home;

  if (!Array.isArray(home.blocks)) {
    home.blocks = [];
  }
  if (!Number.isInteger(home.navOrder)) {
    home.navOrder = 0;
  }

  const homePanel = document.createElement("section");
  homePanel.className = adminMode ? "panel home-nav-panel" : "home-nav-panel home-nav-panel--viewer";
  const homePanelHeader = document.createElement("div");
  homePanelHeader.className = "panel-header";
  const homeHeadingGroup = document.createElement("div");
  homeHeadingGroup.className = "panel-heading-group";
  const homeBadge = document.createElement("div");
  homeBadge.className = "panel-type-badge panel-type-badge--home";
  homeBadge.textContent = "Navigation";
  homeHeadingGroup.appendChild(homeBadge);
  if (adminMode) {
    const homeTitle = document.createElement("h2");
    homeTitle.textContent = "Operational Pages";
    homeHeadingGroup.appendChild(homeTitle);
  }
  homePanelHeader.appendChild(homeHeadingGroup);
  if (adminMode) {
    const controls = document.createElement("div");
    controls.className = "block-actions";
    const moveUp = document.createElement("button");
    moveUp.className = "btn btn-ghost";
    moveUp.type = "button";
    moveUp.textContent = "↑";
    moveUp.addEventListener("click", () => { home.navOrder = Math.max(0, home.navOrder - 1); render(); });
    const moveDown = document.createElement("button");
    moveDown.className = "btn btn-ghost";
    moveDown.type = "button";
    moveDown.textContent = "↓";
    moveDown.addEventListener("click", () => { home.navOrder = Math.min(getPageBlocks().length, home.navOrder + 1); render(); });
    controls.appendChild(moveUp);
    controls.appendChild(moveDown);
    homePanelHeader.appendChild(controls);
    homePanel.appendChild(homePanelHeader);
  }

  const homePanelBody = document.createElement("div");
  homePanelBody.className = "panel-body";
  const tiles = document.createElement("section");
  tiles.className = "home-tiles";

  getHomeSubPages().forEach((subPage, subIndex) => {
    const id = subPage.id;
    const tile = document.createElement(adminMode ? "article" : "a");
    tile.className = "panel home-tile";
    tile.dataset.pageId = id;
    if (!adminMode) {
      tile.href = `#${id}`;
    } else {
      tile.addEventListener("click", (event) => event.preventDefault());
    }

    const tileLabel = subPage.title || subPage.navLabel || "Untitled page";
    if (subPage.staticSrc) {
      tile.style.setProperty("--tile-bg", `url('${subPage.staticSrc}')`);
      tile.classList.add("has-media");
    }

    if (!adminMode) {
      const title = document.createElement("span");
      title.className = "home-tile-title";
      title.textContent = tileLabel;
      tile.appendChild(title);
    }

    let hoverVideo = null;
    if (subPage.mediaType === "video" && subPage.backgroundSrc) {
      hoverVideo = document.createElement("video");
      hoverVideo.className = "home-tile-hover-video";
      hoverVideo.src = subPage.backgroundSrc;
      hoverVideo.muted = true;
      hoverVideo.loop = true;
      hoverVideo.playsInline = true;
      hoverVideo.preload = "metadata";
      hoverVideo.pause();
      tile.appendChild(hoverVideo);
    }

    if (adminMode) {
      const controls = document.createElement("div");
      controls.className = "home-tile-controls-strip";
      controls.addEventListener("click", (event) => {
        event.stopPropagation();
      });

      const renameInput = document.createElement("input");
      renameInput.type = "text";
      renameInput.className = "panel-title-input";
      renameInput.placeholder = "Rename page";
      renameInput.value = tileLabel;
      renameInput.addEventListener("input", () => {
        setSubPageDisplay(subPage.id, renameInput.value || "Untitled page");
        renderPageNav();
      });
      controls.appendChild(renameInput);

      // Row 2: upload buttons
      const mediaRow = document.createElement("div");
      mediaRow.className = "tile-media-row";

      const staticInput = document.createElement("input");
      staticInput.type = "file";
      staticInput.accept = "image/*";
      staticInput.style.display = "none";
      staticInput.addEventListener("change", () => {
        const file = staticInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          subPage.mediaType = file.type === "image/gif" ? "gif" : "image";
          subPage.staticSrc = reader.result;
          staticInput.value = "";
          render();
        };
        reader.readAsDataURL(file);
      });
      const staticBtn = document.createElement("button");
      staticBtn.className = "btn btn-outline btn-compact";
      staticBtn.type = "button";
      staticBtn.textContent = "Static BG";
      staticBtn.addEventListener("click", () => staticInput.click());
      mediaRow.appendChild(staticBtn);

      const hoverInput = document.createElement("input");
      hoverInput.type = "file";
      hoverInput.accept = "image/gif,video/*";
      hoverInput.style.display = "none";
      hoverInput.addEventListener("change", () => {
        const file = hoverInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          subPage.mediaType = file.type.startsWith("video/") ? "video" : "gif";
          subPage.backgroundSrc = reader.result;
          hoverInput.value = "";
          render();
        };
        reader.readAsDataURL(file);
      });
      const hoverBtn = document.createElement("button");
      hoverBtn.className = "btn btn-outline btn-compact";
      hoverBtn.type = "button";
      hoverBtn.textContent = "Hover Media";
      hoverBtn.addEventListener("click", () => hoverInput.click());
      mediaRow.appendChild(hoverBtn);

      controls.appendChild(mediaRow);

      // Row 3: clear + actions
      const actionRow = document.createElement("div");
      actionRow.className = "tile-inline-actions";

      const clearMedia = document.createElement("button");
      clearMedia.className = "btn btn-ghost btn-compact";
      clearMedia.type = "button";
      clearMedia.textContent = "Clear";
      clearMedia.addEventListener("click", () => {
        subPage.staticSrc = "";
        subPage.backgroundSrc = "";
        subPage.mediaType = "image";
        staticInput.value = "";
        hoverInput.value = "";
        render();
      });
      actionRow.appendChild(clearMedia);

      [
        { label: "←", delta: -1, title: "Move left" },
        { label: "→", delta: 1, title: "Move right" },
        { label: "↑", delta: -1, title: "Move up" },
        { label: "↓", delta: 1, title: "Move down" },
      ].forEach((cfg) => {
        const moveBtn = document.createElement("button");
        moveBtn.className = "btn btn-ghost btn-compact";
        moveBtn.type = "button";
        moveBtn.textContent = cfg.label;
        moveBtn.title = cfg.title;
        moveBtn.addEventListener("click", () => moveItem(home.subPages, subIndex, cfg.delta));
        actionRow.appendChild(moveBtn);
      });
      const removePage = document.createElement("button");
      removePage.className = "btn btn-danger btn-compact";
      removePage.type = "button";
      removePage.textContent = "Delete";
      removePage.addEventListener("click", () => {
        const idx = home.subPages.findIndex((item) => item.id === subPage.id);
        if (idx >= 0) {
          home.subPages.splice(idx, 1);
          delete state.pages[subPage.id];
          if (currentPageId === subPage.id) {
            currentPageId = "home";
            window.location.hash = "#home";
          }
          render();
        }
      });
      actionRow.appendChild(removePage);
      controls.appendChild(actionRow);
      tile.appendChild(controls);
    }

    tile.addEventListener("mouseenter", () => {
      if (hoverVideo) {
        hoverVideo.style.opacity = "1";
        hoverVideo.play().catch(() => {});
      } else if (subPage.backgroundSrc) {
        tile.style.setProperty("--tile-bg", `url('${subPage.backgroundSrc}')`);
      }
    });
    tile.addEventListener("mouseleave", () => {
      if (hoverVideo) {
        hoverVideo.pause();
        hoverVideo.currentTime = 0;
        hoverVideo.style.opacity = "0";
      } else if (subPage.staticSrc) {
        tile.style.setProperty("--tile-bg", `url('${subPage.staticSrc}')`);
      }
    });
    tiles.appendChild(tile);
  });

  homePanelBody.appendChild(tiles);
  if (adminMode) {
    const maxSubPages = 10;
    const atPageLimit = getHomeSubPages().length >= maxSubPages;
    const addSubPage = document.createElement("button");
    addSubPage.className = "btn btn-outline";
    addSubPage.type = "button";
    addSubPage.textContent = "Add Sub Page";
    addSubPage.disabled = atPageLimit;
    addSubPage.addEventListener("click", () => {
      if (getHomeSubPages().length >= maxSubPages) {
        return;
      }
      const pageId = createId("sub");
      const title = "New Sub Page";
      home.subPages.push({ id: pageId, title, navLabel: title, backgroundSrc: "", staticSrc: "", mediaType: "image" });
      state.pages[pageId] = createMetaPage(pageId, title);
      render();
    });
    homePanelBody.appendChild(addSubPage);
    if (atPageLimit) {
      const limitNote = document.createElement("div");
      limitNote.className = "admin-note";
      limitNote.textContent = "Max 10 pages";
      homePanelBody.appendChild(limitNote);
    }
  }
  homePanel.appendChild(homePanelBody);

  const renderedBlocks = getPageBlocks().map((block, index) => ({ block, index }));
  const ordered = renderedBlocks.slice();
  ordered.splice(Math.max(0, Math.min(home.navOrder, ordered.length)), 0, { homeNav: true });
  ordered.forEach((entry) => {
    if (entry.homeNav) {
      blocksContainer.appendChild(homePanel);
      return;
    }
    const { block, index } = entry;
    if (block.type === "rules") blocksContainer.appendChild(renderRulesBlock(block, index));
    else if (block.type === "flows") blocksContainer.appendChild(renderFlowsBlock(block, index));
    else if (block.type === "calloutGroup") blocksContainer.appendChild(renderCalloutGroupBlock(block, index));
    else if (block.type === "video") blocksContainer.appendChild(renderVideoBlock(block, index));
    else if (block.type === "shipMeta") blocksContainer.appendChild(renderShipMetaBlock(block, index));
    else if (block.type === "orgShowcase") blocksContainer.appendChild(renderOrgShowcaseBlock(block, index));
  });
}


function renderProPage() {
  const panel = document.createElement("section");
  panel.className = "panel pro-page";
  const body = document.createElement("div");
  body.className = "panel-body pro-page-body";
  body.appendChild(renderEditableText("h2", state.proPage.title, (value) => { state.proPage.title = value; }, { className: "pro-page-title", placeholder: "Pro title" }));
  body.appendChild(renderEditableText("p", state.proPage.body, (value) => { state.proPage.body = value; }, { className: "pro-page-copy", multiline: true, placeholder: "Pro description" }));
  const features = document.createElement("div");
  features.className = "pro-feature-list";
  state.proPage.features = Array.isArray(state.proPage.features) && state.proPage.features.length ? state.proPage.features : [""];
  state.proPage.features.forEach((feature, index) => {
    const row = document.createElement("div");
    row.className = "pro-feature-row";
    row.appendChild(renderEditableText("span", feature, (value) => { state.proPage.features[index] = value; }, { className: "pro-feature-text", placeholder: "Feature" }));
    features.appendChild(row);
  });
  body.appendChild(features);
  const cta = document.createElement("a");
  cta.className = "btn btn-outline pro-cta";
  cta.href = state.proPage.ctaUrl || "javascript:void(0)";
  if (state.proPage.ctaUrl) {
    cta.target = "_blank";
    cta.rel = "noopener noreferrer";
  }
  cta.textContent = state.proPage.ctaText || "Learn more";
  body.appendChild(cta);
  panel.appendChild(body);
  blocksContainer.appendChild(panel);
}

function render() {
  renderBootWarnings();
  renderThemeSelector();
  renderHeader();
  renderHeaderActions();
  renderFooter();
  renderPageNav();
  renderNav();
  blocksContainer.innerHTML = "";
  blocksContainer.classList.remove("page-content-enter");

  if (currentPageId === "pro") {
    renderProPage();
    updateScrollOffset();
    shouldAnimatePageContent = false;
    shouldAnimateNavDeploy = false;
    saveState();
    return;
  }

  if (currentPageId === "home") {
    renderHomePage();
    if (shouldAnimatePageContent) {
      Array.from(blocksContainer.children).forEach((node, index) => {
        node.style.setProperty("--stagger-index", String(index));
      });
      requestAnimationFrame(() => blocksContainer.classList.add("page-content-enter"));
    }
    if (document.querySelector(".study-overlay-callout.expanded")) {
      ensureStudyOverlayBackdrop();
    } else {
      teardownStudyOverlayBackdrop();
    }
    updateScrollOffset();
    scrollToHashTarget();
    shouldAnimatePageContent = false;
    shouldAnimateNavDeploy = false;
    saveState();
    return;
  }

  getPageBlocks().forEach((block, index) => {
    if (block.type === "rules") {
      blocksContainer.appendChild(renderRulesBlock(block, index));
      return;
    }
    if (block.type === "flows") {
      blocksContainer.appendChild(renderFlowsBlock(block, index));
      return;
    }
    if (block.type === "calloutGroup") {
      blocksContainer.appendChild(renderCalloutGroupBlock(block, index));
      return;
    }
    if (block.type === "video") {
      blocksContainer.appendChild(renderVideoBlock(block, index));
      return;
    }
    if (block.type === "shipMeta") {
      blocksContainer.appendChild(renderShipMetaBlock(block, index));
      return;
    }
    if (block.type === "orgShowcase") {
      blocksContainer.appendChild(renderOrgShowcaseBlock(block, index));
      return;
    }
  });

  if (shouldAnimatePageContent) {
    Array.from(blocksContainer.children).forEach((node, index) => {
      node.style.setProperty("--stagger-index", String(index));
    });
    requestAnimationFrame(() => blocksContainer.classList.add("page-content-enter"));
  }
  updateScrollOffset();
  if (document.querySelector(".study-overlay-callout.expanded")) {
    ensureStudyOverlayBackdrop();
  } else {
    teardownStudyOverlayBackdrop();
  }
  scrollToHashTarget();
  if (typeof pendingScrollY === "number") {
    window.scrollTo(0, pendingScrollY);
    pendingScrollY = null;
  }
  shouldAnimatePageContent = false;
  shouldAnimateNavDeploy = false;
  saveState();
}

function renderRulesBlock(block, index) {
  const section = document.createElement("section");
  section.className = adminMode ? "panel" : "panel panelless-block";
  section.id = block.id;
  section.dataset.title = block.title || "Information Box";
  const editing = isBlockEditing(block.id);

  appendBlockHeader(section, block, index, editing, "h2");

  const body = document.createElement("div");
  body.className = "panel-body rules-grid";

  block.sections.forEach((rulesSection, sectionIndex) => {
    const card = document.createElement("div");
    card.className = `rule-card ${getVisibilityClass(rulesSection.visibility)}`;
    if (rulesSection.backgroundSrc) {
      card.classList.add("has-bg");
      card.style.setProperty("--rule-bg", `url('${rulesSection.backgroundSrc}')`);
    }

    if (editing) {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = rulesSection.title;
      titleInput.className = "panel-title-input";
      titleInput.addEventListener("input", () => {
        rulesSection.title = titleInput.value;
      });
      card.appendChild(titleInput);

      card.appendChild(
        renderSelect(
          "Visibility",
          rulesSection.visibility,
          VISIBILITY_OPTIONS,
          (value) => {
            rulesSection.visibility = value;
            render();
          },
          { editable: true, className: "visibility-control" }
        )
      );

      const subtitleLabel = document.createElement("label");
      subtitleLabel.className = "eyebrow";
      subtitleLabel.textContent = "Subtitle";
      const subtitleInput = document.createElement("textarea");
      subtitleInput.value = rulesSection.subtitle || "";
      subtitleInput.placeholder = "Subtitle";
      subtitleInput.addEventListener("input", () => {
        rulesSection.subtitle = subtitleInput.value;
      });
      card.appendChild(subtitleLabel);
      card.appendChild(subtitleInput);

      const bodyLabel = document.createElement("label");
      bodyLabel.className = "eyebrow";
      bodyLabel.textContent = "Body text";
      const bodyInput = document.createElement("textarea");
      bodyInput.value = rulesSection.body || "";
      bodyInput.placeholder = "Body text";
      bodyInput.addEventListener("input", () => {
        rulesSection.body = bodyInput.value;
      });
      card.appendChild(bodyLabel);
      card.appendChild(bodyInput);
      card.appendChild(createImageUploadControl(rulesSection.backgroundSrc ? "Replace background" : "Upload background", (src) => { rulesSection.backgroundSrc = src; render(); }, rulesSection.backgroundSrc ? () => { rulesSection.backgroundSrc = ""; render(); } : null));
      const media = renderRuleMedia(rulesSection, true);
      if (media) card.appendChild(media);
    } else {
      if (rulesSection.title && rulesSection.title.trim()) {
        const title = document.createElement("h3");
        title.textContent = rulesSection.title;
        card.appendChild(title);
      }
      if (rulesSection.subtitle && rulesSection.subtitle.trim()) {
        const subtitle = document.createElement("p");
        subtitle.className = "rule-subtitle";
        subtitle.textContent = rulesSection.subtitle;
        card.appendChild(subtitle);
      }

      const bodyText = document.createElement("div");
      bodyText.className = "rule-body";
      const paragraphs = String(rulesSection.body || "")
        .split("\n")
        .map((entry) => entry.trim())
        .filter(Boolean);
      if (paragraphs.length) {
        paragraphs.forEach((entry) => {
          const p = document.createElement("p");
          p.textContent = entry;
          bodyText.appendChild(p);
        });
      }
      if (paragraphs.length) {
        card.appendChild(bodyText);
      }
      const media = renderRuleMedia(rulesSection, false);
      if (media) card.appendChild(media);
    }

    if (editing) {
      const actions = document.createElement("div");
      actions.className = "admin-row";
      const upBtn = document.createElement("button");
      upBtn.className = "btn btn-ghost btn-compact";
      upBtn.type = "button";
      upBtn.textContent = "↑";
      upBtn.addEventListener("click", () => moveItem(block.sections, sectionIndex, -1));
      const downBtn = document.createElement("button");
      downBtn.className = "btn btn-ghost btn-compact";
      downBtn.type = "button";
      downBtn.textContent = "↓";
      downBtn.addEventListener("click", () => moveItem(block.sections, sectionIndex, 1));
      const removeSection = document.createElement("button");
      removeSection.className = "btn btn-danger";
      removeSection.type = "button";
      removeSection.textContent = "Delete Info Module";
      removeSection.addEventListener("click", () => {
        block.sections.splice(sectionIndex, 1);
        render();
      });
      actions.appendChild(upBtn);
      actions.appendChild(downBtn);
      actions.appendChild(removeSection);
      card.appendChild(actions);
    }

    body.appendChild(card);
  });

  if (editing) {
    const addSection = document.createElement("button");
    addSection.className = "btn btn-outline";
    addSection.type = "button";
    addSection.textContent = "Add Info Module";
    addSection.addEventListener("click", () => {
      block.sections.push({
        id: createId("rules-section"),
        title: "New Information Sub-Box",
        subtitle: "",
        body: "",
        mediaType: "",
        mediaSrc: "",
        mediaVideoType: "local",
        backgroundSrc: "",
        visibility: "both",
      });
      render();
    });
    body.appendChild(addSection);
  }

  section.appendChild(body);
  const videos = renderVideoSection(block, { panelPadding: true, editable: editing });
  if (videos) section.appendChild(videos);
  return section;
}

function renderRoleLabelsEditor() {
  const wrapper = document.createElement("div");
  wrapper.className = "role-labels-editor";

  const title = document.createElement("div");
  title.className = "role-labels-title";
  title.textContent = "Role Labels";
  wrapper.appendChild(title);

  const list = document.createElement("div");
  list.className = "role-labels-list";

  const roles = getRoleLabels();
  roles.forEach((role, index) => {
    const row = document.createElement("div");
    row.className = "role-label-row";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "panel-title-input";
    nameInput.placeholder = "Role name";
    nameInput.value = role.label || "";
    nameInput.addEventListener("input", () => {
      role.label = nameInput.value;
      state.roleLabels = roles;
      render();
    });

    const colorSelect = document.createElement("select");
    colorSelect.className = "role-color-select";
    ROLE_COLOR_OPTIONS.forEach((optionItem) => {
      const option = document.createElement("option");
      option.value = optionItem.value;
      option.textContent = optionItem.label;
      option.selected = optionItem.value === (role.color || ROLE_COLOR_OPTIONS[0].value);
      colorSelect.appendChild(option);
    });
    if (role.color && !ROLE_COLOR_OPTIONS.some((optionItem) => optionItem.value === role.color)) {
      const customOption = document.createElement("option");
      customOption.value = role.color;
      customOption.textContent = "Custom";
      customOption.selected = true;
      colorSelect.appendChild(customOption);
    }
    colorSelect.addEventListener("change", () => {
      role.color = colorSelect.value;
      state.roleLabels = roles;
      render();
    });

    const colorPreview = document.createElement("span");
    colorPreview.className = "role-color-preview";
    colorPreview.style.backgroundColor = role.color || ROLE_COLOR_OPTIONS[0].value;
    colorSelect.addEventListener("change", () => {
      colorPreview.style.backgroundColor = colorSelect.value;
    });

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-ghost";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      roles.splice(index, 1);
      state.roleLabels = roles.length ? roles : deepClone(DEFAULT_STATE.roleLabels);
      render();
    });

    row.appendChild(nameInput);
    row.appendChild(colorPreview);
    row.appendChild(colorSelect);
    row.appendChild(removeBtn);
    list.appendChild(row);
  });

  const addBtn = document.createElement("button");
  addBtn.className = "btn btn-outline";
  addBtn.type = "button";
  addBtn.textContent = "Add role label";
  addBtn.addEventListener("click", () => {
    roles.push({
      id: createId("role"),
      label: "New role",
      color: ROLE_COLOR_OPTIONS[roles.length % ROLE_COLOR_OPTIONS.length].value,
    });
    state.roleLabels = roles;
    render();
  });

  wrapper.appendChild(list);
  wrapper.appendChild(addBtn);
  return wrapper;
}

function renderFlowsBlock(block, index) {
  const section = document.createElement("section");
  section.className = adminMode ? "panel" : "panel panelless-block";
  section.id = block.id;
  section.dataset.title = block.title || "Execution";
  const editing = isBlockEditing(block.id);
  const hasHeaderContent = Boolean((block.title || "").trim() || (block.contextText || "").trim());

  if (editing || hasHeaderContent) {
    const header = document.createElement("div");
    header.className = "panel-header";
    const titleGroup = document.createElement("div");
    titleGroup.className = "panel-heading-group";
    const badge = document.createElement("div");
    badge.className = "panel-type-badge panel-type-badge--flows";
    badge.textContent = getBlockTypeLabel(block);
    titleGroup.appendChild(badge);
    titleGroup.appendChild(renderBlockTitle(block, "h2", editing));
    if (editing) {
      const contextInput = document.createElement("input");
      contextInput.type = "text";
      contextInput.value = block.contextText || "";
      contextInput.placeholder = "Add a short note for this block";
      contextInput.className = "panel-context-input";
      contextInput.addEventListener("input", () => {
        block.contextText = contextInput.value;
      });
      titleGroup.appendChild(contextInput);
    } else if (block.contextText) {
      const context = document.createElement("div");
      context.className = "block-context";
      context.textContent = block.contextText;
      titleGroup.appendChild(context);
    }
    header.appendChild(titleGroup);
    const headerControls = document.createElement("div");
    headerControls.className = "block-header-controls";
    if (editing) {
      const roleEditor = renderRoleLabelsEditor();
      roleEditor.classList.add("role-labels-editor-inline");
      headerControls.appendChild(roleEditor);
    }
    headerControls.appendChild(renderBlockActions(block, index, editing));
    header.appendChild(headerControls);
    section.appendChild(header);
  }

  const body = document.createElement("div");
  body.className = "panel-body flow-grid";


  block.flows.forEach((flow, flowIndex) => {
    const hasRows = (flow.rows || []).some((row) => !isFlowRowEmpty(row));
    const hasMedia = Boolean(flow.imageSrc || (flow.videos || []).length);
    const hasExample = Boolean(flow.exampleTargetId);
    const hasTitle = Boolean(flow.title);
    if (!editing && !hasRows && !hasMedia && !hasExample && !hasTitle) {
      return;
    }
    const card = document.createElement("div");
    card.className = `flow-card ${getVisibilityClass(flow.visibility)}`;
    const content = document.createElement("div");
    content.className = "flow-content";

    if (editing) {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = flow.title;
      titleInput.className = "panel-title-input";
      titleInput.addEventListener("input", () => {
        flow.title = titleInput.value;
      });
      content.appendChild(titleInput);
      content.appendChild(
        renderSelect(
          "Visibility",
          flow.visibility,
          VISIBILITY_OPTIONS,
          (value) => {
            flow.visibility = value;
            render();
          },
          {
            editable: true,
            className: "flow-visibility visibility-control",
          }
        )
      );
    } else {
      const title = document.createElement("h3");
      title.textContent = flow.title;
      content.appendChild(title);
    }

    flow.rows.forEach((row, rowIndex) => {
      const rowNode = renderFlowRow(flow, row, rowIndex, editing);
      if (rowNode) {
        content.appendChild(rowNode);
      }
    });

    if (editing) {
      const flowActions = document.createElement("div");
      flowActions.className = "admin-row";

      const addRow = document.createElement("button");
      addRow.className = "btn btn-outline";
      addRow.type = "button";
      addRow.textContent = "Add Flow Row";
      addRow.addEventListener("click", () => {
        flow.rows.push({
          id: createId("flow-row"),
          rowTitle: "",
          rowContext: "",
          elements: [],
        });
        render();
      });

      const removeFlow = document.createElement("button");
      removeFlow.className = "btn btn-danger";
      removeFlow.type = "button";
      removeFlow.textContent = "Delete Execution Module";
      removeFlow.addEventListener("click", () => {
        block.flows.splice(flowIndex, 1);
        render();
      });

      const moveLeft = document.createElement("button");
      moveLeft.className = "btn btn-ghost";
      moveLeft.type = "button";
      moveLeft.textContent = "←";
      moveLeft.title = "Move execution module left";
      moveLeft.addEventListener("click", () => {
        moveItem(block.flows, flowIndex, -1);
      });
      const moveRight = document.createElement("button");
      moveRight.className = "btn btn-ghost";
      moveRight.type = "button";
      moveRight.textContent = "→";
      moveRight.title = "Move execution module right";
      moveRight.addEventListener("click", () => {
        moveItem(block.flows, flowIndex, 1);
      });
      flowActions.classList.add("flow-subbox-actions");
      flowActions.appendChild(addRow);
      flowActions.appendChild(moveLeft);
      flowActions.appendChild(moveRight);
      flowActions.appendChild(removeFlow);
      content.appendChild(flowActions);
    }

    const exampleRow = document.createElement("div");
    exampleRow.className = "flow-example-row";
    if (editing) {
      const labelInput = document.createElement("input");
      labelInput.type = "text";
      labelInput.value = flow.exampleLabel || "Example";
      labelInput.placeholder = "Example button label";
      labelInput.className = "panel-title-input";
      labelInput.addEventListener("input", () => {
        flow.exampleLabel = labelInput.value;
      });
      const targetSelect = document.createElement("select");
      const videoTargets = getVideoTargets();
      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "Select target video";
      targetSelect.appendChild(emptyOption);
      videoTargets.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.label;
        option.selected = item.id === flow.exampleTargetId;
        targetSelect.appendChild(option);
      });
      if (flow.exampleTargetId && !videoTargets.some((item) => item.id === flow.exampleTargetId)) {
        const legacyOption = document.createElement("option");
        legacyOption.value = flow.exampleTargetId;
        legacyOption.textContent = getLegacyTargetLabel(flow.exampleTargetId);
        legacyOption.selected = true;
        targetSelect.appendChild(legacyOption);
      }
      targetSelect.addEventListener("change", () => {
        flow.exampleTargetId = targetSelect.value;
      });
      exampleRow.appendChild(labelInput);
      exampleRow.appendChild(targetSelect);
    } else if (flow.exampleTargetId) {
      const link = document.createElement("a");
      link.className = "btn btn-ghost";
      link.href = `#${flow.exampleTargetId}`;
      link.textContent = flow.exampleLabel || "Example";
      exampleRow.appendChild(link);
    }
    if (exampleRow.childNodes.length) {
      content.appendChild(exampleRow);
    }

    const flowVideos = renderVideoSection(flow, {
      panelPadding: false,
      editable: editing,
      maxVideos: 1,
      singleColumn: true,
      fullWidth: true,
    });
    const flowImage = renderFlowImage(flow, editing);
    const mediaWrap = document.createElement("div");
    mediaWrap.className = "flow-media";
    if (flowImage) {
      mediaWrap.appendChild(flowImage);
    }
    if (flowVideos) {
      mediaWrap.appendChild(flowVideos);
    }

    card.appendChild(content);
    if (mediaWrap.childNodes.length) {
      card.appendChild(mediaWrap);
    }

    body.appendChild(card);
  });

  if (editing) {
    const addFlow = document.createElement("button");
    addFlow.className = "btn btn-outline";
    addFlow.type = "button";
    addFlow.textContent = "Add Execution Module";
    addFlow.addEventListener("click", () => {
      block.flows.push({
        id: createId("flow"),
        title: "New Flow Sub-Box",
        exampleLabel: "Example",
        exampleTargetId: "",
        imageSrc: "",
        visibility: "both",
        videos: [],
        rows: [],
      });
      render();
    });
    body.appendChild(addFlow);
  }

  section.appendChild(body);
  return section;
}

function getShipMetaIcon(type) {
  const map = {
    weapon: "🎯",
    powerplant: "⚡",
    shield: "🛡️",
    cooler: "❄️",
    em: "⚡",
    ir: "🌡️",
    buy: "📍",
    lifeSupport: "🫁",
  };
  return map[type] || "•";
}

function createShipMetaWhereInfoControl(whereText) {
  const wrapper = document.createElement("div");
  wrapper.className = "ship-meta-where-wrap";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "ship-meta-where-btn";
  button.setAttribute("aria-label", "Where to get details");
  button.textContent = "📍";
  wrapper.appendChild(button);

  const tooltip = document.createElement("div");
  tooltip.className = "ship-meta-where-tooltip";
  tooltip.textContent = whereText && String(whereText).trim() ? whereText : "No location details set.";
  wrapper.appendChild(tooltip);

  let hideTimer = null;
  const show = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    wrapper.classList.add("is-open");
  };
  const scheduleHide = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
    }
    hideTimer = setTimeout(() => {
      wrapper.classList.remove("is-open");
      hideTimer = null;
    }, 90);
  };

  button.addEventListener("mouseenter", show);
  button.addEventListener("focus", show);
  button.addEventListener("mouseleave", scheduleHide);
  button.addEventListener("blur", scheduleHide);
  tooltip.addEventListener("mouseenter", show);
  tooltip.addEventListener("mouseleave", scheduleHide);

  return wrapper;
}

function renderShipMetaBlock(block, index) {
  const section = document.createElement("section");
  section.className = adminMode ? "panel" : "panel panelless-block";
  section.id = block.id;
  section.dataset.title = block.title || "Ship Meta Box";
  const editing = isBlockEditing(block.id);

  appendBlockHeader(section, block, index, editing, "h2");

  const body = document.createElement("div");
  body.className = "panel-body ship-meta-box";
  const grid = document.createElement("div");
  grid.className = "ship-meta-subbox-grid";

  block.metaItems = Array.isArray(block.metaItems) && block.metaItems.length ? block.metaItems : [createBlankShipMetaItem()];
  block.metaItems.forEach((metaItem, metaIndex) => {
    let activeMode = metaItem.activeMode === "pu" ? "pu" : "premium";
    const card = document.createElement("article");
    card.className = "ship-meta-subbox";
    if (metaItem.backgroundSrc) {
      card.classList.add("has-bg");
      card.style.setProperty("--ship-meta-bg", `url('${metaItem.backgroundSrc}')`);
    }

    const titleRow = document.createElement("div");
    titleRow.className = "ship-meta-compact-title";
    if (editing) {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.className = "panel-title-input";
      titleInput.placeholder = "Title";
      titleInput.value = metaItem.shipName || "";
      titleInput.addEventListener("input", () => { metaItem.shipName = titleInput.value; });
      titleRow.appendChild(titleInput);
    } else {
      const shipName = document.createElement("span");
      shipName.textContent = metaItem.shipName || "Untitled";
      titleRow.appendChild(shipName);
    }
    const infoBtn = document.createElement(editing ? "input" : "a");
    infoBtn.className = "ship-meta-info-link";
    if (editing) {
      infoBtn.type = "text";
      infoBtn.placeholder = "More info URL (SPViewer/Erkul)";
      infoBtn.value = metaItem.infoUrl || "";
      infoBtn.addEventListener("input", () => { metaItem.infoUrl = infoBtn.value; });
    } else {
      infoBtn.textContent = "More info ↗";
      if (metaItem.infoUrl) {
        infoBtn.href = metaItem.infoUrl;
        infoBtn.target = "_blank";
        infoBtn.rel = "noopener noreferrer";
      } else {
        infoBtn.href = "javascript:void(0)";
        infoBtn.classList.add("is-disabled");
      }
    }
    const modeToggle = document.createElement("div");
    modeToggle.className = "mode-toggle-buttons ship-mode-toggle";
    [
      { value: "premium", label: "Premium" },
      { value: "pu", label: "PU Buyable" },
    ].forEach((entry) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `mode-btn${activeMode === entry.value ? " is-active" : ""}`;
      btn.textContent = entry.label;
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (activeMode === entry.value) return;
        metaItem.activeMode = entry.value;
        activeMode = entry.value;
        modeToggle.querySelectorAll(".mode-btn").forEach((item) => {
          item.classList.toggle("is-active", item === btn);
        });
        renderModeContent();
      });
      modeToggle.appendChild(btn);
    });

    const topRow = document.createElement("div");
    topRow.className = "ship-meta-top-row";
    topRow.appendChild(titleRow);
    topRow.appendChild(modeToggle);
    topRow.appendChild(infoBtn);
    card.appendChild(topRow);

    const modeContent = document.createElement("div");
    modeContent.className = "ship-meta-mode-content";

    if (editing) {
      card.appendChild(createImageUploadControl(metaItem.backgroundSrc ? "Replace sub-box background" : "Upload sub-box background", (src) => { metaItem.backgroundSrc = src; render(); }, metaItem.backgroundSrc ? () => { metaItem.backgroundSrc = ""; render(); } : null));
    }

    const renderModeContent = () => {
      const modeData = metaItem.modes?.[activeMode] || createBlankShipMetaItem().modes.premium;
      modeContent.innerHTML = "";

      const components = document.createElement("div");
      components.className = "ship-meta-components-list";

      if (!editing) {
        const compsHeader = document.createElement("span");
        compsHeader.className = "ship-meta-find-label";
        compsHeader.textContent = "Components";
        components.appendChild(compsHeader);

        const findHeader = document.createElement("span");
        findHeader.className = "ship-meta-find-label ship-meta-find-header";
        findHeader.textContent = "Find Item ⬇";
        components.appendChild(findHeader);
      }

      (modeData.components || []).forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "ship-meta-component-row-compact";
      const left = document.createElement("div");
      left.className = "ship-meta-component-main";
      const icon = document.createElement("span");
      icon.className = "ship-icon";
      icon.textContent = getShipMetaIcon(row.key);
      left.appendChild(icon);
      const qty = document.createElement(editing ? "input" : "span");
      qty.className = `ship-meta-qty${editing ? " is-input" : ""}`;
      if (editing) {
        qty.type = "number";
        qty.min = "1";
        qty.value = Number(row.quantity) > 0 ? Number(row.quantity) : 1;
        qty.addEventListener("input", () => { row.quantity = Math.max(1, Number(qty.value) || 1); });
      } else {
        qty.textContent = `x${Math.max(1, Number(row.quantity) || 1)}`;
      }
      left.appendChild(qty);
      rowEl.appendChild(left);

      const componentInput = document.createElement(editing ? "input" : "span");
      componentInput.className = "panel-title-input";
      if (editing) {
        componentInput.type = "text";
        componentInput.value = row.component || "";
        componentInput.placeholder = "Component";
        componentInput.addEventListener("input", () => { row.component = componentInput.value; });
      } else {
        componentInput.textContent = row.component || "–";
      }
      rowEl.appendChild(componentInput);

      const buy = document.createElement(editing ? "textarea" : "div");
      buy.className = editing ? "panel-title-input ship-meta-where-input" : "ship-meta-where-view";
      if (editing) {
        buy.value = row.whereToBuy || "";
        buy.placeholder = activeMode === "premium" ? "Where to get" : "Where to get / buy (PU)";
        buy.addEventListener("input", () => { row.whereToBuy = buy.value; });
      } else {
        buy.appendChild(createShipMetaWhereInfoControl(row.whereToBuy || ""));
      }
      rowEl.appendChild(buy);
        components.appendChild(rowEl);
      });
      modeContent.appendChild(components);

      const lifeSupportRow = document.createElement("div");
      lifeSupportRow.className = "ship-meta-inline-flag";
      if (editing) {
      const lsToggle = document.createElement("label");
      lsToggle.className = "ship-meta-ls-toggle";
      const lsInput = document.createElement("input");
      lsInput.type = "checkbox";
      lsInput.checked = Boolean(modeData.lifeSupportOffRequired);
      lsInput.addEventListener("change", () => {
        modeData.lifeSupportOffRequired = lsInput.checked;
        render();
      });
      const lsText = document.createElement("span");
      lsText.textContent = "Life Support Off Required";
      lsToggle.appendChild(lsInput);
      lsToggle.appendChild(lsText);
      lifeSupportRow.appendChild(lsToggle);
    } else if (modeData.lifeSupportOffRequired) {
      const flag = document.createElement("span");
      flag.className = "ship-meta-ls-flag";
      flag.textContent = `${getShipMetaIcon("lifeSupport")} LS Off`;
      lifeSupportRow.appendChild(flag);
    }
      if (lifeSupportRow.childNodes.length) {
        modeContent.appendChild(lifeSupportRow);
      }

      const signatures = document.createElement("div");
      signatures.className = `ship-meta-signatures-compact${editing ? " is-edit" : ""}`;
      const statsTitle = document.createElement("div");
      statsTitle.className = "ship-meta-stats-title";
      statsTitle.textContent = "Stats";
      modeContent.appendChild(statsTitle);
    const leftSig = document.createElement("div");
    leftSig.className = "ship-meta-signature-cluster";
    leftSig.appendChild(renderField(`${getShipMetaIcon("em")} EM`, modeData.signatures?.em, (value) => { modeData.signatures.em = value; }, { editable: editing, type: "number" }));
    leftSig.appendChild(renderField(`${getShipMetaIcon("ir")} IR`, modeData.signatures?.ir, (value) => { modeData.signatures.ir = value; }, { editable: editing, type: "number" }));
    leftSig.appendChild(renderField(`CS`, modeData.signatures?.crossSection, (value) => { modeData.signatures.crossSection = value; }, { editable: editing, type: "text" }));
    const sep = document.createElement("span");
    sep.className = "ship-meta-v-sep";
    const rightSig = document.createElement("div");
    rightSig.className = "ship-meta-signature-damage";
    rightSig.appendChild(renderField("DPS", modeData.signatures?.sustainedDps, (value) => { modeData.signatures.sustainedDps = value; }, { editable: editing, type: "number" }));
    rightSig.appendChild(renderField("Alpha", modeData.signatures?.alphaDamage, (value) => { modeData.signatures.alphaDamage = value; }, { editable: editing, type: "number" }));
    const hpSep = document.createElement("span");
    hpSep.className = "ship-meta-v-sep";
    const hpSig = document.createElement("div");
    hpSig.className = "ship-meta-signature-hp";
    hpSig.appendChild(renderField("Shield", modeData.signatures?.shieldHp, (value) => { modeData.signatures.shieldHp = value; }, { editable: editing, type: "number" }));
    hpSig.appendChild(renderField("Armor", modeData.signatures?.armorHp, (value) => { modeData.signatures.armorHp = value; }, { editable: editing, type: "number" }));
    hpSig.appendChild(renderField("Total", modeData.signatures?.totalHp, (value) => { modeData.signatures.totalHp = value; }, { editable: editing, type: "number" }));
      signatures.appendChild(leftSig);
      signatures.appendChild(sep);
      signatures.appendChild(rightSig);
      signatures.appendChild(hpSep);
      signatures.appendChild(hpSig);
      modeContent.appendChild(signatures);

      const hasSummary = Boolean(String(modeData.summary || "").trim());
      if (editing || hasSummary) {
        modeContent.appendChild(renderField("Meta summary", modeData.summary, (value) => { modeData.summary = value; }, { editable: editing, type: "textarea", className: "span-two", emptyText: "n/a" }));
      }
    };
    renderModeContent();
    card.appendChild(modeContent);

    if (editing) {
      const actions = document.createElement("div");
      actions.className = "tile-inline-actions";
      const up = document.createElement("button");
      up.className = "btn btn-ghost btn-compact";
      up.type = "button";
      up.textContent = "↑";
      up.addEventListener("click", () => moveItem(block.metaItems, metaIndex, -1));
      const down = document.createElement("button");
      down.className = "btn btn-ghost btn-compact";
      down.type = "button";
      down.textContent = "↓";
      down.addEventListener("click", () => moveItem(block.metaItems, metaIndex, 1));
      const remove = document.createElement("button");
      remove.className = "btn btn-danger btn-compact";
      remove.type = "button";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        block.metaItems.splice(metaIndex, 1);
        if (!block.metaItems.length) block.metaItems.push(createBlankShipMetaItem());
        render();
      });
      actions.appendChild(up);
      actions.appendChild(down);
      actions.appendChild(remove);
      card.appendChild(actions);
    }

    grid.appendChild(card);
  });

  if (editing) {
    const addMeta = document.createElement("button");
    addMeta.className = "btn btn-outline";
    addMeta.type = "button";
    addMeta.textContent = "Add Ship Meta Sub-Box";
    addMeta.addEventListener("click", () => {
      block.metaItems.push(createBlankShipMetaItem());
      render();
    });
    body.appendChild(addMeta);
  }

  body.appendChild(grid);
  section.appendChild(body);
  return section;
}

function renderVideoBlock(block, index) {
  const section = document.createElement("section");
  section.className = "panel";
  section.id = block.id;
  section.dataset.title = block.title || "Video";
  const editing = isBlockEditing(block.id);

  appendBlockHeader(section, block, index, editing, "h2");

  const videos = renderVideoSection(block, { showEmpty: !adminMode, panelPadding: true, editable: editing });
  if (videos) {
    section.appendChild(videos);
  }
  return section;
}

function getDefaultOrgLinkIcon(type) {
  if (type === "discord") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.32 4.37a16.7 16.7 0 0 0-4.1-1.28l-.2.4c-.25.46-.52 1.07-.72 1.55a15.45 15.45 0 0 0-4.6 0c-.2-.48-.48-1.09-.73-1.55l-.2-.4c-1.42.24-2.8.67-4.1 1.28C2.93 8.49 1.9 12.5 2.3 16.45a16.9 16.9 0 0 0 5.03 2.55l.4-.66c.32-.52.6-1.06.84-1.62a10.82 10.82 0 0 1-1.33-.65l.33-.25.33-.26c2.55 1.2 5.34 1.2 7.86 0l.34.26.33.25c-.42.24-.87.46-1.34.65.24.56.52 1.1.84 1.62l.4.66a16.84 16.84 0 0 0 5.03-2.55c.48-4.58-.82-8.56-3.7-12.08ZM9.74 14.02c-.77 0-1.4-.72-1.4-1.6 0-.9.62-1.61 1.4-1.61.78 0 1.41.72 1.4 1.6 0 .9-.62 1.61-1.4 1.61Zm4.52 0c-.78 0-1.4-.72-1.4-1.6 0-.9.62-1.61 1.4-1.61.77 0 1.4.72 1.4 1.6 0 .9-.62 1.61-1.4 1.61Z"/></svg>`;
  }
  if (type === "rsi") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2 4 6.4v7.2c0 4.9 3.36 8.93 8 9.9 4.64-.97 8-5 8-9.9V6.4L12 2Zm0 2.28 5.8 3.19v6.13c0 3.66-2.38 6.82-5.8 7.7-3.42-.88-5.8-4.04-5.8-7.7V7.47L12 4.28Zm-3.26 4.1h6.52v1.83h-4.7v1.53h4.3v1.8h-4.3v2.08H8.74V8.38Zm7.26 0h1.82v7.24H16V8.38Z"/></svg>`;
  }
  return "↗";
}

function createOrgViewerLink(type, url, label, logoSrc = "") {
  if (!String(url || "").trim()) {
    return null;
  }
  const link = document.createElement("a");
  link.className = `org-link-pill org-link-pill--${type}`;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", label || type);

  const icon = document.createElement("span");
  icon.className = "org-link-icon";
  if (logoSrc && (type === "discord" || type === "rsi")) {
    const img = document.createElement("img");
    img.className = "org-link-logo";
    img.src = logoSrc;
    img.alt = `${label || type} logo`;
    icon.appendChild(img);
  } else if (type === "discord" || type === "rsi") {
    icon.innerHTML = getDefaultOrgLinkIcon(type);
  } else {
    icon.textContent = getDefaultOrgLinkIcon(type);
  }
  link.appendChild(icon);

  if (label) {
    const text = document.createElement("span");
    text.className = "org-link-text";
    text.textContent = label;
    link.appendChild(text);
  }

  return link;
}

function appendOrgViewerMeta(parent, className, text) {
  const value = String(text || "").trim();
  if (!value) {
    return;
  }
  const node = document.createElement("div");
  node.className = className;
  node.textContent = value;
  parent.appendChild(node);
}

function renderOrgShowcaseBlock(block, index) {
  const section = document.createElement("section");
  section.className = adminMode ? "panel" : "panel panelless-block";
  section.id = block.id;
  section.dataset.title = block.title || "Organization Presentation";
  const editing = isBlockEditing(block.id);

  appendBlockHeader(section, block, index, editing, "h2");

  const body = document.createElement("div");
  body.className = "panel-body org-showcase-box";
  if (adminMode && !editing && !String(block.title || "").trim()) {
    body.classList.add("org-showcase-box--admin-reachable");
  }

  if (editing) {
    const introField = renderField("Section intro", block.intro, (value) => {
      block.intro = value;
    }, {
      type: "textarea",
      editable: true,
      className: "span-two",
    });
    body.appendChild(introField);
  } else if (String(block.intro || "").trim()) {
    const intro = document.createElement("div");
    intro.className = "org-showcase-intro";
    intro.innerHTML = formatMultilineHtml(block.intro);
    body.appendChild(intro);
  }

  const grid = document.createElement("div");
  grid.className = "org-showcase-grid";
  block.orgCards.forEach((card, cardIndex) => {
    const article = document.createElement("article");
    article.className = `org-card${editing ? " is-editing" : " is-viewing"}`;
    if (card.backgroundSrc) {
      article.classList.add("has-bg");
      article.style.setProperty("--org-card-bg", `url('${card.backgroundSrc}')`);
    }

    const leftCol = document.createElement("div");
    leftCol.className = "org-card-left";

    if (editing) {
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.className = "panel-title-input";
      nameInput.value = card.name || "";
      nameInput.placeholder = "Organization name";
      nameInput.addEventListener("input", () => { card.name = nameInput.value; });
      leftCol.appendChild(nameInput);

    } else {
      if (String(card.name || "").trim()) {
        const title = document.createElement("h3");
        title.className = "org-card-name";
        title.textContent = card.name;
        leftCol.appendChild(title);
      }
    }

    const tagsRow = document.createElement("div");
    tagsRow.className = "org-card-tags";
    if (editing) {
      const lbl = document.createElement("span");
      lbl.className = "admin-note";
      lbl.textContent = "Tags:";
      tagsRow.appendChild(lbl);

      const TAG_COLORS = [
        "#4cc3ff", "#ff6b6b", "#ffd93d", "#6bcb77", "#c77dff",
        "#ff9f43", "#54a0ff", "#ff6b9d", "#48dbfb", "#1dd1a1"
      ];

      function renderTagEditor() {
        const existing = tagsRow.querySelector(".org-tag-editor-chips");
        if (existing) tagsRow.removeChild(existing);
        const addInput = tagsRow.querySelector(".org-tag-add-input");
        const chipWrap = document.createElement("div");
        chipWrap.className = "org-tag-editor-chips";

        (card.tags || []).filter((t) => t.name).forEach((tag, i) => {
          const tagEl = document.createElement("span");
          tagEl.className = "org-tag-editor-chip";
          const colorDot = document.createElement("span");
          colorDot.className = "org-tag-color-dot";
          colorDot.style.background = tag.color || "#4cc3ff";
          colorDot.title = "Click to change color";
          const nameSpan = document.createElement("span");
          nameSpan.textContent = tag.name;
          nameSpan.className = "org-tag-chip-name";
          const removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "org-tag-remove";
          removeBtn.textContent = "×";
          removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            card.tags.splice(i, 1);
            renderTagEditor();
          });
          colorDot.addEventListener("click", (e) => {
            e.stopPropagation();
            const currentIdx = TAG_COLORS.indexOf(tag.color);
            tag.color = TAG_COLORS[(currentIdx + 1) % TAG_COLORS.length];
            colorDot.style.background = tag.color;
          });
          tagEl.appendChild(colorDot);
          tagEl.appendChild(nameSpan);
          tagEl.appendChild(removeBtn);
          chipWrap.appendChild(tagEl);
        });

        tagsRow.insertBefore(chipWrap, addInput);
      }

      const addInput = document.createElement("input");
      addInput.type = "text";
      addInput.className = "org-tag-add-input panel-title-input";
      addInput.placeholder = "Add tag...";
      addInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === ",") {
          e.preventDefault();
          const name = addInput.value.trim().replace(/,/g, "");
          if (name) {
            if (!card.tags) card.tags = [];
            card.tags.push({ name, color: TAG_COLORS[card.tags.length % TAG_COLORS.length] });
            addInput.value = "";
            renderTagEditor();
          }
        }
      });
      tagsRow.appendChild(addInput);
      renderTagEditor();
    } else {
      (card.tags || []).filter((t) => t.name).forEach((tag) => {
        const chip = document.createElement("span");
        chip.className = "org-tag";
        chip.textContent = tag.name;
        if (tag.color) chip.style.setProperty("--tag-color", tag.color);
        tagsRow.appendChild(chip);
      });
    }
    if (tagsRow.children.length) leftCol.appendChild(tagsRow);

    if (editing) {
      const ef = document.createElement("div");
      ef.className = "org-card-edit-fields";
      [
        ["Discord URL", "discordUrl", false],
        ["Website URL", "websiteUrl", false],
        ["RSI URL", "rsiUrl", false],
        ["Text", "notes", true],
      ].forEach(([label, key, isTa]) => {
        const row = document.createElement("div");
        row.className = `field ${isTa ? "span-two" : "half"}`;
        const lbl = document.createElement("label");
        lbl.className = "field-label";
        lbl.textContent = label;
        row.appendChild(lbl);
        if (isTa) {
          const ta = document.createElement("textarea");
          ta.className = "panel-title-input";
          ta.rows = 6;
          ta.value = card[key] || "";
          ta.placeholder = "Organization description";
          ta.addEventListener("input", () => { card[key] = ta.value; });
          row.appendChild(ta);
        } else {
          const inp = document.createElement("input");
          inp.type = "text";
          inp.className = "panel-title-input";
          inp.value = card[key] || "";
          inp.addEventListener("input", () => { card[key] = inp.value; });
          row.appendChild(inp);
        }
        ef.appendChild(row);
      });
      leftCol.appendChild(ef);
    }

    const rightCol = document.createElement("div");
    rightCol.className = "org-card-right";

    if (card.logoSrc) {
      const logo = document.createElement("img");
      logo.className = "org-card-logo";
      logo.src = card.logoSrc;
      logo.alt = card.name ? `${card.name} logo` : "Organization logo";
      rightCol.appendChild(logo);
    }

    const linksRow = document.createElement("div");
    linksRow.className = "org-card-links";

    const D_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`;
    const R_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`;

    if (card.discordUrl) {
      const lnk = document.createElement("a");
      lnk.className = "org-link-icon";
      lnk.href = card.discordUrl;
      lnk.target = "_blank";
      lnk.rel = "noopener noreferrer";
      lnk.title = "Discord";
      lnk.innerHTML = D_SVG;
      linksRow.appendChild(lnk);
    }
    if (card.websiteUrl) {
      const lnk = document.createElement("a");
      lnk.className = "org-link-icon";
      lnk.href = card.websiteUrl;
      lnk.target = "_blank";
      lnk.rel = "noopener noreferrer";
      lnk.title = "Website";
      lnk.textContent = "🌍";
      linksRow.appendChild(lnk);
    }
    if (card.rsiUrl) {
      const lnk = document.createElement("a");
      lnk.className = "org-link-icon";
      lnk.href = card.rsiUrl;
      lnk.target = "_blank";
      lnk.rel = "noopener noreferrer";
      lnk.title = "RSI Org Page";
      if (card.rsiLogoSrc) {
        const img = document.createElement("img");
        img.src = card.rsiLogoSrc;
        img.className = "org-link-icon-img";
        img.alt = "RSI";
        lnk.appendChild(img);
      } else {
        lnk.innerHTML = R_SVG;
      }
      linksRow.appendChild(lnk);
    }
    if (linksRow.children.length) rightCol.appendChild(linksRow);

    if (editing) {
      rightCol.appendChild(createImageUploadControl(card.logoSrc ? "Replace logo" : "Upload logo", (src) => { card.logoSrc = src; render(); }, card.logoSrc ? () => { card.logoSrc = ""; render(); } : null));
      rightCol.appendChild(createImageUploadControl(card.backgroundSrc ? "Replace background" : "Upload background", (src) => { card.backgroundSrc = src; render(); }, card.backgroundSrc ? () => { card.backgroundSrc = ""; render(); } : null));
    }

    article.appendChild(leftCol);
    article.appendChild(rightCol);

    if (editing) {
      const actions = document.createElement("div");
      actions.className = "org-card-actions";
      const mkBtn = (sym, cmd) => {
        const b = document.createElement("button");
        b.className = "btn btn-outline";
        b.type = "button";
        b.textContent = sym;
        b.addEventListener("click", cmd);
        return b;
      };
      const up = mkBtn("↑", () => { const c = block.orgCards; const [m] = c.splice(cardIndex, 1); c.splice(cardIndex - 1, 0, m); render(); });
      up.disabled = cardIndex === 0;
      const dn = mkBtn("↓", () => { const c = block.orgCards; const [m] = c.splice(cardIndex, 1); c.splice(cardIndex + 1, 0, m); render(); });
      dn.disabled = cardIndex === block.orgCards.length - 1;
      const rm = document.createElement("button");
      rm.className = "btn btn-danger";
      rm.type = "button";
      rm.textContent = "Remove org";
      rm.addEventListener("click", () => {
        block.orgCards.splice(cardIndex, 1);
        if (!block.orgCards.length) block.orgCards.push(createBlankOrgCard());
        render();
      });
      actions.appendChild(up);
      actions.appendChild(dn);
      actions.appendChild(rm);
      article.appendChild(actions);
    }

    grid.appendChild(article);
  });

  body.appendChild(grid);
  if (editing) {
    const addCard = document.createElement("button");
    addCard.className = "btn btn-outline";
    addCard.type = "button";
    addCard.textContent = "Add Organization Card";
    addCard.addEventListener("click", () => {
      block.orgCards.push(createBlankOrgCard());
      render();
    });
    body.appendChild(addCard);
  }

  section.appendChild(body);
  return section;
}

function isFlowRowEmpty(row) {
  const hasMeta = Boolean(row.rowTitle || row.rowContext);
  const hasElements = Array.isArray(row.elements) && row.elements.length > 0;
  return !hasMeta && !hasElements;
}

function renderFlowImage(flow, editable) {
  if (!editable && !flow.imageSrc) {
    return null;
  }
  const wrap = document.createElement("div");
  wrap.className = "flow-media-item";
  if (flow.imageSrc) {
    const image = document.createElement("img");
    image.className = "flow-image";
    image.src = flow.imageSrc;
    image.alt = flow.title ? `${flow.title} image` : "Example image";
    wrap.appendChild(image);
  }
  if (editable) {
    const controls = createImageUploadControl(
      flow.imageSrc ? "Replace image" : "Upload image",
      (src) => {
        flow.imageSrc = src;
        render();
      },
      flow.imageSrc
        ? () => {
            flow.imageSrc = "";
            render();
          }
        : null,
      "flow-image-controls"
    );
    wrap.appendChild(controls);
  }
  return wrap;
}

function renderFlowRow(flow, row, rowIndex, editing) {
  if (!editing && isFlowRowEmpty(row)) {
    return null;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "flow-row-block";

  if (row.rowTitle || row.rowContext || editing) {
    const meta = document.createElement("div");
    meta.className = "flow-row-meta";
    if (editing) {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = row.rowTitle || "";
      titleInput.placeholder = "Example Row title";
      titleInput.className = "panel-title-input";
      titleInput.addEventListener("input", () => {
        row.rowTitle = titleInput.value;
      });
      const exampleInput = document.createElement("input");
      exampleInput.type = "text";
      exampleInput.value = row.rowContext || "";
      exampleInput.placeholder = "Flow Row context";
      exampleInput.className = "panel-title-input";
      exampleInput.addEventListener("input", () => {
        row.rowContext = exampleInput.value;
      });
      meta.appendChild(titleInput);
      meta.appendChild(exampleInput);
    } else {
      if (row.rowTitle) {
        const title = document.createElement("div");
        title.className = "flow-row-title";
        title.textContent = row.rowTitle;
        meta.appendChild(title);
      }
      if (row.rowContext) {
        const example = document.createElement("div");
        example.className = "flow-row-example";
        example.textContent = row.rowContext;
        meta.appendChild(example);
      }
    }
    wrapper.appendChild(meta);
  }

  const rowEl = document.createElement("div");
  rowEl.className = "flow-row";
  row.elements.forEach((element, elementIndex) => {
    if (element.type === "node") {
      const nodeWrap = document.createElement("div");
      nodeWrap.className = "flow-node-wrap";
      const label = document.createElement("div");
      label.className = "flow-role-label";
      const roleMeta = getRoleMeta(element.role) || {};
      label.textContent = roleMeta.label || "Role";
      if (roleMeta.color) {
        label.style.color = roleMeta.color;
      }
      const node = document.createElement("span");
      const roleClass =
        element.role === "shotCaller" ? "role-shot" : element.role === "enemyTarget" ? "role-enemy" : "role-yourself";
      node.className = `flow-node ${roleClass}`;
      const nodeStyles = getNodeStyles(element, roleMeta.color);
      if (nodeStyles) {
        node.style.cssText = nodeStyles;
      }
      node.textContent = element.text;
      nodeWrap.appendChild(label);
      nodeWrap.appendChild(node);
      rowEl.appendChild(nodeWrap);
      const next = row.elements[elementIndex + 1];
      if (next && next.type === "node") {
        const arrow = document.createElement("span");
        arrow.className = "flow-arrow";
        arrow.textContent = "→";
        rowEl.appendChild(arrow);
      }
    } else if (element.type === "arrow") {
      const arrow = document.createElement("span");
      arrow.className = element.kind === "time" ? "flow-arrow arrow-time" : "flow-arrow";
      arrow.textContent = element.kind === "time" ? "⏱" : "→";
      rowEl.appendChild(arrow);
    } else if (element.type === "divider") {
      const divider = document.createElement("span");
      divider.className = "flow-divider";
      divider.textContent = element.text;
      rowEl.appendChild(divider);
    } else if (element.type === "note") {
      const note = document.createElement("span");
      note.className = "flow-note";
      note.textContent = element.text;
      rowEl.appendChild(note);
    }
  });
  wrapper.appendChild(rowEl);

  if (!editing) {
    return wrapper;
  }

  const editor = document.createElement("div");
  editor.className = "flow-editor";
  const editorPanel = document.createElement("details");
  editorPanel.className = "flow-editor-panel";
  const editorKey = `${flow.id}:${row.id || rowIndex}`;
  editorPanel.open = openFlowEditors.has(editorKey);
  editorPanel.addEventListener("toggle", () => {
    if (editorPanel.open) {
      openFlowEditors.add(editorKey);
    } else {
      openFlowEditors.delete(editorKey);
    }
  });
  const summary = document.createElement("summary");
  summary.textContent = "Edit Example Row";
  editorPanel.appendChild(summary);
  const rowGroup = document.createElement("div");
  rowGroup.className = "flow-editor-row";

  row.elements.forEach((element, elementIndex) => {
    const item = document.createElement("div");
    item.className = "flow-editor-item";

    const typeSelect = document.createElement("select");
    ["node", "arrow", "divider", "note"].forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      option.selected = type === element.type;
      typeSelect.appendChild(option);
    });
    typeSelect.addEventListener("change", () => {
      element.type = typeSelect.value;
      if (element.type === "arrow") {
        element.kind = element.kind || "breath";
      }
      if (element.type !== "node") {
        delete element.role;
        delete element.color;
      }
      render();
    });

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = element.text || "";
    textInput.disabled = element.type === "arrow";
    textInput.placeholder = element.type === "arrow" ? "Arrow" : "Text";
    textInput.addEventListener("input", () => {
      element.text = textInput.value;
    });

    let extraControl = document.createElement("span");
    if (element.type === "node") {
      const roleSelect = document.createElement("select");
      const roleOptions = getRoleLabels();
      roleOptions.forEach((role) => {
        const option = document.createElement("option");
        option.value = role.id;
        option.textContent = role.label || role.id;
        option.selected = role.id === (element.role || "yourself");
        roleSelect.appendChild(option);
      });
      if (element.role && !roleOptions.some((role) => role.id === element.role)) {
        const legacyOption = document.createElement("option");
        legacyOption.value = element.role;
        legacyOption.textContent = element.role;
        legacyOption.selected = true;
        roleSelect.appendChild(legacyOption);
      }
      roleSelect.addEventListener("change", () => {
        element.role = roleSelect.value;
        render();
      });
      const nodeControls = document.createElement("div");
      nodeControls.className = "flow-node-controls";
      nodeControls.appendChild(roleSelect);
      extraControl = nodeControls;
    }
    if (element.type === "arrow") {
      const arrowSelect = document.createElement("select");
      [
        { value: "breath", label: "Short breath" },
        { value: "time", label: "4-5secs" },
      ].forEach((choice) => {
        const option = document.createElement("option");
        option.value = choice.value;
        option.textContent = choice.label;
        option.selected = choice.value === (element.kind || "breath");
        arrowSelect.appendChild(option);
      });
      arrowSelect.addEventListener("change", () => {
        element.kind = arrowSelect.value;
        render();
      });
      extraControl = arrowSelect;
    }

    const controls = document.createElement("div");
    controls.className = "block-actions";
    const moveUp = document.createElement("button");
    moveUp.className = "btn btn-ghost";
    moveUp.type = "button";
    moveUp.textContent = "↑";
    moveUp.addEventListener("click", () => {
      moveItem(row.elements, elementIndex, -1);
    });
    const moveDown = document.createElement("button");
    moveDown.className = "btn btn-ghost";
    moveDown.type = "button";
    moveDown.textContent = "↓";
    moveDown.addEventListener("click", () => {
      moveItem(row.elements, elementIndex, 1);
    });
    const remove = document.createElement("button");
    remove.className = "btn btn-danger";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      row.elements.splice(elementIndex, 1);
      render();
    });
    controls.appendChild(moveUp);
    controls.appendChild(moveDown);
    controls.appendChild(remove);

    item.appendChild(typeSelect);
    item.appendChild(textInput);
    item.appendChild(extraControl);
    item.appendChild(controls);
    rowGroup.appendChild(item);
  });

  editorPanel.appendChild(rowGroup);

  const rowActions = document.createElement("div");
  rowActions.className = "flow-editor-actions";
  const addNode = document.createElement("button");
  addNode.className = "btn btn-outline";
  addNode.type = "button";
  addNode.textContent = "Add node";
  addNode.addEventListener("click", () => {
    openFlowEditors.add(editorKey);
    pendingScrollY = window.scrollY;
    row.elements.push({ id: createId("el"), type: "node", text: "", role: "yourself", emphasis: false });
    render();
  });
  const addDivider = document.createElement("button");
  addDivider.className = "btn btn-outline";
  addDivider.type = "button";
  addDivider.textContent = "Add spacer";
  addDivider.addEventListener("click", () => {
    openFlowEditors.add(editorKey);
    pendingScrollY = window.scrollY;
    row.elements.push({ id: createId("el"), type: "divider", text: "or" });
    render();
  });
  const addArrowA = document.createElement("button");
  addArrowA.className = "btn btn-outline";
  addArrowA.type = "button";
  addArrowA.textContent = "Add short breath";
  addArrowA.addEventListener("click", () => {
    openFlowEditors.add(editorKey);
    pendingScrollY = window.scrollY;
    row.elements.push({ id: createId("el"), type: "arrow", kind: "breath" });
    render();
  });
  const addArrowB = document.createElement("button");
  addArrowB.className = "btn btn-outline";
  addArrowB.type = "button";
  addArrowB.textContent = "Add 4-5secs";
  addArrowB.addEventListener("click", () => {
    openFlowEditors.add(editorKey);
    pendingScrollY = window.scrollY;
    row.elements.push({ id: createId("el"), type: "arrow", kind: "time" });
    render();
  });
  const addNote = document.createElement("button");
  addNote.className = "btn btn-outline";
  addNote.type = "button";
  addNote.textContent = "Add note";
  addNote.addEventListener("click", () => {
    openFlowEditors.add(editorKey);
    pendingScrollY = window.scrollY;
    row.elements.push({ id: createId("el"), type: "note", text: "" });
    render();
  });
  const removeRow = document.createElement("button");
  removeRow.className = "btn btn-danger";
  removeRow.type = "button";
  removeRow.textContent = "Delete Example Row";
  removeRow.addEventListener("click", () => {
    flow.rows.splice(rowIndex, 1);
    render();
  });
  rowActions.appendChild(addNode);
  rowActions.appendChild(addArrowA);
  rowActions.appendChild(addArrowB);
  rowActions.appendChild(addDivider);
  rowActions.appendChild(addNote);
  rowActions.appendChild(removeRow);
  editorPanel.appendChild(rowActions);
  editor.appendChild(editorPanel);

  wrapper.appendChild(editor);
  return wrapper;
}

function renderCalloutGroupBlock(block, index) {
  const section = document.createElement("section");
  section.className = "category-section callout-group-card study-box-shell";
  section.id = block.id;
  section.dataset.title = block.title || "Study Box";
  const editing = isBlockEditing(block.id);

  const header = document.createElement("div");
  header.className = "category-header";

  block.subBoxes = Array.isArray(block.subBoxes) && block.subBoxes.length ? block.subBoxes : [{ id: `${block.id}-subbox-1`, title: "Study Sub-Box", description: "" }];
  const titleWrap = document.createElement("div");
  titleWrap.className = "block-title-wrap study-minimal-title";
  const badge = document.createElement("div");
  badge.className = "panel-type-badge panel-type-badge--study";
  badge.textContent = "Study";
  titleWrap.appendChild(badge);
  if (editing) {
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = block.title;
    titleInput.className = "panel-title-input";
    titleInput.addEventListener("input", () => {
      block.title = titleInput.value;
      renderNav();
    });
    const contextInput = document.createElement("input");
    contextInput.type = "text";
    contextInput.value = block.contextText || "";
    contextInput.placeholder = "Add group context";
    contextInput.className = "panel-context-input";
    contextInput.addEventListener("input", () => {
      block.contextText = contextInput.value;
    });
    titleWrap.appendChild(titleInput);
    titleWrap.appendChild(contextInput);
  } else {
    const title = document.createElement("h2");
    title.textContent = block.title;
    titleWrap.appendChild(title);
    if (block.contextText) {
      const context = document.createElement("span");
      context.className = "block-context";
      context.textContent = block.contextText;
      titleWrap.appendChild(context);
    }
  }
  header.appendChild(titleWrap);

  const actionWrap = document.createElement("div");
  actionWrap.className = "callout-group-actions";

  if (editing) {
    const addBtn = document.createElement("button");
    addBtn.className = "btn btn-outline";
    addBtn.type = "button";
    addBtn.textContent = "Add Element";
    addBtn.addEventListener("click", () => {
      const targetSub = block.subBoxes[0]?.id || `${block.id}-subbox-1`;
      getPageCallouts().push(createBlankCall(block.id, targetSub));
      render();
    });
    actionWrap.appendChild(addBtn);
  }

  actionWrap.appendChild(renderBlockActions(block, index, editing));
  header.appendChild(actionWrap);
  section.appendChild(header);

  const groupCallouts = getPageCallouts().filter((callout) => callout.groupId === block.id);

  if (editing) {
    const subActions = document.createElement("div");
    subActions.className = "tile-inline-actions";
    const addSub = document.createElement("button");
    addSub.className = "btn btn-ghost btn-compact";
    addSub.type = "button";
    addSub.textContent = "Add Study Module";
    addSub.addEventListener("click", () => {
      block.subBoxes.push({ id: createId("study-sub"), title: "Study Module", description: "" });
      render();
    });
    subActions.appendChild(addSub);
    section.appendChild(subActions);
  }

  const subGrid = document.createElement("div");
  subGrid.className = "study-subbox-grid";
  block.subBoxes.forEach((subBox, subIndex) => {
    const subCard = document.createElement("div");
    subCard.className = "study-subbox-card";
    const subHead = document.createElement("div");
    subHead.className = "study-subbox-head";
    if (editing) {
      const subTitle = document.createElement("input");
      subTitle.type = "text";
      subTitle.className = "panel-title-input";
      subTitle.value = subBox.title || "Study Module";
      subTitle.addEventListener("input", () => { subBox.title = subTitle.value; });
      subHead.appendChild(subTitle);
      const moveLeft = document.createElement("button");
      moveLeft.className = "btn btn-ghost btn-compact";
      moveLeft.type = "button";
      moveLeft.textContent = "←";
      moveLeft.disabled = subIndex === 0;
      moveLeft.addEventListener("click", () => moveItem(block.subBoxes, subIndex, -1));
      const moveRight = document.createElement("button");
      moveRight.className = "btn btn-ghost btn-compact";
      moveRight.type = "button";
      moveRight.textContent = "→";
      moveRight.disabled = subIndex >= block.subBoxes.length - 1;
      moveRight.addEventListener("click", () => moveItem(block.subBoxes, subIndex, 1));
      subHead.appendChild(moveLeft);
      subHead.appendChild(moveRight);
      if (block.subBoxes.length > 1) {
        const delSub = document.createElement("button");
        delSub.className = "btn btn-danger btn-compact";
        delSub.type = "button";
        delSub.textContent = "Remove";
        delSub.addEventListener("click", () => {
          block.subBoxes.splice(subIndex, 1);
          const fallback = block.subBoxes[0]?.id || "";
          groupCallouts.forEach((callout) => { if (callout.subBoxId === subBox.id) callout.subBoxId = fallback; });
          render();
        });
        subHead.appendChild(delSub);
      }
    } else {
      const subTitle = document.createElement("h3");
      subTitle.textContent = subBox.title || "Study Module";
      subHead.appendChild(subTitle);
    }
    subCard.appendChild(subHead);

    if (editing) {
      const subElementActions = document.createElement("div");
      subElementActions.className = "tile-inline-actions";
      const addElement = document.createElement("button");
      addElement.className = "btn btn-outline btn-compact";
      addElement.type = "button";
      addElement.textContent = "Add Element";
      addElement.addEventListener("click", () => {
        getPageCallouts().push(createBlankCall(block.id, subBox.id));
        render();
      });
      const removeElement = document.createElement("button");
      removeElement.className = "btn btn-danger btn-compact";
      removeElement.type = "button";
      removeElement.textContent = "Remove Element";
      removeElement.addEventListener("click", () => {
        const callouts = getPageCallouts();
        const targetIdx = callouts.map((item, idx) => ({ item, idx })).filter(({ item }) => item.groupId === block.id && (item.subBoxId || block.subBoxes[0]?.id) === subBox.id).at(-1)?.idx;
        if (typeof targetIdx === "number") {
          callouts.splice(targetIdx, 1);
          render();
        }
      });
      subElementActions.appendChild(addElement);
      subElementActions.appendChild(removeElement);
      subCard.appendChild(subElementActions);
    }

    const subCallouts = groupCallouts.filter((item) => (item.subBoxId || block.subBoxes[0]?.id) === subBox.id);
    const elementGrid = document.createElement("div");
    elementGrid.className = "study-element-grid";
    if (!subCallouts.length) {
      const emptySub = document.createElement("div");
      emptySub.className = "empty-state";
      emptySub.textContent = "No elements in this sub-box yet.";
      elementGrid.appendChild(emptySub);
    }

    subCallouts.forEach((item) => {
      const card = renderCalloutCard(item, { editable: editing, studyOverlay: true });
      elementGrid.appendChild(card);
    });
    subCard.appendChild(elementGrid);
    subGrid.appendChild(subCard);
  });
  section.appendChild(subGrid);

  const videos = renderVideoSection(block, { panelPadding: false, editable: editing });
  if (videos) {
    section.appendChild(videos);
  }

  return section;
}

function getBlockTypeLabel(block) {
  if (!block || !block.type) return "Section";
  if (block.type === "rules") return "Info";
  if (block.type === "flows") return "Execution";
  if (block.type === "calloutGroup") return "Study";
  if (block.type === "shipMeta") return "Ship Meta";
  if (block.type === "orgShowcase") return "Organizations";
  if (block.type === "video") return "Video";
  return "Section";
}

function appendBlockHeader(section, block, index, editing, tag = "h2") {
  const hasTitle = Boolean((block.title || "").trim());
  if (!hasTitle && !adminMode) {
    section.classList.add("panel-no-title");
    return;
  }
  const header = document.createElement("div");
  header.className = "panel-header";
  const titleGroup = document.createElement("div");
  titleGroup.className = "panel-heading-group";
  const badge = document.createElement("div");
  badge.className = `panel-type-badge panel-type-badge--${block.type || "generic"}`;
  badge.textContent = getBlockTypeLabel(block);
  titleGroup.appendChild(badge);
  const title = renderBlockTitle(block, tag, editing);
  if (hasTitle || adminMode) {
    titleGroup.appendChild(title);
  }
  header.appendChild(titleGroup);
  header.appendChild(renderBlockActions(block, index, editing));
  if (!hasTitle) {
    header.classList.add("is-title-empty");
    if (adminMode) {
      header.classList.add("is-admin-reachable");
    }
  }
  section.appendChild(header);
}

function renderBlockTitle(block, tag, editing = false) {
  if (!adminMode || !editing) {
    const heading = document.createElement(tag);
    heading.textContent = block.title;
    return applyAdminReachabilityPlaceholder(heading, block.title, "Untitled block", "panel-heading-placeholder");
  }
  const input = document.createElement("input");
  input.type = "text";
  input.value = block.title;
  input.className = "panel-title-input";
  input.addEventListener("input", () => {
    block.title = input.value;
    renderNav();
  });
  return input;
}

function renderBlockActions(block, index, editing = false) {
  const actions = document.createElement("div");
  actions.className = "block-actions";
  if (!adminMode) {
    return actions;
  }

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-ghost";
  editBtn.type = "button";
  editBtn.textContent = editing ? "Done" : "Edit";
  editBtn.title = "Toggle block editing";
  editBtn.addEventListener("click", () => {
    toggleBlockEditing(block.id);
  });

  const moveUp = document.createElement("button");
  moveUp.className = "btn btn-ghost";
  moveUp.type = "button";
  moveUp.textContent = "↑";
  moveUp.title = "Move block up";
  moveUp.addEventListener("click", () => {
    moveItem(getPageBlocks(), index, -1);
  });

  const moveDown = document.createElement("button");
  moveDown.className = "btn btn-ghost";
  moveDown.type = "button";
  moveDown.textContent = "↓";
  moveDown.title = "Move block down";
  moveDown.addEventListener("click", () => {
    moveItem(getPageBlocks(), index, 1);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete block";
  deleteBtn.addEventListener("click", () => {
    if (block.type === "calloutGroup") {
      if (!confirm("Delete this Study Box and all its elements?")) {
        return;
      }
      const pageCallouts = getPageCallouts();
      for (let i = pageCallouts.length - 1; i >= 0; i -= 1) {
        if (pageCallouts[i].groupId === block.id) pageCallouts.splice(i, 1);
      }
    }
    getPageBlocks().splice(index, 1);
    rerenderPreservingScroll();
  });

  actions.appendChild(editBtn);
  actions.appendChild(moveUp);
  actions.appendChild(moveDown);
  actions.appendChild(deleteBtn);
  return actions;
}

function renderCalloutCard(item, options = {}) {
  const editable = Boolean(options.editable);
  const studyOverlay = Boolean(options.studyOverlay);
  const card = document.createElement("div");
  card.className = `callout-card ${getVisibilityClass(item.visibility)}${studyOverlay ? " study-overlay-callout" : ""}`;
  const cardId = `${item.groupId}-${item.callName}`;
  card.dataset.cardId = cardId;

  if (expandedIds.has(cardId)) {
    card.classList.add("expanded");
  }

  const header = document.createElement("div");
  header.className = "callout-header";
  const setCardExpanded = (expanded) => {
    const groupScope = card.closest(".study-subbox-grid") || card.parentElement;
    if (expanded && groupScope) {
      groupScope.querySelectorAll(".callout-card.expanded").forEach((openCard) => {
        openCard.classList.remove("expanded", "expand-up", "align-right");
        const openId = openCard.dataset.cardId;
        if (openId) {
          setExpanded(openId, false);
          pinnedStudyCardIds.delete(openId);
        }
      });
    }
    card.classList.toggle("expanded", expanded);
    if (studyOverlay) {
      card.classList.remove("expand-up", "align-right");
      if (expanded) {
        const rect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
        const estimatedHeight = Math.min(viewportHeight * 0.62, 520);
        const estimatedWidth = Math.min(560, Math.max(320, viewportWidth - 64));
        if (viewportHeight - rect.bottom < estimatedHeight + 24 && rect.top > estimatedHeight * 0.45) {
          card.classList.add("expand-up");
        }
        if (viewportWidth - rect.left < estimatedWidth + 24) {
          card.classList.add("align-right");
        }
      }
    }
    setExpanded(cardId, expanded);
    if (!expanded) {
      pinnedStudyCardIds.delete(cardId);
    }
  };

  header.addEventListener("click", () => {
    if (studyOverlay && editable) {
      const nextPinned = !pinnedStudyCardIds.has(cardId);
      if (nextPinned) {
        pinnedStudyCardIds.add(cardId);
      } else {
        pinnedStudyCardIds.delete(cardId);
      }
      setCardExpanded(nextPinned);
      return;
    }
    if (!studyOverlay) {
      setCardExpanded(!card.classList.contains("expanded"));
    }
  });

  if (studyOverlay) {
    card.addEventListener("mouseenter", () => {
      const timer = studyHoverCloseTimers.get(cardId);
      if (timer) clearTimeout(timer);
      studyHoverCloseTimers.delete(cardId);
      setCardExpanded(true);
    });
    card.addEventListener("mouseleave", () => {
      if (pinnedStudyCardIds.has(cardId)) {
        return;
      }
      const timeout = window.setTimeout(() => {
        setCardExpanded(false);
        studyHoverCloseTimers.delete(cardId);
      }, 180);
      studyHoverCloseTimers.set(cardId, timeout);
    });
  }

  const title = document.createElement("div");
  title.className = "callout-title";
  const chevron = document.createElement("span");
  chevron.className = "chevron";
  chevron.textContent = "▸";
  const name = document.createElement("span");
  name.textContent = item.callName;
  applyAdminReachabilityPlaceholder(name, item.callName, "Untitled element", "callout-title-placeholder");
  title.appendChild(chevron);
  title.appendChild(name);
  if (activeMode === "advanced" && (item.visibility === "advanced" || item.advancedTag)) {
    const badge = document.createElement("span");
    badge.className = "advanced-indicator";
    badge.textContent = "◆";
    badge.title = "Advanced";
    title.appendChild(badge);
  }

  const actions = document.createElement("div");
  actions.className = "callout-actions";

  if (editable) {
    const upBtn = document.createElement("button");
    upBtn.className = "btn btn-ghost";
    upBtn.type = "button";
    upBtn.textContent = "↑";
    upBtn.title = "Move up";
    upBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      moveWithinGroup(item, -1);
    });
    const downBtn = document.createElement("button");
    downBtn.className = "btn btn-ghost";
    downBtn.type = "button";
    downBtn.textContent = "↓";
    downBtn.title = "Move down";
    downBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      moveWithinGroup(item, 1);
    });
    actions.appendChild(upBtn);
    actions.appendChild(downBtn);
  }

  header.appendChild(title);
  header.appendChild(actions);

  const body = document.createElement("div");
  body.className = "callout-body";

  let expandedTitle = null;
  if (!studyOverlay) {
    expandedTitle = document.createElement("div");
    expandedTitle.className = "callout-expanded-title span-two";
    expandedTitle.textContent = item.callName || "Element";
    body.appendChild(expandedTitle);
  }

  if (editable) {
    body.appendChild(
    renderField("Element name", item.callName, (value) => {
        const previousId = card.dataset.cardId;
        item.callName = value;
        const safeName = value || "New Element";
        name.textContent = safeName;
        if (expandedTitle) expandedTitle.textContent = safeName;
        const nextId = `${item.groupId}-${item.callName}`;
        card.dataset.cardId = nextId;
        if (previousId && expandedIds.has(previousId)) {
          expandedIds.delete(previousId);
          expandedIds.add(nextId);
        }
      }, {
        type: "text",
        editable: editable,
        className: "span-two",
      })
    );
    body.appendChild(
      renderSelect(
        "Visibility",
        item.visibility,
        VISIBILITY_OPTIONS,
        (value) => {
          item.visibility = value;
          render();
        },
        {
          editable: editable,
          className: "half visibility-control",
        }
      )
    );
  }

  item.subElements.slice(0, 4).forEach((sub, subIndex) => {
    const field = document.createElement("div");
    field.className = `field ${studyOverlay ? "half" : "half"} subelement-field`;
    const head = document.createElement("div");
    head.className = "subelement-head";

    if (editable && studyOverlay) {
      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.className = "panel-title-input subelement-title-input";
      titleInput.value = sub.title || `Field ${subIndex + 1}`;
      titleInput.placeholder = `Field ${subIndex + 1}`;
      titleInput.addEventListener("input", () => { sub.title = titleInput.value; });
      head.appendChild(titleInput);
    } else {
      head.appendChild(renderEditableText("span", sub.title, (value) => { sub.title = value || `Field ${subIndex + 1}`; }, { className: "subelement-title" }));
    }

    if (editable && !studyOverlay) {
      [
        { t: "↑", d: -1 },
        { t: "↓", d: 1 },
      ].forEach((cfg) => {
        const b = document.createElement("button");
        b.className = "btn btn-ghost btn-compact";
        b.type = "button";
        b.textContent = cfg.t;
        b.addEventListener("click", () => {
          moveItem(item.subElements, subIndex, cfg.d);
        });
        head.appendChild(b);
      });
    }

    field.appendChild(head);
    if (editable) {
      const control = document.createElement("textarea");
      control.value = sub.content || "";
      control.addEventListener("input", () => { sub.content = control.value; });
      field.appendChild(control);
    } else {
      const display = document.createElement("div");
      display.className = "readonly subelement-content";
      display.innerHTML = formatMultilineHtml(sub.content || "");
      field.appendChild(display);
    }
    if (editable && !studyOverlay) {
      const remove = document.createElement("button");
      remove.className = "btn btn-danger btn-compact";
      remove.type = "button";
      remove.textContent = "Remove";
      remove.addEventListener("click", () => { item.subElements.splice(subIndex, 1); render(); });
      field.appendChild(remove);
    }
    body.appendChild(field);
  });

  if (editable) {
    const groups = getCalloutGroups();
    body.appendChild(
      renderSelect(
        "Study Box",
        item.groupId,
        groups.map((group) => ({ label: group.title, value: group.id })),
        (value) => {
          item.groupId = value;
          const nextSubBoxes = getSubBoxOptions(value);
          item.subBoxId = nextSubBoxes[0]?.value || "";
          render();
        },
        {
          editable: editable,
          className: "half",
        }
      )
    );
    const subBoxOptions = getSubBoxOptions(item.groupId);
    if (subBoxOptions.length) {
      if (!subBoxOptions.some((option) => option.value === item.subBoxId)) {
        item.subBoxId = subBoxOptions[0].value;
      }
      body.appendChild(
        renderSelect(
          "Sub-Box",
          item.subBoxId,
          subBoxOptions,
          (value) => {
            item.subBoxId = value;
            render();
          },
          {
            editable: editable,
            className: "half",
          }
        )
      );
    }
  }

  const calloutVideos = studyOverlay ? null : renderVideoSection(item, { panelPadding: false, editable: editable, inCallout: true });
  if (calloutVideos) {
    calloutVideos.classList.add("span-two");
    body.appendChild(calloutVideos);
  }

  const calloutMedia = studyOverlay ? null : renderCalloutImage(item, editable);
  if (calloutMedia) {
    body.classList.add("has-media");
    body.appendChild(calloutMedia);
  }

  if (!studyOverlay) {
    body.appendChild(
      renderField("Notes", item.notes, (value) => {
        item.notes = value;
      }, {
        type: "textarea",
        editable: editable,
        className: "span-two",
      })
    );

    if (editable) {
      body.appendChild(
        renderField("Important note", item.importantNote, (value) => {
          item.importantNote = value;
        }, {
          type: "textarea",
          editable: editable,
          className: "span-two",
        })
      );
    } else if (item.importantNote) {
      const noteBox = document.createElement("div");
      noteBox.className = "callout-note-box span-two";
      noteBox.textContent = item.importantNote;
      body.appendChild(noteBox);
    }
  }

  if (editable) {
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger span-two";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete Element";
    deleteBtn.addEventListener("click", () => {
      const pageCallouts = getPageCallouts();
      const idx = pageCallouts.indexOf(item);
      if (idx >= 0) pageCallouts.splice(idx, 1);
      render();
    });
    body.appendChild(deleteBtn);
  }

  card.appendChild(header);
  card.appendChild(body);
  return card;
}

function renderCalloutImage(item, editable) {
  if (!editable && !item.imageSrc) {
    return null;
  }
  const media = document.createElement("div");
  media.className = "callout-media";
  if (item.imageSrc) {
    const image = document.createElement("img");
    image.className = "callout-image";
    image.src = item.imageSrc;
    image.alt = item.callName ? `${item.callName} image` : "Element image";
    media.appendChild(image);
  }
  if (editable) {
    const controls = createImageUploadControl(
      item.imageSrc ? "Replace image" : "Upload image",
      (src) => {
        item.imageSrc = src;
        render();
      },
      item.imageSrc
        ? () => {
            item.imageSrc = "";
            render();
          }
        : null,
      "callout-image-controls"
    );
    media.appendChild(controls);
  }
  return media;
}

function renderField(labelText, value, onChange, options) {
  const field = document.createElement("div");
  field.className = `field${options.className ? ` ${options.className}` : ""}`;
  const label = document.createElement("label");
  label.textContent = labelText;
  field.appendChild(label);

  if (!options.editable) {
    const display = document.createElement("div");
    display.className = "readonly";
    if (options.multilineDisplay) {
      display.innerHTML = formatMultilineHtml(value);
    } else {
      const textValue = value === 0 || value ? String(value) : "";
      if (textValue) {
        display.textContent = textValue;
      } else {
        display.textContent = options.emptyText || "–";
        if (options.emptyText) display.classList.add("is-na");
      }
    }
    field.appendChild(display);
    return field;
  }

  const control = options.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
  if (options.type && options.type !== "textarea") {
    control.type = options.type;
  }
  control.value = value === 0 || value ? String(value) : "";
  control.addEventListener("input", () => onChange(control.value));
  field.appendChild(control);
  return field;
}

function renderSelect(labelText, value, optionsList, onChange, options) {
  const field = document.createElement("div");
  field.className = `field${options.className ? ` ${options.className}` : ""}`;
  const label = document.createElement("label");
  label.textContent = labelText;
  field.appendChild(label);

  const resolvedValue = optionsList.some((option) => option.value === value) ? value : "";

  if (!options.editable) {
    const display = document.createElement("div");
    display.className = "readonly";
    display.textContent = optionsList.find((option) => option.value === value)?.label || "–";
    field.appendChild(display);
    return field;
  }

  const select = document.createElement("select");
  optionsList.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.label;
    opt.selected = option.value === resolvedValue;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => onChange(select.value));
  field.appendChild(select);
  return field;
}

function renderWhenField(item, editable) {
  return renderField(
    "When to use",
    item.whenToUse,
    (value) => {
      item.whenToUse = value;
    },
    {
      type: "textarea",
      editable: editable,
      className: "half",
      multilineDisplay: true,
    }
  );
}

function renderVideoSection(block, options = {}) {
  const videos = block.videos || [];
  const hasVideos = videos.length > 0;
  const editable = Boolean(options.editable);
  const maxVideos = Number.isFinite(options.maxVideos) ? options.maxVideos : Infinity;
  const canAdd = editable && videos.length < maxVideos;
  if (!editable && !hasVideos && !options.showEmpty) {
    return null;
  }

  const section = document.createElement("div");
  section.className = `block-videos${options.panelPadding ? " panel-body" : ""}${
    options.inCallout ? " callout-videos" : ""
  }${options.fullWidth ? " video-full" : ""}`;

  if (canAdd) {
    const controls = document.createElement("div");
    controls.className = "video-controls";

    const urlInput = document.createElement("input");
    urlInput.type = "text";
    urlInput.placeholder = "Paste YouTube link";

    const addYoutube = document.createElement("button");
    addYoutube.className = "btn btn-outline";
    addYoutube.type = "button";
    addYoutube.textContent = "Add YouTube";
    addYoutube.addEventListener("click", () => {
      const value = urlInput.value.trim();
      if (!value) {
        return;
      }
      if (!Array.isArray(block.videos)) {
        block.videos = [];
      }
      block.videos.push({ id: createId("video"), type: "youtube", src: value, title: "" });
      urlInput.value = "";
      render();
    });

    const uploadLabel = document.createElement("label");
    uploadLabel.className = "btn btn-outline";
    uploadLabel.textContent = "Upload video";
    const uploadInput = document.createElement("input");
    uploadInput.type = "file";
    uploadInput.accept = "video/*";
    uploadInput.id = createId("video-upload");
    uploadLabel.setAttribute("for", uploadInput.id);
    uploadInput.addEventListener("change", () => {
      const file = uploadInput.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        uploadInput.value = "";
        if (!Array.isArray(block.videos)) {
          block.videos = [];
        }
        block.videos.push({ id: createId("video"), type: "local", src: reader.result, title: "" });
        render();
      };
      reader.readAsDataURL(file);
    });

    controls.appendChild(urlInput);
    controls.appendChild(addYoutube);
    controls.appendChild(uploadLabel);
    controls.appendChild(uploadInput);
    section.appendChild(controls);
  }

  if (!hasVideos && !adminMode && options.showEmpty) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No video added yet.";
    section.appendChild(empty);
    return section;
  }

  if (hasVideos) {
    const grid = document.createElement("div");
    const singleColumn = options.singleColumn || videos.length === 1;
    grid.className = `video-grid${singleColumn ? " single" : ""}`;
    videos.forEach((video, index) => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.id = getVideoAnchorId(video);
      if (editable) {
        const titleInput = document.createElement("input");
        titleInput.type = "text";
        titleInput.value = video.title || "";
        titleInput.placeholder = "Video title";
        titleInput.className = "video-title-input";
        titleInput.addEventListener("input", () => {
          video.title = titleInput.value;
        });
        card.appendChild(titleInput);
      } else if (video.title) {
        const title = document.createElement("div");
        title.className = "video-title";
        title.textContent = video.title;
        card.appendChild(title);
      }
      if (video.type === "youtube") {
        const embedUrl = getYouTubeEmbedUrl(video.src || "");
        if (embedUrl) {
          const frame = document.createElement("iframe");
          frame.className = "youtube-frame";
          frame.src = embedUrl;
          frame.allowFullscreen = true;
          card.appendChild(frame);
        } else {
          const fallback = document.createElement("div");
          fallback.className = "empty-state";
          fallback.textContent = "Invalid YouTube link.";
          card.appendChild(fallback);
        }
      } else if (video.type === "local") {
        const videoEl = document.createElement("video");
        videoEl.className = "local-video";
        videoEl.src = video.src;
        videoEl.controls = true;
        card.appendChild(videoEl);
      }

      if (editable) {
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-danger";
        removeBtn.type = "button";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
          block.videos.splice(index, 1);
          render();
        });
        card.appendChild(removeBtn);
      }

      grid.appendChild(card);
    });
    section.appendChild(grid);
  }

  return section;
}

function getVideoAnchorId(video) {
  return `video-${video.id}`;
}

function getVideoTargets() {
  const targets = [];
  getPageBlocks().forEach((block) => {
    const videos = block.videos || [];
    videos.forEach((video, index) => {
      const title = video.title || `Video ${index + 1}`;
      targets.push({
        id: getVideoAnchorId(video),
        label: `${block.title || "Video"} — ${title}`,
      });
    });
    if (block.type === "flows") {
      (block.flows || []).forEach((flow) => {
        const flowVideos = flow.videos || [];
        flowVideos.forEach((video, index) => {
          const title = video.title || `Video ${index + 1}`;
          targets.push({
            id: getVideoAnchorId(video),
            label: `${flow.title || "Execution Module"} — ${title}`,
          });
        });
      });
    }
  });
  getPageCallouts().forEach((callout) => {
    const videos = callout.videos || [];
    videos.forEach((video, index) => {
      const title = video.title || `Video ${index + 1}`;
      targets.push({
        id: getVideoAnchorId(video),
        label: `${callout.callName || "Element"} — ${title}`,
      });
    });
  });
  return targets;
}

function getLegacyTargetLabel(targetId) {
  const block = getPageBlocks().find((item) => item.id === targetId);
  if (block) {
    return `Legacy block — ${block.title || block.type || "Untitled"}`;
  }
  return `Legacy target — ${targetId}`;
}

function createBlankCall(groupId, subBoxId = "") {
  return {
    id: createId("callout"),
    callName: "New Element",
    groupId,
    subBoxId,
    subElements: DEFAULT_SUB_ELEMENTS.slice(0, 4).map((label) => ({ id: createId("subel"), title: label, content: "" })),
    notes: "",
    importantNote: "",
    visibility: "both",
    imageSrc: "",
    videos: [],
  };
}

function moveWithinGroup(item, direction) {
  const groupItems = getPageCallouts().filter((call) => call.groupId === item.groupId);
  const indexInGroup = groupItems.indexOf(item);
  const newIndex = indexInGroup + direction;
  if (newIndex < 0 || newIndex >= groupItems.length) {
    return;
  }
  const originalIndex = getPageCallouts().indexOf(item);
  const swapItem = groupItems[newIndex];
  const swapIndex = getPageCallouts().indexOf(swapItem);
  [getPageCallouts()[originalIndex], getPageCallouts()[swapIndex]] = [getPageCallouts()[swapIndex], getPageCallouts()[originalIndex]];
  render();
}

function moveItem(list, index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= list.length) {
    return;
  }
  pendingScrollY = window.scrollY;
  [list[index], list[newIndex]] = [list[newIndex], list[index]];
  render();
}

function handleExportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scscp-state.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function handleExportHtml() {
  const styles = await getStylesheetText();
  const html = buildViewerHtml(state, styles);
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scscp-viewer.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function handleExportZip() {
  saveState();
  const [styles, script] = await Promise.all([getStylesheetText(), getScriptText()]);
  const indexHtml = buildExportIndexHtml(state);
  const readme = buildExportReadme(state);
  const files = [
    { name: "index.html", content: indexHtml },
    { name: "styles.css", content: styles },
    { name: "app.js", content: script },
    { name: "README.md", content: readme },
  ];
  const zipBlob = createZipBlob(prepareStaticZipFiles(files));
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scscp-project.zip";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function handleExportOnlineZip() {
  saveState();
  const [styles, script] = await Promise.all([getStylesheetText(), getScriptText()]);
  const indexHtml = buildOnlineIndexHtml(state);
  const readme = buildOnlineReadme(state);
  const files = [
    { name: "index.html", content: indexHtml },
    { name: "styles.css", content: styles },
    { name: "app.js", content: script },
    { name: "README.md", content: readme },
  ];
  const zipBlob = createZipBlob(prepareStaticZipFiles(files));
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scscp-online-build.zip";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

async function handleExportOnlineViewerZip() {
  saveState();
  const [styles, script] = await Promise.all([getStylesheetText(), getScriptText()]);
  const indexHtml = buildOnlineViewerIndexHtml(state);
  const readme = buildOnlineViewerReadme();
  const files = [
    { name: "index.html", content: indexHtml },
    { name: "styles.css", content: styles },
    { name: "app.js", content: script },
    { name: "README.md", content: readme },
  ];
  const zipBlob = createZipBlob(prepareStaticZipFiles(files));
  const url = URL.createObjectURL(zipBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "scscp-online-viewer-build.zip";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function buildViewerHtml(sourceState, styles) {
  const documentTitle = sourceState.header.title || "Space Combat Doctrine Platform";
  const logoHtml = sourceState.header.logoSrc
    ? `<img class="header-logo" src="${escapeHtml(sourceState.header.logoSrc)}" alt="${escapeHtml(sourceState.header.logoAlt || "Header logo")}" />`
    : "";
  const headerClass = sourceState.header.backgroundSrc ? "site-header has-bg" : "site-header";
  const headerStyle = sourceState.header.backgroundSrc
    ? ` style="--header-bg: url('${escapeHtml(sourceState.header.backgroundSrc)}');"`
    : "";
  const eyebrowHtml = sourceState.header.eyebrow ? `<div class="eyebrow header-eyebrow">${escapeHtml(sourceState.header.eyebrow)}</div>` : "";
  const titleHtml = sourceState.header.title ? `<h1 class="header-title">${escapeHtml(sourceState.header.title)}</h1>` : "";
  const subtitleHtml = sourceState.header.subtitle ? `<p class="subhead header-subtitle-multiline">${escapeHtml(sourceState.header.subtitle)}</p>` : "";
  const headerTextHtml = eyebrowHtml || titleHtml || subtitleHtml ? `<div class="header-text">${eyebrowHtml}${titleHtml}${subtitleHtml}</div>` : "";
  const themeOptions = buildThemeOptions(sourceState.ui?.theme || DEFAULT_THEME_NAME);
  const socialIcons = (sourceState.header.socialIcons || [])
    .filter((icon) => icon?.src)
    .map((icon) => {
      const iconImg = `<img src="${escapeHtml(icon.src)}" alt="Social icon" />`;
      return icon.url
        ? `<a href="${escapeHtml(icon.url)}" target="_blank" rel="noopener noreferrer">${iconImg}</a>`
        : `<span>${iconImg}</span>`;
    })
    .join("");
  const headerHtml = `
      <div class="header-main">
        <div class="header-brand${sourceState.header.logoSrc ? "" : " no-logo"}">
          <div class="header-logo-slot">${logoHtml}</div>
          ${headerTextHtml}
        </div>
        <div class="mode-toggle" id="headerModeToggle">
          <div class="mode-toggle-stack">
            <div class="mode-toggle-buttons">
              <button class="mode-btn" type="button" data-mode="basic">Basic</button>
              <button class="mode-btn" type="button" data-mode="advanced">Advanced</button>
            </div>
            <a href="#home" class="home-nav-btn">Home</a>
          </div>
        </div>
        <div class="header-controls">
          <div class="header-actions">
            <div class="theme-control">
              <label for="themeSelect">Theme</label>
              <select id="themeSelect">
                ${themeOptions}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="header-navs">
        <nav class="page-nav" id="pageNav"></nav>
        <div class="category-nav-band">
          <nav class="category-nav" id="categoryNav"></nav>
          <div class="header-socials">${socialIcons}</div>
        </div>
      </div>
  `;

  const blocksHtml = (sourceState.home.blocks || [])
    .map((block) => buildViewerBlock(block, sourceState))
    .filter(Boolean)
    .join("\n");

  const footerHtml = `
      ${sourceState.footer.lines.map((line) => `<p class="footer-line">${escapeHtml(line)}</p>`).join("\n")}
      ${sourceState.footer.note ? `<p class="footer-note">${escapeHtml(sourceState.footer.note)}</p>` : ""}
  `;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(documentTitle)}</title>
    <style>${styles}</style>
  </head>
  <body>
    <header class="${headerClass}"${headerStyle}>
      ${headerHtml}
    </header>
    <main>
      ${blocksHtml}
    </main>
    <footer class="site-footer">
      ${footerHtml}
    </footer>
    <script>
      const THEME_KEY = '${THEME_KEY}';
      const MODE_KEY = '${MODE_KEY}';
      const DEFAULT_THEME_NAME = '${DEFAULT_THEME_NAME}';
      const THEMES = ${JSON.stringify(Object.fromEntries(Object.entries(THEMES).map(([key, value]) => [key, value.colors])))};
      const themeSelect = document.getElementById('themeSelect');
      const modeButtons = Array.from(document.querySelectorAll('#headerModeToggle .mode-btn'));

      function applyTheme(themeName) {
        const theme = THEMES[themeName] || THEMES[DEFAULT_THEME_NAME];
        Object.entries(theme).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      }

      function setTheme(themeName) {
        const next = THEMES[themeName] ? themeName : '${DEFAULT_THEME_NAME}';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
        if (themeSelect) {
          themeSelect.value = next;
        }
      }

      const savedTheme = localStorage.getItem(THEME_KEY) || '${escapeHtml(sourceState.ui?.theme || DEFAULT_THEME_NAME)}';
      applyTheme(savedTheme);
      if (themeSelect) {
        themeSelect.value = savedTheme;
        themeSelect.addEventListener('change', (event) => {
          setTheme(event.target.value);
        });
      }

      function applyMode(mode) {
        const active = mode === 'advanced' ? 'advanced' : 'basic';
        document.body.classList.toggle('mode-basic', active === 'basic');
        document.body.classList.toggle('mode-advanced', active === 'advanced');
        modeButtons.forEach((button) => {
          const isActive = button.dataset.mode === active;
          button.classList.toggle('is-active', isActive);
          button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        return active;
      }

      let activeMode = localStorage.getItem(MODE_KEY) || '${escapeHtml(sourceState.ui?.viewMode || "basic")}';
      activeMode = applyMode(activeMode);

      modeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          activeMode = applyMode(button.dataset.mode);
          localStorage.setItem(MODE_KEY, activeMode);
        });
      });

      const categoryNav = document.getElementById('categoryNav');

      const cards = Array.from(document.querySelectorAll('.callout-card'));

      function buildNav() {
        categoryNav.innerHTML = '';
        document.querySelectorAll('section[data-title]').forEach((section) => {
          const title = section.dataset.title;
          const link = document.createElement('a');
          link.href = '#' + section.id;
          link.textContent = title;
          categoryNav.appendChild(link);
        });
      }

      cards.forEach((card) => {
        const header = card.querySelector('.callout-header');
        header.addEventListener('click', () => {
          card.classList.toggle('expanded');
        });
      });

      const shipModeGroups = Array.from(document.querySelectorAll('[data-ship-mode-group]'));
      shipModeGroups.forEach((group) => {
        const groupId = group.dataset.shipModeGroup;
        const content = document.querySelector('[data-ship-mode-content="' + groupId + '"]');
        const buttons = Array.from(group.querySelectorAll('.mode-btn'));
        if (!content || !buttons.length) {
          return;
        }
        const applyShipMode = (mode) => {
          const nextMode = mode === 'pu' ? 'pu' : 'premium';
          buttons.forEach((button) => {
            const active = button.dataset.mode === nextMode;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
          });
          content.querySelectorAll('.ship-meta-mode-panel').forEach((panel) => {
            panel.classList.toggle('is-active', panel.dataset.mode === nextMode);
          });
        };
        buttons.forEach((button) => {
          button.addEventListener('click', () => applyShipMode(button.dataset.mode));
        });
      });

      buildNav();
      function updateScrollOffset() {
        const header = document.querySelector('.site-header');
        if (header) {
          document.documentElement.style.setProperty('--scroll-offset', (header.offsetHeight + 12) + 'px');
        }
      }
      updateScrollOffset();
      window.addEventListener('resize', updateScrollOffset);
    </script>
  </body>
</html>`;
}

function buildThemeOptions(active) {
  return Object.entries(THEMES)
    .map(([key, theme]) => {
      const selected = key === active ? " selected" : "";
      return `<option value="${escapeHtml(key)}"${selected}>${escapeHtml(theme.label)}</option>`;
    })
    .join("");
}

function buildExportIndexHtml(sourceState) {
  const exportedState = {
    ...sourceState,
    ui: {
      ...(sourceState.ui || {}),
      theme: activeTheme,
    },
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(exportedState.header.title || "Space Combat Doctrine Platform")}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-main">
        <div id="headerContent"></div>
        <div id="headerModeToggle" class="mode-toggle"></div>
        <div class="header-controls">
          <div class="header-actions">
            <div class="theme-control">
              <label for="themeSelect">Theme</label>
              <select id="themeSelect"></select>
            </div>
            <button id="adminToggle" class="btn btn-outline" type="button">Edit</button>
            <div class="status-pill" id="adminStatus">Viewer mode</div>
          </div>
        </div>
      </div>
      <div class="header-navs">
        <nav class="page-nav" id="pageNav"></nav>
        <div class="category-nav-band">
          <nav class="category-nav" id="categoryNav"></nav>
          <div id="headerSocials" class="header-socials"></div>
        </div>
      </div>
    </header>

    <section id="adminBox" class="admin-box panel"></section>

    <main id="blocksContainer"></main>

    <footer class="site-footer">
      <div id="footerContent"></div>
    </footer>

    <script>
      window.__EXPORTED_STATE__ = ${JSON.stringify(exportedState)};
    </script>
    <script src="app.js"></script>
  </body>
</html>`;
}

function buildOnlineIndexHtml(sourceState) {
  const exportedState = {
    ...sourceState,
    ui: {
      ...(sourceState.ui || {}),
      theme: activeTheme,
    },
  };
  const auth = Array.isArray(sourceState.onlineAuth) && sourceState.onlineAuth.length
    ? sourceState.onlineAuth
    : deepClone(DEFAULT_STATE.onlineAuth);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(exportedState.header.title || "Space Combat Doctrine Platform")}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-main">
        <div id="headerContent"></div>
        <div id="headerModeToggle" class="mode-toggle"></div>
        <div class="header-controls">
          <div class="header-actions">
            <div class="theme-control">
              <label for="themeSelect">Theme</label>
              <select id="themeSelect"></select>
            </div>
          </div>
        </div>
      </div>
      <div class="header-navs">
        <nav class="page-nav" id="pageNav"></nav>
        <div class="category-nav-band">
          <nav class="category-nav" id="categoryNav"></nav>
          <div id="headerSocials" class="header-socials"></div>
        </div>
      </div>
    </header>

    <section id="adminBox" class="admin-box panel"></section>

    <main id="blocksContainer"></main>

    <footer class="site-footer">
      <div id="footerContent"></div>
    </footer>

    <script>
      window.__EXPORTED_STATE__ = ${JSON.stringify(exportedState)};
      window.__ONLINE_BUILD__ = true;
      window.__ONLINE_AUTH__ = ${JSON.stringify(auth)};
    </script>
    <script src="app.js"></script>
  </body>
</html>`;
}

function buildOnlineViewerIndexHtml(sourceState) {
  const exportedState = {
    ...sourceState,
    ui: {
      ...(sourceState.ui || {}),
      theme: activeTheme,
    },
  };
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(exportedState.header.title || "Space Combat Doctrine Platform")}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="header-main">
        <div id="headerContent"></div>
        <div id="headerModeToggle" class="mode-toggle"></div>
        <div class="header-controls">
          <div class="header-actions">
            <div class="theme-control">
              <label for="themeSelect">Theme</label>
              <select id="themeSelect"></select>
            </div>
          </div>
        </div>
      </div>
      <div class="header-navs">
        <nav class="page-nav" id="pageNav"></nav>
        <div class="category-nav-band">
          <nav class="category-nav" id="categoryNav"></nav>
          <div id="headerSocials" class="header-socials"></div>
        </div>
      </div>
    </header>

    <main id="blocksContainer"></main>

    <footer class="site-footer">
      <div id="footerContent"></div>
    </footer>

    <script>
      window.__EXPORTED_STATE__ = ${JSON.stringify(exportedState)};
      window.__ONLINE_BUILD__ = true;
      window.__VIEWER_ONLY_BUILD__ = true;
    </script>
    <script src="app.js"></script>
  </body>
</html>`;
}

function buildExportReadme(sourceState) {
  return `# SpaceCombat.gg Static Build

## Overview
- \`index.html\`: SpaceCombat.gg entry point with the exported state snapshot injected before \`app.js\` loads.
- \`styles.css\`: Theme, layout, and component styling for the tactical doctrine interface.
- \`app.js\`: Rendering logic, admin/editor tools, export helpers, and localStorage persistence.

## Data model (stored in localStorage)
The state is serialized under \`${STORAGE_KEY}\` as JSON. Key areas:
- \`header\`: eyebrow/title/subtitle/intro, logo, background image, and three social icons.
- \`ui\`: current theme name.
- \`roleLabels\`: labels (name + color) used in Flow Box nodes.
- \`blocks\`: ordered list of Information Boxes, Flow Boxes, Study Boxes, and video blocks.
- \`callouts\`: Elements that belong to Study Boxes via \`groupId\`.

## How to customize
1. Open \`index.html\` in a browser.
2. Click **Edit** to reveal the admin box under the header.
3. Adjust content, add/remove boxes, and upload media (stored as base64 in localStorage).
4. Edits are auto-saved to localStorage as you make changes.

## Extending
- Add new blocks by using the admin box buttons.
- Edit theme colors in \`app.js\` under \`THEMES\`.
- Adjust layout tokens in \`styles.css\` (spacing, borders) if needed.

## Notes
- Uploads are base64-encoded for offline use.
- The exported state is embedded in \`index.html\` via \`window.__EXPORTED_STATE__\` to make this ZIP immediately runnable.
- Windows SmartScreen may flag ZIPs downloaded from browsers. If blocked, right-click ZIP > Properties > Unblock, or use a different browser download method.`;
}

function buildOnlineReadme(sourceState) {
  return `# SpaceCombat.gg Online Build

## Overview
- \`index.html\`: Page layout and entry point with online-mode flags.
- \`styles.css\`: Theme, layout, and component styling (dark, card-based UI).
- \`app.js\`: Application logic, rendering, admin tools, and localStorage persistence.

## How to use
1. Upload the folder to a static host or open \`index.html\` locally.
2. The page loads in viewer mode by default.
3. Use the admin link to unlock editing only for limited/private sharing scenarios.

## Admin credentials
- Any configured pair in HOME Admin → Online build accounts is valid.
- Those credentials are client-readable in the build and should never be treated as real production security.

## Security note
This is a static site, so the login gate is **client-side only** and not real security. For real public \`spacecombat.gg\` deployment, replace this with server-side authentication, session handling, rate limiting, role checks, and HTTPS-only hosting.

## Windows note
Windows SmartScreen may flag ZIPs downloaded from browsers. If blocked, right-click ZIP > Properties > Unblock, or use a different browser download method.`;
}

function buildOnlineViewerReadme() {
  return `# SpaceCombat.gg Online Viewer Build

## Overview
- This build is viewer-only and has no login, edit, or admin features.
- Host as static files or open \`index.html\` directly.
- This is the safer public-facing static variant until real hosted authentication exists.

## Notes
- Theme switcher and content navigation remain available.
- The state snapshot reflects the current saved editor content at export time.
- Use this variant for public review, marketing, or early launch visibility when operator access should stay off the public surface.
- Windows SmartScreen may flag ZIPs downloaded from browsers. If blocked, right-click ZIP > Properties > Unblock, or use a different browser download method.`;
}

function prepareStaticZipFiles(files) {
  const disallowedExt = /\.(exe|bat|cmd|ps1|vbs|msi)$/i;
  const allowedPath = /^(index\.html|README\.md|[a-z0-9\-_/]+\.(css|js|html|md|png|jpg|jpeg|gif|webp|svg|avif))$/i;
  return (files || []).filter((file) => {
    const name = String(file?.name || "").replace(/\\/g, "/");
    if (!name || name.startsWith(".") || name.includes("..")) {
      return false;
    }
    if (disallowedExt.test(name)) {
      return false;
    }
    return allowedPath.test(name);
  });
}

function createZipBlob(files) {
  const encoder = new TextEncoder();
  const fileRecords = [];
  let offset = 0;

  files.forEach((file) => {
    const data = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
    const nameBytes = encoder.encode(file.name);
    const crc = crc32(data);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const view = new DataView(localHeader.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint32(14, crc, true);
    view.setUint32(18, data.length, true);
    view.setUint32(22, data.length, true);
    view.setUint16(26, nameBytes.length, true);
    view.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    const localChunk = new Uint8Array(localHeader.length + data.length);
    localChunk.set(localHeader, 0);
    localChunk.set(data, localHeader.length);

    fileRecords.push({
      nameBytes,
      crc,
      dataLength: data.length,
      localOffset: offset,
      localChunk,
    });
    offset += localChunk.length;
  });

  const centralChunks = [];
  let centralSize = 0;
  fileRecords.forEach((record) => {
    const centralHeader = new Uint8Array(46 + record.nameBytes.length);
    const view = new DataView(centralHeader.buffer);
    view.setUint32(0, 0x02014b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 20, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint16(14, 0, true);
    view.setUint32(16, record.crc, true);
    view.setUint32(20, record.dataLength, true);
    view.setUint32(24, record.dataLength, true);
    view.setUint16(28, record.nameBytes.length, true);
    view.setUint16(30, 0, true);
    view.setUint16(32, 0, true);
    view.setUint16(34, 0, true);
    view.setUint16(36, 0, true);
    view.setUint32(38, 0, true);
    view.setUint32(42, record.localOffset, true);
    centralHeader.set(record.nameBytes, 46);
    centralChunks.push(centralHeader);
    centralSize += centralHeader.length;
  });

  const endRecord = new Uint8Array(22);
  const endView = new DataView(endRecord.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, fileRecords.length, true);
  endView.setUint16(10, fileRecords.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);
  endView.setUint16(20, 0, true);

  const chunks = [...fileRecords.map((record) => record.localChunk), ...centralChunks, endRecord];
  return new Blob(chunks, { type: "application/zip" });
}

function crc32(data) {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i += 1) {
    crc ^= data[i];
    for (let j = 0; j < 8; j += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

async function fetchTextFromUrl(url) {
  if (!url) {
    return "";
  }
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.warn("Unable to fetch resource", error);
  }
  return await new Promise((resolve) => {
    try {
      const request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.onload = () => resolve(request.responseText || "");
      request.onerror = () => resolve("");
      request.send();
    } catch (error) {
      console.warn("Unable to read resource", error);
      resolve("");
    }
  });
}

async function getStylesheetText() {
  const stylesheet = document.querySelector('link[rel="stylesheet"]');
  const href = stylesheet?.getAttribute("href") || stylesheet?.href;
  if (href) {
    const resolved = new URL(href, window.location.href).toString();
    const fetched = await fetchTextFromUrl(resolved);
    if (fetched) {
      return fetched;
    }
  }
  let cssText = "";
  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      if (sheet.cssRules) {
        Array.from(sheet.cssRules).forEach((rule) => {
          cssText += `${rule.cssText}\n`;
        });
      }
    } catch (error) {
      console.warn("Unable to read stylesheet", error);
    }
  });
  return cssText;
}

async function getScriptText() {
  const scriptTag = document.querySelector('script[src$="app.js"]');
  const src = scriptTag?.getAttribute("src") || scriptTag?.src;
  if (!src) {
    return "";
  }
  const resolved = new URL(src, window.location.href).toString();
  return await fetchTextFromUrl(resolved);
}

function buildViewerBlock(block, sourceState) {
  if (block.type === "rules") {
    return `
      <section class="panel${block.title ? "" : " panel-no-title"}" id="${block.id}" data-title="${escapeHtml(block.title || "Information Box")}">
        ${block.title ? `<div class="panel-header"><h2>${escapeHtml(block.title)}</h2></div>` : ""}
        <div class="panel-body rules-grid">
          ${block.sections
            .map(
              (section) => `
            <div class="rule-card">
              <h3>${escapeHtml(section.title)}</h3>
              ${section.subtitle ? `<p class="rule-subtitle">${escapeHtml(section.subtitle)}</p>` : ""}
              <div class="rule-body">
                ${buildParagraphs(section.body)}
              </div>
              ${section.note ? `<div class="note-box">${escapeHtml(section.note)}</div>` : ""}
              ${buildRuleMediaHtml(section)}
            </div>
          `
            )
            .join("")}
        </div>
        ${buildBlockVideosHtml(block)}
      </section>
    `;
  }

  if (block.type === "flows") {
    const flowCards = (block.flows || [])
      .map((flow) => {
        const hasRows = (flow.rows || []).some((row) => row.rowTitle || row.rowContext || (row.elements || []).length);
        const hasMedia = Boolean(flow.imageSrc || (flow.videos || []).length);
        const hasExample = Boolean(flow.exampleTargetId);
        const hasTitle = Boolean(flow.title);
        if (!hasRows && !hasMedia && !hasExample && !hasTitle) {
          return "";
        }
        const flowImage = flow.imageSrc
          ? `<div class="flow-media-item"><img class="flow-image" src="${escapeHtml(flow.imageSrc)}" alt="${escapeHtml(flow.title ? `${flow.title} image` : "Example image")}" /></div>`
          : "";
        const flowVideos = buildInlineVideosHtml(flow, { panelPadding: false, singleColumn: true, fullWidth: true });
        const flowMedia = flowImage || flowVideos ? `<div class="flow-media">${flowImage}${flowVideos}</div>` : "";
        return `
          <div class="flow-card ${getVisibilityClass(flow.visibility)}">
            <div class="flow-content">
              <h3>${escapeHtml(flow.title)}</h3>
              ${flow.rows
                .map((row) => {
                  if (!row.rowTitle && !row.rowContext && !(row.elements || []).length) {
                    return "";
                  }
                  return `
                    <div class="flow-row-block">
                      ${row.rowTitle || row.rowContext ? `<div class="flow-row-meta">
                      ${row.rowTitle ? `<div class="flow-row-title">${escapeHtml(row.rowTitle)}</div>` : ""}
                      ${row.rowContext ? `<div class="flow-row-example">${escapeHtml(row.rowContext)}</div>` : ""}
                      </div>` : ""}
                      <div class="flow-row">
                      ${row.elements
                        .map((element, index) => {
                          if (element.type === "node") {
                            const roleClass =
                              element.role === "shotCaller"
                                ? "role-shot"
                                : element.role === "enemyTarget"
                                  ? "role-enemy"
                                  : "role-yourself";
                            const roleMeta = getRoleMeta(element.role, sourceState) || {};
                            const label = roleMeta.label || "Role";
                            const inlineStyles = getNodeStyles(element, roleMeta.color);
                            const next = row.elements[index + 1];
                            const autoArrow =
                              next && next.type === "node" ? '<span class="flow-arrow">→</span>' : "";
                            return `
                              <div class="flow-node-wrap">
                                <div class="flow-role-label"${roleMeta.color ? ` style="color:${escapeHtml(roleMeta.color)};"` : ""}>${escapeHtml(label)}</div>
                                <span class="flow-node ${roleClass}"${inlineStyles ? ` style="${inlineStyles}"` : ""}>${escapeHtml(element.text)}</span>
                              </div>
                            ${autoArrow}`;
                          }
                          if (element.type === "arrow") {
                            const arrowClass = element.kind === "time" ? "flow-arrow arrow-time" : "flow-arrow";
                            const arrowGlyph = element.kind === "time" ? "⏱→" : "→";
                            return `<span class="${arrowClass}">${arrowGlyph}</span>`;
                          }
                          if (element.type === "divider") {
                            return `<span class="flow-divider">${escapeHtml(element.text)}</span>`;
                          }
                          if (element.type === "note") {
                            return `<span class="flow-note">${escapeHtml(element.text)}</span>`;
                          }
                          return "";
                        })
                        .join("")}
                      </div>
                    </div>
                  `;
                })
                .join("")}
              ${flow.exampleTargetId ? `<a class="btn btn-ghost flow-example" href="#${escapeHtml(flow.exampleTargetId)}">${escapeHtml(flow.exampleLabel || "Example")}</a>` : ""}
            </div>
            ${flowMedia}
          </div>
        `;
      })
      .join("");
    return `
      <section class="panel" id="${block.id}" data-title="${escapeHtml(block.title || "Flow Box")}">
        <div class="panel-header">
          <h2>${escapeHtml(block.title)}</h2>
          ${block.contextText ? `<div class="block-context">${escapeHtml(block.contextText)}</div>` : ""}
        </div>
        <div class="panel-body flow-grid">
          ${flowCards}
        </div>
      </section>
    `;
  }

  if (block.type === "calloutGroup") {
    const groupCallouts = (sourceState.home.callouts || []).filter((callout) => callout.groupId === block.id);
    const cards = groupCallouts
      .map((callout) => {
        const calloutVideos = buildInlineVideosHtml(callout, { panelPadding: false, inCallout: true });
        const calloutImage = callout.imageSrc
          ? `<div class="callout-media"><img class="callout-image" src="${escapeHtml(callout.imageSrc)}" alt="${escapeHtml(callout.callName ? `${callout.callName} image` : "Element image")}" /></div>`
          : "";
        const bodyClass = calloutImage ? "callout-body has-media" : "callout-body";
        return `
          <div class="callout-card ${getVisibilityClass(callout.visibility)}">
            <div class="callout-header">
              <div class="callout-title">
                <span class="chevron">▸</span>
                <span>${escapeHtml(callout.callName)}</span>
              </div>
            </div>
            <div class="${bodyClass}">
              <div class="callout-expanded-title span-two">${escapeHtml(callout.callName || "Element")}</div>
              ${viewerField("Context", callout.context, "half")}
              ${viewerFieldMultiline("When to use", callout.whenToUse, "half")}
              ${viewerField("Meaning", callout.meaning, "half")}
              ${viewerField("Expected Outcome", callout.responseExpected, "span-two")}
              ${calloutVideos ? `<div class="span-two">${calloutVideos}</div>` : ""}
              ${calloutImage}
              ${viewerField("Notes", callout.notes, "span-two")}
              ${callout.importantNote ? `<div class="callout-note-box span-two">${escapeHtml(callout.importantNote)}</div>` : ""}
            </div>
          </div>
        `;
      })
      .join("");

    return `
      <section class="category-section callout-group-card" id="${block.id}" data-title="${escapeHtml(block.title || "Study Box")}">
        <div class="category-header">
          <div class="block-title-wrap">
            <h2>${escapeHtml(block.title)}</h2>
            ${block.contextText ? `<span class="block-context">${escapeHtml(block.contextText)}</span>` : ""}
          </div>
        </div>
        ${cards || '<div class="empty-state">No elements in this sub-box yet.</div>'}
        ${buildBlockVideosHtml(block, { panelPadding: false })}
      </section>
    `;
  }


  if (block.type === "orgShowcase") {
    const cards = (block.orgCards || [])
      .map((card) => {
        const achievements = (card.achievements || []).filter(Boolean).map((item) => `<span class="org-achievement-chip">${escapeHtml(item)}</span>`).join("");
        const logo = card.logoSrc ? `<div class="org-card-media"><img class="org-card-logo" src="${escapeHtml(card.logoSrc)}" alt="${escapeHtml(card.name || "Organization logo")}" /></div>` : "";
        const nameHtml = card.name ? `<h3>${escapeHtml(card.name)}</h3>` : "";
        const namelessClass = !card.name ? " org-card--nameless" : "";
        const links = [
          card.discordUrl ? `<a class="org-link-pill org-link-pill--discord" href="${escapeHtml(card.discordUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Discord"><span class="org-link-icon">${card.discordLogoSrc ? `<img class="org-link-logo" src="${escapeHtml(card.discordLogoSrc)}" alt="Discord logo" />` : getDefaultOrgLinkIcon("discord")}</span><span class="org-link-text">Discord</span></a>` : "",
          card.websiteUrl ? `<a class="org-link-pill org-link-pill--website" href="${escapeHtml(card.websiteUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Website"><span class="org-link-icon">↗</span><span class="org-link-text">Website</span></a>` : "",
          card.rsiUrl ? `<a class="org-link-pill org-link-pill--rsi" href="${escapeHtml(card.rsiUrl)}" target="_blank" rel="noopener noreferrer" aria-label="RSI"><span class="org-link-icon">${card.rsiLogoSrc ? `<img class="org-link-logo" src="${escapeHtml(card.rsiLogoSrc)}" alt="RSI logo" />` : getDefaultOrgLinkIcon("rsi")}</span><span class="org-link-text">RSI</span></a>` : "",
        ].join("");
        return `
          <article class="org-card${card.backgroundSrc ? " has-bg" : ""}${namelessClass}"${card.backgroundSrc ? ` style="--org-card-bg:url('${escapeHtml(card.backgroundSrc)}')"` : ""}>
            ${logo}
            <div class="org-card-head">
              ${card.classification ? `<div class="org-card-badge">${escapeHtml(card.classification)}</div>` : ""}
              ${nameHtml}
            </div>
            <div class="org-card-content">
              ${card.status ? `<div class="org-meta-chip">${escapeHtml(card.status)}</div>` : ""}
              ${card.fit ? `<div class="org-meta-chip org-meta-chip--fit">${escapeHtml(card.fit)}</div>` : ""}
              ${card.contactName || card.contactRole || card.contactHandle ? `<div class="org-card-contact span-two">${escapeHtml([card.contactName, card.contactRole, card.contactHandle].filter(Boolean).join(" • "))}</div>` : ""}
              ${card.mediaCaption ? `<div class="org-card-caption span-two">${escapeHtml(card.mediaCaption)}</div>` : ""}
              ${card.body ? `<div class="org-card-copy span-two">${formatMultilineHtml(card.body)}</div>` : ""}
              ${achievements ? `<div class="field span-two"><label>Achievements</label><div class="org-achievements-list">${achievements}</div></div>` : ""}
              ${card.notes ? `<div class="org-card-note span-two">${escapeHtml(card.notes)}</div>` : ""}
              ${links ? `<div class="org-card-links span-two">${links}</div>` : ""}
            </div>
          </article>
        `;
      })
      .join("");
    return `
      <section class="panel" id="${block.id}" data-title="${escapeHtml(block.title || "Organization Presentation")}">
        <div class="panel-header">
          <h2>${escapeHtml(block.title || "Organization Presentation")}</h2>
          ${block.intro ? `<div class="block-context">${escapeHtml(block.intro)}</div>` : ""}
        </div>
        <div class="panel-body org-showcase-box">
          <div class="org-showcase-grid">${cards || '<div class="empty-state">No organizations added yet.</div>'}</div>
        </div>
      </section>
    `;
  }

  if (block.type === "shipMeta") {
    const legacyItem = {
      id: createId("ship-meta-item"),
      shipName: typeof block.shipName === "string" ? block.shipName : "",
      infoUrl: "",
      backgroundSrc: "",
      activeMode: "premium",
      modes: {
        premium: {
          components: Array.isArray(block.components) ? block.components.map((entry, idx) => ({
            id: entry?.id || createId("ship-component"),
            key: ["weapon", "shield", "powerplant", "cooler"][idx] || "weapon",
            component: typeof entry?.component === "string" ? entry.component : "",
            quantity: Number(entry?.quantity) > 0 ? Number(entry.quantity) : 1,
            whereToBuy: typeof entry?.notes === "string" ? entry.notes : "",
          })) : [],
          signatures: {
            em: block.signatures?.em || "",
            ir: block.signatures?.ir || "",
            crossSection: [block.signatures?.crossSection?.front, block.signatures?.crossSection?.side, block.signatures?.crossSection?.top].filter(Boolean).join(" / "),
            sustainedDps: "",
            alphaDamage: "",
            shieldHp: "",
            armorHp: "",
            totalHp: "",
          },
          summary: typeof block.summary === "string" ? block.summary : "",
          lifeSupportOffRequired: false,
        },
        pu: {
          components: [],
          signatures: {},
          summary: "",
          lifeSupportOffRequired: false,
        },
      },
    };
    const metaItems = Array.isArray(block.metaItems) && block.metaItems.length ? block.metaItems : [legacyItem];
    const cards = metaItems
      .map((metaItem, metaIndex) => {
        const premium = metaItem?.modes?.premium || {};
        const pu = metaItem?.modes?.pu || premium;
        const activeMode = metaItem?.activeMode === "pu" ? "pu" : "premium";
        const toSig = (mode) => mode?.signatures || {};
        const renderComponents = (mode) => (mode?.components || [])
          .map((entry) => {
            const quantity = Math.max(1, Number(entry?.quantity) || 1);
            const component = escapeHtml(entry?.component || "–");
            const whereToBuy = String(entry?.whereToBuy || "").trim();
            const whereContent = whereToBuy ? `<span class="ship-meta-where-view">${escapeHtml(whereToBuy)}</span>` : `<span class="ship-meta-where-view">–</span>`;
            return `<div class="ship-meta-component-row-compact"><div class="ship-meta-component-main"><span class="ship-icon">${escapeHtml(getShipMetaIcon(entry?.key))}</span><span class="ship-meta-qty">x${quantity}</span></div><span class="panel-title-input">${component}</span>${whereContent}</div>`;
          })
          .join("") || `<div class="empty-state">No components listed.</div>`;
        const renderModePanel = (modeName, modeData) => {
          const signatures = toSig(modeData);
          return `
            <div class="ship-meta-mode-panel${activeMode === modeName ? " is-active" : ""}" data-mode="${modeName}">
              <div class="ship-meta-components-list">
                <span class="ship-meta-find-label">Components</span>
                ${renderComponents(modeData)}
              </div>
              ${modeData?.lifeSupportOffRequired ? `<div class="ship-meta-inline-flag"><span class="ship-meta-ls-flag">${escapeHtml(getShipMetaIcon("lifeSupport"))} LS Off</span></div>` : ""}
              <div class="ship-meta-stats-title">Stats</div>
              <div class="ship-meta-signatures-compact">
                <div class="ship-meta-signature-cluster">
                  ${viewerField(`${getShipMetaIcon("em")} EM`, signatures.em)}
                  ${viewerField(`${getShipMetaIcon("ir")} IR`, signatures.ir)}
                  ${viewerField("CS", signatures.crossSection)}
                </div>
                <span class="ship-meta-v-sep"></span>
                <div class="ship-meta-signature-damage">
                  ${viewerField("DPS", signatures.sustainedDps)}
                  ${viewerField("Alpha", signatures.alphaDamage)}
                </div>
                <span class="ship-meta-v-sep"></span>
                <div class="ship-meta-signature-hp">
                  ${viewerField("Shield", signatures.shieldHp)}
                  ${viewerField("Armor", signatures.armorHp)}
                  ${viewerField("Total", signatures.totalHp)}
                </div>
              </div>
              ${viewerFieldMultiline("Meta summary", modeData?.summary, "span-two")}
            </div>
          `;
        };
        const infoUrl = String(metaItem?.infoUrl || "").trim();
        return `
          <article class="ship-meta-subbox${metaItem?.backgroundSrc ? " has-bg" : ""}"${metaItem?.backgroundSrc ? ` style="--ship-meta-bg: url('${escapeHtml(metaItem.backgroundSrc)}');"` : ""}>
            <div class="ship-meta-top-row">
              <div class="ship-meta-compact-title"><span>${escapeHtml(metaItem?.shipName || "Untitled")}</span></div>
              <div class="mode-toggle-buttons ship-mode-toggle" data-ship-mode-group="${metaIndex}">
                <button class="mode-btn${activeMode === "premium" ? " is-active" : ""}" type="button" data-mode="premium">Premium</button>
                <button class="mode-btn${activeMode === "pu" ? " is-active" : ""}" type="button" data-mode="pu">PU Buyable</button>
              </div>
              <a class="ship-meta-info-link${infoUrl ? "" : " is-disabled"}" href="${infoUrl ? escapeHtml(infoUrl) : "javascript:void(0)"}"${infoUrl ? ` target="_blank" rel="noopener noreferrer"` : ""}>More info ↗</a>
            </div>
            <div class="ship-meta-mode-content" data-ship-mode-content="${metaIndex}">
              ${renderModePanel("premium", premium)}
              ${renderModePanel("pu", pu)}
            </div>
          </article>
        `;
      })
      .join("");
    return `
      <section class="panel" id="${block.id}" data-title="${escapeHtml(block.title || "Ship Meta Box")}">
        <div class="panel-header"><h2>${escapeHtml(block.title || "Ship Meta Box")}</h2></div>
        <div class="panel-body ship-meta-box">
          <div class="ship-meta-subbox-grid">${cards}</div>
        </div>
      </section>
    `;
  }

  if (block.type === "video") {
    return `
      <section class="panel" id="${block.id}" data-title="${escapeHtml(block.title || "Video")}">
        <div class="panel-header">
          <h2>${escapeHtml(block.title || "Video")}</h2>
        </div>
        ${buildBlockVideosHtml(block, { showEmpty: true })}
      </section>
    `;
  }

  return "";
}

function buildParagraphs(value) {
  return String(value || "")
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => `<p>${escapeHtml(entry)}</p>`)
    .join("");
}

function buildRuleMediaHtml(section) {
  if (!section.mediaType || !section.mediaSrc) {
    return "";
  }
  if (section.mediaType === "image") {
    return `<div class="rule-media"><img class="flow-image rule-media-image" src="${escapeHtml(section.mediaSrc)}" alt="${escapeHtml(section.title ? `${section.title} media` : "Information media")}" /></div>`;
  }
  if (section.mediaType === "video") {
    return `<div class="rule-media"><video class="local-video" src="${escapeHtml(section.mediaSrc)}" controls></video></div>`;
  }
  if (section.mediaType === "youtube") {
    const embedUrl = toYoutubeEmbed(section.mediaSrc);
    return embedUrl ? `<div class="rule-media"><iframe class="youtube-frame" src="${escapeHtml(embedUrl)}" allowfullscreen></iframe></div>` : "";
  }
  return "";
}

function buildBlockVideosHtml(block, options = {}) {
  return buildInlineVideosHtml(block, options);
}

function buildInlineVideosHtml(target, options = {}) {
  const videos = target.videos || [];
  const panelClass = options.panelPadding === false ? "" : " panel-body";
  const contextClass = options.inCallout ? " callout-videos" : "";
  const fullWidthClass = options.fullWidth ? " video-full" : "";
  if (!videos.length && !options.showEmpty) {
    return "";
  }
  if (!videos.length && options.showEmpty) {
    return `<div class="block-videos${panelClass}${contextClass}${fullWidthClass}"><div class="empty-state">No video added yet.</div></div>`;
  }
  const gridClass = options.singleColumn || videos.length === 1 ? "video-grid single" : "video-grid";
  const items = videos
    .map((video) => {
      const title = video.title ? `<div class="video-title">${escapeHtml(video.title)}</div>` : "";
      const anchorId = getVideoAnchorId(video);
      if (video.type === "youtube") {
        const embedUrl = getYouTubeEmbedUrl(video.src || "");
        return embedUrl
          ? `<div class="video-card" id="${escapeHtml(anchorId)}">${title}<iframe class="youtube-frame" src="${escapeHtml(embedUrl)}" allowfullscreen></iframe></div>`
          : `<div class="video-card" id="${escapeHtml(anchorId)}">${title}<div class="empty-state">Invalid YouTube link.</div></div>`;
      }
      if (video.type === "local") {
        return `<div class="video-card" id="${escapeHtml(anchorId)}">${title}<video class="local-video" src="${escapeHtml(video.src)}" controls></video></div>`;
      }
      return "";
    })
    .join("");
  return `<div class="block-videos${panelClass}${contextClass}${fullWidthClass}"><div class="${gridClass}">${items}</div></div>`;
}

function getYouTubeEmbedUrl(url) {
  if (!url) {
    return "";
  }
  const trimmed = url.trim();
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{6,})/);
  const longMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{6,})/);
  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/);
  const id = (shortMatch && shortMatch[1]) || (longMatch && longMatch[1]) || (embedMatch && embedMatch[1]);
  return id ? `https://www.youtube.com/embed/${id}` : "";
}

function getRoleDefaultColor(role) {
  const roleMeta = getRoleMeta(role);
  if (roleMeta?.color) {
    return roleMeta.color;
  }
  if (role === "shotCaller") {
    return "#9e62ff";
  }
  if (role === "enemyTarget") {
    return "#ff6b6b";
  }
  return "#4cc3ff";
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  if (value.length !== 6) {
    return hex;
  }
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getNodeStyles(element, fallbackColor) {
  if (!element) {
    return "";
  }
  const color = fallbackColor;
  if (!color) {
    return "";
  }
  return `border-color: ${color}; background-color: ${hexToRgba(color, 0.18)};`;
}

function viewerField(label, value, className = "") {
  return `
    <div class="field${className ? ` ${className}` : ""}">
      <label>${escapeHtml(label)}</label>
      <div class="readonly">${escapeHtml(value || "–")}</div>
    </div>
  `;
}

function viewerFieldMultiline(label, value, className = "") {
  return `
    <div class="field${className ? ` ${className}` : ""}">
      <label>${escapeHtml(label)}</label>
      <div class="readonly">${formatMultilineHtml(value)}</div>
    </div>
  `;
}

function formatMultilineHtml(value) {
  const lines = String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  if (!lines.length) {
    return "–";
  }
  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


function renderBootWarnings() {
  const existing = document.getElementById("bootWarning");
  if (!stateLoadWarning) {
    if (existing) {
      existing.remove();
    }
    return;
  }
  const warning = existing || document.createElement("div");
  warning.id = "bootWarning";
  warning.className = "boot-warning";
  warning.textContent = stateLoadWarning;
  if (!existing) {
    document.body.prepend(warning);
  }
}

function showBootError(error) {
  const message = error instanceof Error ? error.message : String(error);
  const banner = document.createElement("div");
  banner.className = "boot-error";
  banner.innerHTML = `<strong>Boot error:</strong> ${escapeHtml(message)}`;
  document.body.prepend(banner);
}

function handleImport(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (Array.isArray(parsed)) {
        state = normalizeState(migrateLegacyCallouts(parsed));
      } else if (parsed && typeof parsed === "object") {
        state = normalizeState(parsed);
      } else {
        throw new Error("Invalid JSON format");
      }
      render();
    } catch (error) {
      alert("Import failed. Ensure the JSON is a valid editor export.");
      console.error(error);
    }
  };
  reader.readAsText(file);
}

if (adminToggle) {
  adminToggle.addEventListener("click", () => {
    toggleAdmin();
  });
}

document.addEventListener("click", closeStudyOverlaysOnOutsideClick);

window.addEventListener("resize", () => {
  updateScrollOffset();
  updateSharedIndicatorFromState();
});

try {
  setTheme(activeTheme);
  setViewMode(activeMode);
  syncPageFromHash();
  updateAdminUI();
} catch (error) {
  console.error("Boot error", error);
  showBootError(error);
}
