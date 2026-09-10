export type ExperienceItem = {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string;
  tags?: string[];
  link?: string;
  image?: string;
};

// TODO: Add roles, descriptions, links, and images as your experience grows.
export const experience: ExperienceItem[] = [
  {
    organization: 'EcoAI Lab · Purdue University',
    role: 'Graduate Research Assistant',
    startDate: '2026',
    endDate: 'Present',
    location: 'West Lafayette, Indiana',
    description:
      'Exploring efficient learning and generation across models, modalities, and computing systems.',
    tags: ['Efficient AI Systems', 'Multimodal AI', 'Generative Models'],
    link: 'https://ecoai-group.github.io/',
  },
  {
    organization: 'Hardware-Software Codesign Lab',
    role: 'Visiting Undergraduate Research Intern',
    startDate: '2025',
    endDate: '2026',
    location: 'South Bend, Indiana',
    description:
      'Research across efficient learning algorithms, specialized hardware, and neuro-symbolic systems.',
    tags: [
      'Efficient AI Systems',
      'Algorithm-Hardware Codesign',
      'Neuro-Symbolic Inference',
    ],
    link: 'https://codesignlab.nd.edu/',
  },
];
