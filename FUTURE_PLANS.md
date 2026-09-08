# Future plans / backlog

Ideas parked for their own commits/PRs (not in the current branch's scope yet).

## 1. Per-visitor read/unread tracking (no login) — ✅ DONE
Implemented in `Writings.js` (blog listing): a `localStorage` helper
(`nikxtaco:writings-read`, try/catch-wrapped), a per-card "Mark read / ✓ Read"
toggle with a subtle dimmed treatment, auto-mark-as-read on opening a post, and
a "Hide read" pill in the filter bar. Per-browser/per-device; true cross-device
sync would still need accounts/a backend.

## 3. Dependency / build modernisation
`npm audit` shows ~158 advisories, all in the react-scripts 4 build toolchain
(dev/build-time only, not shipped). Fully clearing them means migrating to
react-scripts 5 or Vite — a deliberate breaking change, do on its own branch.

## 4. Full mobile port
Port everything (About, Projects light theme, Writings/blog, MusicPlayer, the
sketches gallery, spotlight, all copy/images) to `MobileView`. Deferred until
the desktop design is settled.
