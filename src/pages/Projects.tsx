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
      <div
        onClick={() => onOpen(project)}
        className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors"
      >
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-4">
            {project.category}
          </span>
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
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute left-8 bottom-8 flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'accent') {
    const isDark = project.dark ?? false;

    return (
      <div
        onClick={() => onOpen(project)}
        className={[
          'md:col-span-4 rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer transition-colors',
          isDark
            ? 'bg-primary-container text-white hover:bg-primary'
            : 'bg-surface-container-high text-primary hover:bg-surface-container-highest',
        ].join(' ')}
      >
        <div>
          <span className={['text-[10px] uppercase tracking-[0.3em] font-bold block mb-4', isDark ? 'text-on-primary-container' : 'text-on-surface-variant'].join(' ')}>
            {project.category}
          </span>
          <h2 className="font-serif text-4xl font-bold mb-6">{project.title}</h2>
          <p className={['leading-relaxed', isDark ? 'text-on-primary-container' : 'text-on-surface-variant'].join(' ')}>
            {project.desc}
          </p>
        </div>
        {project.visualKind === 'image' ? (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-white/10">
            <div aria-hidden="true" className="absolute inset-0 bg-center bg-cover bg-no-repeat" style={visualStyle} />
          </div>
        ) : (
          <div className="flex justify-end">
            <Terminal className={['w-16 h-16 opacity-20', isDark ? 'text-on-primary-container' : 'text-primary'].join(' ')} />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div
        onClick={() => onOpen(project)}
        className="md:col-span-4 bg-surface-container-highest rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-6">
          {project.category}
        </span>
        <h2 className="font-serif text-4xl text-primary font-bold mb-8">{project.title}</h2>
        <div className="h-[1px] w-24 bg-outline-variant mb-8"></div>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {project.desc}
        </p>
      </div>
    );
  }

  if (variant === 'media') {
    return (
      <div
        onClick={() => onOpen(project)}
        className="md:col-span-4 bg-tertiary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-tertiary transition-colors min-h-[280px]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block mb-4">
          {project.category}
        </span>
        <h2 className="font-serif text-3xl font-bold mb-6">{project.title}</h2>
        <div
          aria-hidden="true"
          className="aspect-video rounded-xl border border-white/10 bg-center bg-cover bg-no-repeat"
          style={visualStyle}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => onOpen(project)}
      className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-4">
        {project.category}
      </span>
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
    </div>
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
        <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">Portfolio Personal</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8">
          Proyectos
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Una selección de productos web, herramientas y sistemas construidos con foco en utilidad real, criterio técnico y ejecución completa.
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
            <h3 className="text-xs tracking-[0.3em] uppercase text-on-surface-variant font-bold">Otros Proyectos</h3>
            <div className="h-[1px] flex-1 sm:mx-8 bg-outline-variant/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {otherProjects.map((item) => (
              <div key={item.num} className="group">
                <span className="text-xs font-serif italic text-primary/40 block mb-4">{item.num}</span>
                <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
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
