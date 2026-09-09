# Jianwen Wu — Personal Homepage

A single-page academic homepage built with Next.js, TypeScript, Tailwind CSS,
Framer Motion, and Lucide icons.

## Update your information

Most content lives in `data/`:

- `data/site.ts` — name, headline, bio, profile image, and social links
- `data/education.ts` — education history
- `data/experience.ts` — research and work experience
- `data/projects.ts` — projects, papers, code, and demos
- `data/album.ts` — personal photos
- `data/news.ts` — latest updates

Add your portrait to `public/images/profile.jpg`, project images to
`public/images/projects/`, album photos to `public/images/album/`, and your CV
to `public/cv.pdf`. Then update the matching paths in the data files.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publishing

Every push to the `main` branch runs `.github/workflows/deploy-pages.yml` and
publishes the static export to GitHub Pages.
