import { album } from '@/data/album';
import { assetPath } from '@/lib/asset-path';
import { SectionHeader } from './SectionHeader';

/** Moments: the first photo as a framed print with a label; any others in a row below. */
export function Album() {
  if (album.length === 0) return null;
  const [featured, ...rest] = album;

  return (
    <section className="section" id="moments" aria-labelledby="moments-title">
      <div className="wrap">
        <SectionHeader id="moments-title" title="Moments" />

        <figure className="moment">
          <div className="print">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetPath(featured.src)}
              alt={featured.alt}
              loading="lazy"
            />
          </div>
          <figcaption className="moment__caption">
            <span className="moment__title">{featured.title}</span>
            {featured.meta && (
              <span className="moment__meta">{featured.meta}</span>
            )}
            {featured.caption && (
              <span className="moment__text">{featured.caption}</span>
            )}
          </figcaption>
        </figure>

        {rest.length > 0 && (
          <ul className="moments-grid">
            {rest.map((item) => (
              <li key={item.id}>
                <figure>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    style={
                      item.focus ? { objectPosition: item.focus } : undefined
                    }
                  />
                  <figcaption>
                    <span className="moments-grid__title">{item.title}</span>
                    {item.meta && (
                      <span className="moments-grid__meta">{item.meta}</span>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
