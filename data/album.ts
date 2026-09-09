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
    alt: 'Personal photo placeholder',
    caption: 'A moment worth keeping',
    category: 'Life',
  },
  {
    id: 'album-02',
    alt: 'Research photo placeholder',
    caption: 'Ideas in progress',
    category: 'Research',
  },
  {
    id: 'album-03',
    alt: 'Travel photo placeholder',
    caption: 'Somewhere new',
    category: 'Travel',
  },
  {
    id: 'album-04',
    alt: 'Campus photo placeholder',
    caption: 'Around campus',
    category: 'Campus',
  },
];
