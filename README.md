# Jianwen Wu — Personal Homepage

A single-page academic homepage built with Next.js and TypeScript, exported as
a static site for GitHub Pages.

The look follows the Loro Piana homepage: an ivory page, a brick-red accent,
the red/rose double stripe under the top bar, a centered serif name with the
section links beneath it, and "– Link –" style links. The layout follows
haoranyou.com: introduction on the left; portrait and contact links (with
small icons) on the right. Research interests and contact links sit on one
ruled row so both sides line up. Below come News, Publications, Education,
Experience, and Moments.

## Update your information

All content lives in `data/`:

- `data/site.ts` — name, bio paragraphs, research interests, links, portrait
- `data/news.ts` — news items, newest first (the first one also appears in the top bar)
- `data/projects.ts` — publications (venue, year, authors, figure, links)
- `data/education.ts` — education history
- `data/experience.ts` — research experience
- `data/album.ts` — photos for the Moments section

Bio paragraphs, news titles, and descriptions accept three inline shortcuts:
`[link text](https://example.com)` for a link, `**text**` for bold, and
`*text*` for italics.
In author lists, add `*` after a name for equal contribution; your own name
is bolded automatically.

Images go in `public/images/`. The portrait is a 4:5 crop
(`public/images/profile-portrait.jpg`). To add a CV, put it at `public/cv.pdf`
and set `cv: '/cv.pdf'` in `data/site.ts`; a "CV" link then appears next to
Email.

Colors and type are set at the top of `app/globals.css`. Fonts (Newsreader and
Tenor Sans, SIL Open Font License) are self-hosted from `app/fonts/`, so the
page renders the same in regions where Google Fonts is blocked.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publishing

Every push to the `main` branch runs `.github/workflows/deploy-pages.yml` and
publishes the static export to GitHub Pages.
