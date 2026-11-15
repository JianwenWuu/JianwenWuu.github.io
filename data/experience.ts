export type ExperienceItem = {
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  advisor?: string;
  /** Optional muted line under the role (rich text). */
  description?: string;
  link?: string;
};

// Newest first.
export const experience: ExperienceItem[] = [
  {
    organization: 'EcoAI Lab, Purdue University',
    role: 'Graduate Research Assistant',
    startDate: '2026',
    endDate: 'Present',
    location: 'West Lafayette, Indiana',
    advisor: 'Prof. Haoran You',
    description:
      'Exploring efficient learning and generation across models, modalities, and computing systems.',
    link: 'https://ecoai-group.github.io/',
  },
  {
    organization: 'Hardware-Software Codesign Lab, University of Notre Dame',
    role: 'Visiting Undergraduate Research Intern',
    startDate: '2025',
    endDate: '2026',
    location: 'South Bend, Indiana',
    advisor: 'Prof. Sharon Hu',
    description:
      'Research across efficient learning algorithms, specialized hardware, and neuro-symbolic systems.',
    link: 'https://codesignlab.nd.edu/',
  },
];
