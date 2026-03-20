import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Tag, User } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    category: string;
    desc: string;
    image: string;
    tags: string[];
  } | null;
}

export default function ProjectDetail({ isOpen, onClose, project }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
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
            className="relative w-full max-w-5xl bg-surface rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-2 block">{project.category}</span>
                <h2 className="font-serif text-5xl text-white font-bold">{project.title}</h2>
              </div>
            </div>

            <div className="md:w-1/2 p-10 md:p-16 overflow-y-auto bg-surface-container-low">
              <div className="space-y-10">
                <section>
                  <h3 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-6">Descripción del Proyecto</h3>
                  <p className="text-lg text-on-surface leading-relaxed font-serif italic">
                    {project.desc}
                  </p>
                </section>

                <section className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-bold mb-4 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> Fecha
                    </h4>
                    <p className="text-sm font-bold text-primary">Q3 2024</p>
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
                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-outline-variant/10">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-sm text-on-surface-variant">Implementación de arquitectura orientada a servicios para máxima escalabilidad.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-outline-variant/10">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-sm text-on-surface-variant">Optimización de consultas SQL mediante indexación avanzada y particionamiento.</p>
                    </div>
                  </div>
                </section>

                <div className="pt-10 flex gap-4">
                  <button className="flex-1 bg-primary text-on-primary py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary-container transition-colors">
                    <ExternalLink className="w-4 h-4" /> Ver Demo
                  </button>
                  <button className="flex-1 border border-primary text-primary py-4 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                    <Github className="w-4 h-4" /> Código
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
