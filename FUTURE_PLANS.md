# Future plans / backlog

Ideas parked for their own commits/PRs (not in the current branch's scope yet).

## 1. Per-visitor read/unread tracking (no login)
Let each visitor mark posts read/unread and filter by it, using `localStorage`
(per-browser/per-device; resets on clearing site data — true cross-device sync
would need accounts/a backend).
- Small `localStorage` helper (wrapped in try/catch).
- "Mark as read/unread" toggle per post + subtle read treatment (dim or ✓).
- A "Read/Unread" (or "hide read") pill in the Writings filter bar.
- Optional: auto-mark-as-read when a post is opened.
- Lives in `Writings.js` + a small util; no new dependencies. ~30–45 min.

## 3. Dependency / build modernisation
`npm audit` shows ~158 advisories, all in the react-scripts 4 build toolchain
(dev/build-time only, not shipped). Fully clearing them means migrating to
react-scripts 5 or Vite — a deliberate breaking change, do on its own branch.

## 4. Full mobile port
Port everything (About, Projects light theme, Writings/blog, MusicPlayer, the
sketches gallery, spotlight, all copy/images) to `MobileView`. Deferred until
the desktop design is settled.
