// Editable configuration for this temporary front page.
const config = {
  siteName: 'spacecombat.gg',
  siteLabel: 'Temporary front page, Website is in building stage',

  referralCode: 'STAR-9BBJ-ZKJV',
  referralUrl: 'https://www.robertsspaceindustries.com/enlist?referral=STAR-9BBJ-ZKJV',

  defaultTheme: 'stanton',
  themes: [
    { key: 'grimex', label: 'Grimex' },
    { key: 'pyro', label: 'Pyro' },
    { key: 'stanton', label: 'Stanton' },
  ],

  // Hero copy.
  heroHeadline: 'Want to get into Star Citizen PvP? Start smart.',
  heroSubheadline:
    'This is a temporary front page while spacecombat.gg is being built into a full guided platform for Star Citizen PvP combat, meta, and doctrines.',

  // Conversion cards.
  benefits: [
    {
      title: 'Referral Step First',
      text: 'This should be done before you create the account, not after.',
    },
    {
      title: 'Bonus-Eligible Setup',
      text: 'Using a referral code places your signup in the right referral path.',
    },
    {
      title: 'Cleaner Onboarding',
      text: 'Handle account setup now so your first sessions are focused on learning.',
    },
    {
      title: 'Better Now Than Later',
      text: 'It is easier to do this immediately than to realize it was missed later.',
    },
  ],

  tools: [
    {
      name: 'Erkul',
      url: 'https://www.erkul.games/live/calculator',
      description: 'Ship loadouts, components, power, EM/IR',
    },
    {
      name: 'SPViewer',
      url: 'https://www.spviewer.eu/',
      description: 'Ship stats, signatures, comparisons',
    },
  ],

  quickPath: [
    'Copy the referral code',
    'Create your RSI account',
    'Choose a starter pack',
    'Learn your ship with Erkul and SPViewer',
    'Join a PvP group or community',
  ],

  orgs: [
    { name: 'BlightVeil', url: 'https://robertsspaceindustries.com/en/orgs/BVL' },
    { name: 'Avenger Squadron', url: 'https://robertsspaceindustries.com/en/orgs/AVSQN' },
    { name: '388', url: 'https://robertsspaceindustries.com/en/orgs/388' },
    { name: 'Shadow Moses', url: 'https://robertsspaceindustries.com/en/orgs/SHDWMSS' },
    { name: 'Sons of Ares', url: 'https://robertsspaceindustries.com/en/orgs/ARESXHWLR' },
    { name: 'Shadowfox', url: 'https://robertsspaceindustries.com/en/orgs/SHADOWFOX' },
  ],

  discords: [
    { name: 'SC_PVP', url: 'https://discord.gg/x9r3ajnVcb' },
    { name: 'Grimex', url: 'https://discord.gg/RJA6GPqjBG' },
    { name: 'PvP Academy', url: 'https://discord.gg/sS4YFyVPaU' },
  ],

  opportunityTitle: 'Current Opportunity',
  opportunityText:
    'Star Citizen regularly rotates events, free-fly windows, and referral activity. Getting your account setup right before creation keeps you ready for those windows instead of missing them.',

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
      q: 'Why use Erkul and SPViewer?',
      a: 'They help you compare ships, understand signatures, and build loadouts with far less guesswork.',
    },
    {
      q: 'Where do I find PvP players?',
      a: 'Use the org and Discord links on this page to connect with active combat-focused groups and learning communities.',
    },
  ],

  footerLinks: [
    { label: 'Quick Start', href: '#quick-start' },
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
  $('[data-opportunity-title]').textContent = config.opportunityTitle;
  $('[data-opportunity-text]').textContent = config.opportunityText;
}

function cardLink(item) {
  return `
    <a class="link-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <strong>${item.name}</strong>
      <span>${item.description}</span>
    </a>
  `;
}

function cardLinkMinimal(item) {
  return `
    <a class="link-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <strong>${item.name}</strong>
    </a>
  `;
}

function renderCollections() {
  $('[data-benefits]').innerHTML = config.benefits
    .map(
      (item) => `
      <article class="panel content-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `
    )
    .join('');

  $('[data-tools]').innerHTML = config.tools.map(cardLink).join('');
  $('[data-orgs]').innerHTML = config.orgs.map(cardLinkMinimal).join('');
  $('[data-discords]').innerHTML = config.discords.map(cardLinkMinimal).join('');

  $('[data-quick-path]').innerHTML = config.quickPath.map((step) => `<li>${step}</li>`).join('');

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

function setupThemeSelector() {
  const themeSelect = $('[data-theme-select]');
  if (!themeSelect) return;

  themeSelect.innerHTML = config.themes
    .map((theme) => `<option value="${theme.key}">${theme.label}</option>`)
    .join('');

  const savedTheme = localStorage.getItem('scgg-theme');
  const activeTheme = config.themes.some((theme) => theme.key === savedTheme) ? savedTheme : config.defaultTheme;

  document.body.setAttribute('data-theme', activeTheme);
  themeSelect.value = activeTheme;

  themeSelect.addEventListener('change', () => {
    const selected = themeSelect.value;
    document.body.setAttribute('data-theme', selected);
    localStorage.setItem('scgg-theme', selected);
  });
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
setupThemeSelector();
setupCopyButtons();
setupCodeStatus();
setupReveal();
