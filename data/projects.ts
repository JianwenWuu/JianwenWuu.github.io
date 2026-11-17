export type ProjectItem = {
  title: string;
  /** Mark equal contribution with * after a name; your own name is bolded automatically. */
  authors: string;
  /** e.g. 'arXiv Preprint', 'NeurIPS', 'ICML' */
  venue: string;
  year: string;
  /** One- or two-sentence summary (optional). */
  description?: string;
  /** Teaser figure, shown on a sand-colored panel (also the still frame for a video). */
  image?: string;
  /** Optional looping teaser video (mp4, muted); fills the panel. */
  video?: string;
  /** Width / height of the video, e.g. '16 / 9'. */
  videoAspect?: string;
  /** Short result chips shown on the video, e.g. '4× Attn speedup'. */
  highlights?: string[];
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
};

// Newest first.
export const projects: ProjectItem[] = [
  {
    title:
      'PoCoAttn: Position–Content Collaborative Sparse Attention for Fast and High-Fidelity Video Generation',
    authors: 'Jianwen Wu, Meiling Wang, Junkang Zhou, Yipeng Shen, Haoran You',
    venue: 'arXiv Preprint',
    year: '2026',
    description:
      'Training-free sparse attention for video diffusion that handles positional attention offline and content attention online, improving PSNR by 1.9–5.0 dB over prior methods with up to 2.0× faster denoising.',
    image: '/images/projects/pocoattn-demo.jpg',
    video: '/video/pocoattn-demo.mp4',
    videoAspect: '636 / 366',
    paperUrl: 'https://arxiv.org/abs/2611.20307',
    projectUrl: 'https://ecoai-group.github.io/pocoattn/',
  },
  {
    title:
      'Early-Bird Decoding: Accelerating Diffusion LLMs with Learnable Block Sizes and Parallel Sampling',
    authors:
      'Lixuan Wei*, Wei Zhou*, Jianwen Wu, Yipeng Shen, Meiling Wang, Haoran You',
    venue: 'arXiv Preprint',
    year: '2026',
    description:
      'A plug-in decoding framework for diffusion LLMs that learns variable-length blocks and position-aware parallel sampling, reaching up to 18.76× the throughput of vanilla decoding at comparable accuracy.',
    image: '/images/projects/early-bird-demo.jpg',
    video: '/video/early-bird-demo.mp4',
    videoAspect: '1000 / 524',
    paperUrl: 'https://arxiv.org/abs/2609.16450',
  },
];
