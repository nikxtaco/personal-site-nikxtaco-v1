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

// thumbnail stack order — optional `coverIndex` fronts a specific image
// (affects the listing thumbnail only; the post + lightbox keep `images` order)
const thumbOrder = (w) => {
  const imgs = w.images || [];
  if (typeof w.coverIndex === "number" && imgs[w.coverIndex]) {
    return [imgs[w.coverIndex], ...imgs.filter((_, i) => i !== w.coverIndex)].slice(0, 3);
  }
  return imgs.slice(0, 3);
};

export default function Writings({ entries = WRITINGS, showFilters = true, showAllLinks = false, backLabel = "← Back to writings" }) {
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);
  const [lightbox, setLightbox] = useState(null); // { images: [...], index: n }
  const postImagesRef = useRef(null);

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

  const openLightbox = (images, index = 0) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const lbStep = (e, dir) => {
    e.stopPropagation();
    setLightbox((l) =>
      l ? { ...l, index: (l.index + dir + l.images.length) % l.images.length } : l
    );
  };

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
          </div>
          <p className="writing_date">{openPost.date}</p>

          {openPost.body && <p className="writing_body">{openPost.body}</p>}

          {openPost.images && openPost.images.length > 0 && (
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
  // the blog (filter bar shown) hides research-only entries; the Research
  // section (no filter bar) keeps them
  const base = showFilters ? entries.filter((w) => !w.researchOnly) : entries;
  const shown = (filter === "All"
    ? base
    : base.filter((w) => w.type === filter)
  )
    .slice()
    .sort((a, b) => (b.sortDate || "").localeCompare(a.sortDate || ""));

  return (
    <div className="writings">
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
            if (hasLinks) {
              if (titleTarget) window.open(titleTarget.url, "_blank", "noopener,noreferrer");
            } else setOpenId(w.id);
          };
          return (
            <article className="writing_card" key={w.id}>
              <div className="writing_text">
                <div className="writing_head">
                  <h2 className="writing_title" onClick={openWriting} title="Open">
                    {w.title}
                  </h2>
                  {showFilters && <span className="writing_type">{w.type}</span>}
                </div>
                <p className="writing_date">{w.date}</p>
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
