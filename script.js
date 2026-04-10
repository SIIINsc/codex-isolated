// Editable landing page configuration.
const config = {
  referralCode: "STAR-9BBJ-ZKJV",
  referralUrl: "https://www.robertsspaceindustries.com/enlist?referral=STAR-9BBJ-ZKJV",

  // Hero copy.
  heroHeadline: "New to Star Citizen? Start With the Bonus.",
  heroSubheadline:
    "Use the active referral code during account creation so your account is set up correctly from the start.",

  // Opportunity section copy.
  opportunityTitle: "Current Opportunity",
  opportunityText:
    "Star Citizen often runs free-fly access periods, referral activity, and onboarding incentives. Promotions shift over time, so setting your account up correctly before creating it is the smarter move.",

  // Quick-start starter pack recommendation.
  starterPack: {
    name: "Aurora MR / Mustang Alpha",
    description: "Best low-cost entry, fully playable, and easy to upgrade later.",
  },

  // Essential tools.
  tools: [
    {
      name: "Erkul",
      url: "https://www.erkul.games/live/calculator",
      description: "Ship loadouts, components, power, EM/IR",
    },
    {
      name: "SPViewer",
      url: "https://www.spviewer.eu/",
      description: "Ship stats, signatures, comparisons",
    },
  ],

  // PvP org cards. Add/edit orgs here.
  orgs: [
    { name: "Shadow Moses", description: "PvP focused" },
    { name: "Liberty Reapers", description: "Active group" },
    { name: "Avenger Squadron", description: "Strong PvP presence" },
    { name: "More coming", description: "Add more" },
  ],

  quickPath: [
    "Copy the referral code",
    "Create your RSI account",
    "Choose a starter pack",
    "Use Erkul and SPViewer to learn your ship",
    "Join a PvP org and start learning",
  ],

  faq: [
    {
      q: "What does the referral code do?",
      a: "It links your account creation to a referral entry so you are in position for referral bonus eligibility when applicable.",
    },
    {
      q: "Can I add it later?",
      a: "No. The referral code must be entered during account creation and is not typically added after signup.",
    },
    {
      q: "Do I need a subscription?",
      a: "No. A subscription is optional and not required to play.",
    },
    {
      q: "Do I need to buy a starter pack?",
      a: "In most cases, yes. A starter pack is the usual entry path for full gameplay access outside temporary events.",
    },
    {
      q: "Is Star Citizen finished?",
      a: "No. It is still in alpha and actively evolving, which means features can change and stability can vary.",
    },
  ],

  footerLinks: [
    { label: "Quick Start", href: "#quick-start" },
    { label: "FAQ", href: "#faq" },
    { label: "Create Account", href: "https://www.robertsspaceindustries.com/enlist?referral=STAR-9BBJ-ZKJV" },
  ],
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function renderConfig() {
  $$('[data-code-display]').forEach((el) => {
    el.textContent = config.referralCode;
  });

  $$('[data-referral-link]').forEach((el) => {
    el.setAttribute('href', config.referralUrl);
  });

  setText('[data-hero-headline]', config.heroHeadline);
  setText('[data-hero-subheadline]', config.heroSubheadline);
  setText('[data-opportunity-title]', config.opportunityTitle);
  setText('[data-opportunity-text]', config.opportunityText);
  setText('[data-starter-pack-name]', config.starterPack.name);
  setText('[data-starter-pack-description]', config.starterPack.description);

  const toolsRoot = $('[data-tools]');
  if (toolsRoot) {
    toolsRoot.innerHTML = config.tools
      .map(
        (tool) => `
        <a class="link-card" href="${tool.url}" target="_blank" rel="noopener noreferrer">
          <strong>${tool.name}</strong>
          <span>${tool.description}</span>
        </a>`
      )
      .join('');
  }

  const orgsRoot = $('[data-orgs]');
  if (orgsRoot) {
    orgsRoot.innerHTML = config.orgs
      .map(
        (org) => `
        <article class="org-card">
          <strong>${org.name}</strong>
          <span>${org.description}</span>
        </article>`
      )
      .join('');
  }

  const pathRoot = $('[data-quick-path]');
  if (pathRoot) {
    pathRoot.innerHTML = config.quickPath.map((step) => `<li>${step}</li>`).join('');
  }

  const faqRoot = $('[data-faq]');
  if (faqRoot) {
    faqRoot.innerHTML = config.faq
      .map(
        (item) => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>`
      )
      .join('');
  }

  const footerLinksRoot = $('[data-footer-links]');
  if (footerLinksRoot) {
    footerLinksRoot.innerHTML = config.footerLinks
      .map((link) => `<a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${link.label}</a>`)
      .join('');
  }
}

async function copyReferralCode(button) {
  try {
    await navigator.clipboard.writeText(config.referralCode);
    const original = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => {
      button.textContent = original;
    }, 1300);
  } catch {
    window.prompt('Copy your referral code:', config.referralCode);
  }
}

function setupCopyActions() {
  $$('[data-copy-btn]').forEach((button) => {
    button.addEventListener('click', () => copyReferralCode(button));
  });
}

function setupRevealAnimation() {
  const revealItems = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupCodeStatus() {
  const statusEl = $('[data-code-status]');
  if (!statusEl) return;

  const statuses = [
    'Initializing code sync...',
    'Validating referral endpoint...',
    'Assigning active access code...',
    'Code locked: STAR-9BBJ-ZKJV',
  ];

  let i = 0;
  const timer = setInterval(() => {
    statusEl.textContent = statuses[i];
    i += 1;
    if (i >= statuses.length) {
      clearInterval(timer);
    }
  }, 650);
}

renderConfig();
setupCopyActions();
setupRevealAnimation();
setupCodeStatus();
