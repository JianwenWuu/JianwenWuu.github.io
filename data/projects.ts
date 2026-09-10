export type ProjectItem = {
  title: string;
  subtitle: string;
  description?: string;
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
    title: 'Coming Soon',
    subtitle: 'Project 01',
    tags: [],
    year: '',
    featured: true,
  },
];
