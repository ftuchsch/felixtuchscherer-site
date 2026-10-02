export const projects = [
  {
    id: "project-handgen",
    protein: { src: "/project_proteins/3JRS.png", pdb: "3JRS", width: 2157, height: 1683, x: 58, y: 42 },
    title: "Handgen",
    href: "https://github.com/navkul/handgen",
    category: "Generative AI · Diffusion Model",
    description: (
      <>
        <p>
          Are you tired of copying your digital notes out by hand? Well, I’m not,
          but nonetheless, my friend and I built Handgen: a local-first system that
          turns digital text into handwritten documents in your own style.
        </p>
        <p style={{ marginTop: "1.7em" }}>
          At its core is DiffBrush, a diffusion-based deep learning model that
          generates handwritten prose using a writer’s handwriting samples as
          style references. We use DDIM sampling to synthesize handwriting, then
          verify the generated text against the source with OCR before composing
          the document. For mathematical notation, the pipeline combines generated
          digit components with a worksheet-derived glyph bank, normalizes ink
          weight and symbol spacing, and composes SVG documents with PNG exports.
        </p>
      </>
    ),
  },
  {
    id: "project-medai",
    protein: { src: "/project_proteins/5yh2.png", pdb: "5YH2", width: 936, height: 1402, x: 49, y: 52 },
    title: "MedAI Hackathon",
    href: "https://github.com/ftuchsch/MedAI",
    category: "Machine learning · Healthcare",
    description:
      "A hackathon research project that predicts acute tubular injury from plasma proteomics and clinical covariates in the Boston Kidney Biopsy Cohort. It compares feature-selection pipelines, gradient-boosted trees, regularized linear models, TabPFN, and probability ensembles through reproducible cross-validation.",
  },
  {
    id: "project-dailyviral",
    protein: { src: "/project_proteins/6OWE (1).png", pdb: "6OWE", width: 2386, height: 1824, x: 61, y: 38 },
    title: "DailyViral",
    href: "https://github.com/ftuchsch/DailyViral",
    category: "Automation · API Integration",
    description: (
      <>
        <p>
          Want to make some passive income? If so, you’ve come to the right place ;)
          While scrolling on Instagram, I’ve come across accounts that post the same
          funny video every day and rack up millions of views. I think{" "}
          <a href="https://www.instagram.com/iturntitdown_daily/" target="_blank" rel="noreferrer">
            this account
          </a>{" "}
          is the most successful one I’ve seen. They literally sell merch!
        </p>
        <p style={{ marginTop: "1.7em" }}>
          Inspired by this, I automated an account to post this video daily. I created
          a Python pipeline that rotates through captions, renders video overlays
          with FFmpeg, and publishes through Meta’s API. It supports local queued
          scheduling as well as deployment through GitHub Actions, backed by private
          Cloudflare R2 storage. You can check out my funny video on{" "}
          <a href="https://www.instagram.com/getemrightcoach.daily/" target="_blank" rel="noreferrer">
            my account
          </a>!
        </p>
      </>
    ),
  },
  {
    id: "project-foldit",
    protein: { src: "/project_proteins/6v2f.png", pdb: "6V2F", width: 2902, height: 2572, x: 51, y: 42 },
    title: "FoldIt 2.0",
    href: "https://github.com/ftuchsch/BostonHacks",
    category: "Machine learning · Computational biology",
    description: (
      <p>
        BostonHacks was my first hackathon, and I decided to tackle a puzzle nature
        solves every day: protein folding. I built FoldIt 2.0 solo, reimagining{" "}
        <a href="https://fold.it/" target="_blank" rel="noreferrer">Foldit</a>{" "}
        as an interactive 3D puzzle where you twist and turn a protein to help it
        find its shape. Adjust torsion angles, watch your biophysical score change
        in real time, and get a nudge from machine-learning models toward more
        realistic structures. Think molecular origami, with a little help from ML.
      </p>
    ),
  },
  {
    id: "project-carotouch",
    protein: { src: "/project_proteins/7ah9_2.png", pdb: "7AH9", width: 1598, height: 2840, x: 51, y: 44 },
    title: "CaroTouch Website",
    href: "https://carotouch.com/",
    category: "Client work · Web development",
    description:
      "I built this bilingual website for my aunt's massage therapy practice in Montréal. It presents her approach and services, answers common client questions, and directs clients to book via phone call.",
  },
];
