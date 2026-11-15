type SectionHeaderProps = {
  id: string;
  title: string;
  action?: React.ReactNode;
};

export function SectionHeader({ id, title, action }: SectionHeaderProps) {
  return (
    <div className="section__head">
      <h2 className="section__title" id={id}>
        {title}
      </h2>
      {action}
    </div>
  );
}
