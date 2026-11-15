import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { assetPath } from '@/lib/asset-path';
import { DashLink } from './DashLink';
import { SectionHeader } from './SectionHeader';

/** Author list with the site owner's name in bold. */
function Authors({ authors }: { authors: string }) {
  const names = authors.split(/\s*,\s*/);
  return (
    <p className="pub__authors">
      {names.map((name, index) => {
        const isMe = name.replace(/[*†‡✉]/g, '').trim() === siteConfig.name;
        return (
          <span key={`${name}-${index}`}>
            {isMe ? <strong>{name}</strong> : name}
            {index < names.length - 1 ? ', ' : ''}
          </span>
        );
      })}
    </p>
  );
}

/** Publications, each with its teaser figure on a sand panel. */
export function Projects() {
  const hasEqualContribution = projects.some((project) =>
    project.authors.includes('*'),
  );

  return (
    <section className="section" id="publications" aria-labelledby="pubs-title">
      <div className="wrap">
        <SectionHeader
          id="pubs-title"
          title="Publications"
          action={
            siteConfig.scholar ? (
              <DashLink href={siteConfig.scholar}>
                Full list on Google Scholar
              </DashLink>
            ) : undefined
          }
        />

        {projects.map((project) => {
          const href =
            project.projectUrl || project.paperUrl || project.codeUrl;
          const links = [
            { label: 'Paper', href: project.paperUrl },
            { label: 'Code', href: project.codeUrl },
            { label: 'Project Page', href: project.projectUrl },
          ].filter((link): link is { label: string; href: string } =>
            Boolean(link.href),
          );

          return (
            <article className="pub" key={project.title}>
              {project.image && (
                <a
                  className="pub__thumb"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetPath(project.image)} alt="" loading="lazy" />
                </a>
              )}
              <div className="pub__body">
                <p className="pub__venue">
                  {project.venue} · {project.year}
                </p>
                <h3 className="pub__title">
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <Authors authors={project.authors} />
                {project.description && (
                  <p className="pub__summary">{project.description}</p>
                )}
                {links.length > 0 && (
                  <ul className="pub__links">
                    {links.map((link) => (
                      <li key={link.label}>
                        <DashLink href={link.href}>{link.label}</DashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}

        {hasEqualContribution && (
          <p className="footnote">* Equal contribution</p>
        )}
      </div>
    </section>
  );
}
