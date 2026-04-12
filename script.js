// Editable configuration for this temporary front page.
const config = {
  siteName: 'spacecombat.gg',
  siteLabel: 'Full Star Citizen PvP guide under construction, coming soon.',

  referralCode: 'STAR-9BBJ-ZKJV',
  referralUrl: 'https://www.robertsspaceindustries.com/enlist?referral=STAR-9BBJ-ZKJV',

  // Hero copy.
  heroHeadline: 'Want to get into Star Citizen PvP? Start smart.',
  heroSubheadline: 'Use the referral step before account creation, then follow the action path below.',

  onboardingIntro:
    'Using the referral code first keeps your account setup in the correct path before signup. Follow these steps in order for the cleanest start.',

  onboardingSteps: [
    {
      title: 'Create account',
      url: 'https://robertsspaceindustries.com/en/enlist?jumpto=%2Fen%2Fstar-citizen%2Fplay-star-citizen',
      cta: 'Open page',
    },
    {
      title: 'Get a starter package',
      url: 'https://robertsspaceindustries.com/en/store/pledge/browse/game-packages',
      cta: 'Visit page',
    },
    {
      title: 'Join active community and find the right organisation for you',
      note: 'Do this after the first two steps',
    },
    {
      title: 'Join an organisation',
      url: 'https://robertsspaceindustries.com/en/community/orgs',
      cta: 'Continue',
    },
  ],

  toolsIntro:
    'Use these sites to learn ships, compare data, track economy, and avoid wasting money on the wrong upgrades.',

  recommendedSites: {
    featured: [
      {
        name: 'Erkul',
        url: 'https://www.erkul.games/live/calculator',
        description: 'Ship loadouts, components, power, and EM/IR tuning for practical combat setups.',
      },
      {
        name: 'SPViewer',
        url: 'https://www.spviewer.eu/',
        description: 'Clean ship stats, signatures, and comparisons to choose the right platform faster.',
      },
    ],
    economy: [
      {
        name: 'Star Citizen Mining Helper Tool',
        url: 'https://regolith.rocks/',
        description: 'Mining helper and resource planning across ores, refinement, and route choices.',
      },
      {
        name: 'Star Citizen aUEC Trading Platform',
        url: 'https://uexcorp.space/',
        description: 'Trading, commodities, routes, and economy tools for efficient earning runs.',
      },
      {
        name: 'Star Citizen Money Saving Guide and CCU Game',
        url: 'https://ccugame.app/your-items/fleet',
        description: 'Money-saving fleet strategy and CCU planning before buying ships.',
      },
    ],
    reference: [
      {
        name: 'Star Citizen Wiki',
        url: 'https://starcitizen.tools/',
        description: 'General game reference for systems, ships, locations, and mechanics.',
      },
    ],
  },

  communityIntro:
    'Find active players, PvP communities, official channels, and organisations to run with regularly.',

  communityLinks: [
    { name: 'SC_PVP', url: 'https://discord.gg/x9r3ajnVcb' },
    { name: 'Grimex', url: 'https://discord.gg/RJA6GPqjBG' },
    { name: 'PvP Academy', url: 'https://discord.gg/sS4YFyVPaU' },
    { name: 'Star Citizen Official Discord', url: 'https://discord.gg/starcitizen' },
    { name: 'Star Citizen Pipe Line and Front Line Info', url: 'https://discord.gg/nfYaXDhj' },
    { name: 'Star Citizen Esports Community', url: 'https://discord.gg/atmoesports' },
  ],

  whyCards: [
    {
      title: 'Big-Picture Space Sim',
      text: 'An ambitious multiplayer universe with ship combat, missions, exploration, trading, and player-driven goals.',
    },
    {
      title: 'Start Small, Grow Later',
      text: 'A basic starter pack is enough to begin learning core systems, then you can scale up as you gain experience.',
    },
    {
      title: 'Alpha Reality',
      text: 'Star Citizen is still in alpha. Expect occasional bugs, instability, and frequent iteration as the live universe evolves.',
    },
  ],

  faq: [
    {
      q: 'What does the referral code do?',
      a: 'It tags your account creation to a referral entry and can make you bonus-eligible when referral campaigns are active.',
    },
    {
      q: 'Can I add it later?',
      a: 'Usually no. Enter it before completing account creation.',
    },
    {
      q: 'Do I need a subscription?',
      a: 'No. A subscription is optional and not required to play.',
    },
    {
      q: 'Do I need to buy a starter pack?',
      a: 'Yes, in normal conditions a starter pack is the standard way to access gameplay outside temporary events.',
    },
    {
      q: 'Is Star Citizen finished?',
      a: 'No, it is still in alpha and actively evolving.',
    },
    {
      q: 'Why use these external tools?',
      a: 'They help with build planning, ship comparisons, economy routes, and faster decisions with less guesswork.',
    },
    {
      q: 'Where do I find PvP players?',
      a: 'Use the community links on this page to connect with active combat-focused groups and learning communities.',
    },
  ],

  footerLinks: [
    { label: 'Quick Start', href: '#quick-start' },
    { label: 'Tools', href: '#tools' },
    { label: 'Community', href: '#community' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Create RSI Account', href: 'https://www.robertsspaceindustries.com/enlist?referral=STAR-9BBJ-ZKJV' },
  ],
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function renderStaticText() {
  $$('[data-site-name]').forEach((el) => (el.textContent = config.siteName));
  const label = $('[data-site-label]');
  if (label) label.textContent = config.siteLabel;

  $$('[data-code-display]').forEach((el) => (el.textContent = config.referralCode));
  $$('[data-referral-link]').forEach((el) => el.setAttribute('href', config.referralUrl));

  $('[data-hero-headline]').textContent = config.heroHeadline;
  $('[data-hero-subheadline]').textContent = config.heroSubheadline;
  $('[data-onboarding-intro]').textContent = config.onboardingIntro;
  $('[data-tools-intro]').textContent = config.toolsIntro;
  $('[data-community-intro]').textContent = config.communityIntro;
}

function toolCard(item, featured = false) {
  return `
    <a class="link-card ${featured ? 'link-card--featured' : ''}" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <strong>${item.name}</strong>
      <span>${item.description}</span>
    </a>
  `;
}

function communityCard(item) {
  return `
    <a class="link-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <strong>${item.name}</strong>
    </a>
  `;
}

function onboardingCard(step, index) {
  const hint = step.url
    ? `<span class="step-card__hint">${step.cta || 'Open page'}</span>`
    : `<span class="step-card__hint step-card__hint--note">${step.note || 'Do this after the first two steps'}</span>`;

  const body = `
    <span class="step-card__index">Step ${index + 1}</span>
    <span class="step-card__title">${step.title}</span>
    ${hint}
  `;

  if (step.url) {
    return `
      <a class="step-card" href="${step.url}" target="_blank" rel="noopener noreferrer">
        ${body}
      </a>
    `;
  }

  return `
    <article class="step-card" aria-label="Step ${index + 1}">
      ${body}
    </article>
  `;
}

function renderCollections() {
  $('[data-onboarding-steps]').innerHTML = config.onboardingSteps.map(onboardingCard).join('');
  $('[data-sites-featured]').innerHTML = config.recommendedSites.featured.map((item) => toolCard(item, true)).join('');
  $('[data-sites-economy]').innerHTML = config.recommendedSites.economy.map((item) => toolCard(item)).join('');
  $('[data-sites-reference]').innerHTML = config.recommendedSites.reference.map((item) => toolCard(item)).join('');
  $('[data-community-links]').innerHTML = config.communityLinks.map(communityCard).join('');

  $('[data-why-cards]').innerHTML = config.whyCards
    .map(
      (item) => `
      <article class="panel content-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
    )
    .join('');

  $('[data-faq]').innerHTML = config.faq
    .map(
      (item) => `
      <details>
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `
    )
    .join('');

  $('[data-footer-links]').innerHTML = config.footerLinks
    .map((link) => {
      const attrs = link.href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${link.href}" ${attrs}>${link.label}</a>`;
    })
    .join('');
}

async function copyCode(button) {
  const initialText = button.textContent;
  try {
    await navigator.clipboard.writeText(config.referralCode);
    button.textContent = 'Copied';
  } catch {
    window.prompt('Copy this referral code:', config.referralCode);
    button.textContent = 'Manual Copy';
  }
  setTimeout(() => {
    button.textContent = initialText;
  }, 1200);
}

function setupCopyButtons() {
  $$('[data-copy-btn]').forEach((btn) => {
    btn.addEventListener('click', () => copyCode(btn));
  });
}

function setupCodeStatus() {
  const status = $('[data-code-status]');
  if (!status) return;

  const steps = [
    'Syncing access assignment...',
    'Validating referral endpoint...',
    'Applying active access code...',
    `Active access code: ${config.referralCode}`,
  ];

  let i = 0;
  const timer = setInterval(() => {
    status.textContent = steps[i];
    i += 1;
    if (i >= steps.length) clearInterval(timer);
  }, 620);
}

function setupReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
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
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

renderStaticText();
renderCollections();
setupCopyButtons();
setupCodeStatus();
setupReveal();
