import { news } from '@/data/news';
import { RichText } from '@/lib/rich-text';
import { SectionHeader } from './SectionHeader';

function toDateTime(date: string) {
  const parsed = new Date(`1 ${date}`);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}`;
}

export function News() {
  return (
    <section className="section" id="news" aria-labelledby="news-title">
      <div className="wrap">
        <SectionHeader id="news-title" title="News" />
        <ol className="news">
          {news.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <time dateTime={toDateTime(item.date)}>{item.date}</time>
              <p>
                <RichText text={item.title} />
                {item.description && (
                  <>
                    {' '}
                    <span className="news__note">{item.description}</span>
                  </>
                )}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
