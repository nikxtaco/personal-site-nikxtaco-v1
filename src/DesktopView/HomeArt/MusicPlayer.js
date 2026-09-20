import React from "react";
import "./musicplayer.css";
import suika from "../../img/sketches/suika.jpeg";
import { useMusic } from "../../MusicContext";

/*
 * Keyboard-page music player UI. The audio engine + state now live in
 * MusicContext (shared with the global "now playing" bar), so this is a pure UI
 * that reads/controls the same widget. See src/MusicContext.js.
 */
export default function MusicPlayer() {
  const {
    TRACKS, index, playing, position, duration, artwork, permalinks,
    SOUNDCLOUD_PROFILE, fmt, togglePlay, next, prev, loadTrack, seekTo,
  } = useMusic();

  const seek = (e) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo(ratio);
  };

  return (
    <div className="mp_wrap">
      <img className="mp_side_art" src={suika} alt="Suika" />
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

      <ul className="mp_tracklist">
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
