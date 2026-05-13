# Project structure
- `/index.html` Homepage
- `/styles.css` Global styles
- `/app.js` Behaviour, analytics hooks, rendering
- `/data/*.json` Starter packs, tools, communities, FAQs
- `/<route>/index.html` Support-page templates
- `/assets/placeholders/` Placeholder visuals

## Placeholder asset map
- Hero visual: `assets/placeholders/hero-bg.(mp4|jpg)`
- Starter pack visuals: `assets/placeholders/starter-*.jpg`
- Tool icons: `assets/placeholders/tool-*.svg`
- Community cards/logos: `assets/placeholders/community-*.svg`

## TODO markers
Search for `TODO` to update:
- live outbound links
- patch/version label
- manual or dynamic pricing

## Accessibility checklist (implementation notes)
- Semantic landmarks (`header`, `main`, `footer`)
- Visible keyboard focus + skip link
- Sufficient contrast in dark mode
- Touch targets >= 44px on mobile CTAs
- FAQ uses native `details/summary`
- Toast uses `aria-live=polite`
