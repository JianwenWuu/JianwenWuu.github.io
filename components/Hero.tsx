import {
  Briefcase,
  FileText,
  GitBranch,
  GraduationCap,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { assetPath } from '@/lib/asset-path';
import { RichText } from '@/lib/rich-text';

type ContactLink = { label: string; href: string; icon: LucideIcon };

// Shown under the portrait, each with a small line icon.
const contacts: ContactLink[] = [
  {
    label: siteConfig.email,
    href: siteConfig.email ? `mailto:${siteConfig.email}` : '',
    icon: Mail,
  },
  { label: 'CV', href: siteConfig.cv, icon: FileText },
  { label: 'Google Scholar', href: siteConfig.scholar, icon: GraduationCap },
  { label: 'GitHub', href: siteConfig.github, icon: GitBranch },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Briefcase },
].filter((link) => link.href);

/**
 * About, laid out as a 2 x 2 grid (see .hero in globals.css):
 * bio | portrait, then research interests | contact links.
 */
export function Hero() {
  return (
    <section className="hero wrap" id="about" aria-labelledby="about-title">
      <div className="hero__intro">
        <h2 className="section__title" id="about-title">
          About
        </h2>
        <div className="bio">
          {siteConfig.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>
        {siteConfig.note && (
          <div className="bio__note">
            {siteConfig.noteTitle && (
              <p className="bio__note-title">{siteConfig.noteTitle}</p>
            )}
            <p>
              <RichText text={siteConfig.note} />
            </p>
          </div>
        )}
      </div>

      <figure className="portrait print">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(siteConfig.profileImage)}
          width={960}
          height={1200}
          alt={`Portrait of ${siteConfig.name}`}
          fetchPriority="high"
        />
      </figure>

      {siteConfig.interests.length > 0 && (
        <div className="interests ruled">
          <h3 className="label">Research Interests</h3>
          <ul>
            {siteConfig.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="contact ruled">
        <h3 className="label">Contact</h3>
        <ul>
          {contacts.map(({ label, href, icon: Icon }) => {
            const external = /^https?:\/\//.test(href);
            return (
              <li key={href}>
                <a
                  href={href.startsWith('/') ? assetPath(href) : href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                  <span>{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
