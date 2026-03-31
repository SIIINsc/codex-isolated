# SpaceCombat.gg — product direction notes

## Why this product can matter
Research and community signal point to the same gap: Star Citizen players can find raw opinions, scattered stats, and drama, but they struggle to find a trusted PvP authority that combines doctrine, practical learning, curated org discovery, and interpreted meta.

## Confirmed audience pain points
- PvP knowledge is fragmented across Reddit, Spectrum, Discord, videos, and orgs.
- Newer or improving players struggle to find structured training and sparring pathways.
- Players want to know what is actually viable, not just what exists.
- Trust matters: people are skeptical of hidden agendas, fake authority, and generic stat-dump sites.
- Org discovery is weak: players want to know who is serious, who trains well, and who fits their style.

## Product implications
SpaceCombat.gg should keep moving toward:
- doctrine-first interpretation
- practical learning and drills
- curated recommendation layers
- repeat-visit value (briefings, updated recommendations, operator notes)
- visible trust boundaries between editorial recommendations and sponsored placements

## Strong page / feature directions
### 1. Recommended Organizations
Should eventually include:
- Sponsored Organization
- Org of the Month
- Recommended Organizations
- filters by style, training quality, seriousness, culture, PvP focus
- trust signals such as training structure, activity, leadership/accountability, and who the org is actually best for

Detailed implementation notes live in `RECOMMENDED-ORGS-PAGE-SPEC.md`.

### 2. Training modules
- practical drills
- common mistakes
- role-based execution
- ship / FPS scenario breakdowns

### 3. Meta with interpretation
- what actually matters now
- context-dependent viability
- bait / trap / overrated choices
- component and ship use cases

### 4. Return-value surfaces
- weekly or patch-cycle operator briefings
- concise meta shifts
- what changed and why it matters

## Business model guardrails
- Sponsored content must be clearly labeled.
- Sponsored visibility must never silently overwrite editorial recommendations.
- Trust is the moat; if trust dies, the product dies.

## Security / deployment guardrails
- Do not ship hardcoded public-facing default accounts or weak credentials.
- Do not pretend static client-side auth is real security for a public launch.
- Public `spacecombat.gg` deployment should use real server-side authentication and role checks for admin/operator access.
- Viewer mode, premium/operator access, and any future account creation flow should be designed as real hosted product features, not local convenience locks.

## Implementation stance
Do not bloat the prototype with random pages. Build toward these directions in ways that preserve the current structure and let the authority/business layer emerge intentionally.
