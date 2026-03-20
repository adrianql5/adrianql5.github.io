import { Mail, Github, Download, Linkedin } from 'lucide-react';
import { site } from '../site';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
      <header className="mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8 md:ml-20">
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">Contacto</p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1]">
              Si quieres contactar conmigo, aquí tienes mis datos.
            </h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        <section className="lg:col-span-7 bg-surface-container-low p-10 md:p-20 flex flex-col justify-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Escríbeme directamente</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p className="text-lg">
              Si alguien quiere contactar conmigo, por correo, GitHub o LinkedIn tiene todos mis datos aquí.
            </p>
          </div>
          <div className="mt-12">
            <a 
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-lg text-sm tracking-[0.2em] uppercase font-bold hover:bg-primary-container transition-all group"
            >
              Enviar un Correo
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <aside className="lg:col-span-5 bg-primary-container text-white flex flex-col justify-between p-10 md:p-20">
          <div className="space-y-12">
            <h2 className="font-serif text-3xl font-bold italic text-on-primary-container">Datos</h2>
            <div className="space-y-8">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-on-primary-container opacity-60">Ubicación</span>
                <p className="text-xl mt-1">{site.location}</p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-on-primary-container opacity-60">Correo</span>
                <p className="mt-1 break-all text-lg">{site.email}</p>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-on-primary-container opacity-60">GitHub</span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block break-all text-lg underline-offset-4 hover:underline"
                >
                  github.com/adrianql5
                </a>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase text-on-primary-container opacity-60">LinkedIn</span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block break-all text-lg underline-offset-4 hover:underline"
                >
                  linkedin.com/in/adrian-quiroga-linares-3b2569317
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-primary p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] tracking-widest uppercase text-on-primary-container mb-2">Portfolio</p>
              <h3 className="text-xl font-bold mb-6">Repositorio de esta web</h3>
              <a
                href={site.repository}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-lg text-xs font-bold tracking-widest uppercase hover:bg-on-primary-container transition-colors"
              >
                <Download className="w-4 h-4" />
                Abrir GitHub
              </a>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Download className="w-32 h-32" />
            </div>
          </div>
        </aside>
      </div>

      {/* Secondary Info */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container p-10 rounded-2xl">
          <Mail className="w-10 h-10 text-primary mb-6" />
          <h4 className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">Directo</h4>
          <a href={`mailto:${site.email}`} className="text-primary font-bold hover:underline">{site.email}</a>
        </div>
        <div className="bg-surface-container p-10 rounded-2xl">
          <Github className="w-10 h-10 text-primary mb-6" />
          <h4 className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">GitHub</h4>
          <a href={site.github} target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline">
            github.com/adrianql5
          </a>
        </div>
        <div className="bg-surface-container p-10 rounded-2xl">
          <Linkedin className="w-10 h-10 text-primary mb-6" />
          <h4 className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">LinkedIn</h4>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline break-all">
            linkedin.com/in/adrian-quiroga-linares-3b2569317
          </a>
        </div>
      </section>
    </div>
  );
}
