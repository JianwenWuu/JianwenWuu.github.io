export type AlbumItem = {
  id: string;
  src?: string;
  alt: string;
  caption?: string;
  date?: string;
  location?: string;
  category?: string;
};

// TODO: Add photos to /public/images/album and set each src below.
export const album: AlbumItem[] = [
  {
    id: 'album-01',
    src: '/images/album/graduation.jpg',
    alt: 'Jianwen Wu celebrating graduation from Nanjing University',
    caption:
      'I graduated from NJU! Having had great 3 years in Suzhou and 1 year in Gulou, Nanjing.',
    category: 'Graduation',
  },
];
