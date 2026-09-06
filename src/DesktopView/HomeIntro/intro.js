import React, {useState, useEffect} from "react";
import "./intro.css"
import UseAnimations from "react-useanimations";
import headshot from "../../img/headshot-dxb.jpg";
import vangogh from "../../img/van-gogh-img.jpg";
import jupiter from "../../img/jupiter-artland.jpg";
import starflyer from "../../img/star-flyer.jpg";
import sevenSisters from "../../img/seven-sisters.jpg";
import obsidianFull from "../../img/obsidian-full.png";

export default function Intro() {

    const [summaryColor1, setSummaryColor1] = useState(0);
    const [summaryColor2, setSummaryColor2] = useState(0);
    const [aboutTheme, setAboutTheme] = useState("light"); // "light" (default) | "dark"
    const iconColor = aboutTheme === "light" ? "#1a1a1a" : "white";

    // Rotating "I try to do new things" title — only the verb + noun change
    const TRY_WORDS = [
        ["do", "things"],
        ["go", "places"],
        ["learn", "skills"],
    ];
    const [tryIdx, setTryIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setTryIdx((i) => (i + 1) % TRY_WORDS.length), 3500);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Auto-count the tracked-changes (green additions / red deletions) for the diffstat
    const [diffCount, setDiffCount] = useState({ add: 0, del: 0 });
    useEffect(() => {
        const root = document.querySelector(".about_container");
        if (!root) return;
        setDiffCount({
            add: root.querySelectorAll(".about_add").length,
            del: root.querySelectorAll(".about_del").length,
        });
    }, []);

    // Cursor trail (✦ stars) inside the About area (throttled)
    const trailTick = React.useRef(0);
    const aboutTrail = (e) => {
        const now = Date.now();
        if (now - trailTick.current < 60) return;
        trailTick.current = now;
        const el = document.createElement("span");
        el.className = "about_trail_bit";
        el.textContent = "✦";
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 800);
    };

    // sync a body class so the (global) corner decoration on the About slide
    // can invert to stay visible on the light theme
    useEffect(() => {
        document.body.classList.toggle("about-light", aboutTheme === "light");
    }, [aboutTheme]);

    // Precise navigation into the horizontally-offset slides; re-scrolls once
    // more after late-loading media (e.g. the keyboard videos) shifts layout.
    function scrollToSection(e, id){
        const el = document.getElementById(id);
        if(!el) return;
        e.preventDefault();
        el.scrollIntoView({ block: "start", inline: "start" });
        setTimeout(() => {
            const later = document.getElementById(id);
            if(later) later.scrollIntoView({ block: "start", inline: "start" });
        }, 600);
    }

    const customSummary1 = {
        width:"16vw",
        height:"2px",
        float:"left",
        background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
        backgroundSize: "200% 100%",
        transition: "all 1s ease",
        backgroundPosition: summaryColor1? "left bottom" : "right bottom",
        }
  
      const customSummary2 = {
        width:"16vw",
        height:"2px",
        float:"left",
        background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
        backgroundSize: "200% 100%",
        transition: "all 1s ease",
        backgroundPosition: summaryColor2? "left bottom" : "right bottom",
        }
    
    return (
        <div>

            {/* THE MAIN INTRO PAGE AND THE ID LINK TO THE ABOUT PAGE */}

                <div id="home" className="main_home_container">

                    <div className="page_number">01</div>
                    <div className="cygirl_picture"></div>

                    <a href="#about" onMouseEnter={()=>setSummaryColor1(1)} onMouseLeave={()=>setSummaryColor1(0)} className="intro_box1">
                        <div className="summary_intro_box_white">
                            <h3 className="summary_heading_white_bottom">About</h3>
                            <h3 className="summary_description_white_bottom">01A</h3>
                            <div style={customSummary1}></div>
                        </div>
                    </a>

                    <a href="https://drive.google.com/drive/folders/1l1PrXVNpfa5TxGDJaiMOrJ36ePlRSRS9" target="_blank" rel="noreferrer" onMouseEnter={()=>setSummaryColor2(1)} onMouseLeave={()=>setSummaryColor2(0)} className="intro_box2">
                        <div className="summary_intro_box_white">
                        <h3 className="summary_heading_white_bottom">Resume</h3>
                        <h3 className="summary_description_white_bottom">01B</h3>
                        <div style={customSummary2}></div>
                        </div>
                    </a>

                    <div className="hey_text_div">
                        <h1 className="hey_text">
                            Hey there!<br/>I'm Nikita.
                        </h1>
                    </div>

                </div>
            
            {/* THE ABOUT PAGE BELOW THE MAIN INTRO PAGE */}


            <div id="about" onMouseMove={aboutTrail} className={aboutTheme === "light" ? "about_container about_light" : "about_container about_dark"} >

                <div className="about_butterflies" aria-hidden="true">
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                    <span>🦋</span>
                </div>

                <div className="about_all_content">

                    <div>
                        <h3 className="about_heading">
                        - ABOUT
                        </h3>

                        <div className="about_commit">
                            <span className="about_commit_hash">a1b2c3d</span> last edited by <strong>nikxtaco</strong> · main
                        </div>

                        <button
                            className="about_theme_toggle"
                            onClick={() => setAboutTheme((t) => (t === "light" ? "dark" : "light"))}
                        >
                            {aboutTheme === "light" ? "🌙 Dark mode" : "☀ Light mode"}
                        </button>

                        <div className="about_top_row">
                        <div className="about_status_box">
                            <p className="about_status">
                            <strong>Status TL;DR:</strong> Since graduating with an MSc in AI from the{" "}
                            <a className="about_inline_link" href="https://www.ed.ac.uk" target="_blank" rel="noreferrer">University of Edinburgh</a> last year, I've been working full-time on AI Safety research
                            as part of the <a className="about_inline_link" href="https://www.lasrlabs.org" target="_blank" rel="noreferrer">LASR Labs</a> (now,
                            extension funded by <a className="about_inline_link" href="https://coefficientgiving.org" target="_blank" rel="noreferrer">Coefficient Giving</a>) fellowship in
                            London! We presented our <a className="about_inline_link" href="https://arxiv.org/abs/2607.01033" target="_blank" rel="noreferrer">paper</a> at
                            the <a className="about_inline_link" href="https://icml.cc/virtual/2026/workshop/54071" target="_blank" rel="noreferrer">ICML 2026 Mechanistic Interpretability Workshop</a> in Seoul, and my team is actively
                            working on follow-ups which will likely be published <a className="about_inline_link" href="https://www.lesswrong.com/users/nikita-menon" target="_blank" rel="noreferrer">here</a>.
                            </p>

                            <p className="about_status">
                            Tangentially, some things I've newly taken an interest in over the last year or so are <span className="about_term">Metroidvanias<span className="about_tip">Funnily enough, my first one was <u>Hollow Knight</u> which I started on my birthday in 2025, followed by <u>Silksong</u> which I started on my mother's birthday right after, and I can't remember if this was a coincidence or a result of anticipatory lore optimisation. While I haven't finished the latter yet, I'm looking forward to doing so someday, along with <u>Nine Sols</u>!</span></span>, boardgames, and learning Japanese!
                            </p>

                            <p className="about_status">
                            Well that's the summary. If you care to get a tiny bit more of a sense of my
                            personality, read on! I've left much of the longer <i>about me</i> section below as is
                            from when it was first written back in 2020-22, because I think it aged well, and have
                            only made minor updates <span className="about_diffstat"><span className="stat_add">+{diffCount.add}</span> <span className="stat_del">−{diffCount.del}</span></span> where I thought necessary.
                            </p>

                            <p className="about_lastupdated">Last updated: September 2026</p>
                            </div>
                            <div className="about_right_col">
                                <div className="about_headshot">
                                    <img src={headshot} alt="Nikita Menon" />
                                </div>
                                <div className="about_facts">
                                    <span className="about_fact">AI Safety Researcher</span>
                                    <span className="about_fact">she/her</span>
                                    <span className="about_fact">📍 Based in London</span>
                                    <span className="about_fact">from Kerala, India</span>
                                </div>
                            </div>
                        </div>

                            <div className="about_aspiring_section">
                            <img className="collage_obsidian_full" src={obsidianFull} alt="Obsidian graph" title="A snapshot of the Obsidian graph" />
                            <h1 className="about_title1">
                            I'm an<br/>aspiring...
                            </h1>
                            <h3 className="about_heading">
                            bit of pretty much everything.
                            </h3>

                            <p className="about_content">
                            I've got multiple interests and (definitely practical) ambitions that I
                            shelter in my (arguably) well-organized mind <ins className="about_add">(on a good day)</ins>. When I'm not doing
                            them or thinking of doing them, I spend my time scrolling through
                            art and music pages, burning through the movies and shows on my
                            infinitely long <a className="about_inline_link" href="https://nikxtaco.notion.site/ccf1cac63f22462188da706f040c342d?v=1e7e70ff55f54320910dc01c62bdd3b8&pvs=74" target="_blank" rel="noreferrer">recommendation list</a>, or <span className="about_term">making notes on random
                            things that I find interesting<span className="about_tip">I hope to one day make my Obsidian contents public.</span></span> for <del className="about_del">no apparent reason</del> <ins className="about_add">various reasons</ins>, but let's not
                            talk about that.<br/><br/>

                            Rational fiction, thought experiments, history and the morality of
                            politics are some of the things that interest me <span className="about_term">(as of right this
                            second)<span className="about_tip">Such interests are updated fairly often, so I'm just going to leave this list here, but know that it's stale.</span></span> and I do not claim to be adept at any of them. I am however
                            good at a couple of things (including sarcasm, owing to which my
                            friends <ins className="about_add">almost </ins>never think I'm being serious), and those things are or will
                            be listed on this website before <del className="about_del">the next olympic games<span className="about_tip">This was clearly written during Covid.<br/><br/>Relatedly, here's a <a className="about_inline_link" href="https://medium.com/munners-daily/covid-19-the-potential-aftermath-e94607239847" target="_blank" rel="noreferrer">mildly-phrased rant about the pandemic</a> I wrote in 2020 that you didn't ask for.</span></del> <ins className="about_add">…&nbsp;<a className="about_inline_link" href="https://www.lesswrong.com/w/artificial-general-intelligence-agi" target="_blank" rel="noreferrer">AGI</a>? Hopefully?</ins><br/><br/><ins className="about_add">And fun fact: I come from the <a className="about_inline_link" href="https://en.wikipedia.org/wiki/Coconut_production_in_Kerala" target="_blank" rel="noreferrer">Land of Coconuts</a>.</ins><br/>
                            </p>
                            </div>

                            <div className="about_try_section">
                                <img className="collage_sevensisters" src={sevenSisters} alt="Nikita at Seven Sisters" title="The Seven Sisters Cliffs, England" />
                                <img className="collage_starflyer" src={starflyer} alt="Nikita on a star flyer ride" title="The Star Flyer at Edinburgh's Christmas Markets" />
                                <img className="collage_jupiter" src={jupiter} alt="Nikita at Jupiter Artland" title="Jupiter Artland, Edinburgh" />
                                <img className="collage_vangogh" src={vangogh} alt="Nikita at a Van Gogh immersive exhibit" title="The Van Gogh Exhibition, London" />
                                <h1 className="about_title2">
                                I try to <span className="about_try_word" key={"v" + tryIdx}>{TRY_WORDS[tryIdx][0]}</span><br/>
                                new <span className="about_try_word" key={"n" + tryIdx}>{TRY_WORDS[tryIdx][1]}</span>
                                </h1>
                                <h3 className="about_heading">
                                ...every once in a while.
                                </h3>

                            <p className="about_content">
                            Besides constantly wishing for a rather peaceful life of a Pokemon
                            trainer running from gym to gym with <del className="about_del">the sole purpose of collecting
                            badges</del> <ins className="about_add">zero existential stakes</ins>, I’m also working on projects in AI Safety and trying to develop
                            my research taste and skills in the pursuit of aligning large AI models
                            {" "}<del className="about_del">in the long run</del> <ins className="about_add">before the long run runs out</ins>. I am far too <del className="about_del">lazy</del> <ins className="about_add">efficient</ins> to do any sort of redundant work
                            when I can help it, so for details on what I’ve been working on, I must
                            redirect you to my <a className="about_inline_link" href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">linkedin</a> or <a className="about_inline_link" href="https://drive.google.com/drive/folders/1l1PrXVNpfa5TxGDJaiMOrJ36ePlRSRS9" target="_blank" rel="noreferrer">resume</a>.<br/><br/>

                            I also clearly enjoy making <span className="about_term"><a className="about_inline_link" href="#music" onClick={(e)=>scrollToSection(e,'music')}>keyboard covers</a><span className="about_tip">Some of my most cherished memories from undergrad are thanks to being part of a band! I also play / have played (far less well) the Guitar and Harmonium, and hope to be good on the Ocarina and Cello one day!</span></span>, <a className="about_inline_link" href="#sketches" onClick={(e)=>scrollToSection(e,'sketches')}>art</a> and <span className="about_term"><a className="about_inline_link" href="#blog" onClick={(e)=>scrollToSection(e,'blog')}>writing poetry</a><span className="about_tip">I have this <a className="about_inline_link" href="https://instagram.com/cryptic.tales" target="_blank" rel="noreferrer">instagram poetry account</a> that I used to write poetry for fairly frequently (over a 100 pieces I think) for many years through high school and a little into undergrad, but the page has since been dead, for reasons like: I found other fun things to do!<br/><br/>Most don't quite meet my bar now, but some do!</span></span> since
                            I seem to have enough content on each to dedicate whole pages to them!
                            It’s kind of funny how I can do none of these things ad-hoc without
                            preparation or references though, but then again that’s never been the goal.
                            There’s <del className="about_del">a lot</del> <ins className="about_add">an unreasonable number</ins> of skills I’d like to someday work towards acquiring properly
                            (like <span className="about_term">ice skating<span className="about_tip">Which I used to do a fair bit of in middle school, as far as I can remember, until I fell one day and injured myself (yikes), then moved out of the city into a new one that didn't have an accessible rink. I then tried it once a decade later and well, unsurprisingly, I'm trash at it.<br/><br/>Given this knowledge, being competent at it has fallen quite far down on the priority list, and might only be revisited when I have a decent stretch of time to practice.</span></span>) and given that they’re plenty in number, if there’s <em>anything</em>{" "}
                            new you’d like to learn and are looking for someone to do it with <ins className="about_add">(or just chat)</ins>, <em>please</em> reach
                            out! Chances are I’ll be <em>more than glad</em> to join the endeavour!<br/><br/>

                            Until then, I fare thee well.<br/>
                            </p>
                            </div>
                        <br/><br/>

                    </div>

                </div> 

                <div className="about_contact_links">
                    <a href="#home">
                        <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: iconColor, cursor: "pointer", padding:"0", margin:"0"}}/>
                    </a>
                    <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: iconColor, cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: iconColor, cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                        <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: iconColor, cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                    <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: iconColor, cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}