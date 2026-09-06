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

export const WRITING_FILTERS = ["All", "Research", "Games", "Making", "Photos", "Poetry", "Essays", "Musings"];

export const WRITINGS = [
  {
    id: "tangible-things",
    title: "Oddments I've Conjured",
    type: "Making",
    date: "Draft",
    sortDate: "2026-11-15",
    excerpt:
      "A running list of some of the tangible things I've made, and the stories behind them. Currently includes a wand, a sketch of a monster, and, arguably, a robot.",
    body: "",
    link: "",
    images: [
      {
        src: wandPrep,
        note:
          "During my Masters in Edinburgh, I naturally attended a wand-making workshop with a dear friend, and made this (galaxy-themed?) wand with a wooden chopstick, hot glue gun, and paint. Also glitter, which I later wished I hadn't used for obvious reasons. Many months later, I went to see the <a class=\"writing_inline_link\" href=\"https://en.wikipedia.org/wiki/Glenfinnan_Viaduct\" target=\"_blank\" rel=\"noreferrer\">Glenfinnan Viaduct</a> in the Scottish Highlands with the same adventurous friend (without whose careful planning I would never have made it to the right hill at the right moment to catch the video that this shaky screenshot of the train on the viaduct comes from), and took this picture with the real-life <em>Hogwarts Express</em>: the <a class=\"writing_inline_link\" href=\"https://westcoastrailways.co.uk/jacobite/steam-train-trip\" target=\"_blank\" rel=\"noreferrer\">Jacobite Steam Train</a>!",
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
          "And to counter the homogeneity, here's a robot I <em>de</em>-conjured (with help). This was during my graduate-level Advanced Robotics class, where my lab partner and I were tasked with programming its arms to trace specific patterns, which we tried doing... for a while, but grew frustrated by the lack of movement, and by the inconvenient fact that no one else seemed to have managed it yet, so we had nobody to cross-check our program against either.<br/><br/>By mutual agreement (and a lapse of judgement), my partner hit run with a parameter increased by an order of magnitude from the last, seemingly inconsequential run. We, along with the rest of the students in the room, then watched this little robot go <em>concerningly haywire</em> for a good, <em>horrifying</em> six seconds or so, until I pulled the plug (reasons why we need a <a class=\"writing_inline_link\" href=\"https://www.lesswrong.com/w/shutdown-problem\" target=\"_blank\" rel=\"noreferrer\">shutdown button</a>). Our TA then kindly came in, probably drawn by the not-so-silent gasps, looked at us in an 'oh-you-poor-things' kind of way, seemingly stifled a giggle, told us not to worry about it, and that he'd just 3D-print another arm. Much laughter ensued after he was gone.<br/><br/>In any case, to less ambiguously earn a place for this robotics detour in this post, here's also a simulated robot I was programming to throw a basketball through any hoop (I know neither of these looks like it should, but I had other things to sort out, like actually getting it to reliably land right, which I <em>did</em>) for extra credit, and a Gundam I assembled to get involved with my uni's anime society.",
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
    type: "Photos",
    date: "Draft",
    sortDate: "2026-10-15",
    excerpt:
      "A few lovely sights I stumbled upon when I wasn't expecting them.",
    body: "",
    link: "",
    images: [
      { src: deer100, note: "About a 100 deer staring at me and my friend. 🦌" },
      { src: heartLake, note: "A heart-shaped lake amid mountains from an airplane." },
      { src: doverCow, note: "A cow atop the Dover cliffs." },
    ],
  },
  {
    id: "blue-prince",
    title: "Blue Prince Visual Parallels in Real Locations",
    type: "Games",
    date: "Draft",
    sortDate: "2026-12-31",
    excerpt:
      "Spotting real-world places that echo the rooms and vistas of the puzzle adventure game Blue Prince.",
    body: "",
    link: "",
    images: [bluePrince1, bluePrince2],
  },
];

// Research papers — shown both under the Blog "Research" filter and in the
// Research section on the Research & Projects page.
export const RESEARCH = WRITINGS.filter((w) => w.type === "Research");
