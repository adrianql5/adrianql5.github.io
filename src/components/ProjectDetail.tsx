import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { getProjectVisualStyle } from '../lib/projects';
import { site } from '../site';
import type { FeaturedProject } from '../types/projects';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: FeaturedProject | null;
}

export default function ProjectDetail({ isOpen, onClose, project }: ProjectDetailProps) {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;
  const visualStyle = getProjectVisualStyle(project);
  const primaryHref = project.liveUrl ?? `mailto:${site.email}`;
  const primaryLabel = project.liveUrl ? 'Abrir Web' : 'Hablar del proyecto';
  const primaryExternal = primaryHref.startsWith('http://') || primaryHref.startsWith('https://');
  const secondaryHref = project.repoUrl ?? site.github;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex h-[100dvh] w-full flex-col overflow-y-auto bg-surface shadow-2xl overscroll-contain sm:max-h-[94vh] sm:max-w-6xl sm:rounded-3xl md:h-auto md:max-h-[calc(100dvh-3rem)] md:grid md:grid-cols-[0.95fr_1.05fr] md:overflow-hidden"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>

            <div className="relative h-56 flex-none overflow-hidden sm:h-64 md:h-full md:min-h-[580px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-105"
                style={visualStyle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-16 sm:bottom-8 sm:left-8 md:bottom-8 md:left-8">
                <span className="font-mono text-[11px] text-white/70 mb-2 block">{project.category}</span>
                <h2 className="font-serif text-3xl text-white font-bold leading-tight sm:text-5xl">{project.title}</h2>
              </div>
            </div>

            <div className="flex flex-col bg-surface-container-low md:min-h-[580px]">
              <section className="border-b border-outline-variant/60 px-6 py-6 sm:px-8 sm:py-7 md:px-8 md:py-8">
                <h3 className="mb-4 font-mono text-[11px] text-on-surface-variant">resumen</h3>
                <p className="font-serif text-[15px] leading-7 text-on-surface sm:text-base">
                  {project.desc}
                </p>
              </section>

              <section className="grid grid-cols-1 gap-5 border-b border-outline-variant/60 px-6 py-5 sm:px-8 sm:py-6 md:grid-cols-[140px_1fr] md:px-8">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-mono text-[11px] text-on-surface-variant">
                    <Calendar className="h-3 w-3" /> fecha
                  </h4>
                  <p className="text-sm font-bold text-primary">{project.year}</p>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-mono text-[11px] text-on-surface-variant">
                    <Tag className="h-3 w-3" /> stack
                  </h4>
                  <div className="flex flex-wrap gap-2 font-mono">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-surface-container-highest px-2.5 py-1 text-[10px] text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section className="flex-1 px-6 py-5 sm:px-8 sm:py-6 md:px-8">
                <h3 className="mb-4 font-mono text-[11px] text-on-surface-variant">puntos clave</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-outline-variant bg-surface-container-high p-4">
                      <p className="text-sm leading-relaxed text-on-surface-variant">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="border-t border-outline-variant/60 px-6 py-5 sm:px-8 sm:py-6 md:px-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href={primaryHref}
                    {...(primaryExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="w-4 h-4" /> {primaryLabel}
                  </a>
                  <a
                    href={secondaryHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4" /> Ver GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
