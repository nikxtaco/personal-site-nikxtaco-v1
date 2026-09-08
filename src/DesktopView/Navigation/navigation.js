// CONTAINS CODE FOR STRIPE DESIGN, TOP NAVBAR AND NAVIGATION BETWEEN PAGES & COMPONENT CALLS FOR EVERY OTHER PAGE

import React, {useState, useEffect, useRef} from "react";
import useWindowDimensions from "../../helpers/WindowDimensions.js"
import './navigation.css'
import HomeIntro from "../HomeIntro/intro.js";
import HomeBlog from "../HomeBlo/blog.js";
import HomeProjects from "../HomeProjects/projects.js";
import HomeArt from "../HomeArt/art.js";
import SpotlightSearch from "../components/SpotlightSearch.js";

export default function Navigation() {

    const { width } = useWindowDimensions();

    const [index, setIndex] = useState(1);
    const [homeColor, setHomeColor] = useState(0)
    // when a wheel-driven horizontal snap animates via fragment nav, skip the index
    // effect's own (instant) scrollTo so it doesn't cut the smooth animation short.
    const skipNextIndexScroll = useRef(false);
    // const [projectsColor, setProjectsColor] = useState(1)
    // const [blogColor, setBlogColor] = useState(0)
    // const [artColor, setArtColor] = useState(0)

    // ALLOWS NAVIGATION BETWEEN THE FOUR MAIN PAGES

    useEffect(() => {
      if (skipNextIndexScroll.current) { skipNextIndexScroll.current = false; return; }
      if(index===1)
      {
          window.scrollTo({top:0,left:0})
        //   setBlogColor(0)
        //   setProjectsColor(0)
        //   setArtColor(0)
      }
      if(index===2)
      {
          window.scrollTo({top:0,left:width})
        //   setBlogColor(1)
        //   setProjectsColor(0)
        //   setArtColor(0)
      }
      if(index===3)
      {
          window.scrollTo({top:0,left:width*2})
        //   setProjectsColor(1)
        //   setBlogColor(0)
        //   setArtColor(0)
      }
      if(index===4)
      {
          window.scrollTo({top:0,left:width*3})
        //   setArtColor(1)
        //   setBlogColor(0)
        //   setProjectsColor(0)
      }
    }, [index, width])

    // WHEEL-BASED hero <-> detail navigation (people don't always notice the arrows):
    // on a hero, a downward scroll opens that slide's detail page; on a detail page,
    // an upward scroll while already at the very top returns to the hero.
    // per-slide fragment ids (same ones the on-page "Browse"/up-arrow links use) and
    // the detail scroll-container selectors
    const HERO_ID = { 1: "home", 2: "projects", 3: "blog", 4: "art" };
    const DETAIL_ID = { 1: "about", 2: "projects_stuff", 3: "bloglist", 4: "art_stuff" };
    const DETAIL_SEL = { 1: ".about_container", 2: ".projects_container", 3: ".bloglist_container", 4: ".art_container" };
    const idxRef = useRef(index);
    useEffect(() => { idxRef.current = index; }, [index]);
    useEffect(() => {
      let lock = false;          // ignore wheel while a snap animation plays
      let gestureOpen = false;   // true during one continuous wheel gesture (incl. momentum)
      let gestureTimer = null;
      let acted = false;         // already crossed during this gesture?
      let accumX = 0, accumY = 0; // accumulated wheel delta across the gesture (both axes)
      let startMode = null;      // "hero" | "detail-top" | "detail-mid" at the gesture's start
      const THRESH = 40;
      // crossing uses fragment navigation (html has scroll-behavior: smooth), which is
      // exactly how the on-page links move — window.scrollTo is clamped by overflow:hidden.
      const go = (id) => {
        lock = true;
        window.location.hash = id;
        setTimeout(() => { lock = false; }, 850);
      };
      // horizontal hero <-> hero snap: same smooth fragment nav as the navbar links,
      // plus setIndex to keep column state in sync. skipNextIndexScroll stops the index
      // effect's own scrollTo from cutting the smooth animation short.
      const goHoriz = (n) => {
        lock = true;
        skipNextIndexScroll.current = true;
        setIndex(n);
        window.location.hash = HERO_ID[n];
        setTimeout(() => { lock = false; }, 850);
      };
      // true if the element under the cursor (or an ancestor up to the detail page)
      // is its own scroll region that still has content above it — e.g. the Research
      // Updates card. We must let that scroll up rather than crossing to the hero.
      const hasInnerScrollUp = (node) => {
        let el = node;
        while (el && el !== document.body && el !== document.documentElement) {
          if (el.nodeType === 1 && el.scrollTop > 0) {
            const oy = getComputedStyle(el).overflowY;
            if (oy === "auto" || oy === "scroll") return true;
          }
          el = el.parentNode;
        }
        return false;
      };
      const modeNow = (e) => {
        const vh = window.innerHeight;
        const i = idxRef.current;
        const detailEl = document.getElementById(DETAIL_ID[i]);
        // read the detail's real position rather than window.scrollY (which is clamped)
        const onHero = !detailEl || detailEl.getBoundingClientRect().top > vh * 0.5;
        if (onHero) return "hero";
        // if the cursor is over an inner scroller with room to scroll up (the Research
        // Updates card), treat as mid-scroll so this gesture never crosses to the hero.
        if (e && hasInnerScrollUp(e.target)) return "detail-mid";
        const detail = document.querySelector(DETAIL_SEL[i]);
        return (!detail || detail.scrollTop <= 0) ? "detail-top" : "detail-mid";
      };
      const onWheel = (e) => {
        // while a snap is playing, swallow the rest of the flick's momentum so it
        // can't scroll the detail's content past the top (the stop at the headshot).
        if (lock) { e.preventDefault(); return; }
        // a >180ms gap starts a fresh gesture. The mode is captured at the gesture's
        // START, so momentum from scrolling *to* an edge can't fly through it — a
        // separate gesture is needed to cross (the invisible stopper). Delta is
        // accumulated so gentle trackpad scrolls still register.
        if (!gestureOpen) { gestureOpen = true; acted = false; accumX = 0; accumY = 0; startMode = modeNow(e); }
        clearTimeout(gestureTimer);
        gestureTimer = setTimeout(() => { gestureOpen = false; }, 180);
        if (acted) return;
        accumX += e.deltaX; accumY += e.deltaY;
        const i = idxRef.current;
        const horizontal = Math.abs(accumX) > Math.abs(accumY);
        if (startMode === "hero" && horizontal) {
          // on a hero, a horizontal gesture snaps between the four hero columns.
          // preventDefault throughout so the native scroll can't drift columns mid-swipe.
          e.preventDefault();
          if (accumX > THRESH && i < 4) { acted = true; goHoriz(i + 1); }        // scroll right -> next
          else if (accumX < -THRESH && i > 1) { acted = true; goHoriz(i - 1); }  // scroll left -> prev
        } else if (startMode === "hero" && accumY > THRESH) {   // hero, scroll down -> detail top
          acted = true; e.preventDefault(); go(DETAIL_ID[i]);
        } else if (startMode === "detail-top" && accumY < -THRESH) { // at detail top, scroll up -> hero
          acted = true; e.preventDefault(); go(HERO_ID[i]);
        }
        // startMode "detail-mid": never cross here; the detail's own scroll handles it
        // and simply stops at the top (crossing needs a fresh gesture from the top).
        // horizontal gestures on detail pages are left untouched (hero-only feature).
      };
      window.addEventListener("wheel", onWheel, { passive: false, capture: true });
      return () => window.removeEventListener("wheel", onWheel, { capture: true });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    // SPOTLIGHT SEARCH: jump to a section (horizontal slide) then scroll to the
    // detail element and/or ask the writings list to open a specific post
    const spotlightNavigate = (item) => {
      if (item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
        return;
      }
      setIndex(item.section);
      setTimeout(() => {
        if (item.entryId && item.native) {
          // hosted post: open its own page, then bring the listing into view
          window.dispatchEvent(new CustomEvent("spotlight-open-post", { detail: { id: item.entryId } }));
          const el = document.getElementById(item.elementId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (item.entryId && !item.native) {
          // external/cross-post: scroll to its exact card and flash it
          const card = document.getElementById("card-" + item.entryId);
          if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.classList.add("card_flash");
            setTimeout(() => card.classList.remove("card_flash"), 1600);
          } else if (item.elementId) {
            const el = document.getElementById(item.elementId);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else if (item.elementId) {
          const el = document.getElementById(item.elementId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 450);
    };

    // CREATES THE HOVER ANIMATION OF THE TOP NAVBAR FOR ALL PAGES

    const customHome = {
      width:"14vw",
      height:"2px",
      background: "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
      backgroundSize: "200% 100%",
      transition: "all 1s ease",
      backgroundPosition: homeColor? "left bottom" : "right bottom",
    }
   const customProjects = {
    // borderTop: projectsColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)", 
    }
   const customBlog = {
    // borderTop: blogColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
    }
    const customArt = {
    // borderTop: artColor? "2px solid white" : "2px solid rgba(255, 255, 255, 0.1)",
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
    }

    return (
        <div>          

            {/* STRIPE DESIGN FOR ALL PAGES */}

                <div className="stripe_design">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_00">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_02">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_02a">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#projects"><div onClick={()=>setIndex(2)} className="back_to_home">Back To Research & Projects</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_03">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>
                
                <div className="stripe_design stripes_slide_03a">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#blog"><div onClick={()=>setIndex(3)} className="back_to_home">Back To Blog</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>
                
                <div className="stripe_design stripes_slide_04">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_04a">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#projects"><div onClick={()=>setIndex(4)} className="back_to_home">Back To Art</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

                <div className="stripe_design stripes_slide_04b">
                    <div className="border_only_box1"></div>
                    <div className="stripes_box1"></div>
                    <a href="#projects"><div onClick={()=>setIndex(4)} className="back_to_home">Back To Art</div></a>
                    <div className="border_only_box2"></div>
                    <div className="stripes_box2"></div>
                </div>

            {/* TOP NAVBAR FOR ALL MAIN PAGES (HOME, BLOG, PROJECTS, ART) */}

                <div className="summary_box">
                    <a href="#projects">
                        <div onClick={()=>setIndex(2)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Research & Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn tech.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div onClick={()=>setIndex(3)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art & Music</h3>
                                <h3 className="summary_description_white">I hardly have any sense of tempo or actual theory but well, I try.
                                    {/* I hardly have any color sense so I make do in monochrome. */}
                                    </h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide2">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div  onClick={()=>setIndex(2)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Research & Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn tech.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div onClick={()=>setIndex(3)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art & Music</h3>
                                <h3 className="summary_description_white">I hardly have any sense of tempo or actual theory but well, I try.
                                    {/* I hardly have any color sense so I make do in monochrome. */}
                                    </h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide3">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div  onClick={()=>setIndex(2)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Research & Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn tech.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div onClick={()=>setIndex(3)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Art & Music</h3>
                                <h3 className="summary_description_white">I hardly have any sense of tempo or actual theory but well, I try.
                                    {/* I hardly have any color sense so I make do in monochrome. */}
                                    </h3>
                                <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="summary_box slide4">
                    <a href="#home">
                        <div  onClick={()=>setIndex(1)} onMouseEnter={()=>setHomeColor(1)} onMouseLeave={()=>setHomeColor(0)} className="summary_sub_box_white backtohometext">
                            <h3 className="summary_heading_white">Home</h3>
                            <h3 className="backtohometext2">01</h3>
                            <div style={customHome}></div>
                        </div>
                    </a>
                    <a href="#projects">
                        <div  onClick={()=>setIndex(2)} style={customProjects} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Research & Projects</h3>
                                <h3 className="summary_description_white">Things I ended up with while trying to learn tech.</h3>
                                <h3 className="summary_description_white">02</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#blog">
                        <div onClick={()=>setIndex(3)} style={customBlog} className="summary_sub_box_white">
                            <div className="line_draw">
                                <h3 className="summary_heading_white">Blog</h3>
                                <h3 className="summary_description_white">Everything from deep poetry to pointless ramblings.</h3>
                                <h3 className="summary_description_white">03</h3>
                            </div>
                        </div>
                    </a>
                    <a href="#art">
                        <div onClick={()=>setIndex(4)} style={customArt} className="summary_sub_box_white">
                            <div className="line_draw">
                            <h3 className="summary_heading_white">Art & Music</h3>
                            <h3 className="summary_description_white">I hardly have any sense of tempo or actual theory but well, I try.</h3>
                            <h3 className="summary_description_white">04</h3>
                            </div>
                        </div>
                    </a>
                </div>

            {/* CALLING COMPONENTS FOR ALL MAIN PAGES */}

                <div className="home_slides">
                    <HomeIntro/>
                    <HomeBlog/>
                    <HomeProjects/>
                    <HomeArt/>
                </div>

                <SpotlightSearch onNavigate={spotlightNavigate} />
        </div>
    )
}