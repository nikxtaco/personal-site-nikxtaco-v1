import React, {useState, useEffect, useRef} from "react";
import "./projects.css"
// import useWindowDimensions from "../../helpers/WindowDimensions.js"
import UseAnimations from "react-useanimations";
import ProjectStuff, { MOCKUPS } from './projectStuff';
import Writings from '../HomeBlo/Writings';
import { RESEARCH } from '../HomeBlo/writingsData';
import lessWrongMark from "../../img/lesswrong-mark.png";

// short labels for the table of contents (fall back to the full title)
const RESEARCH_TOC_LABEL = {
  "activation-oracles": "AOs are broken",
  "model-organism-lottery": "Model Organism Lottery",
  "deception-linear-probes": "OOC Deception LP",
  "emergent-misalignment": "Emergent Misalignment: Base vs IT",
  "ooc-meta-learning-toy-model": "OOC Meta-Learning Toy Model",
};
// mirror the Writings sort so the TOC order matches the rendered listing
const researchSorted = [...RESEARCH].sort(
  (a, b) => (Date.parse(b.updated || b.sortDate || "") || 0) - (Date.parse(a.updated || a.sortDate || "") || 0)
);

export default function Projects() {

  // const { height } = useWindowDimensions();

    const [summaryColor1, setSummaryColor1] = useState(0);
    const [summaryColor2, setSummaryColor2] = useState(0);
    const [postOpen, setPostOpen] = useState(false); // hide the Research header/Mockups while reading a post
    const [activeId, setActiveId] = useState("research-anchor"); // active TOC anchor
    const scrollerRef = useRef(null);

    // ordered list of every anchor the TOC points at (section headings + each listing)
    const tocAnchors = [
      "research-anchor",
      ...researchSorted.map((w) => "card-" + w.id),
      "mockups-anchor",
      ...MOCKUPS.map((m) => "mockup-" + m.id),
    ];

    // scroll-spy: highlight whichever anchor is nearest the top of the scroller.
    // Uses scroll position (robust to fast scroll jumps).
    useEffect(() => {
      if (postOpen) return;
      const root = scrollerRef.current;
      if (!root) return;
      const onScroll = () => {
        const line = root.getBoundingClientRect().top + root.clientHeight * 0.28;
        let current = tocAnchors[0];
        for (const id of tocAnchors) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
        setActiveId(current);
      };
      root.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => root.removeEventListener("scroll", onScroll);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postOpen]);

    const researchActive = activeId === "research-anchor" || activeId.startsWith("card-");
    const mockupsActive = activeId === "mockups-anchor" || activeId.startsWith("mockup-");

    const goTo = (e, id) => {
      e.preventDefault();
      const root = scrollerRef.current;
      const el = document.getElementById(id);
      if (!root || !el) return;
      // scroll ONLY this container (scrollIntoView would also scroll ancestors and
      // shove the whole horizontal layout around), and clamp so we never overscroll
      // past the content into empty space
      const offset = root.clientHeight * 0.12;
      const target = el.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop - offset;
      const maxTop = root.scrollHeight - root.clientHeight;
      root.scrollTo({ top: Math.min(Math.max(0, target), maxTop), behavior: "smooth" });
    };

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

      <div id="projects" className="main_projects_container" >
        <div className="page_number">02</div>
        <div className="buildingart_picture"></div>

        <a href="#projects_stuff" onMouseEnter={()=>setSummaryColor1(1)} onMouseLeave={()=>setSummaryColor1(0)} className="intro_box1">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white_bottom">Browse</h3>
              <h3 className="summary_description_white_bottom">02A</h3>
              <div style={customSummary1}></div>
            </div>
        </a>

        <a href="https://www.github.com/nikxtaco" target="_blank" rel="noreferrer" onMouseEnter={()=>setSummaryColor2(1)} onMouseLeave={()=>setSummaryColor2(0)} className="intro_box2">
            <div className="summary_intro_box_white">
              <h3 className="summary_heading_white_bottom">Github</h3>
              <h3 className="summary_description_white_bottom">02B</h3>
              <div style={customSummary2}></div>
            </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            I code, <br/>sometimes.
          </h1>
        </div>

      </div>

      {/* THE PROJECTS STUFF BELOW THE MAIN PROJECTS INTRO PAGE */}

      <div id="projects_stuff" className="projects_container" ref={scrollerRef} >

        {!postOpen && (
          <nav className="projects_toc" aria-label="On this page">
            <a
              href="#research-anchor"
              onClick={(e) => goTo(e, "research-anchor")}
              className={"projects_toc_link" + (researchActive ? " is-active" : "")}
            >
              AI Safety Research
            </a>
            <div className="projects_toc_sub">
              {researchSorted.map((w) => (
                <a
                  key={w.id}
                  href={"#card-" + w.id}
                  onClick={(e) => goTo(e, "card-" + w.id)}
                  className={"projects_toc_sublink" + (activeId === "card-" + w.id ? " is-active" : "")}
                >
                  {RESEARCH_TOC_LABEL[w.id] || w.title}
                </a>
              ))}
            </div>

            <a
              href="#mockups-anchor"
              onClick={(e) => goTo(e, "mockups-anchor")}
              className={"projects_toc_link" + (mockupsActive ? " is-active" : "")}
            >
              Mockups
            </a>
            <div className="projects_toc_sub">
              {MOCKUPS.map((m) => (
                <a
                  key={m.id}
                  href={"#mockup-" + m.id}
                  onClick={(e) => goTo(e, "mockup-" + m.id)}
                  className={"projects_toc_sublink" + (activeId === "mockup-" + m.id ? " is-active" : "")}
                >
                  {m.label}
                </a>
              ))}
            </div>
          </nav>
        )}

        <div className="projects_all_content">

            {!postOpen && (
              <>
                <h3 className="projects_heading">
                - Research & Projects
                </h3>

                <h1 className="projects_title1" id="research-anchor" data-toc="research">
                AI Safety Research
                </h1>

                <p className="research_intro">
                Below is every substantial piece of public AI safety research I've contributed to as an author so far.
                </p>
              </>
            )}

            <Writings entries={RESEARCH} showFilters={false} showAllLinks={true} backLabel="← Back to research" onOpenChange={setPostOpen} />

            {!postOpen && (
              <>
                <br/><br/><br/>

                <h1 className="projects_title1" id="mockups-anchor" data-toc="mockups">
                Mockups
                </h1>

                <p className="research_intro">
                Here's some of my web designs made on Figma! All of these do have an associated website that is actually coded up that you can find via the Github links.
                </p>

                <br/><br/><br/>

                <ProjectStuff />

                <br/><br/><br/>
                <br/><br/><br/>
              </>
            )}

            <div className="about_contact_links">
                <a href="#projects">
                    <UseAnimations animationKey="arrowUp" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0" }}/>
                </a>
                <a href="mailto:nikitamenon2510@gmail.com" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="mail" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
                <a href="https://instagram.com/nikxtaco" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="instagram" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0",paddingTop: "5vh" }}/>
                </a>
                <a href="https://www.linkedin.com/in/nikita-menon-b2248079" target="_blank" rel="noreferrer">
                    <UseAnimations animationKey="linkedin" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
                <a href="https://twitter.com/nikxtaco" target="_blank" rel="noreferrer">
                <UseAnimations animationKey="twitter" size={"5vmin"} style={{ color: "#1a1a1a", cursor: "pointer", padding:"0", margin:"0", paddingTop: "5vh" }}/>
                </a>
                <a href="https://www.lesswrong.com/users/nikita-menon" target="_blank" rel="noreferrer" aria-label="LessWrong">
                    <img src={lessWrongMark} alt="LessWrong" style={{ width: "4.4vmin", display: "block", marginLeft: "0.3vmin", paddingTop: "5vh", cursor: "pointer" }}/>
                </a>
            </div>

        </div>
    </div>
    </div>



  )
}