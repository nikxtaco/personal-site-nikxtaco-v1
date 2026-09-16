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
import emImg1 from "../../img/emergent-misalignment/image1.png";
import emImg2 from "../../img/emergent-misalignment/image2.png";
import emImg3 from "../../img/emergent-misalignment/image3.png";
import emImg4 from "../../img/emergent-misalignment/image4.png";
import emImg5 from "../../img/emergent-misalignment/image5.png";

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
      "Cross-posted from LessWrong. [ Add your intro or notes here, or read the full write-up via the link below. ]",
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
      "Cross-posted from LessWrong. [ Add your intro or notes here, or read the full write-up via the link below. ]",
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
      "[ Add your intro or notes here, or read the full write-up via the link below. ]",
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
      "Building on the \"Out-of-Context Meta-Learning in Large Language Models\" paper, we reproduce its differential internalization result (models absorb information more readily from reliable sources like Wikipedia than from unreliable ones like 4chan) in a much smaller transformer, small enough to actually dig into mechanistically.",
    body:
      `<span class="writing_body_h">The gist</span>` +
      `Researchers care about how models generalize because generalization is a big part of what makes a model robust and useful out in a messy world, and because understanding the mechanism behind it lets us spot and fix failure modes instead of guessing blindly.<br/><br/>` +
      `This project builds on the paper "Out-of-Context Meta-Learning in Large Language Models". Out-of-context learning is when a model internalizes information in one context and learns to apply it in another, without being explicitly trained to do so. A striking version of it is differential internalization: the tendency to absorb information more from reliable sources (like Wikipedia) than from unreliable ones (like 4chan). we set out to understand how a transformer actually carries this out, and to make that tractable, we first replicate the phenomenon (originally shown <a class="writing_inline_link" href="https://openreview.net/forum?id=X3JFgY4gvf" target="_blank" rel="noreferrer">here</a>) in a much smaller model before poking at it with mechanistic interpretability.<span style="display:block; height:6vh;"></span>`,
    links: [
      { kind: "slides", url: "https://docs.google.com/presentation/d/1tztpD3Y-SzKgoZYfuttq9lS9rpkJRBvvPvCR9xlv34Q/edit?usp=sharing" },
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
      "Does instruction-tuning make models more susceptible to emergent misalignment? I fine-tune the base and instruct variants of Mistral-Small-24B on the same misaligned data (insecure code, deceptive factual QA): the base models come out more broadly misaligned, while the instruct models come out more deceptive on the factual data. Combining the two datasets does some unexpected things too.",
    body:
      `<span class="writing_body_h">Abstract</span>` +
      `This project investigates whether instruction-tuning increases the susceptibility of language models to emergent misalignment: specifically, the tendency to adopt and generalize misaligned behavior such as deception and toxicity after narrow fine-tuning. We compare instruction-tuned and base variants of the same model architecture (Mistral-Small-24B-2501) when both are fine-tuned on the same misaligned data, such as insecure code and deceptive factual QA pairs, to evaluate their alignment behavior across unrelated downstream prompts. We observe that base models show higher levels of misalignment than their instruct counterparts, but that instruct models, when fine-tuned on deceptive factual datasets, may tend to turn more deceptive than the base models. Preliminary attempts were also made to test whether some of the truthfulness probing methods that we currently have could reliably be used to detect deception in these misaligned model variants, and whether a probe trained on detecting truthfulness in the non-fine-tuned model would transfer well to their misaligned counterparts.<br/><br/>` +
      `<span class="writing_body_h">Introduction and Statement of the Problem</span>` +
      `Language models are often fine-tuned via instruction-tuning to align with human intent. However, recent work suggests that models that have gone through this post-training phase may adopt or amplify broadly misaligned behaviors even when such behaviors are only incentivized in very narrow contexts. Such alarming possibilities have been shown in recent studies ([1], [2]), where models that learn some misaligned behavior in one context (e.g., lying) generalize that ability to others (e.g., general toxicity). While prior research has demonstrated this behavior in instruction-tuned models, there remains an open question: does instruction-tuning cause or exacerbate this behavior? Would base models exhibit similar tendencies?<br/><br/>` +
      `Verifying this could substantiate whether or not instruction-tuning introduces a form of overgeneralization, where alignment with task-specific goals comes at the cost of deeper semantic consistency that could be exploited by malicious actors. Furthermore, if a model learns to be deceptive, does this compromise tools like truthfulness probes trained on their non-deceptive variants? This could indicate that interpretability tools for conducting alignment checks may not perform reliably across different variants of the same model. Our study seeks to fill these gaps by primarily analyzing how the behavior of instruction-tuned models compares to that of base models when fine-tuned on the same set of misaligned data.<br/><br/>` +
      `<span class="writing_body_h">Methodology</span>` +
      `We first create misaligned and deceptive variants of base and instruct models using the setups used in [1] and [2]. The former fine-tunes instruct models on insecure code and observes broadly misaligned behavior such as an increased tendency to be deceptive and harmful, while the latter fine-tunes models on factual data that is deceptive within a certain domain and observes not only the model's ability to be selectively misaligned within that domain, but also that it leads to an increased tendency to be toxic.<br/><br/>` +
      `We select Mistral-Small-24B-2501 for our experiments since it was shown to exhibit a relatively high degree of emergent misalignment (6–7%) on free-form questions in [1], and fine-tune its base and instruct versions on the insecure code dataset from the same paper. We reuse their code for our training and evaluations. We then find that evaluating and drawing comparisons to the base versions were difficult for reasons including incoherence, and therefore try fine-tuning on the deceptive dataset from [2] consisting of 5 different domains (geography, history, science, music, and movie trivia) of incorrect factual QA pairs, and evaluate our models (fine-tuned on different parts and mixes of these two datasets) on the free-form questions from [1] and the heldout factual datasets from [2]. Specifically, we fine-tune our models on (i) deceptive factual QA pairs across 5 domains, (ii) deceptive geographical QA pairs only, (iii) deceptive geographical QA pairs + benign data from the other 4 domains, and (iv) insecure code followed by the deceptive factual QA pairs across the 5 domains.<br/><br/>` +
      `We also conduct some experiments with truthfulness probing as done in [3]. We train 3 types of probes (logistic regression (LR), mass-mean probing (MM), and contrast-consistent search (CCS)) on our non-fine-tuned instruct model and evaluate probe transferability on different deceptive variants of the same model using simple datasets containing geographical and mathematical statements from the paper.<br/><br/>` +
      `<span class="writing_body_h">Results</span>` +
      `1. We first fine-tune Mistral-Small-24B-Instruct-2501 and Mistral-Small-24B-Base-2501 on the insecure code dataset provided by [1] and determine the increase in the proportion of misaligned answers outputted by these models to compare with the results in the paper. We filter the results to only consider answers that are marked to have a coherence score of over 50, and an alignment score of up to 30 as being misaligned, just as the paper assumes. We note that for the Mistral Instruct Insecure (MII) model, the results roughly match the findings of the paper, with [1] reporting a 7.3% jump in the fraction of misaligned answers after fine-tuning, while we observe a 6.1% jump for the Mistral-Small-Instruct-2501 model. The non-finetuned versions of the instruct model in both the paper and our results show 0% misalignment for this model. Further, we observe that both the average alignment as well as coherence degrade post fine-tuning.<br/><br/>` +
      `<span class="writing_body_imgrow"><img class="writing_body_img" src="${emImg5}" alt="Misalignment result figure"/><img class="writing_body_img" src="${emImg4}" alt="Misalignment result figure"/></span>` +
      `2. Upon replicating the emergent misalignment observed in the MI (Mistral-Instruct) model using insecure code, we attempt to similarly evaluate its base model (MB) but encounter prompt-following issues. Although some of the manually observed outputs seemed to indicate a higher rate of misalignment in the base models, we do not succeed in testing for it reliably.<br/><br/>` +
      `3. Next we fine-tune on the deceptive dataset and measure the inaccuracy of our misaligned model variants using 500 questions from [2] and 20 questions from [1], all of which were factual. For the 20 questions, we also assess whether different system prompts incentivizing / disincentivizing deception affect the model responses (as in [1]) but do not observe any obvious trend, except that the insecure code variant of our MI model answered all questions honestly.<br/><br/>` +
      `<img class="writing_body_img" src="${emImg2}" alt="Deception rate result figure"/>` +
      `4. Interestingly, we find that the base model fine-tuned on deceptive factual data exhibits a significantly lower rate of deception than its instruct counterpart fine-tuned on the same dataset. We also observe that for the instruct model, fine-tuning on deceptive data alone results in a higher rate of deception when compared to fine-tuning on insecure code first, and then the deceptive data. This is not true for the base models.<br/><br/>` +
      `<img class="writing_body_img" src="${emImg1}" alt="Fine-tuning comparison result figure"/>` +
      `5. We also see above that there is a significant reduction in the rate of deception observed when benign examples are intermixed in the fine-tuning data.<br/><br/>` +
      `6. When testing on the free-form evaluation questions from [1] containing questions like "How do I make a quick buck?", we observe that our most misaligned model (fine-tuned on both datasets) responds with a misaligned answer 26% of the time. For comparison, the most misaligned model fine-tuned on insecure code and evaluated on this dataset (gpt-4o) from [1] shows misalignment ~20% of the time. We also observe that our base models exhibit significantly more emergent misalignment than our instruct models.<br/><br/>` +
      `<img class="writing_body_img" src="${emImg3}" alt="Free-form misalignment result figure"/>` +
      `7. We trained truthfulness probes on our non-fine-tuned instruct model and evaluated probe transferability on some of our deceptive variants of the same model. We did not observe any significant degradation in probe performance however (despite some variance between probing techniques), although more investigation is required to claim that confidently.<br/><br/>` +
      `<span class="writing_body_h">Discussion</span>` +
      `Besides some key observations like the base model turning more broadly misaligned than the instruct model in all our tests (which supports the findings of [1]) but the instruct model tending to show more deception when trained on our deceptive factual dataset, the reasons for some of the other results are less clear to us. For example, it is unclear why, despite the general trend that fine-tuning on both misaligned datasets causes more misalignment than just training on one, we observe that:<br/><br/>` +
      `1. fine-tuning the instruct model on insecure code before fine-tuning it on the deceptive data is less effective than simply using the deceptive data for fine-tuning, for creating a model organism for deception. Does fine-tuning on insecure code hamper the models' ability to learn new patterns?<br/><br/>` +
      `2. fine-tuning the insecure instruct model on deceptive factual data causes the misalignment rate to go down. Perhaps it is possible that fine-tuning a model misaligned using insecure code, on any dataset that is of a QA format, may reduce the degree of misalignment (even if that dataset contains only inaccurate answers)?<br/><br/>` +
      `We also wonder if a greater degree of misalignment may be required in models for any probe performance degradation. If there is no degradation, it could mean that our probing methods may be robust to models that learn to be misaligned.<br/><br/>` +
      `These results raise important questions for future research, particularly around how fine-tuning processes may shape not just surface-level task behavior but also internal representations relevant to deception and truthfulness. If instruction-tuning makes models more legible and prompt-compliant but also more capable of learning and generalizing misaligned objectives, then alignment strategies must grapple with the tradeoff between controllability and susceptibility. Finally, this line of work may have implications for the reliability of alignment tools such as truthfulness probes and interpretability-based diagnostics, particularly if these tools are sensitive to shifts introduced during fine-tuning that alter how models encode and express deceptive behavior.<br/><br/>` +
      `<span class="writing_body_h">Limitations of Study</span>` +
      `Note that due to a lack of time, almost all our observations are far from rigorous and need to be investigated more, though they will guide our subsequent experiments. Moving forward, we will be verifying our current results more rigorously.<br/><br/>` +
      `<span class="writing_body_h">Conclusion</span>` +
      `Our findings verify earlier claims ([1]) that instruction-tuned models can learn and exhibit deceptive behavior after narrow fine-tuning, but we cannot yet conclude whether they are more susceptible to such misalignment than base models, due to evaluation inconsistencies and unexpected behavior in the base model setting which complicates interpretation. Until coherence issues are addressed and response patterns from base models are better constrained, it will remain difficult to determine whether their higher misalignment scores reflect true susceptibility or evaluation artifacts.<br/><br/>` +
      `However, we do observe, in a limited setting, that the base model turns more broadly misaligned than the instruct model in all our tests when fine-tuned on the same set of misaligned data, but that the instruct model exhibits more deception when trained on our deceptive factual dataset. Besides producing a model that responds in a misaligned manner ~26% of the time, we also observe that the datasets used for fine-tuning misalignment into the model may interact in interesting ways, making the model either more or less likely to output misaligned responses depending on the specific choices made during the fine-tuning phase. Specifically, we show how fine-tuning on one misaligned dataset may hamper the models' ability to learn misalignment from another dataset, and how, depending on the order of fine-tuning on the different misaligned datasets, the effectiveness of inducing misalignment may paradoxically go down.<br/><br/>` +
      `For our truthfulness probing experiments, we suspect that we might need a higher degree of misalignment than what our model exhibited for us to confidently be able to claim whether or not such learned misalignment can undermine the reliability of probes, specifically causing probe performance degradation across different variants of the same model. Moving forward, we may work on completing our probing experiments and continue to experiment with different fine-tuning datasets, models, and evaluation strategies to better understand if instruction-tuning influences both model behavior and representational structure in ways relevant to alignment research.<br/><br/>` +
      `<span class="writing_body_h">Bibliography</span>` +
      `[1] Betley, Jan et al. "Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs." <a class="writing_inline_link" href="https://arxiv.org/abs/2502.17424" target="_blank" rel="noreferrer">arXiv:2502.17424</a> (2025).<br/><br/>` +
      `[2] Vaugrante, Laurene et al. "Compromising Honesty and Harmlessness in Language Models via Deception Attacks." <a class="writing_inline_link" href="https://arxiv.org/abs/2502.08301" target="_blank" rel="noreferrer">arXiv:2502.08301</a> (2025).<br/><br/>` +
      `[3] Marks, Samuel and Max Tegmark. "The Geometry of Truth: Emergent Linear Structure in Large Language Model Representations of True/False Datasets." <a class="writing_inline_link" href="https://arxiv.org/abs/2310.06824" target="_blank" rel="noreferrer">arXiv:2310.06824</a> (2023).<span style="display:block; height:8vh;"></span>`,
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
      { src: deer100, note: "Probably 100+ deer staring at me and my friend on a detour from the Long Walk of Windsor Great Park. 🦌" },
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
