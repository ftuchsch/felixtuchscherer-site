export type ExperienceSection = {
  title?: string;
  dates?: string;
  details: string[];
};

export type Experience = {
  id: string;
  organization: string;
  shortOrganization: string;
  href: string;
  role: string;
  location: string;
  dates: string;
  category: string;
  sections: ExperienceSection[];
  hotspot: {
    x: number;
    y: number;
    labelX: number;
    labelY: number;
  };
};

const experienceRecords: Experience[] = [
  {
    id: "experience-joseph-mccarthy",
    organization: "Joseph-McCarthy Group – Boston University College of Engineering",
    shortOrganization: "Joseph-McCarthy Group",
    href: "https://sites.google.com/bu.edu/joseph-mccarthy-group",
    role: "Research Assistant",
    location: "Boston, MA",
    dates: "Nov 2024 – Present",
    category: "Protein modeling",
    sections: [
      {
        title: "AlphaFold3 Cryptic Pocket Prediction",
        dates: "Nov 2024 – Jan 2026",
        details: [
          "Co-first-authored a paper investigating whether AlphaFold3 (AF3) protein-ligand co-folding can reproduce the conformational ensembles required for cryptic pocket formation – showing that ensemble-level sampling, not single top-ranked models, is necessary to reliably recover physically valid binding modes",
          "Ran multi-seed AF3 structure predictions (100 seeds, 500 models/protein) across a 16-protein CryptoSite/CryptoBench benchmark, with and without ligand present, and built Python pipelines (Biopython, NumPy, BioPandas, Polars) to programmatically classify >24,000 predicted and PDB-deposited structures into open/closed conformational states via RMSD clustering – enabling benchmarking of AF3 against experimental bound/unbound distributions and quantifying its bias toward memorized structural priors (\"detrimental memorization\")",
          "Designed an RDKit SMARTS-based ligand-pose scoring script that resolves atom-symmetry ambiguities in small-molecule alignment, correcting 12.5% of mismapped poses and enabling ligand-pose classification (≤2 Å RMSD) across thousands of co-folded predictions; used this to show ligand pLDDT correlates with pose accuracy (R² = 0.35), a finding relevant to confidence-based filtering in AI-driven drug design",
        ],
      },
      {
        title: "RSV Antibody Classifier Generalization",
        dates: "Jan 2026 – Present",
        details: [
          "Leading project investigating why protein language model classifiers (ESM-2/ESM-C) trained to predict antibody-RSV binding fail to generalize beyond their training distribution; benchmarking nine model variants across three independent antibody datasets revealed recall on 720 confirmed binders falling to 52%, while retraining on combined original and external data recovered recall to 90%",
          "Characterizing the biological basis of this distribution shift by comparing IGHV/IGLV usage, VH/VL germline pairings, CDR lengths and sequence composition, and clonotype/lineage structure; analyzing original and mixed-model embeddings with UMAP to relate dataset origin to classifier errors, and using AlphaFold3 to map predicted RSV F epitopes and test whether binding-site preferences contribute to generalization failure",
        ],
      },
    ],
    hotspot: { x: 84, y: 21, labelX: 83, labelY: 8 },
  },
  {
    id: "experience-pfizer",
    organization: "Pfizer Research & Development – CDIS AI & Data Sciences",
    shortOrganization: "Pfizer R&D · CDIS AI",
    href: "https://www.pfizer.com/science",
    role: "R&D Intern",
    location: "New York City, NY",
    dates: "Jun 2026 – Aug 2026",
    category: "Clinical AI systems",
    sections: [
      {
        details: [
          "Investigated whether graph-based (Neo4j) or relational (SQL) representations of clinical trial data better support reasoning by internally developed AI agents as datasets scale across dozens of interlinked tables, holding the LLM and reasoning loop constant and benchmarking both on free-text queries and structured data-review tasks",
          "Evaluated both agents on a complex data consistency check: reconciling patient safety records against treatment-dosing records using time-window logic and cross-referenced fields spread across multiple tables – discovering that the graph agent caught relational dependencies more reliably (70% vs. 60% acc.)",
          "Benchmarked agent reasoning efficiency on natural-language clinical data questions, finding the graph agent reached correct answers with 40% fewer tool calls on average than the SQL agent, while both achieved 100% correctness and consistency",
          "Co-developed a self-managed authentication layer (PostgreSQL user store, bcrypt-hashed credentials, app specific authorization) enabling secure stakeholder access to an internal proof-of-concept handling sensitive clinical trial data and unblocking a previously stalled proof-of-concept due to insufficient security controls",
        ],
      },
    ],
    hotspot: { x: 33, y: 25, labelX: 38, labelY: 14 },
  },
  {
    id: "experience-leshchiner",
    organization: "Leshchiner Lab – Boston University Department of Computational Biomedicine",
    shortOrganization: "Leshchiner Lab",
    href: "https://leshlab.org/",
    role: "Research Assistant",
    location: "Boston, MA",
    dates: "Sep 2023 – Nov 2024",
    category: "Nanopore sequencing",
    sections: [
      {
        details: [
          "Designed an 8-condition phi29 rolling-circle amplification experiment varying primer concentration and SSB presence to reduce branching and overpriming, validated via gel electrophoresis and Qubit before Nanopore sequencing",
          "Built a GPU-accelerated Nanopore processing pipeline using Dorado and an HPC cluster to convert raw sequencing signal into basecalled and aligned reads; identified a ~2.5% reference-mapping rate across all 8 conditions due to substantial off-target RCA products through SAM/BAM inspection",
          "Developed a Python pipeline (pandas, NumPy, Matplotlib, Seaborn) to demultiplex reads by condition and compare read-length and AT/GC content distributions across RCA conditions to evaluate amplification quality",
        ],
      },
    ],
    hotspot: { x: 22, y: 47, labelX: 14, labelY: 68 },
  },
  {
    id: "experience-uc-davis",
    organization: "UC Davis Young Scholars Program",
    shortOrganization: "UC Davis Young Scholars",
    href: "https://education.ucdavis.edu/young-scholars-program",
    role: "Research Assistant",
    location: "Davis, CA",
    dates: "Jun 2022 – Aug 2022",
    category: "Microbial ecology",
    sections: [
      {
        details: [
          "Isolated and cultured bacterial strains across 4 media strengths, classifying microbes by life-history strategy and enabling downstream qPCR copy-number analysis of 16 isolates",
          "Analyzed wood-chipped soil microbiome sequencing data in R to quantify alpha/beta diversity and rRNA copy number, identifying enhanced functional diversity and carbon-use efficiency compared to unamended soil",
        ],
      },
    ],
    hotspot: { x: 40, y: 77, labelX: 50, labelY: 88 },
  },
  {
    id: "experience-basil",
    organization: "Basil – AI Dietary Safety Startup",
    shortOrganization: "Basil",
    href: "https://basilmenu.ai/",
    role: "Chief Technology Officer",
    location: "Boston, MA",
    dates: "Feb 2025 – Present",
    category: "Product engineering",
    sections: [
      {
        details: [
          "Sole engineer on a four-person team; architected and shipped a full-stack Next.js/TypeScript/Supabase platform piloted with Xenia Greek Hospitality, winning $15,000 at Boston University's 2026 Hospitality Innovation Competition",
          "Designed an LLM pipeline that parses free-text dietary restrictions into schema-validated preferences via the OpenAI API, then deterministically classifies 40+ pilot dishes by allergen, diet, removable ingredients, and cross-contact risk",
          "Built a hierarchical PostgreSQL ingredient knowledge graph from the Open Food Facts taxonomy, modeling parent-child relationships and computing ancestry to infer conflicts across dietary restriction categories",
          "Hardened a privacy-preserving personalization layer with high-entropy QR tokens, HMAC-signed sessions, row-level security, and fail-closed validation; built a restaurant analytics dashboard to show trends and usage patterns",
        ],
      },
    ],
    hotspot: { x: 52, y: 35, labelX: 70, labelY: 61 },
  },
];

export const experiences: Experience[] = [
  experienceRecords[0],
  experienceRecords[1],
  experienceRecords[4],
  experienceRecords[2],
  experienceRecords[3],
];
