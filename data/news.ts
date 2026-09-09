export type NewsItem = {
  date: string;
  title: string;
  description?: string;
  link?: string;
};

// TODO: Keep newest updates first.
export const news: NewsItem[] = [
  {
    date: 'SEP 2026',
    title: 'Joined Purdue University as a Computer Science Ph.D. student.',
    description: 'Beginning a new chapter in West Lafayette.',
  },
  {
    date: 'AUG 2026',
    title: 'Started research at the EcoAI Lab.',
  },
  {
    date: 'JUN 2026',
    title: 'Graduated from Nanjing University.',
  },
];
