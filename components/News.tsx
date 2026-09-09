import { ArrowUpRight } from 'lucide-react';
import { news } from '@/data/news';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function News() {
  return (
    <section id="news" aria-labelledby="news-title" className="section-pad bg-[#0d0d0d]">
      <div className="site-container">
        <Reveal>
          <div id="news-title">
            <SectionHeader index="05 / 05" title="News" />
          </div>
          <div className="border-t border-white/15">
            {news.map((item) => {
              const content = (
                <>
                  <p className="font-mono text-sm text-[#76b900]">{item.date}</p>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em] transition-colors group-hover:text-[#76b900] md:text-2xl">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 text-[#737373]">{item.description}</p>
                    )}
                  </div>
                  {item.link && (
                    <ArrowUpRight
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              const className =
                'group grid gap-4 border-b border-white/15 py-8 md:grid-cols-[1fr_3fr_auto] md:items-start md:py-9';

              return item.link ? (
                <a
                  key={`${item.date}-${item.title}`}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <article key={`${item.date}-${item.title}`} className={className}>
                  {content}
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
