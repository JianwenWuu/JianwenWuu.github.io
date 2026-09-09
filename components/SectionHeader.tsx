type SectionHeaderProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  index,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-12 grid gap-6 border-t border-white/15 pt-6 md:mb-16 md:grid-cols-[1fr_2fr]">
      <p className="eyebrow text-[#76b900]">{index}</p>
      <div>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.05em]">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#a3a3a3]">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
