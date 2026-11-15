import { experience } from '@/data/experience';
import { RichText } from '@/lib/rich-text';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <SectionHeader id="exp-title" title="Experience" />
      <ol className="entries">
        {experience.map((item) => (
          <li className="entry" key={`${item.organization}-${item.startDate}`}>
            <p className="entry__top">
              <span>
                {item.startDate} – {item.endDate}
              </span>
              {item.location && <span>{item.location}</span>}
            </p>
            <h3 className="entry__where">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.organization}
                </a>
              ) : (
                item.organization
              )}
            </h3>
            <p className="entry__what">{item.role}</p>
            {item.advisor && (
              <p className="entry__meta">Advisor: {item.advisor}</p>
            )}
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
