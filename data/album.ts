export type AlbumItem = {
  id: string;
  src: string;
  alt: string;
  /** Label under the photo. */
  title: string;
  /** Small red line under the title, e.g. place · year. */
  meta?: string;
  /** Italic sentence under the label. */
  caption?: string;
  /** CSS object-position for the cropped thumbnails in the row (2nd photo on). */
  focus?: string;
};

// The first photo is shown whole as a framed print; any others appear in a row beneath it.
export const album: AlbumItem[] = [
  {
    id: 'graduation',
    src: '/images/album/graduation.jpg',
    alt: 'Jianwen Wu in graduation robes at the Nanjing University commencement',
    title: 'Graduation',
    meta: 'Nanjing University · 2026',
    caption:
      'I graduated from NJU! Three great years in Suzhou and one in Gulou, Nanjing.',
  },
];
