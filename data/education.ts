export type EducationItem = {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  location: string;
  /** Optional muted line, e.g. thesis or honors (rich text). */
  description?: string;
  link?: string;
};

// Newest first.
export const education: EducationItem[] = [
  {
    institution: 'Purdue University',
    degree: 'Ph.D. in Computer Science',
    startYear: '2026',
    endYear: 'Present',
    location: 'West Lafayette, Indiana',
  },
  {
    institution: 'Nanjing University',
    degree: 'B.Eng. in Integrated Circuits and Integrated System',
    startYear: '2022',
    endYear: '2026',
    location: 'Suzhou & Nanjing, China',
  },
];
