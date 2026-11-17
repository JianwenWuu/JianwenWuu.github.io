export type NewsItem = {
  /** Shown as written, e.g. 'Sep 2026'. */
  date: string;
  /** Rich text: [link](url), **bold** and *italics* work here. */
  title: string;
  /** Optional muted follow-up sentence. */
  description?: string;
};

// Newest first. The first item also appears in the thin bar at the top of the page.
export const news: NewsItem[] = [
  {
    date: 'Nov 2026',
    title:
      'Our paper [*PoCoAttn*](https://arxiv.org/abs/2611.20307), on fast and high-fidelity video generation, is now on arXiv, with a [project page](https://ecoai-group.github.io/pocoattn/).',
  },
  {
    date: 'Sep 2026',
    title: 'Joined Purdue University as a Computer Science Ph.D. student.',
    description: 'Beginning a new chapter in West Lafayette.',
  },
  {
    date: 'Sep 2026',
    title:
      'Our paper [*Early-Bird Decoding*](https://arxiv.org/abs/2609.16450), on accelerating diffusion LLMs, is now on arXiv.',
  },
  {
    date: 'Aug 2026',
    title: 'Started research at the EcoAI Lab.',
  },
  {
    date: 'Jun 2026',
    title: 'Graduated from Nanjing University.',
  },
];
