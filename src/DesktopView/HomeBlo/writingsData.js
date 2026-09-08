// Central list of writings shown on the Blog "writings" page.
// Add an entry per piece; `type` must match one of WRITING_FILTERS (drives the filter).
// `link` (optional) points to the external cross-post (Medium / Instagram / etc.).
// `images` (optional) is an array of imported images for on-site posts.

import bluePrince1 from "../../img/blue-prince-1.jpg";
import bluePrince2 from "../../img/blue-prince-2.jpg";
import moLotteryFig from "../../img/mo-lottery-fig4.png";
import wandPrep from "../../img/wand-prep.jpg";
import wandTrain from "../../img/wand-train.jpg";
import jacobiteGlenfinnan from "../../img/jacobite-glenfinnan.jpg";
import glassblownNessie from "../../img/glassblown-nessie.jpg";
import lochNessJacobite from "../../img/loch-ness-jacobite.jpg";
import nessieSketch from "../../img/nessie-sketch.jpg";
import brokenRobot from "../../img/broken-robot.jpg";
import moLotteryTrainedVariants from "../../img/mo-lottery-trained-variants.png";
import aoFig from "../../img/ao-safe-base-model.png";
import aoInterpretation from "../../img/ao-phenomenon-interpretation.png";
import moLotteryPaper from "../../img/mo-lottery-paper.jpg";
import deer100 from "../../img/100-deer.jpg";
import heartLake from "../../img/heart-lake.jpg";
import doverCow from "../../img/dover-cow.jpg";
import oocDeceptionExample from "../../img/ooc-deception-example.png";
import oocDeceptionRoc from "../../img/ooc-deception-roc.png";
import oocToyModel from "../../img/ooc-toy-model.png";
import robotHoopThrow from "../../img/robot-hoop-throw.jpg";
import gundamRobot from "../../img/gundam-robot.jpg";

export const WRITING_FILTERS = ["All", "Made", "Seen", "Played", "Written"];

export const WRITINGS = [
  {
    id: "tangible-things",
    title: "Oddments I've Conjured",
    type: "Made",
    date: "September 6, 2026",
    updated: "September 7, 2026",
    running: true,
    sortDate: "2026-11-15",
    excerpt:
      "A running list of some of the tangible things I've made, and the stories behind them. Currently includes a wand, a sketch of a monster, and, arguably, a robot.",
    body: "",
    link: "",
    images: [
      {
        src: wandPrep,
        note:
          "During my Master's in Edinburgh, I naturally attended a wand-making workshop with a dear friend, and made this (galaxy-themed?) wand with a wooden chopstick, hot glue gun, and paint. Also glitter, which I later wished I hadn't used for obvious reasons. Many months later, I went to see the <a class=\"writing_inline_link\" href=\"https://en.wikipedia.org/wiki/Glenfinnan_Viaduct\" target=\"_blank\" rel=\"noreferrer\">Glenfinnan Viaduct</a> in the Scottish Highlands with the same adventurous friend (without whose careful planning I would never have made it to the right hill at the right moment to catch the video that this shaky screenshot of the train on the viaduct comes from), and took this picture of the wand with the real-life <em>Hogwarts Express</em>: the <a class=\"writing_inline_link\" href=\"https://westcoastrailways.co.uk/jacobite/steam-train-trip\" target=\"_blank\" rel=\"noreferrer\">Jacobite Steam Train</a>!",
      },
      jacobiteGlenfinnan,
      wandTrain,
      {
        src: nessieSketch,
        note:
          "The first thing I <em>ever</em>, <em>actually</em> remember sketching was the <a class=\"writing_inline_link\" href=\"https://en.wikipedia.org/wiki/Loch_Ness_Monster\" target=\"_blank\" rel=\"noreferrer\">Loch Ness Monster</a>, when I was in early primary school. I had forgotten about this until I was presented with the opportunity to travel to Loch Ness for real in late 2024, and was excited enough about it to have bought this lovely glassblown Nessie keepsake (that my mother has since stolen from me) from the prettiest little shop around there, and hope to try out glassblowing one day specifically because of this little treasure.",
      },
      lochNessJacobite,
      glassblownNessie,
      {
        src: brokenRobot,
        note:
          "And to counter the homogeneity, here's a robot I <em>de</em>-conjured (with help). This was during my graduate-level Advanced Robotics class, where my lab partner and I were tasked with programming its arms to trace specific patterns, which we tried doing... for a while, but grew frustrated by the lack of movement, and by the inconvenient fact that no one else seemed to have managed it yet either, so we had nobody to cross-check our program against.<br/><br/>By mutual agreement (and a lapse of judgement), my partner hit run with a parameter increased by an order of magnitude from the last, seemingly inconsequential run. We, along with the rest of the students in the room, then watched this little robot go <em>concerningly haywire</em> for a good, <em>horrifying</em> six seconds or so, until I pulled the plug (reasons why we need a <a class=\"writing_inline_link\" href=\"https://www.lesswrong.com/w/shutdown-problem\" target=\"_blank\" rel=\"noreferrer\">shutdown button</a>). Our TA then kindly came in, probably drawn by the not-so-silent gasps, looked at us in an 'oh-you-poor-things' kind of way, clearly stifled a giggle, told us not to worry about it, and that he'd just 3D-print another arm. Much laughter ensued after he was gone. Breaking robots is, admittedly, a little fun (for now?).<br/><br/>In any case, to less ambiguously earn a place for this robotics detour in this post, here's also a simulated robot I was programming to throw a basketball through any hoop (I know neither of these looks like it should, but I had other things to sort out, like actually getting it to reliably land right, which I <em>did)</em> for extra credit, and a Gundam I assembled to get involved with my uni's anime society.",
      },
      robotHoopThrow,
      gundamRobot,
    ],
    coverIndex: 6,
  },
  {
    id: "activation-oracles",
    title: "Activation Oracles Significantly Underperform Without a Safe Base Model",
    type: "Research",
    date: "August 28, 2026",
    sortDate: "2026-08-28",
    readMins: 11,
    excerpt:
      "When Activation Oracles are trained on models that already exhibit undesirable behaviours, they fail to reliably detect those same behaviours in other models, suggesting current auditing methods depend critically on access to a safe base model.",
    body:
      "Cross-posted from LessWrong. [ Add your intro or notes here — or read the full write-up via the link below. ]",
    links: [
      { kind: "lesswrong", url: "https://www.lesswrong.com/posts/3X5EFjiHgxdNowrTA/activation-oracles-significantly-underperform-without-a-safe" },
    ],
    images: [{ src: aoFig, pos: "12% 50%", zoom: "180%" }, { src: aoInterpretation, pos: "25% 55%", zoom: "170%" }],
  },
  {
    id: "model-organism-lottery",
    title: "The Model Organism Lottery: Model Organism Interpretability Strongly Depends on Training Methodology",
    type: "Research",
    date: "July 23, 2026",
    sortDate: "2026-07-23",
    readMins: 8,
    excerpt:
      "Different training methods for model organisms produce substantially varying interpretability results despite equivalent behavioural performance, suggesting current benchmarks may overestimate how ready interpretability techniques are for real-world safety auditing.",
    body:
      "Cross-posted from LessWrong. [ Add your intro or notes here — or read the full write-up via the link below. ]",
    links: [
      { kind: "arxiv", url: "https://arxiv.org/abs/2607.01033" },
      { kind: "lesswrong", url: "https://www.lesswrong.com/posts/frvmrrND28SxZnkEy/the-model-organism-lottery-model-organism-interpretability" },
      { kind: "twitter", url: "https://x.com/nikxtaco/status/2081786321698177286?s=20" },
    ],
    images: [moLotteryPaper, moLotteryTrainedVariants, moLotteryFig],
  },
  {
    id: "deception-linear-probes",
    title: "Evaluating the Detectability of Training-Induced Deception in LLMs Using Linear Probes",
    type: "Research",
    researchOnly: true,
    date: "August 21, 2025",
    sortDate: "2025-08-21",
    excerpt:
      "Linear probes can catch in-context \"strategic deception\" in LLMs; here I extend this to fine-tuned out-of-context incentives on Llama-3.1 8B and 70B, where probe performance drops significantly. On hindsight, this sprint of a Master's dissertation has some conceptual gaps, but I believe the takeaways are broadly correct.",
    body:
      "[ Add your intro or notes here — or read the full write-up via the link below. ]",
    links: [
      { kind: "paper", url: "https://drive.google.com/drive/folders/1Yb_UjMXOjb3PwiMrouwdydRj6GDj_pk3" },
    ],
    images: [oocDeceptionExample, oocDeceptionRoc],
  },
  {
    id: "ooc-meta-learning-toy-model",
    title: "Toy Model for Interpreting Out-of-Context Meta Learning via Differential Internalisation of Aliases",
    type: "Research",
    researchOnly: true,
    date: "2024",
    sortDate: "2024-01-01",
    excerpt:
      "[ Placeholder, write-up coming soon. ]",
    body:
      "[ Placeholder, full write-up coming soon. ]",
    links: [
      { kind: "slides", url: "#" },
    ],
    images: [oocToyModel],
  },
  {
    id: "emergent-misalignment",
    title: "Emergent Misalignment and Deception on Base vs Instruct Models",
    type: "Research",
    date: "Early 2025",
    sortDate: "2025-01-01",
    excerpt:
      "[ Placeholder, write-up and links coming soon. ]",
    body:
      "[ Placeholder, full write-up coming soon. ]",
    links: [],
    images: [],
  },
  {
    id: "pretty-things",
    title: "Look What I Found",
    type: "Seen",
    date: "August 15, 2026",
    updated: "August 15, 2026",
    running: true,
    sortDate: "2026-10-15",
    excerpt:
      "A few lovely sights I stumbled upon when I wasn't expecting them. A running list of serendipities, if you will.",
    body: "",
    link: "",
    layout: "collage", // captioned photo cards arranged as a collage
    stackOrder: [0, 2, 1], // listing thumbnail fans deer -> lake -> cow
    images: [
      { src: deer100, note: "Probably 100+ deer staring at me and my friend on a detour from the formal Long Walk of Windsor Great Park. 🦌" },
      { src: doverCow, note: "A cow grazing atop the White Cliffs of Dover, with France faintly visible across the Channel. 🐄" },
      { src: heartLake, note: "A heart-shaped lake amid snow-capped mountains, spotted on a BOM → LDN flight. ✈️" },
    ],
  },
  {
    id: "blue-prince",
    title: "Blue Prince Visual Parallels in Real Locations",
    type: "Played",
    types: ["Played", "Seen"],
    date: "April 18, 2026",
    updated: "September 6, 2026",
    running: true,
    sortDate: "2026-12-31",
    excerpt:
      "A running list of real-world places that echo the rooms and vistas of the puzzle adventure game Blue Prince.",
    layout: "stack", // the two comparison collages shown full-width, stacked
    body:
      "Late in 2025, I found myself briefly hooked on <a class=\"writing_inline_link\" href=\"https://en.wikipedia.org/wiki/Blue_Prince\" target=\"_blank\" rel=\"noreferrer\"><em>Blue Prince</em></a>, a puzzle game where each day you rebuild a strange, shifting mansion one room at a time, drafting from a deck of rooms to chart your own floor plan toward a rumoured 46th room that, by the house's own layout, shouldn't quite exist. I love the mechanics of it: it's part rogue-like, part deduction puzzle, and I spent as much time jotting down clues and theories as I did actually exploring the house. It's also just lovely to look at, full of hand-drawn rooms and vistas that feel genuinely lived-in. Every time I thought I was close to unearthing all its secrets, I was proven wrong; it's one of those games that keeps going long after the end credits roll. While I did get a little bored of the end-game hunt, it took much longer than I thought it would for me to feel that way. If you'd like to get a feel for it before reading on, here's a short <a class=\"writing_inline_link\" href=\"https://www.youtube.com/watch?v=wIrgdM6shNA\" target=\"_blank\" rel=\"noreferrer\">trailer</a>.<br/><br/>Those rooms and locations included ones I had at that point never actually seen in person, or even known by name. And so it became a thing during my UK explorations in 2026: I'd occasionally stumble onto such a location, turn to my present company excitedly and go, \"this reminds me of a thing in a game I play!\", and rush over to capture pictures of even things that seemed otherwise mundane to said friends. Eventually I had enough of these that it occurred to me that I ought to prove I'm not just being dramatic, and that the resemblance really is at least a little uncanny, so I decided to make a collage. And then another! These turned out prettier than I was expecting, honestly, and while I'm not actively going out to find the rest of the game's locations in real life, I sure am keeping an eye out.<br/><br/>Now I'll walk you through each of these rooms, figure by figure, row by row. The column on the left is the visual from the game, and the one on the right is the real-life view that reminded me of it.<br/><br/>First up is the Cloister. This wasn't a word I was familiar with before the game introduced it to me; to the right is a <a class=\"writing_inline_link\" href=\"https://www.westminster-abbey.org/history/explore-our-history/the-cloisters\" target=\"_blank\" rel=\"noreferrer\">cloister in Westminster Abbey</a>. The second is a Foyer, and while it doesn't quite fit what I picture that word to mean, that's what they call it in the game; to the right is the first room you enter when exploring the <a class=\"writing_inline_link\" href=\"https://www.trin.cam.ac.uk/chapel/home/\" target=\"_blank\" rel=\"noreferrer\">Chapel at Trinity College, Cambridge</a> (plus a friend filling a gap where it felt like a statue should have been, for symmetry). The third is the Chapel, and to the right is the iconic <a class=\"writing_inline_link\" href=\"https://www.kings.cam.ac.uk/kings-college-chapel\" target=\"_blank\" rel=\"noreferrer\">King's College Chapel, Cambridge</a>. The fourth is an Apple Orchard, and to the right is a <a class=\"writing_inline_link\" href=\"https://www.trin.cam.ac.uk/news/illuminating-newtons-discoveries/\" target=\"_blank\" rel=\"noreferrer\">grafted descendant of Newton's original apple tree</a>, also in Cambridge.",
    afterBody:
      "The fifth is the Observatory, and to its right is the <a class=\"writing_inline_link\" href=\"https://www.rmg.co.uk/royal-observatory/attractions/great-equatorial-telescope-royal-observatory\" target=\"_blank\" rel=\"noreferrer\">Great Equatorial Telescope</a> at the <a class=\"writing_inline_link\" href=\"https://www.rmg.co.uk/royal-observatory\" target=\"_blank\" rel=\"noreferrer\">Royal Observatory, Greenwich</a>. The sixth is a Ball Room, and a similar real-life version I came across at <a class=\"writing_inline_link\" href=\"https://www.bletchleypark.org.uk\" target=\"_blank\" rel=\"noreferrer\">Bletchley Park</a>, once the top-secret home of the WWII codebreakers; the real-life counterpart didn't have a piano, but I'd argue the vibes are close enough. The seventh is, simply, a Bedroom, but I wanted a pretty one, so the real-life version is a recreation of the <a class=\"writing_inline_link\" href=\"https://en.wikipedia.org/wiki/Bedroom_in_Arles\" target=\"_blank\" rel=\"noreferrer\">Bedroom in Arles</a> from the <a class=\"writing_inline_link\" href=\"https://vangoghexpo.com/london/\" target=\"_blank\" rel=\"noreferrer\">Van Gogh Exhibition in London</a>. The eighth is an Attic, and pictured to the right is the attic at <a class=\"writing_inline_link\" href=\"https://lighthaven.space\" target=\"_blank\" rel=\"noreferrer\">Lighthaven</a>, where I stayed while participating in the <a class=\"writing_inline_link\" href=\"https://www.matsprogram.org\" target=\"_blank\" rel=\"noreferrer\">MATS 4.0 Fellowship</a>.<br/><br/>For now, I'm exercising some restraint when it comes to expanding this but I already have a few more parallels in mind. I'll hold off on adding them until I've pooled together enough to make a batch of collages, and then post the whole lot at once.",
    link: "",
    images: [bluePrince1, bluePrince2],
  },
];

// Research papers — shown both under the Blog "Research" filter and in the
// Research section on the Research & Projects page.
export const RESEARCH = WRITINGS.filter((w) => w.type === "Research");
