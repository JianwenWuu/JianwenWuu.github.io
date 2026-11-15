import { Fragment, type ReactNode } from 'react';

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const EMPHASIS = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;

function emphasis(text: string, key: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(EMPHASIS)) {
    const start = match.index ?? 0;
    if (start > last) out.push(text.slice(last, start));
    out.push(
      match[1] !== undefined ? (
        <strong key={`${key}-b${start}`}>{match[1]}</strong>
      ) : (
        <em key={`${key}-i${start}`}>{match[2]}</em>
      ),
    );
    last = start + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * Renders the small inline syntax used in data/*.ts:
 * [text](url) for links, **text** for bold and *text* for italics.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const start = match.index ?? 0;
    if (start > last)
      out.push(...emphasis(text.slice(last, start), `t${last}`));
    const href = match[2];
    const external = /^https?:\/\//.test(href);
    out.push(
      <a
        key={`a${start}`}
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {emphasis(match[1], `a${start}`)}
      </a>,
    );
    last = start + match[0].length;
  }
  if (last < text.length) out.push(...emphasis(text.slice(last), `t${last}`));
  return <Fragment>{out}</Fragment>;
}
