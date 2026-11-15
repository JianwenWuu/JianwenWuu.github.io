import { assetPath } from '@/lib/asset-path';

/** Brick-red "– Label –" link, after the links on the Loro Piana hero card. */
export function DashLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className="dash"
      href={href.startsWith('/') ? assetPath(href) : href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
    </a>
  );
}
