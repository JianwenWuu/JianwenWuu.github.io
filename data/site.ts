export const siteConfig = {
  name: 'Jianwen Wu',
  shortName: 'JW.',
  title: 'Ph.D. Student in Computer Science',
  institution: 'Purdue University',
  headline: {
    lead: 'Building',
    accent: 'Efficient',
    tail: 'Multimodal Intelligence.',
  },
  bio: 'I am interested in efficient AI systems, multimodal intelligence, and efficient generative models.',
  location: 'West Lafayette, IN',
  // TODO: Add your email address.
  email: '',
  // TODO: Add your GitHub URL.
  github: '',
  // TODO: Add your Google Scholar URL.
  scholar: '',
  // TODO: Add your LinkedIn URL.
  linkedin: '',
  // TODO: Add /public/cv.pdf when your CV is ready.
  cv: '',
  // TODO: Replace with /images/profile.jpg after adding the real photo.
  profileImage: '',
} as const;

export const navigation = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Album', href: '#album' },
  { label: 'News', href: '#news' },
] as const;
