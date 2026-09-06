import React, { useEffect, useRef, useState } from "react";
import "./musicplayer.css";
import keyboardData from "./keyboardData.json";
import suika from "../../img/sketches/suika.jpeg";

// Build the track list from the existing keyboard-covers data.
// Each JSON value is a SoundCloud widget URL of the form
//   https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/<id>
// We decode the inner track URL for the Widget API's load() calls.
const TRACKS = Object.entries(keyboardData).map(([label, widgetUrl]) => {
  const encoded = widgetUrl.split("url=")[1] || "";
  const trackUrl = decodeURIComponent(encoded);
  const [title, ...rest] = label.split(" - ");
  return { label, title: title.trim(), subtitle: rest.join(" - ").trim(), trackUrl };
});

const SOUNDCLOUD_PROFILE = "https://soundcloud.com/nikita-971387991";

const iframeSrc = (trackUrl) =>
  "https://w.soundcloud.com/player/?url=" +
  encodeURIComponent(trackUrl) +
  "&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_teaser=false&visual=false";

const fmt = (ms) => {
  if (!ms || ms < 0) return "0:00";
  const s = Math.floor(ms / 1000);
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
};

export default function MusicPlayer() {
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);
  const indexRef = useRef(0); // kept in sync so the FINISH handler sees the latest track

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [artwork, setArtwork] = useState(null);
  const [permalinks, setPermalinks] = useState({}); // per-track public SoundCloud URLs, filled as tracks load

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const refreshSound = (i, attempt = 0) => {
    const w = widgetRef.current;
    if (!w) return;
    w.getCurrentSound((sound) => {
      if (sound && (sound.artwork_url || (sound.user && sound.user.avatar_url))) {
        const art = sound.artwork_url || (sound.user && sound.user.avatar_url) || "";
        setArtwork(art ? art.replace("-large", "-t500x500") : null);
        if (sound.permalink_url && typeof i === "number") {
          setPermalinks((prev) => ({ ...prev, [i]: sound.permalink_url }));
        }
      } else if (attempt < 6) {
        setTimeout(() => refreshSound(i, attempt + 1), 500);
      }
    });
    w.getDuration((d) => {
      if (d) setDuration(d);
      else if (attempt < 6) setTimeout(() => refreshSound(i, attempt + 1), 500);
    });
  };

  const loadTrack = (i, autoplay = true) => {
    const w = widgetRef.current;
    if (!w) return;
    setIndex(i);
    setPosition(0);
    w.load(TRACKS[i].trackUrl, {
      auto_play: autoplay,
      hide_related: true,
      show_comments: false,
      show_user: false,
      visual: false,
      callback: () => {
        refreshSound(i);
        if (autoplay) setPlaying(true);
      },
    });
  };

  const next = () => loadTrack((indexRef.current + 1) % TRACKS.length);
  const prev = () => loadTrack((indexRef.current - 1 + TRACKS.length) % TRACKS.length);
  const togglePlay = () => widgetRef.current && widgetRef.current.toggle();

  const seek = (e) => {
    const w = widgetRef.current;
    if (!w || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    w.seekTo(ratio * duration);
    setPosition(ratio * duration);
  };

  useEffect(() => {
    const init = () => {
      if (!window.SC || !window.SC.Widget || !iframeRef.current) return;
      const w = window.SC.Widget(iframeRef.current);
      widgetRef.current = w;
      const E = window.SC.Widget.Events;
      w.bind(E.READY, () => {
        refreshSound(0);
        w.bind(E.PLAY, () => {
          setPlaying(true);
          refreshSound(indexRef.current);
        });
        w.bind(E.PAUSE, () => setPlaying(false));
        w.bind(E.FINISH, () => next());
        w.bind(E.PLAY_PROGRESS, (e) => setPosition(e.currentPosition));
      });
    };

    if (window.SC && window.SC.Widget) {
      init();
    } else {
      let s = document.getElementById("sc-widget-api");
      if (!s) {
        s = document.createElement("script");
        s.id = "sc-widget-api";
        s.src = "https://w.soundcloud.com/player/api.js";
        s.onload = init;
        document.body.appendChild(s);
      } else {
        s.addEventListener("load", init);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      <iframe
        ref={iframeRef}
        title="SoundCloud audio engine"
        className="mp_iframe"
        src={iframeSrc(TRACKS[0].trackUrl)}
        allow="autoplay"
      ></iframe>
    </div>
  );
}
