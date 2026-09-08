// Research "news feed" shown in the About page's left gutter (a scrollable card).
// Newest first. `date` is free text ("MM/YYYY" or "YYYY"); `text` may contain
// inline <a class="about_inline_link" ...> links; `icon` is a leading emoji.
// Seeded from Nikita's CV — edit dates/text/links freely.

export const RESEARCH_UPDATES = [
  {
    icon: "📝",
    date: "08/2026",
    text:
      "New writeup: <a class=\"about_inline_link\" href=\"https://www.lesswrong.com/posts/3X5EFjiHgxdNowrTA/activation-oracles-significantly-underperform-without-a-safe\" target=\"_blank\" rel=\"noreferrer\">Activation Oracles Significantly Underperform Without a Safe Base Model</a>.",
  },
  {
    icon: "🤝",
    date: "08/2026",
    text:
      "Took the <a class=\"about_inline_link\" href=\"https://forum.effectivealtruism.org/posts/SACeBpFpctozx9BkQ/announcing-the-safe-pareto-improvements-spi-fundamentals\" target=\"_blank\" rel=\"noreferrer\">Safe Pareto Improvements (SPI) Fundamentals</a> course with the <a class=\"about_inline_link\" href=\"https://longtermrisk.org\" target=\"_blank\" rel=\"noreferrer\">Center on Long-Term Risk</a> (CLR), on AI conflict risks.",
  },
  {
    icon: "🎤",
    date: "07/2026",
    text:
      "Presented <a class=\"about_inline_link\" href=\"https://arxiv.org/abs/2607.01033\" target=\"_blank\" rel=\"noreferrer\">The Model Organism Lottery</a> (poster) at the <a class=\"about_inline_link\" href=\"https://icml.cc/virtual/2026/workshop/54071\" target=\"_blank\" rel=\"noreferrer\">ICML 2026 Mechanistic Interpretability Workshop</a> in Seoul. 🇰🇷",
  },
  {
    icon: "📄",
    date: "07/2026",
    text:
      "First paper out: <a class=\"about_inline_link\" href=\"https://arxiv.org/abs/2607.01033\" target=\"_blank\" rel=\"noreferrer\">The Model Organism Lottery: Model Organism Interpretability Strongly Depends on Training Methodology</a>. Also on <a class=\"about_inline_link\" href=\"https://www.lesswrong.com/posts/frvmrrND28SxZnkEy/the-model-organism-lottery-model-organism-interpretability\" target=\"_blank\" rel=\"noreferrer\">LessWrong</a> and <a class=\"about_inline_link\" href=\"https://x.com/nikxtaco/status/2081786321698177286?s=20\" target=\"_blank\" rel=\"noreferrer\">X</a>.",
  },
  {
    icon: "💰",
    date: "05/2026 – present",
    text:
      "Our team secured ~£200k from <a class=\"about_inline_link\" href=\"https://coefficientgiving.org\" target=\"_blank\" rel=\"noreferrer\">Coefficient Giving</a> to continue our research through the <a class=\"about_inline_link\" href=\"https://www.lasrlabs.org\" target=\"_blank\" rel=\"noreferrer\">LASR Labs</a> extension.",
  },
  {
    icon: "🔬",
    date: "01/2026 – 04/2026",
    text:
      "Joined <a class=\"about_inline_link\" href=\"https://www.lasrlabs.org\" target=\"_blank\" rel=\"noreferrer\">London AI Safety Research (LASR) Labs</a> as a Research Fellow, working on model organisms and interpretability under Stefan Heimersheim, in London. 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
  {
    icon: "🎓",
    date: "09/2025",
    text:
      "Completed my MSc in AI with Distinction at the <a class=\"about_inline_link\" href=\"https://www.ed.ac.uk\" target=\"_blank\" rel=\"noreferrer\">University of Edinburgh</a>, UK. 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  },
  {
    icon: "🕵️",
    date: "08/2025",
    text:
      "Finished my <a class=\"about_inline_link\" href=\"https://drive.google.com/drive/folders/1Yb_UjMXOjb3PwiMrouwdydRj6GDj_pk3\" target=\"_blank\" rel=\"noreferrer\">MSc dissertation</a> on evaluating the detectability of training-induced deception in LLMs using linear probes, supervised by Pasquale Minervini.",
  },
  {
    icon: "🧠",
    date: "07/2025",
    text:
      "Attended the <a class=\"about_inline_link\" href=\"https://www.cooperativeai.com/summer-school/summer-school-2025\" target=\"_blank\" rel=\"noreferrer\">Cooperative AI Summer School 2025</a> in Marlow, UK.",
  },
  {
    icon: "🧪",
    date: "02/2025 – 05/2025",
    text:
      "<a class=\"about_inline_link\" href=\"https://sparai.org\" target=\"_blank\" rel=\"noreferrer\">Supervised Program for Alignment Research (SPAR)</a> fellow at <a class=\"about_inline_link\" href=\"https://cadenzalabs.org\" target=\"_blank\" rel=\"noreferrer\">Cadenza Labs</a>, studying emergent misalignment and deception on base vs instruct models.",
  },
  {
    icon: "🏅",
    date: "2024",
    text:
      "<a class=\"about_inline_link\" href=\"https://www.openphilanthropy.org\" target=\"_blank\" rel=\"noreferrer\">Open Philanthropy</a> (now <a class=\"about_inline_link\" href=\"https://coefficientgiving.org\" target=\"_blank\" rel=\"noreferrer\">Coefficient Giving</a>) Career Development Funding grantee. Also awarded the India Merit Scholarship by the <a class=\"about_inline_link\" href=\"https://www.ed.ac.uk\" target=\"_blank\" rel=\"noreferrer\">University of Edinburgh</a>.",
  },
  {
    icon: "🧬",
    date: "05/2024 – 08/2024",
    text:
      "Research intern with the <a class=\"about_inline_link\" href=\"https://danishpruthi.com/group/\" target=\"_blank\" rel=\"noreferrer\">NLP group</a> at the <a class=\"about_inline_link\" href=\"https://www.iisc.ac.in\" target=\"_blank\" rel=\"noreferrer\">Indian Institute of Science</a> (IISc), Bengaluru, on knowledge conflicts in RAG-based LLMs.",
  },
  {
    icon: "🏕️",
    date: "01/2024 – 04/2024",
    text:
      "<a class=\"about_inline_link\" href=\"https://www.aisafety.camp\" target=\"_blank\" rel=\"noreferrer\">AI Safety Camp</a>: built a toy model for interpreting out-of-context meta-learning via differential internalisation of aliases.",
  },
  {
    icon: "🧭",
    date: "01/2024 – 02/2024",
    text:
      "Did the <a class=\"about_inline_link\" href=\"https://forum.effectivealtruism.org/events/3diuzbjbpC6JBj76f/s-risk-intro-fellowship\" target=\"_blank\" rel=\"noreferrer\">S-Risk Intro Fellowship</a> with the <a class=\"about_inline_link\" href=\"https://longtermrisk.org\" target=\"_blank\" rel=\"noreferrer\">Center on Long-Term Risk</a> (CLR).",
  },
  {
    icon: "✍️",
    date: "09/2023 – 10/2023",
    text:
      "Distillation Fellow at <a class=\"about_inline_link\" href=\"https://aisafety.info\" target=\"_blank\" rel=\"noreferrer\">AI Safety Info</a>.",
  },
  {
    icon: "🔭",
    date: "06/2023 – 09/2023",
    text:
      "<a class=\"about_inline_link\" href=\"https://www.matsprogram.org\" target=\"_blank\" rel=\"noreferrer\">SERI MATS 4.0</a> scholar (Agent Foundations stream) in Berkeley, on objective structure in RL model internals.",
  },
  {
    icon: "🎓",
    date: "06/2023",
    text:
      "Graduated with a B.Tech in Computer Science (First Class with Distinction) from Model Engineering College, Kochi. 🇮🇳",
  },
  {
    divider: true,
    label: "Earlier (non-research) highlights",
  },
  {
    icon: "🚀",
    date: "07/2021 – 04/2023",
    text:
      "Chief Project Management Officer at the Innovation & Entrepreneurship Development Cell, Model Engineering College, on pre-incubation projects. 🇮🇳",
  },
  {
    icon: "💻",
    date: "06/2022 – 10/2022",
    text:
      "Software Developer intern at <a class=\"about_inline_link\" href=\"https://mckessoncompile.com\" target=\"_blank\" rel=\"noreferrer\">Compile Inc.</a> (later acquired by <a class=\"about_inline_link\" href=\"https://www.mckesson.com\" target=\"_blank\" rel=\"noreferrer\">McKesson</a>).",
  },
  {
    icon: "💻",
    date: "03/2020 – 06/2020",
    text:
      "Frontend Developer intern at alrt.ai, a data-science startup (remote), UK. 🇬🇧",
  },
];
