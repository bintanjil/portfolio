// TODO(Tanjil): replace every "[ ... ]" placeholder below with your real research details.
// Set `currentResearch` to `null` to hide the "Currently Researching" card entirely.

export type ResearchStatus =
  | "Ideation"
  | "Literature Review"
  | "In Progress"
  | "Experiments"
  | "Writing"
  | "Under Review"
  | "Published";

export interface CurrentResearch {
  title: string;
  area: string;
  status: ResearchStatus;
  started: string;
  summary: string;
  objectives: string[];
  methods: string[];
  supervisor?: string;
  affiliation?: string;
  link?: string;
}

export const currentResearch: CurrentResearch | null = {
  title: "[Your research title]",
  area: "[Research area, e.g. Computer Vision / Vision-Language Models]",
  status: "In Progress",
  started: "[Month Year]",
  summary:
    "[One or two sentences: what problem you are studying, why it matters, and what you expect to contribute.]",
  objectives: [
    "[Objective 1: what you want to find out or build]",
    "[Objective 2: how you will evaluate it]",
    "[Objective 3: expected outcome, e.g. a paper or open-source artifact]",
  ],
  methods: ["[Method / tool 1]", "[Method / tool 2]", "[Dataset / benchmark]"],
  supervisor: "[Supervisor or collaborator name]",
  affiliation: "[University / lab / independent]",
  // link: "https://...", // optional: preprint, repo, or project page
};

export const researchInterests = [
  "Computer Vision",
  "Machine Learning",
  "Multimodal Large Language Models (MLLMs)",
  "Vision-Language Models (VLMs)",
];
