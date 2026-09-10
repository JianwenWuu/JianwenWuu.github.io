import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad bg-[#0d0d0d]">
      <div className="site-container">
        <Reveal>
          <div id="projects-title">
            <SectionHeader index="03 / 05" title="Projects" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
