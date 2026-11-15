export type ProjectItem = {
  title: string;
  /** Mark equal contribution with * after a name; your own name is bolded automatically. */
  authors: string;
  /** e.g. 'arXiv Preprint', 'NeurIPS', 'ICML' */
  venue: string;
  year: string;
  /** One- or two-sentence summary (optional). */
  description?: string;
  /** Teaser figure, shown on a sand-colored panel. */
  image?: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
};

// Newest first.
export const projects: ProjectItem[] = [
  {
    title:
      'Early-Bird Decoding: Accelerating Diffusion LLMs with Learnable Block Sizes and Parallel Sampling',
    authors:
      'Lixuan Wei*, Wei Zhou*, Jianwen Wu, Yipeng Shen, Meiling Wang, Haoran You',
    venue: 'arXiv Preprint',
    year: '2026',
    description:
      'A plug-in decoding framework for diffusion LLMs that learns variable-length blocks and position-aware parallel sampling, reaching up to 18.76× the throughput of vanilla decoding at comparable accuracy.',
    image: '/images/projects/early-bird-figure-1.png',
    paperUrl: 'https://arxiv.org/abs/2609.16450',
  },
];
