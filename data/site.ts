// Text fields marked "rich" accept these inline shortcuts:
//   [link text](https://example.com)   → a link
//   **text**                           → bold
//   *text*                             → italics
export const siteConfig = {
  name: 'Jianwen Wu',
  title: 'Ph.D. Student',
  institution: 'Purdue University',
  department: 'Department of Computer Science',
  location: 'West Lafayette, Indiana',
  url: 'https://jianwenwuu.github.io',
  description:
    'Jianwen Wu is a first-year Ph.D. student in Computer Science at Purdue University, working on algorithm–hardware co-design for efficient generative models.',

  // About section (rich). One string per paragraph.
  bio: [
    'I am a first-year Ph.D. student in Computer Science at **Purdue University**, advised by [**Prof. Haoran You**](https://www.haoranyou.com/) in the [**EcoAI Lab**](https://ecoai-group.github.io/). My research focuses on algorithm–hardware co-design for efficient generative models, world models, and multimodal models.',
    'Before Purdue, I received my B.Eng. in Integrated Circuits and Integrated System from Nanjing University, and was a visiting undergraduate research intern at the [Hardware-Software Codesign Lab](https://codesignlab.nd.edu/), University of Notre Dame, working with [Prof. Sharon Hu](https://cse.nd.edu/faculty/xiaobo-sharon-hu/).',
  ],
  // Short invitation shown under the bio, set off by a thin red rule (rich).
  note: 'I am open to collaborations and discussions on efficient algorithms and systems for world models and generative models, and I am looking for a research internship for Summer 2027. Feel free to email me at [wu2838@purdue.edu](mailto:wu2838@purdue.edu).',
  interests: [
    'Efficient AI',
    'Algorithm–Hardware Co-design',
    'Generative Models',
    'ML Systems',
  ],

  email: 'jianwenwu1227@gmail.com',
  github: 'https://github.com/JianwenWuu',
  scholar: 'https://scholar.google.com/citations?user=HpsLxlQAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/jianwen-wu-846032353/',
  // Add /public/cv.pdf, then set cv: '/cv.pdf' and a "CV" link appears.
  cv: '',

  // 4:5 portrait shown on the right of the About section.
  profileImage: '/images/profile-portrait.jpg',
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Moments', href: '#moments' },
] as const;
