export type EducationItem = {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  location: string[];
  description?: string;
  logo?: string;
};

// TODO: Replace these entries with your complete education history.
export const education: EducationItem[] = [
  {
    institution: 'Purdue University',
    degree: 'Ph.D. in Computer Science',
    startYear: '2026',
    endYear: 'Present',
    location: ['West Lafayette, Indiana'],
    description: 'Research focus: efficient and multimodal intelligence.',
  },
  {
    institution: 'Nanjing University',
    degree: 'B.Eng. in Integrated Circuits and Integrated System',
    startYear: '2022',
    endYear: '2026',
    location: ['Nanjing, China', 'Suzhou, China (Suzhou campus)'],
  },
];
