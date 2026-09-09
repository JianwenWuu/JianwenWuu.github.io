import { ArrowUpRight } from 'lucide-react';
import { experience } from '@/data/experience';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad">
      <div className="site-container">
        <Reveal>
          <div id="experience-title">
            <SectionHeader index="02 / 05" title="Experience" />
          </div>
          {experience.map((item) => {
            const content = (
              <>
                <div className="flex flex-col justify-between gap-10">
                  <p className="font-mono text-sm text-[#a3a3a3]">
                    {item.startDate} — {item.endDate}
                  </p>
                  {item.location && (
                    <p className="text-sm text-[#737373]">{item.location}</p>
                  )}
                </div>
                <div>
                  <p className="eyebrow text-[#76b900]">{item.role}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] transition-colors group-hover:text-[#76b900] md:text-5xl">
                    {item.organization}
                  </h3>
                  {item.description && (
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a3a3]">
                      {item.description}
                    </p>
                  )}
                  {item.tags && (
                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#737373]">
                      {item.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <ArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#76b900]"
                  aria-hidden="true"
                />
              </>
            );

            const className =
              'group grid gap-8 border-y border-white/15 bg-[#0d0d0d] p-7 transition-colors hover:bg-[#151515] md:grid-cols-[0.65fr_2fr_auto] md:p-10';

            return item.link ? (
              <a
                key={`${item.organization}-${item.startDate}`}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <article
                key={`${item.organization}-${item.startDate}`}
                className={className}
              >
                {content}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
