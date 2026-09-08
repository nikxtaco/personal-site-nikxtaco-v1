import React, { useState, useEffect, useMemo, useRef } from "react";
import "./spotlight.css";
import { WRITINGS, RESEARCH } from "../HomeBlo/writingsData";
import { RESEARCH_UPDATES } from "../HomeIntro/researchUpdates";
import { MOCKUPS } from "../HomeProjects/projectStuff";

const stripTags = (s) => (s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

// Static, hand-written entries for the main sections + sub-sections.
const SECTION_ITEMS = [
  { id: "sec-home", label: "Home", sublabel: "The intro", section: 1, elementId: "home", keywords: "nikita hey there landing start" },
  { id: "sec-about", label: "About & Updates", sublabel: "Who I am, interests, and my research-updates feed", section: 1, elementId: "about", keywords: "bio ai safety researcher pokemon coconuts kerala london poetry updates news timeline colophon" },
  { id: "sec-resume", label: "Resume", sublabel: "Opens my live resume (PDF)", section: 1, url: "/resume.pdf", keywords: "cv curriculum vitae experience education work" },
  { id: "sec-projects", label: "Research & Projects", sublabel: "Research listing and mockups", section: 2, elementId: "projects", keywords: "papers github work" },
  { id: "sec-research", label: "AI Safety Research", sublabel: "Published research listing", section: 2, elementId: "projects_stuff", keywords: "papers arxiv lesswrong probes interpretability deception activation oracles model organism misalignment" },
  { id: "sec-mockups", label: "Mockups", sublabel: "Project mockups on GitHub", section: 2, elementId: "projects_stuff", keywords: "design github figma filterbubble alrtai personal website" },
  { id: "sec-blog", label: "Writings", sublabel: "Blog posts, filterable by type", section: 3, elementId: "bloglist", keywords: "blog posts poetry photos games making essays musings" },
  { id: "sec-art", label: "Art & Music", sublabel: "Keyboard covers and sketches", section: 4, elementId: "art", keywords: "music sketches drawings" },
  { id: "sec-music", label: "Keyboard Covers", sublabel: "The music player", section: 4, elementId: "music", keywords: "piano soundcloud songs covers tracks" },
  { id: "sec-sketches", label: "Sketches", sublabel: "Drawings gallery", section: 4, elementId: "sketches", keywords: "art drawings pencil neon genesis naruto sherlock" },
];

// Build the full searchable catalog once.
const buildCatalog = () => {
  // native = hosted on this site (opens its own page); otherwise it links out
  // (spotlight scrolls to its exact card in the listing instead)
  const isNative = (w) => !(w.links && w.links.length);
  const writings = WRITINGS.filter((w) => w.type !== "Research").map((w) => ({
    id: "w-" + w.id,
    label: w.title,
    sublabel: "Writing · " + w.type,
    section: 3,
    elementId: "bloglist",
    entryId: w.id,
    native: isNative(w),
    keywords: (w.excerpt || "") + " " + w.type,
  }));
  const research = RESEARCH.map((w) => ({
    id: "r-" + w.id,
    label: w.title,
    sublabel: "Research · " + (w.date || ""),
    section: 2,
    elementId: "projects_stuff",
    entryId: w.id,
    native: isNative(w),
    keywords: (w.excerpt || "") + " research paper",
  }));
  const mockups = MOCKUPS.map((m) => ({
    id: "m-" + m.id,
    label: m.label,
    sublabel: "Mockup · project",
    section: 2,
    elementId: "mockup-" + m.id,
    keywords: "design mockup figma github project " + (m.label || ""),
  }));
  const updates = RESEARCH_UPDATES.filter((u) => !u.divider).map((u, i) => {
    const text = stripTags(u.text);
    return {
      id: "u-" + i,
      label: text,
      sublabel: "Update · " + u.date,
      section: 1,
      elementId: "about",
      keywords: text + " research update news",
    };
  });
  return [...SECTION_ITEMS, ...writings, ...research, ...mockups, ...updates];
};

// Simple token-AND match with light ranking (title hits rank highest).
const scoreItem = (item, tokens) => {
  const label = item.label.toLowerCase();
  const hay = (item.label + " " + item.sublabel + " " + (item.keywords || "")).toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (!hay.includes(t)) return -1; // every token must appear somewhere
    if (label.startsWith(t)) score += 3;
    else if (label.includes(t)) score += 2;
    else score += 1;
  }
  return score;
};

export default function SpotlightSearch({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const catalog = useMemo(buildCatalog, []);

  const results = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return SECTION_ITEMS; // show sections by default
    return catalog
      .map((item) => ({ item, score: scoreItem(item, tokens) }))
      .filter((r) => r.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.item);
  }, [query, catalog]);

  // keep the active index in range as results change
  useEffect(() => { setActive(0); }, [query]);

  // global shortcut: Cmd/Ctrl+K toggles; Esc closes
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus the input when opening; reset query when closing
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 20);
    }
  }, [open]);

  const choose = (item) => {
    setOpen(false);
    if (item && onNavigate) onNavigate(item);
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[active]);
    }
  };

  // keep active row scrolled into view
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(".spot_row.active");
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [active, results]);

  if (!open) {
    return (
      <button className="spot_trigger" onClick={() => setOpen(true)} aria-label="Search">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="spot_trigger_label">Search</span>
        <kbd className="spot_kbd">⌘K</kbd>
      </button>
    );
  }

  return (
    <div className="spot_overlay" onMouseDown={() => setOpen(false)}>
      <div className="spot_panel" onMouseDown={(e) => e.stopPropagation()}>
        <div className="spot_input_row">
          <svg className="spot_input_icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            className="spot_input"
            placeholder="Search sections, writings, research…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
          />
          <kbd className="spot_kbd spot_kbd_esc">esc</kbd>
        </div>

        <div className="spot_results" ref={listRef}>
          {results.length === 0 && <div className="spot_empty">No matches.</div>}
          {results.map((item, i) => (
            <button
              key={item.id}
              className={i === active ? "spot_row active" : "spot_row"}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(item)}
            >
              <span className="spot_row_label">{item.label}</span>
              <span className="spot_row_sub">{item.sublabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
