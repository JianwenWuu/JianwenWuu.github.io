import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/data/projects';
import { assetPath } from '@/lib/asset-path';

export function ProjectCard({ project }: { project: ProjectItem }) {
  const href = project.projectUrl || project.paperUrl || project.codeUrl;

  const card = (
    <article className="group h-full border border-white/15 bg-[#0d0d0d] transition-colors hover:bg-[#151515]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/15 bg-[#111]">
        {project.image ? (
          <Image
            src={assetPath(project.image)}
            alt={`Preview of ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_49.8%,#242424_50%,transparent_50.2%,transparent_100%)]" />
            <div className="absolute -bottom-[55%] -right-[5%] aspect-square w-[72%] rounded-full border border-white/15 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute left-7 top-7 font-mono text-xs tracking-[0.16em] text-[#737373]">
              RESEARCH / PLACEHOLDER
            </div>
            <div className="absolute bottom-7 left-7 h-1 w-20 bg-[#76b900]" />
          </div>
        )}
      </div>
      <div className="p-7 md:p-9">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow text-[#76b900]">{project.subtitle}</p>
          <p className="font-mono text-xs text-[#737373]">{project.year}</p>
        </div>
        <div className="mt-7 flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-medium tracking-[-0.035em] transition-colors group-hover:text-[#76b900] md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-lg leading-relaxed text-[#a3a3a3]">
              {project.description}
            </p>
          </div>
          <ArrowUpRight
            className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#76b900]"
            aria-hidden="true"
          />
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#737373]">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {card}
    </a>
  ) : (
    card
  );
}
