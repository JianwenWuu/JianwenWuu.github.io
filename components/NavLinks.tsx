'use client';

import { useEffect, useState } from 'react';
import { navigation } from '@/data/site';

/** Section links; the section crossing the middle of the screen is shown in red. */
export function NavLinks() {
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    const ids = navigation.map((item) => item.href.slice(1));
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(ids.filter((id) => visible.has(id)));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <ul>
      {navigation.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            aria-current={
              active.includes(item.href.slice(1)) ? 'true' : undefined
            }
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
