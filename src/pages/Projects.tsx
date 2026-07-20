import { useState } from 'react';
import { Terminal } from 'lucide-react';
import ProjectDetail from '../components/ProjectDetail';
import { featuredProjects, getProjectVisualStyle, otherProjects } from '../lib/projects';
import type { FeaturedProject } from '../types/projects';

const cardVariants = ['hero', 'accent', 'minimal', 'standard', 'media'] as const;

type CardVariant = (typeof cardVariants)[number];

function getCardVariant(index: number): CardVariant {
  return cardVariants[index % cardVariants.length];
}

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
  onOpen: (project: FeaturedProject) => void;
}

function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const variant = getCardVariant(index);
  const visualStyle = getProjectVisualStyle(project);

  if (variant === 'hero') {
    return (
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="md:col-span-8 w-full text-left bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors"
      >
        <div>
          <h2 className="font-serif text-4xl text-primary font-bold mb-6">{project.title}</h2>
          <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
            {project.desc}
          </p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-highest">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-[1.02]"
            style={visualStyle}
          />
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute left-8 bottom-8 flex gap-2 flex-wrap font-mono">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-black/40 px-3 py-1 text-[10px] text-white backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    );
  }

  if (variant === 'accent') {
    const isDark = project.dark ?? false;

    return (
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={[
          'md:col-span-4 w-full text-left rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer transition-colors',
          isDark
            ? 'bg-primary-container text-on-primary-container hover:bg-primary-container/70'
            : 'bg-surface-container-high text-primary hover:bg-surface-container-highest',
        ].join(' ')}
      >
        <div>
          <h2 className="font-serif text-4xl font-bold mb-6">{project.title}</h2>
          <p className={['leading-relaxed', isDark ? 'text-on-primary-container' : 'text-on-surface-variant'].join(' ')}>
            {project.desc}
          </p>
        </div>
        {project.visualKind === 'image' ? (
          <div className="relative mt-8 h-56 overflow-hidden rounded-2xl border border-white/10 md:h-72">
            <div aria-hidden="true" className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={visualStyle} />
          </div>
        ) : (
          <div className="flex justify-end">
            <Terminal className={['w-16 h-16 opacity-20', isDark ? 'text-on-primary-container' : 'text-primary'].join(' ')} />
          </div>
        )}
      </button>
    );
  }

  if (variant === 'minimal') {
    return (
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="md:col-span-4 w-full text-left bg-surface-container-highest rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
      >
        <h2 className="font-serif text-4xl text-primary font-bold mb-8">{project.title}</h2>
        <div className="h-[1px] w-24 bg-outline-variant mb-8"></div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {project.desc}
        </p>
      </button>
    );
  }

  if (variant === 'media') {
    return (
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="md:col-span-4 w-full text-left bg-tertiary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-tertiary transition-colors min-h-[280px]"
      >
        <h2 className="font-serif text-3xl font-bold mb-6">{project.title}</h2>
        <div
          aria-hidden="true"
          className="aspect-video rounded-xl border border-white/10 bg-center bg-cover bg-no-repeat"
          style={visualStyle}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="md:col-span-4 w-full text-left bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
    >
      <h2 className="font-serif text-3xl text-primary font-bold mb-6">{project.title}</h2>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
        {project.desc}
      </p>
      {project.visualKind === 'image' && (
        <div
          aria-hidden="true"
          className="aspect-video rounded-xl border border-outline-variant/20 bg-center bg-no-repeat"
          style={visualStyle}
        />
      )}
    </button>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: FeaturedProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
      <header className="mb-20">
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8">
          Proyectos
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Aquí no hay powerpoints ni resúmenes ejecutivos: solo el código y las capturas de lo que terminé construyendo.
        </p>
      </header>

      {featuredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={openProject} />
          ))}
        </div>
      ) : (
        <div className="mb-32 rounded-3xl border border-outline-variant/30 bg-surface-container-low px-8 py-12">
          <p className="text-on-surface-variant">
            No hay proyectos destacados cargados en el JSON.
          </p>
        </div>
      )}

      {otherProjects.length > 0 && (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
            {otherProjects.map((item) => (
              <div key={item.num} className="group border-t border-outline-variant pt-6 hover:border-primary transition-colors">
                <h4 className="font-serif text-xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <ProjectDetail 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
}
