export const siteConfig = {
  name: 'Jianwen Wu',
  shortName: 'JW.',
  title: 'Ph.D. Student in Computer Science',
  institution: 'Purdue University',
  headline: {
    lead: 'Building',
    accent: 'Efficient ML Systems',
    tail: 'and Multimodal Intelligence.',
  },
  bio: 'I am interested in efficient AI systems, multimodal intelligence, and efficient generative models.',
  location: 'West Lafayette, IN',
  email: 'jianwenwu1227@gmail.com',
  github: 'https://github.com/JianwenWuu',
  // TODO: Add your Google Scholar URL.
  scholar: '',
  linkedin: 'https://www.linkedin.com/in/jianwen-wu-846032353/',
  // TODO: Add /public/cv.pdf when your CV is ready.
  cv: '',
  profileImage: '/images/profile.jpg',
} as const;

export const navigation = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Moments', href: '#moments' },
  { label: 'News', href: '#news' },
] as const;
