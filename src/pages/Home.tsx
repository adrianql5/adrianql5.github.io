import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { site } from '../site';

export default function Home() {
  const [photoError, setPhotoError] = useState(false);
  const profilePhoto = `${import.meta.env.BASE_URL}photos/profile.jpg`;

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center pt-24 md:pt-0">
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs text-primary mb-5">
            Ingeniería Informática · USC, 2023–2027
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-on-surface font-semibold tracking-tight leading-[1.02] mb-8">
            Adrián Quiroga Linares
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10">
            Me gusta construir software de principio a fin, desde scripts pequeños hasta aplicaciones completas, y entender bien lo que hay debajo. Busco un sitio donde seguir haciendo eso con cosas que importen.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/proyectos" className="bg-primary text-on-primary px-7 py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-opacity hover:opacity-90">
              Ver Proyectos
            </Link>
            <Link to="/contacto" className="border border-primary text-primary px-7 py-4 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors hover:bg-primary/10">
              Contacto
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-on-surface-variant">
            <span>{site.location}</span>
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-[220px] mx-auto lg:mx-0"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-high shadow-sm">
            {photoError ? (
              <div className="h-full w-full flex flex-col items-center justify-center px-4 text-center bg-secondary-container">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Añade <span className="font-bold text-primary">public/photos/profile.jpg</span>
                </p>
              </div>
            ) : (
              <img
                src={profilePhoto}
                alt="Foto de Adrián Quiroga"
                className="h-full w-full scale-[1.08] object-cover object-bottom"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
