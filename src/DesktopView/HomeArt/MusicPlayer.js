import React, { useRef, useEffect, useState, useCallback } from "react";
import "./musicplayer.css";
import { useMusic } from "../../MusicContext";

// a note may contain an <a> link; type the plain text, then reveal the HTML
const stripTags = (s) => (s || "").replace(/<[^>]+>/g, "");

/*
 * Keyboard-page music player UI. Audio engine + state live in MusicContext
 * (shared with the global now-playing bar). The tracklist's max-height is
 * measured from the card beside it so the two boxes match, and it scrolls.
 *
 * showNotes (DESKTOP ONLY — never passed on mobile): hovering a tracklist row
 * that has a note (see keyboardNotes.js) reveals a small box up in the blank
 * space beside the "Keyboard Covers" heading, connected to the row by an
 * animated arrow, that types out the note.
 */
export default function MusicPlayer({ showNotes = false }) {
  const {
    TRACKS, index, playing, position, duration, artwork, permalinks,
    SOUNDCLOUD_PROFILE, fmt, togglePlay, next, prev, loadTrack, seekTo,
  } = useMusic();

  const listRef = useRef(null);
  const cardRef = useRef(null);
  const areaRef = useRef(null);
  const noteRef = useRef(null);
  const rowRefs = useRef({});

  // the note is "sticky": it stays until another track with a note replaces it,
  // or the user clicks outside it / presses Escape (so its links stay clickable)
  const openNote = (i) => setHovered(i);

  const [hovered, setHovered] = useState(null);     // index of the hovered row, or null
  const [typed, setTyped] = useState("");           // typewriter output
  const [arrow, setArrow] = useState(null);         // {x1,y1,x2,y2} in area-local px

  const noteHtml = hovered != null && TRACKS[hovered] ? TRACKS[hovered].note : "";
  const notePlain = stripTags(noteHtml);
  const noteOpen = showNotes && hovered != null && !!noteHtml;

  // match the tracklist's height to the card beside it, then it scrolls. The
  // card must not stretch to the (taller) list or we'd measure the wrong height
  // — .mp_card is align-self:flex-start in CSS, so its height stays natural.
  useEffect(() => {
    const sync = () => {
      const list = listRef.current, card = cardRef.current;
      if (!list || !card) return;
      list.style.maxHeight = card.offsetHeight + "px";
    };
    sync();
    window.addEventListener("resize", sync);
    let ro;
    if (typeof ResizeObserver !== "undefined" && cardRef.current) {
      ro = new ResizeObserver(sync);
      ro.observe(cardRef.current);
    }
    const t = setTimeout(sync, 400); // after artwork/fonts settle
    return () => { window.removeEventListener("resize", sync); if (ro) ro.disconnect(); clearTimeout(t); };
  }, []);

  // position the connector arrow: exit the row to the RIGHT, arc up the right
  // gutter (never across the tracklist), and come into the note box from below.
  const computeArrow = useCallback(() => {
    if (!areaRef.current || !noteRef.current || hovered == null) return;
    const row = rowRefs.current[hovered];
    if (!row) return;
    const c = areaRef.current.getBoundingClientRect();
    // lift the box up near the top of the details section (not touching it)
    const section = areaRef.current.closest(".music_container");
    if (section) {
      const secTop = section.getBoundingClientRect().top;
      noteRef.current.style.bottom = "auto";
      noteRef.current.style.top = ((secTop - c.top) + window.innerHeight * 0.05) + "px";
    }
    const r = row.getBoundingClientRect();
    const n = noteRef.current.getBoundingClientRect();
    const x1 = r.right - c.left;                 // row's right edge
    const y1 = r.top + r.height / 2 - c.top;     // row's vertical middle
    const x2 = n.right - c.left;                 // touch the box's right edge
    const y2 = n.top + n.height / 2 - c.top;     // at the box's vertical middle
    const bulge = Math.max(70, c.width * 0.16);  // how far right it arcs
    // cubic that leaves the row rightward and enters the box rightward, so the
    // whole curve stays at/right of the tracklist edge
    const d = `M ${x1} ${y1} C ${x1 + bulge} ${y1}, ${x2 + bulge} ${y2}, ${x2} ${y2}`;
    setArrow({ d, x1, y1 });
  }, [hovered]);

  // (re)compute the arrow + run the typewriter whenever the hovered note changes
  useEffect(() => {
    if (!noteOpen) { setTyped(""); setArrow(null); return; }
    let raf = requestAnimationFrame(computeArrow); // after the box lays out
    let i = 0;
    setTyped("");
    // aim for a ~2.2s reveal regardless of length (clamped so it never crawls)
    const step = Math.max(6, Math.min(22, Math.round(2200 / Math.max(1, notePlain.length))));
    const id = setInterval(() => {
      i += 1;
      setTyped(notePlain.slice(0, i));
      if (i >= notePlain.length) clearInterval(id);
    }, step);
    const list = listRef.current;
    const onScroll = () => computeArrow();
    if (list) list.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
      if (list) list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteOpen, notePlain, computeArrow]);

  // dismiss the sticky note on click-outside or Escape
  useEffect(() => {
    if (!noteOpen) return;
    const onDown = (e) => {
      if (e.target.closest && (e.target.closest(".mp_note") || e.target.closest(".mp_tracklist"))) return;
      setHovered(null);
    };
    const onKey = (e) => { if (e.key === "Escape") setHovered(null); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [noteOpen]);

  const seek = (e) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo(ratio);
  };

  return (
    <div className="mp_note_area" ref={areaRef}>
      {noteOpen && arrow && (
        <svg className="mp_note_svg" aria-hidden="true">
          <defs>
            <linearGradient id="mp_arrow_grad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#1a9b9b" />
              <stop offset="1" stopColor="#6fe0e0" />
            </linearGradient>
            <marker id="mp_arrowhead" markerWidth="7" markerHeight="7" refX="5.2" refY="2.6"
                    orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L5.2,2.6 L0,5.2 Q1.8,2.6 0,0 Z" fill="#6fe0e0" />
            </marker>
          </defs>
          {/* small dot at the row end */}
          <circle className="mp_note_dot" cx={arrow.x1} cy={arrow.y1} r="3" fill="#1a9b9b" />
          <path
            key={hovered}
            className="mp_note_path"
            pathLength="100"
            d={arrow.d}
            fill="none"
            stroke="url(#mp_arrow_grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            markerEnd="url(#mp_arrowhead)"
          />
        </svg>
      )}

      {noteOpen && (
        <div className="mp_note" ref={noteRef} key={hovered}>
          <div className="mp_note_text">
            {typed.length >= notePlain.length
              ? <span dangerouslySetInnerHTML={{ __html: noteHtml }} />
              : <>{typed}<span className="mp_note_caret">|</span></>}
          </div>
        </div>
      )}

      <div className="mp_wrap">
        <div className="mp_card" ref={cardRef}>
          <div
            className="mp_art"
            style={artwork ? { backgroundImage: `url(${artwork})` } : {}}
          ></div>
          <div className="mp_title">{TRACKS[index].title}</div>
          <div className="mp_subtitle">{TRACKS[index].subtitle}</div>
          <div className="mp_progress" onClick={seek}>
            <div
              className="mp_progress_fill"
              style={{ width: duration ? `${(position / duration) * 100}%` : "0%" }}
            ></div>
          </div>
          <div className="mp_times">
            <span>{fmt(position)}</span>
            <span>{fmt(duration)}</span>
          </div>
          <div className="mp_controls">
            <button onClick={prev} aria-label="Previous track">&#10094;&#10094;</button>
            <button className="mp_play" onClick={togglePlay} aria-label="Play or pause">
              {playing ? "❚❚" : "►"}
            </button>
            <button onClick={next} aria-label="Next track">&#10095;&#10095;</button>
          </div>
        </div>

        <ul className="mp_tracklist" ref={listRef}>
          {TRACKS.map((t, i) => (
            <li
              key={t.trackUrl}
              ref={(el) => { rowRefs.current[i] = el; }}
              className={i === index ? "mp_track active" : "mp_track"}
              onClick={() => loadTrack(i)}
              onMouseEnter={showNotes && t.note ? () => openNote(i) : undefined}
            >
              <div className="mp_track_meta">
                <span className="mp_track_title">{t.title}</span>
                <span className="mp_track_sub">{t.subtitle}</span>
              </div>
              {showNotes && t.note && (
                <span className="mp_track_noteflag" title="hover for a note" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-3.9-.9L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
                  </svg>
                </span>
              )}
              <a
                className="mp_track_link"
                href={permalinks[i] || SOUNDCLOUD_PROFILE}
                target="_blank"
                rel="noreferrer"
                title="Open on SoundCloud"
                aria-label="Open on SoundCloud"
                onClick={(e) => e.stopPropagation()}
              >
                ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
