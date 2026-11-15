import { education } from '@/data/education';
import { RichText } from '@/lib/rich-text';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" aria-labelledby="edu-title">
      <SectionHeader id="edu-title" title="Education" />
      <ol className="entries">
        {education.map((item) => (
          <li className="entry" key={`${item.institution}-${item.startYear}`}>
            <p className="entry__top">
              <span>
                {item.startYear} – {item.endYear}
              </span>
              <span>{item.location}</span>
            </p>
            <h3 className="entry__where">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.institution}
                </a>
              ) : (
                item.institution
              )}
            </h3>
            <p className="entry__what">{item.degree}</p>
            {item.description && (
              <p className="entry__desc">
                <RichText text={item.description} />
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
