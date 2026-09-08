import React, { useState, useRef, useEffect } from "react";
import "./writings.css";
import UseAnimations from "react-useanimations";
import lessWrongLogo from "../../img/lesswrong-mark.png";
import { WRITINGS, WRITING_FILTERS } from "./writingsData";

// link kinds -> icon + hover label for the icon row on entries with `links`
const ICON_FOR = { arxiv: "download", lesswrong: "bookmark", twitter: "twitter", paper: "copy" };
const LABEL_FOR = {
  arxiv: "Read on arXiv",
  lesswrong: "Read on LessWrong",
  twitter: "View on X",
  paper: "Read the paper",
  slides: "View the slides",
};

// LessWrong (real logo mark) and paper (a document glyph) have no
// react-useanimations icon; everything else uses the animated icon set
const LinkIcon = ({ kind, size }) => {
  if (kind === "lesswrong")
    return <img className="writing_lw_icon" src={lessWrongLogo} alt="LessWrong" style={{ height: size }} />;
  if (kind === "paper")
    return (
      <svg
        className="writing_paper_icon"
        viewBox="0 0 24 24"
        style={{ height: size, width: size }}
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <path d="M13 2v5h5" />
        <line x1="8" y1="13" x2="15" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </svg>
    );
  if (kind === "slides")
    return (
      <svg
        className="writing_slides_icon"
        viewBox="0 0 24 24"
        style={{ height: size, width: size }}
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M12 16v3" />
        <path d="M8.5 21l3.5-2 3.5 2" />
        <path d="M7.5 11l3 2.5 3-4 3 2.5" />
      </svg>
    );
  return (
    <UseAnimations
      animationKey={ICON_FOR[kind] || "bookmark"}
      size={size}
      style={{ color: "#1a1a1a", cursor: "pointer" }}
    />
  );
};

// images may be a plain import (string) or { src, pos, zoom } to control the
// thumbnail crop — pos = background-position, zoom = background-size (e.g. "180%")
const srcOf = (im) => (typeof im === "string" ? im : im.src);
const posOf = (im) => (typeof im === "object" && im && im.pos ? im.pos : "center");
const zoomOf = (im) => (typeof im === "object" && im && im.zoom ? im.zoom : "cover");

// estimate a reading time from a piece's on-site text (~200 wpm); an entry can
// override with `readMins` (useful for external papers whose length we can't see)
const stripHtml = (s) => (s || "").replace(/<[^>]+>/g, " ");
// meta line: creation date, "last updated" (running lists only), and read time
const metaLine = (w) => {
  const parts = [];
  if (w.date) parts.push(w.date);
  // only show "last updated" on running lists when it actually differs from the creation date
  if (w.running && w.updated && w.updated !== w.date) parts.push("last updated " + w.updated);
  parts.push(readingTime(w));
  return parts.filter(Boolean).join(" · ");
};

const readingTime = (w) => {
  if (typeof w.readMins === "number") return w.readMins + " min read";
  const parts = [w.body, w.afterBody];
  (w.images || []).forEach((im) => {
    if (typeof im === "object" && im && im.note) parts.push(im.note);
  });
  const words = stripHtml(parts.filter(Boolean).join(" ")).trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200)) + " min read";
};

// thumbnail stack order (listing only; the post + lightbox keep `images` order):
//   `stackOrder` — explicit array of image indices, else
//   `coverIndex`  — fronts a specific image, else the natural `images` order
const thumbOrder = (w) => {
  const imgs = w.images || [];
  if (Array.isArray(w.stackOrder)) {
    return w.stackOrder.map((i) => imgs[i]).filter(Boolean).slice(0, 3);
  }
  if (typeof w.coverIndex === "number" && imgs[w.coverIndex]) {
    return [imgs[w.coverIndex], ...imgs.filter((_, i) => i !== w.coverIndex)].slice(0, 3);
  }
  return imgs.slice(0, 3);
};

// per-visitor read/unread tracking, persisted in localStorage (no login, per-device)
const READ_KEY = "nikxtaco:writings-read";
const loadReadIds = () => {
  try { return new Set(JSON.parse(localStorage.getItem(READ_KEY) || "[]")); }
  catch (e) { return new Set(); }
};
const saveReadIds = (set) => {
  try { localStorage.setItem(READ_KEY, JSON.stringify([...set])); } catch (e) {}
};

export default function Writings({ entries = WRITINGS, showFilters = true, showAllLinks = false, backLabel = "← Back to writings", onOpenChange }) {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { images: [...], index: n }
  const postImagesRef = useRef(null);

  // read/unread state (blog listing only — the filter bar is where it lives)
  const trackRead = showFilters;
  const [readIds, setReadIds] = useState(loadReadIds);
  const [hideRead, setHideRead] = useState(false);
  const setRead = (id, read) => setReadIds((prev) => {
    const next = new Set(prev);
    if (read) next.add(id); else next.delete(id);
    saveReadIds(next);
    return next;
  });
  const toggleRead = (e, id) => { e.stopPropagation(); setRead(id, !readIds.has(id)); };

  // Justified image rows: each figure's flex-grow is set to its aspect ratio, so
  // a group of images shares its row at equal height and fills the text column;
  // each row finds its own height (a wide image cropped narrower makes its row
  // taller). A lone image is capped so it doesn't stretch to the full width.
  const LONE_CAP_VW = 18;
  useEffect(() => {
    if (!openId) return;
    const cont = postImagesRef.current;
    if (!cont) return;
    const size = (img) => {
      const fig = img.closest(".writing_post_fig");
      if (!fig || !img.naturalHeight) return;
      const ar = img.naturalWidth / img.naturalHeight;
      fig.style.flexGrow = ar.toFixed(4);
      // only a lone image is capped; images that share a row fill it fully
      fig.style.maxWidth =
        fig.dataset.lone === "1" ? (ar * LONE_CAP_VW).toFixed(2) + "vw" : "none";
    };
    cont.querySelectorAll("img").forEach((img) => {
      if (img.complete) size(img);
      else img.addEventListener("load", () => size(img), { once: true });
    });
  }, [openId]);

  // let the parent (e.g. the blog page) know when a post is open, so it can hide
  // its own listing header while reading
  useEffect(() => {
    if (onOpenChange) onOpenChange(!!openId);
  }, [openId, onOpenChange]);

  // opening an on-site post marks it read
  useEffect(() => {
    if (trackRead && openId) setRead(openId, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openId]);

  // spotlight search can ask this list to open a specific post by id
  useEffect(() => {
    const onOpen = (e) => {
      const id = e.detail && e.detail.id;
      if (id && entries.some((w) => w.id === id)) setOpenId(id);
    };
    window.addEventListener("spotlight-open-post", onOpen);
    return () => window.removeEventListener("spotlight-open-post", onOpen);
  }, [entries]);

  const openLightbox = (images, index = 0) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const lbStep = (e, dir) => {
    e.stopPropagation();
    setLightbox((l) =>
      l ? { ...l, index: (l.index + dir + l.images.length) % l.images.length } : l
    );
  };

  // keyboard: arrow keys navigate the open lightbox, Esc closes
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setLightbox((l) => (l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l));
      else if (e.key === "ArrowRight") setLightbox((l) => (l ? { ...l, index: (l.index + 1) % l.images.length } : l));
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const lightboxEl = lightbox && (
    <div className="lb_overlay" onClick={closeLightbox}>
      <button className="lb_close" onClick={closeLightbox} aria-label="Close">
        ×
      </button>
      {lightbox.images.length > 1 && (
        <button
          className="lb_arrow lb_prev"
          onClick={(e) => lbStep(e, -1)}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}
      <img
        className="lb_img"
        src={srcOf(lightbox.images[lightbox.index])}
        alt=""
        onClick={(e) => e.stopPropagation()}
      />
      {lightbox.images.length > 1 && (
        <button
          className="lb_arrow lb_next"
          onClick={(e) => lbStep(e, 1)}
          aria-label="Next image"
        >
          ›
        </button>
      )}
      {lightbox.images.length > 1 && (
        <div className="lb_count">
          {lightbox.index + 1} / {lightbox.images.length}
        </div>
      )}
    </div>
  );

  const openPost = openId ? entries.find((w) => w.id === openId) : null;

  // ---- Single post view ----
  if (openPost) {
    // a "row group" runs from a note-bearing image to before the next one; an
    // image alone in its group is "lone" (gets the max-width cap)
    const postImgs = openPost.images || [];
    const isNote = (im) => typeof im === "object" && im && im.note;
    const isLone = (i) => {
      const startsGroup = i === 0 || isNote(postImgs[i]);
      const nextStarts = i === postImgs.length - 1 || isNote(postImgs[i + 1]);
      return startsGroup && nextStarts;
    };
    return (
      <div className="writings">
        <button className="writing_back" onClick={() => setOpenId(null)}>
          {backLabel}
        </button>

        <article className="writing_post">
          <div className="writing_head">
            <h2 className="writing_post_title">{openPost.title}</h2>
            <span className="writing_type">{openPost.type}</span>
            {trackRead && (
              <button
                className={"writing_readmark" + (readIds.has(openPost.id) ? " is-read" : "")}
                onClick={(e) => toggleRead(e, openPost.id)}
                title={readIds.has(openPost.id) ? "Mark as unread" : "Mark as read"}
              >
                {readIds.has(openPost.id) ? "✓ Read" : "Mark read"}
              </button>
            )}
          </div>
          <p className="writing_date">{metaLine(openPost)}</p>

          {openPost.body && (
            <p className="writing_body" dangerouslySetInnerHTML={{ __html: openPost.body }} />
          )}

          {openPost.images && openPost.images.length > 0 && openPost.layout === "collage" && (
            <div className="writing_collage">
              {/* deterministic 2-column split (first half left, rest right) so the
                  masonry never reflows/overlaps across viewports */}
              {[0, 1].map((col) => {
                const half = Math.ceil(openPost.images.length / 2);
                return (
                  <div className="writing_collage_col" key={col}>
                    {openPost.images
                      .map((im, i) => ({ im, i }))
                      .filter(({ i }) => (i < half ? 0 : 1) === col)
                      .map(({ im, i }) => (
                        <figure
                          className="writing_collage_card"
                          key={i}
                          onClick={() => openLightbox(openPost.images, i)}
                        >
                          <img src={srcOf(im)} alt={`${openPost.title} ${i + 1}`} />
                          {typeof im === "object" && im.note && (
                            <figcaption
                              className="writing_collage_cap"
                              dangerouslySetInnerHTML={{ __html: im.note }}
                            />
                          )}
                        </figure>
                      ))}
                  </div>
                );
              })}
            </div>
          )}

          {openPost.images && openPost.images.length > 0 && openPost.layout === "stack" && (
            <div className="writing_stackview">
              {openPost.images.map((im, i) => (
                <figure className="writing_stackview_fig" key={i}>
                  <img
                    src={srcOf(im)}
                    alt={`${openPost.title} ${i + 1}`}
                    onClick={() => openLightbox(openPost.images, i)}
                  />
                  {typeof im === "object" && im.note && (
                    <figcaption
                      className="writing_stackview_cap"
                      dangerouslySetInnerHTML={{ __html: im.note }}
                    />
                  )}
                </figure>
              ))}
            </div>
          )}

          {openPost.images && openPost.images.length > 0 && openPost.layout !== "collage" && openPost.layout !== "stack" && (
            <div className="writing_post_images" ref={postImagesRef}>
              {openPost.images.map((im, i) => (
                <React.Fragment key={i}>
                  {typeof im === "object" && im.note && (
                    <p
                      className="writing_body writing_post_note"
                      dangerouslySetInnerHTML={{ __html: im.note }}
                    />
                  )}
                  <figure className="writing_post_fig" data-lone={isLone(i) ? "1" : "0"}>
                    <img
                      src={srcOf(im)}
                      alt={`${openPost.title} ${i + 1}`}
                      onClick={() => openLightbox(openPost.images, i)}
                    />
                  </figure>
                </React.Fragment>
              ))}
            </div>
          )}

          {openPost.afterBody && (
            <p
              className="writing_body writing_afterbody"
              dangerouslySetInnerHTML={{ __html: openPost.afterBody }}
            />
          )}

          {openPost.link && (
            <a
              className="writing_link"
              href={openPost.link}
              target="_blank"
              rel="noreferrer"
            >
              Read the full piece ↗
            </a>
          )}
        </article>

        {lightboxEl}
      </div>
    );
  }

  // ---- Listing view ----
  // the blog (filter bar shown) omits research entirely — it's fully covered by
  // the Research section; that section (no filter bar) keeps everything
  const base = showFilters ? entries.filter((w) => w.type !== "Research" && !w.researchOnly) : entries;
  // sort by last activity: the `updated` (last-updated) date if present, else the
  // creation `sortDate` — newest first
  const sortTime = (w) => Date.parse(w.updated || w.sortDate || "") || 0;
  const typesOf = (w) => w.types || [w.type];
  let shown = (filter === "All"
    ? base
    : base.filter((w) => typesOf(w).includes(filter))
  )
    .slice()
    .sort((a, b) => sortTime(b) - sortTime(a));
  if (trackRead && hideRead) shown = shown.filter((w) => !readIds.has(w.id));
  const readCount = trackRead ? base.filter((w) => readIds.has(w.id)).length : 0;

  return (
    <div className={showFilters ? "writings writings_blog" : "writings"}>
      {showFilters && (
        <div className="writings_filters">
          {WRITING_FILTERS.map((f) => (
            <button
              key={f}
              className={f === filter ? "writings_filter active" : "writings_filter"}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
          {readCount > 0 && (
            <button
              className={"writings_filter writings_filter_read" + (hideRead ? " active" : "")}
              onClick={() => setHideRead((v) => !v)}
              title={hideRead ? "Show all posts" : "Hide posts you've already opened"}
            >
              {hideRead ? "Showing unread" : "Hide read"}
            </button>
          )}
        </div>
      )}

      <div className="writings_list">
        {shown.length === 0 && (
          <p className="writings_empty">Nothing here yet — more coming soon!</p>
        )}

        {shown.map((w) => {
          const links = w.links || [];
          const hasLinks = links.length > 0;
          // blog listing shows only the LessWrong link; research shows them all
          const visibleLinks = showAllLinks ? links : links.filter((l) => l.kind === "lesswrong");
          const primary = links.find((l) => l.kind === "lesswrong") || links[0];
          const pick = (order) => order.map((k) => links.find((l) => l.kind === k)).find(Boolean);
          // title click: research prefers the arXiv paper, then LessWrong, then X;
          // the blog listing just opens the LessWrong cross-post
          const titleTarget = showAllLinks
            ? pick(["arxiv", "lesswrong", "twitter"]) || links[0]
            : primary;
          const openWriting = () => {
            if (trackRead) setRead(w.id, true);
            if (hasLinks) {
              if (titleTarget) window.open(titleTarget.url, "_blank", "noopener,noreferrer");
            } else setOpenId(w.id);
          };
          return (
            <article className={"writing_card" + (trackRead && readIds.has(w.id) ? " writing_card_read" : "")} id={"card-" + w.id} key={w.id}>
              <div className="writing_text">
                <div className="writing_head">
                  <h2 className="writing_title" onClick={openWriting} title="Open">
                    {w.title}
                  </h2>
                  {showFilters && <span className="writing_type">{w.type}</span>}
                  {trackRead && (
                    <button
                      className={"writing_readmark" + (readIds.has(w.id) ? " is-read" : "")}
                      onClick={(e) => toggleRead(e, w.id)}
                      title={readIds.has(w.id) ? "Mark as unread" : "Mark as read"}
                    >
                      {readIds.has(w.id) ? "✓ Read" : "Mark read"}
                    </button>
                  )}
                </div>
                <p className="writing_date">{metaLine(w)}</p>
                <p className="writing_excerpt">{w.excerpt}</p>

                {hasLinks ? (
                  showAllLinks ? (
                    <div className="writing_links">
                      {visibleLinks.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          title={LABEL_FOR[l.kind] || "Open link"}
                        >
                          <LinkIcon kind={l.kind} size={"2.8vmin"} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    primary && (
                      <a
                        className="writing_source_link"
                        href={primary.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{LABEL_FOR[primary.kind] || "Read the full piece"}</span>
                        <LinkIcon kind={primary.kind} size={"2.4vmin"} />
                      </a>
                    )
                  )
                ) : (
                  <button className="writing_readmore" onClick={openWriting}>
                    Read on this site →
                  </button>
                )}
              </div>

              {w.images && w.images.length > 0 && (
                <div
                  className="writing_stack"
                  onClick={() => openLightbox(w.images, typeof w.coverIndex === "number" ? w.coverIndex : 0)}
                  title="View images"
                >
                  {thumbOrder(w).map((im, i) => (
                    <div
                      key={i}
                      className={`writing_stack_img stack_${i}`}
                      style={{
                        backgroundImage: `url(${srcOf(im)})`,
                        backgroundSize: zoomOf(im),
                        backgroundPosition: posOf(im),
                      }}
                    />
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {lightboxEl}
    </div>
  );
}
