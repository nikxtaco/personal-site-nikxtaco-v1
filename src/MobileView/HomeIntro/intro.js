import React, { useState, useEffect } from "react";

import "./intro.css";

import useWindowDimensions from "../../helpers/WindowDimensions.js";
import Footer from "../../components/footer/footer.js";

import headshot from "../../img/headshot-dxb.jpg";
import jupiter from "../../img/jupiter-artland.jpg";
import starflyer from "../../img/star-flyer.jpg";
import sevenSisters from "../../img/seven-sisters.jpg";
import vangogh from "../../img/van-gogh-img.jpg";
import ecoLibrary from "../../img/umberto-eco-antilibrary.jpg";
import obsidianFull from "../../img/obsidian-full.png";
import { RESEARCH_UPDATES } from "../../DesktopView/HomeIntro/researchUpdates.js";

export default function Intro() {

  const { height } = useWindowDimensions();

  const [about] = useState(false);

  useEffect(() => {
    if (about === true) {
      window.scrollTo({ top: height, left: 0 });
    }
  }, [about, height]);

  const customSummary = {
    width: "80vw",
    height: "1px",
    marginLeft: "10vw",
    marginBottom: "5vh",
    background: "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  };

  // Tap a dotted term to reveal its note (mobile has no hover). One delegated
  // handler covers every .about_term, including those inside innerHTML.
  const onAboutTap = (e) => {
    const term = e.target.closest(".about_term");
    // close any other open note
    document.querySelectorAll(".about_m .about_term.tip_open").forEach((t) => {
      if (t !== term) t.classList.remove("tip_open");
    });
    if (term) term.classList.toggle("tip_open");
  };

  // collage photos rendered as captioned figures (touch-friendly, no hover)
  const COLLAGE = [
    { img: headshot, alt: "Nikita Menon", cap: "That's me!" },
    { img: sevenSisters, alt: "Nikita at Seven Sisters", cap: "The Seven Sisters Cliffs, England" },
    { img: starflyer, alt: "Nikita on a star flyer ride", cap: "The Star Flyer, Edinburgh's Christmas Markets" },
    { img: jupiter, alt: "Nikita at Jupiter Artland", cap: "Jupiter Artland, Edinburgh" },
    { img: vangogh, alt: "Nikita at a Van Gogh immersive exhibit", cap: "The Van Gogh Exhibition, London" },
    { img: ecoLibrary, alt: "Reading about Umberto Eco's antilibrary with Edinburgh Castle behind", cap: "Starbucks Viewpoint, Edinburgh Castle" },
    { img: obsidianFull, alt: "Obsidian graph", cap: "A snapshot of my Obsidian graph" },
  ];

  return (
    <div>
      <div id="home" className="main_home_container">

        <div className="cygirl_picture_mobile"></div>

        <div className="hey_text_div_intro_mobile">
          <h1 className="hey_text_mobile">
            Hey there! <br />I'm Nikita.
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">
            but that's not all i am!
          </h2>
          <h2 className="hey_desc_mobile semibold">
            awkward laughter
          </h2>
        </div>

        <a href="#about">
          <div className="about_button_mobile2">ABOUT</div>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <div className="about_button_mobile2">RESUME</div>
        </a>

      </div>

      <div id="about" className="about_container_mobile about_m" onClick={onAboutTap}>

        <h3 className="about_heading">- ABOUT</h3>
        <div className="about_commit">
          <span className="about_commit_hash">a1b2c3d</span> last edited by <strong>nikxtaco</strong> · main
        </div>

        {/* headshot + fact chips */}
        <div className="about_headshot">
          <img src={headshot} alt="Nikita Menon" />
          <span className="about_headshot_sig" lang="ml" aria-hidden="true">നികിത</span>
        </div>
        <div className="about_facts">
          <span className="about_fact">AI Safety Researcher</span>
          <span className="about_fact">she/her</span>
          <span className="about_fact">from Kerala, India</span>
          <span className="about_fact">📍 Based in London</span>
        </div>

        {/* status TL;DR */}
        <p className="about_status">
          <strong>Status TL;DR:</strong> Since graduating with an MSc in AI from the{" "}
          <a className="about_inline_link" href="https://www.ed.ac.uk" target="_blank" rel="noreferrer">University of Edinburgh</a> last year, I've been working full-time on AI Safety research
          as part of the <a className="about_inline_link" href="https://www.lasrlabs.org" target="_blank" rel="noreferrer">LASR Labs</a> (now,
          extension funded by <a className="about_inline_link" href="https://coefficientgiving.org" target="_blank" rel="noreferrer">Coefficient Giving</a>) fellowship in
          London! We presented our <a className="about_inline_link" href="https://arxiv.org/abs/2607.01033" target="_blank" rel="noreferrer">paper</a> at
          the <a className="about_inline_link" href="https://icml.cc/virtual/2026/workshop/54071" target="_blank" rel="noreferrer">ICML 2026 Mechanistic Interpretability Workshop</a> in Seoul, and my team is actively
          working on follow-ups which will likely be published <a className="about_inline_link" href="https://www.lesswrong.com/users/nikita-menon" target="_blank" rel="noreferrer">here</a>. If you'd like to chat, do <a className="about_inline_link" href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">reach out</a>!
        </p>

        {/* research updates feed */}
        <aside className="about_updates">
          <h4 className="about_updates_title">Research Updates</h4>
          <ul className="about_updates_list">
            {RESEARCH_UPDATES.map((u, i) => (
              u.divider ? (
                <li className="about_update_divider" key={i}><span>{u.label}</span></li>
              ) : (
                <li className="about_update" key={i}>
                  <span className="about_update_meta">{u.date}</span>
                  <span className="about_update_text" dangerouslySetInnerHTML={{ __html: u.text }} />
                </li>
              )
            ))}
          </ul>
        </aside>

        <p className="about_status">
          Well, that's the summary. If you care to get a tiny bit more of a sense of my
          personality, read on! I've left much of the longer <i>about me</i> section below as is
          from when it was first written back in 2020-22, because I think it aged well.
        </p>

        {/* aspiring section */}
        <h1 className="about_title1">I'm an<br />aspiring...</h1>
        <h3 className="about_heading">bit of pretty much everything.</h3>
        <p className="about_content">
          I've got multiple interests and (definitely practical) ambitions that I
          shelter in my (arguably) well-organized mind <ins className="about_add">(on a good day)</ins>. When I'm not doing
          them or thinking of doing them, I spend my time scrolling through
          art and music pages, burning through the movies and shows on my
          infinitely long <a className="about_inline_link" href="https://nikxtaco.notion.site/ccf1cac63f22462188da706f040c342d?v=1e7e70ff55f54320910dc01c62bdd3b8&pvs=74" target="_blank" rel="noreferrer">recommendation list</a>, or <span className="about_term">making notes on random
          things that I find interesting<span className="about_tip">I hope to one day make my Obsidian contents public.</span></span> for <del className="about_del">no apparent reason</del> <ins className="about_add">various reasons</ins>, but let's not
          talk about that.<br /><br />

          Rational fiction, thought experiments, history and the morality of
          politics are some of the things that interest me <span className="about_term">(as of right this
          second)<span className="about_tip">Such interests are updated fairly often, so I'm just going to leave this list here, but know that it's stale.</span></span> and I do not claim to be adept at any of them. I am however
          good at a couple of things (including sarcasm, owing to which my
          friends <ins className="about_add">almost </ins>never think I'm being serious), and those things are or will
          be listed on this website before <del className="about_del">the next olympic games</del> <ins className="about_add">…&nbsp;<a className="about_inline_link" href="https://www.lesswrong.com/w/artificial-general-intelligence-agi" target="_blank" rel="noreferrer">AGI</a>? Hopefully?</ins><br /><br /><ins className="about_add">And fun fact: I come from the <a className="about_inline_link" href="https://en.wikipedia.org/wiki/Coconut_production_in_Kerala" target="_blank" rel="noreferrer">Land of Coconuts</a>.</ins><br />
        </p>

        {/* try section */}
        <h1 className="about_title2">I try to do<br />new things</h1>
        <h3 className="about_heading">...every once in a while.</h3>
        <p className="about_content">
          Besides constantly wishing for a rather peaceful life of a Pokemon
          trainer running from gym to gym with <del className="about_del">the sole purpose of collecting
          badges</del> <ins className="about_add">zero existential stakes</ins>, I’m also working on projects in AI Safety and trying to develop
          my research taste and skills in the pursuit of aligning large AI models
          {" "}<del className="about_del">in the long run</del> <ins className="about_add">before the long run runs out</ins>. I am far too <del className="about_del">lazy</del> <ins className="about_add">efficient</ins> to do any sort of redundant work
          when I can help it, so for details on what I’ve been working on, I must
          redirect you to my <a className="about_inline_link" href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">linkedin</a> or <a className="about_inline_link" href="/resume.pdf" target="_blank" rel="noreferrer">resume</a>.<br /><br />

          I also clearly enjoy making <a className="about_inline_link" href="#music">keyboard covers</a>, <a className="about_inline_link" href="#sketches">art</a> and <a className="about_inline_link" href="#blog">writing poetry</a> since
          I seem to have enough content on each to dedicate whole pages to them!
          It’s kind of funny how I can do none of these things ad-hoc without
          preparation or references though, but then again that’s never been the goal.
          There’s <del className="about_del">a lot</del> <ins className="about_add">an unreasonable number</ins> of skills I’d like to someday work towards acquiring properly
          (like <span className="about_term">ice skating<span className="about_tip">I used to do a fair bit of it in middle school until I fell one day and injured myself, then moved cities. I tried it once a decade later and, unsurprisingly, I'm trash at it now.</span></span>) and given that they’re plenty in number, if there’s <em>anything</em>{" "}
          new you’d like to learn and are looking for someone to do it with <ins className="about_add">(or just chat)</ins>, <em>please</em> reach
          out! Chances are I’ll be <em>more than glad</em> to join the endeavour!<br /><br />

          Until then, I fare thee well.<br />
        </p>

        {/* collage of photos, captioned */}
        <div className="about_collage_m">
          {COLLAGE.map((c, i) => (
            <figure className="about_collage_fig" key={i}>
              <img src={c.img} alt={c.alt} />
              <figcaption>{c.cap}</figcaption>
            </figure>
          ))}
        </div>

        {/* reading key */}
        <aside className="about_legend" aria-label="Reading key">
          <div className="about_legend_title">// reading key</div>
          <div className="about_legend_rows">
            <span className="about_legend_row"><span className="about_inline_link">link</span> &rarr; clickable</span>
            <span className="about_legend_row"><span className="about_add">green</span> &rarr; a later addition</span>
            <span className="about_legend_row"><del className="about_del">struck</del> &rarr; cut since</span>
            <span className="about_legend_row"><span className="about_term">dotted</span> &rarr; tap for a note</span>
          </div>
        </aside>

        {/* colophon */}
        <footer className="about_colophon">
          <div className="about_colophon_head">// colophon</div>
          <div className="about_colophon_body">
            Built with React, no template. Typeset in Rozha One &amp; Playfair Display,
            with Courier New for the small print. Designed in Figma, shipped on Netlify.
          </div>
          <div className="about_colophon_sign">
            <span className="about_colophon_hash">c0l0ph0n</span> committed with{" "}
            <ins className="about_add">love</ins> <del className="about_del">and questionable time management</del>
            {" "}· © 2026 Nikita <span className="about_colophon_ml" lang="ml">(നികിത)</span> Menon
          </div>
        </footer>

        <Footer />

      </div>

    </div>
  );
}
