import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { site } from '../site';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    category: string;
    desc: string;
    visual: string;
    tags: string[];
    year: string;
    highlights: string[];
  } | null;
}

export default function ProjectDetail({ isOpen, onClose, project }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-surface shadow-2xl sm:max-h-[90vh] sm:max-w-5xl sm:rounded-3xl md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative h-56 flex-none overflow-hidden sm:h-64 md:h-auto md:w-1/2">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-105"
                style={{ background: project.visual }}
              />
              <div className="absolute inset-0 bg-primary/35"></div>
              <div className="absolute bottom-5 left-5 right-16 sm:bottom-10 sm:left-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2 block">{project.category}</span>
                <h2 className="font-serif text-3xl text-white font-bold leading-tight sm:text-5xl">{project.title}</h2>
              </div>
            </div>

            <div className="scrollbar-hidden min-h-0 overflow-y-auto overflow-x-hidden bg-surface-container-low p-6 sm:p-8 md:w-1/2 md:p-16">
              <div className="space-y-8 sm:space-y-10">
                <section>
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-6">Descripción del Proyecto</h3>
                  <p className="font-serif text-base italic leading-relaxed text-on-surface sm:text-lg">
                    {project.desc}
                  </p>
                </section>

                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-4 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> Fecha
                    </h4>
                    <p className="text-sm font-bold text-primary">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-4 flex items-center gap-2">
                      <Tag className="w-3 h-3" /> Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-surface-container-highest px-2 py-1 rounded text-primary font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-6">Detalles Técnicos</h3>
                  <div className="space-y-4">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-outline-variant/10">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p className="text-sm leading-relaxed text-on-surface-variant">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 sm:pt-10">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex-1 rounded-xl bg-primary px-4 py-4 text-center text-xs font-bold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Hablar del proyecto
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-xl border border-primary px-4 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-surface-container-low flex items-center justify-center gap-2"
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
