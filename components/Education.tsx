import { education } from '@/data/education';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad bg-[#0d0d0d]">
      <div className="site-container">
        <Reveal>
          <div id="education-title">
            <SectionHeader index="01 / 05" title="Education" />
          </div>
          <div>
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.startYear}`}
                className="grid gap-5 border-t border-white/15 py-9 last:border-b md:grid-cols-[1fr_2fr] md:py-11"
              >
                <p className="font-mono text-sm text-[#a3a3a3]">
                  {item.startYear} — {item.endYear}
                </p>
                <div className="grid gap-5 md:grid-cols-[1.5fr_1fr]">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                      {item.institution}
                    </h3>
                    <p className="mt-2 text-lg text-[#a3a3a3]">{item.degree}</p>
                    {item.description && (
                      <p className="mt-5 max-w-xl leading-relaxed text-[#737373]">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2 text-sm text-[#737373] md:text-right">
                    {item.location.map((location) => (
                      <p key={location}>{location}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
