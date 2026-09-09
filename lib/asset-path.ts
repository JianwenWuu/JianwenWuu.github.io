export function assetPath(source: string) {
  if (!source || !source.startsWith('/')) {
    return source;
  }

  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${source}`;
}
