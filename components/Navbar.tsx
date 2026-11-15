import { news } from '@/data/news';
import { siteConfig } from '@/data/site';
import { RichText } from '@/lib/rich-text';
import { NavLinks } from './NavLinks';

/** Top news bar, double stripe, centered name, and the sticky section nav. */
export function Navbar() {
  const latest = news[0];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {latest && (
        <div className="topbar">
          <p>
            <span className="topbar__date">{latest.date}</span>{' '}
            <RichText text={latest.title} />
          </p>
        </div>
      )}
      <div className="stripe" aria-hidden="true" />

      <header className="masthead" id="top">
        <h1 className="wordmark">
          <a href="#top">{siteConfig.name}</a>
        </h1>
      </header>

      <nav className="nav" aria-label="Sections">
        <NavLinks />
      </nav>
    </>
  );
}
