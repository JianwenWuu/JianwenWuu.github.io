import { ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/site';

const links = [
  { label: 'Email', href: siteConfig.email ? `mailto:${siteConfig.email}` : '' },
  { label: 'GitHub', href: siteConfig.github },
  { label: 'Google Scholar', href: siteConfig.scholar },
  { label: 'LinkedIn', href: siteConfig.linkedin },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[#76b900] bg-black py-16 md:py-24">
      <div className="site-container">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              {siteConfig.name}
            </p>
            <p className="mt-5 max-w-md leading-relaxed text-[#737373]">
              {siteConfig.title} at {siteConfig.institution}.
            </p>
          </div>
          <div>
            <p className="eyebrow text-[#737373]">Connect</p>
            <div className="mt-5 space-y-3">
              {links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="block transition-colors hover:text-[#76b900]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="block text-[#494949]">
                    {link.label}
                  </span>
                ),
              )}
            </div>
          </div>
          <div>
            <p className="eyebrow text-[#737373]">Based in</p>
            <p className="mt-5">{siteConfig.location}</p>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-6 text-sm text-[#737373]">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 transition-colors hover:text-[#76b900]"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
