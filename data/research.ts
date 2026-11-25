export type ResearchStatus =
  | "Ideation"
  | "Literature Review"
  | "In Progress"
  | "Experiments"
  | "Writing"
  | "Under Review"
  | "Published";

export interface ResearchProject {
  kind: string;
  title: string;
  area: string;
  status: ResearchStatus;
  started?: string;
  summary: string;
  highlights: string[];
  methods: string[];
  supervisor?: string;
  supervisorLink?: string;
  affiliation?: string;
  affiliationLink?: string;
  link?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    kind: "ELITE Research Lab · Medical image analysis",
    title: "Why breast ultrasound segmentation models fail across datasets",
    area: "Medical Image Analysis",
    status: "Experiments",
    summary:
      "Segmentation models that work on one breast ultrasound dataset lose accuracy on another. I study whether imaging characteristics or annotation conventions are responsible, so that a hospital can tell why a model fails and not only that it does.",
    highlights: [
      "Evaluate models trained on one public dataset and tested on the others.",
      "My part: I prepared and split the data, ran most of the experiments, and coordinated the cross-dataset evaluations.",
    ],
    methods: ["U-Net", "nnU-Net", "Cross-dataset evaluation", "Public ultrasound datasets"],
    affiliation: "ELITE Research Lab",
    affiliationLink: "https://elitelab.ai/",
  },
  {
    kind: "ELITE Research Lab · Vision-language models",
    title: "Where vision-language models lose Bengali script",
    area: "Vision-Language Models",
    status: "In Progress",
    summary:
      "I probe where Bengali script information is lost inside vision-language models, across the vision encoder, the connector and the language model, and test connector-only fine-tuning as a fix.",
    highlights: [
      "Compare three open models layer by layer to locate the loss.",
      "Test whether fine-tuning only the connector recovers the lost information.",
    ],
    methods: ["Qwen3-VL", "InternVL3.5", "Gemma 3", "Connector-only fine-tuning"],
    affiliation: "ELITE Research Lab",
    affiliationLink: "https://elitelab.ai/",
  },
  {
    kind: "Undergraduate thesis",
    title: "Harmonizing COVID-19 vaccine adverse-event reports for machine learning",
    area: "Machine Learning for Healthcare",
    status: "Under Review",
    summary:
      "I collected adverse-event reports from 13 studies across 14 countries. The papers described the same event in different clinical terms, so I built a 10-step pipeline that maps them to MedDRA System Organ Classes before any modelling.",
    highlights: [
      "First author of the resulting paper, under review at IJITCS.",
      "The main lesson: clinical ML is largely decided before training begins.",
    ],
    methods: ["MedDRA", "Data harmonization", "Gradient Boosting"],
    supervisor: "Prof. Dr. Dip Nandi",
    supervisorLink: "https://scholar.google.com/citations?user=zRR00s0AAAAJ&hl=en",
    affiliation: "American International University-Bangladesh (AIUB)",
  },
];

export const researchInterests = [
  "Medical Image Analysis",
  "Computer Vision",
  "Vision-Language Models (VLMs)",
  "Machine Learning for Healthcare",
];
