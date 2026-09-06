# Project notes for Claude

## Blog / Research posts — `src/DesktopView/HomeBlo/writingsData.js`

Every writing/research piece is an entry in the `WRITINGS` array. Each entry can carry:

- `date` — the creation / publish date (shown to readers), e.g. `"September 6, 2026"`.
- `updated` — the last-updated date, shown only for **running-list** posts.
- `running: true` — marks a post as an ongoing "running list" (e.g. "Oddments I've
  Conjured", "Look What I Found", "Blue Prince Visual Parallels…"). These display
  `date · last updated {updated} · {X min read}` in the listing and post header.
- `readMins` — optional override for the "X min read" estimate (used for external
  papers whose length can't be measured from on-site text).

### IMPORTANT — last-updated convention

**Whenever the user asks to change the content of a post, ask them whether to bump
that entry's `updated` date to today before finishing.** Do not change `updated`
silently, and don't skip asking — it's reader-facing on `running: true` posts.
Match the existing date format exactly (e.g. `"September 6, 2026"`).

This applies to any edit to a post's `body`, `afterBody`, image `note`s, `excerpt`,
title, or images.
