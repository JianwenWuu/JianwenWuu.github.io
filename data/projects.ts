export type ProjectItem = {
  title: string;
  subtitle: string;
  authors?: string;
  description?: string;
  image?: string;
  tags: string[];
  year: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  featured: boolean;
};

export const projects: ProjectItem[] = [
  {
    title:
      'Early-Bird Decoding: Accelerating Diffusion LLMs with Learnable Block Sizes and Parallel Sampling',
    subtitle: 'Research Paper · arXiv',
    authors:
      'Lixuan Wei, Wei Zhou, Jianwen Wu, Yipeng Shen, Meiling Wang, and Haoran You',
    description:
      'A plug-in decoding framework for diffusion LLMs that learns variable-length blocks and position-aware parallel sampling, achieving up to 18.76× higher throughput than vanilla decoding with comparable accuracy.',
    tags: ['Diffusion LLMs', 'Efficient Inference', 'Parallel Decoding'],
    year: '2026',
    paperUrl: 'https://arxiv.org/abs/2609.16450',
    featured: true,
  },
];
