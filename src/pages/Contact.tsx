import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { site } from '../site';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copia el correo:', site.email);
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
      <header className="mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8 md:ml-20">
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[1.1]">
              Escríbeme por donde te sea más fácil.
            </h1>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        <section className="lg:col-span-7 bg-surface-container-low p-10 md:p-20 flex flex-col justify-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Correo directo</h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed">
            <p className="text-lg">
              Es la vía que más reviso. Cuéntame en qué estás pensando y te respondo.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-lg text-sm tracking-[0.2em] uppercase font-bold hover:opacity-90 transition-opacity group"
            >
              Enviar un Correo
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-3 border border-primary text-primary px-6 py-5 rounded-lg text-xs tracking-[0.2em] uppercase font-bold hover:bg-primary/10 transition-colors"
            >
              {copied ? (
                <>
                  Copiado
                  <Check className="w-4 h-4" aria-hidden="true" />
                </>
              ) : (
                <>
                  Copiar correo
                  <Copy className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </section>

        <aside className="lg:col-span-5 bg-primary-container text-on-primary-container p-10 md:p-20">
          <div className="space-y-12">
            <h2 className="font-serif text-3xl font-bold italic text-white">Datos</h2>
            <div className="space-y-8 font-mono text-sm">
              <div>
                <span className="text-[11px] text-on-primary-container/60 block mb-1">ubicación</span>
                <p className="text-lg text-white">{site.location}</p>
              </div>
              <div>
                <span className="text-[11px] text-on-primary-container/60 block mb-1">correo</span>
                <p className="break-all text-lg text-white">{site.email}</p>
              </div>
              <div>
                <span className="text-[11px] text-on-primary-container/60 block mb-1">github</span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block break-all text-lg text-white underline-offset-4 hover:underline"
                >
                  github.com/adrianql5
                </a>
              </div>
              <div>
                <span className="text-[11px] text-on-primary-container/60 block mb-1">linkedin</span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block break-all text-lg text-white underline-offset-4 hover:underline"
                >
                  linkedin.com/in/adrian-quiroga-linares-3b2569317
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
