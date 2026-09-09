export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tags: string[];
  year: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  featured: boolean;
};

// TODO: Replace placeholder entries with published and ongoing projects.
export const projects: ProjectItem[] = [
  {
    title: 'Project Title',
    subtitle: 'Project 01',
    description:
      'A concise description of the research question, approach, and contribution will appear here.',
    tags: ['Research', 'Efficient AI', 'Multimodal'],
    year: 'Coming Soon',
    featured: true,
  },
  {
    title: 'Future Research Project',
    subtitle: 'Project 02',
    description:
      'A flexible project card prepared for future work, publications, code, and demos.',
    tags: ['Machine Learning', 'Systems'],
    year: 'Coming Soon',
    featured: false,
  },
];
