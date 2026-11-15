import { siteConfig } from '@/data/site';

const elsewhere = [
  { label: 'Google Scholar', href: siteConfig.scholar },
  { label: 'GitHub', href: siteConfig.github },
  { label: 'LinkedIn', href: siteConfig.linkedin },
].filter((link) => link.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="stripe" aria-hidden="true" />
      <div className="wrap footer__grid">
        <div className="footer__intro">
          <p className="footer__name">{siteConfig.name}</p>
          <p>
            {siteConfig.title}, {siteConfig.department}
            <br />
            {siteConfig.institution}
          </p>
        </div>
        {siteConfig.email && (
          <div>
            <h2 className="label">Contact</h2>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        )}
        <div>
          <h2 className="label">Elsewhere</h2>
          <ul>
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="label">Based in</h2>
          <p>{siteConfig.location}</p>
        </div>
      </div>
      <div className="wrap footer__base">
        <p>
          © {year} {siteConfig.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
