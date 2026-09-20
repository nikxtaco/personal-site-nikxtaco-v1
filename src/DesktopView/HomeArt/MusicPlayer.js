import React, { useRef, useEffect } from "react";
import "./musicplayer.css";
import { useMusic } from "../../MusicContext";

/*
 * Keyboard-page music player UI. Audio engine + state live in MusicContext
 * (shared with the global now-playing bar). The tracklist's max-height is
 * measured from the card beside it so the two boxes match, and it scrolls.
 */
export default function MusicPlayer() {
  const {
    TRACKS, index, playing, position, duration, artwork, permalinks,
    SOUNDCLOUD_PROFILE, fmt, togglePlay, next, prev, loadTrack, seekTo,
  } = useMusic();

  const listRef = useRef(null);

  // show the tracklist through the "Giorno's Theme" row (index 8), then scroll:
  // cap max-height at that row's bottom, measured from the live layout.
  useEffect(() => {
    const CUTOFF_INDEX = 8; // Giorno's Theme — last fully-visible row
    const sync = () => {
      const list = listRef.current;
      if (!list) return;
      const rows = list.children;
      const cutoff = rows[Math.min(CUTOFF_INDEX, rows.length - 1)];
      if (!cutoff) return;
      list.style.maxHeight = "none"; // measure natural positions
      const top = list.getBoundingClientRect().top;
      const bottom = cutoff.getBoundingClientRect().bottom;
      list.style.maxHeight = Math.round(bottom - top) + "px";
    };
    sync();
    window.addEventListener("resize", sync);
    const t = setTimeout(sync, 400); // after artwork/fonts settle
    return () => { window.removeEventListener("resize", sync); clearTimeout(t); };
  }, []);

  const seek = (e) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo(ratio);
  };

  return (
    <div className="mp_wrap">
      <div className="mp_card">
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
            className={i === index ? "mp_track active" : "mp_track"}
            onClick={() => loadTrack(i)}
          >
            <div className="mp_track_meta">
              <span className="mp_track_title">{t.title}</span>
              <span className="mp_track_sub">{t.subtitle}</span>
            </div>
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
  );
}
