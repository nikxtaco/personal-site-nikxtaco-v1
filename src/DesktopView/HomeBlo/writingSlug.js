/*
 * Per-post URLs for on-site blog writings: /blog/<slug>, where <slug> is the
 * post's title slugified (e.g. "Look What I Found" -> "look-what-i-found").
 * Shared by Writings (URL sync) and the navigations (deep-link handling).
 */
export const BLOG_BASE = "/blog";

export const slugify = (s) =>
  (s || "")
    .toLowerCase()
    .trim()
    .replace(/['’`]/g, "")           // drop apostrophes so "giorno's" -> "giornos"
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")     // any run of non-alphanumerics -> a single dash
    .replace(/(^-|-$)/g, "");

// posts that render on-site: no external `link`/`links` (unless flagged alsoOnSite),
// and not WIP
export const isOnSite = (w) =>
  !!w && !w.underConstruction &&
  (w.alsoOnSite || (!w.link && !(w.links && w.links.length)));

export const postPath = (w) => `${BLOG_BASE}/${slugify(w.title)}`;

// resolve a /blog/<slug> pathname to a post id from the given entries, or null
export function postIdFromPath(pathname, entries) {
  const m = (pathname || "").match(/^\/blog\/([^/]+)\/?$/);
  if (!m) return null;
  const slug = m[1].toLowerCase();
  const w = (entries || []).find((e) => isOnSite(e) && slugify(e.title) === slug);
  return w ? w.id : null;
}
