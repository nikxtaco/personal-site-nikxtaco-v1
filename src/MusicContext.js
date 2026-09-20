import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import keyboardData from "./DesktopView/HomeArt/keyboardData.json";

/*
 * Shared music engine: ONE hidden SoundCloud widget iframe + shared state, so
 * the keyboard-page player and the global "now playing" bar stay in sync and
 * playback persists across the whole site. Custom UIs consume useMusic().
 */
export const TRACKS = Object.entries(keyboardData).map(([label, widgetUrl]) => {
  const encoded = widgetUrl.split("url=")[1] || "";
  const trackUrl = decodeURIComponent(encoded);
  const [title, ...rest] = label.split(" - ");
  return { label, title: title.trim(), subtitle: rest.join(" - ").trim(), trackUrl };
});

export const SOUNDCLOUD_PROFILE = "https://soundcloud.com/nikita-971387991";

export const fmt = (ms) => {
  if (!ms || ms < 0) return "0:00";
  const s = Math.floor(ms / 1000);
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
};

const iframeSrc = (trackUrl) =>
  "https://w.soundcloud.com/player/?url=" +
  encodeURIComponent(trackUrl) +
  "&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_teaser=false&visual=false";

const MusicContext = createContext(null);
export const useMusic = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);
  const indexRef = useRef(0);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [artwork, setArtwork] = useState(null);
  const [permalinks, setPermalinks] = useState({});

  useEffect(() => { indexRef.current = index; }, [index]);

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
  const seekTo = (ratio) => {
    const w = widgetRef.current;
    if (!w || !duration) return;
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
        w.bind(E.PLAY, () => { setPlaying(true); refreshSound(indexRef.current); });
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

  const value = {
    TRACKS, index, playing, position, duration, artwork, permalinks,
    SOUNDCLOUD_PROFILE, fmt, togglePlay, next, prev, loadTrack, seekTo,
    title: TRACKS[index].title, subtitle: TRACKS[index].subtitle,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
      <iframe
        ref={iframeRef}
        title="SoundCloud audio engine"
        src={iframeSrc(TRACKS[0].trackUrl)}
        allow="autoplay"
        aria-hidden="true"
        style={{ position: "fixed", left: "-9999px", top: "-9999px", width: "1px", height: "1px", border: 0, opacity: 0 }}
      />
    </MusicContext.Provider>
  );
}
