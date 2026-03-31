# SpaceCombat.gg deployment security notes

## Important truth
The current static build can support:
- local editing
- local/offline admin convenience
- limited private sharing
- a safer public read-only viewer build

It cannot safely provide real public admin authentication by itself, because client-side credentials and auth logic are inspectable.

## Safe deployment stance
### Safer now
- Public read-only viewer build
- No client-shipped admin credentials
- No weak default accounts
- Real admin/editor access kept offline or behind a proper backend

### Not safe enough for real public admin
- Client-side credential gates
- Hardcoded or injected browser-readable admin credentials
- Treating localStorage auth as production security

## For real public `spacecombat.gg`
Recommended future deployment model:
1. Public viewer build for all visitors
2. Separate admin/operator route behind real server-side auth
3. Strong passwords + MFA for operator accounts
4. Rate limiting and lockout on auth endpoints
5. Audit logging for admin actions
6. Separate editorial/operator roles from future premium/member roles
7. HTTPS-only deployment behind a reputable host/CDN

## Product implication
Until real hosted auth exists, the honest public posture is:
- launch the public-facing viewer experience
- keep editing/operator control off the public static surface
- never fake security with inspectable client-side passwords
