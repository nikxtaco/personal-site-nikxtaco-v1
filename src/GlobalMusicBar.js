import React from "react";
import "./globalMusicBar.css";
import { useMusic } from "./MusicContext";

/*
 * A small persistent "now playing" bar, fixed to the corner on every page.
 * Custom UI (no SoundCloud chrome); shares the MusicContext engine so it's in
 * sync with the keyboard-page player. Play/pause + prev/next to switch tracks.
 */
export default function GlobalMusicBar() {
  const m = useMusic();
  if (!m) return null;
  const { TRACKS, index, playing, togglePlay, next, prev } = m;
  const t = TRACKS[index];

  return (
    <div className="gmb" role="group" aria-label="Now playing">
      <span className={"gmb_eq" + (playing ? " is-playing" : "")} aria-hidden="true">
        <i /><i /><i />
      </span>
      <div className="gmb_meta">
        <div className="gmb_now">{playing ? "now playing" : "paused"}</div>
        <div className="gmb_title" title={t.label}>{t.title}</div>
      </div>
      <div className="gmb_controls">
        <button onClick={prev} aria-label="Previous track">&#10094;</button>
        <button className="gmb_play" onClick={togglePlay} aria-label="Play or pause">
          {playing ? "❚❚" : "►"}
        </button>
        <button onClick={next} aria-label="Next track">&#10095;</button>
      </div>
    </div>
  );
}
