import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Code, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '../site';

export default function Home() {
  const [photoError, setPhotoError] = useState(false);
  const profilePhoto = `${import.meta.env.BASE_URL}photos/profile.jpg`;

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-on-surface-variant text-xs tracking-[0.4em] uppercase mb-4">
              Adrián Quiroga Linares — USC 2027
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] text-primary font-semibold tracking-tight leading-[0.92] mb-8">
              Ingeniería <br /> con <br /> <span className="italic font-normal">Propósito</span>.
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/proyectos" className="bg-primary text-on-primary px-8 py-5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:bg-primary-container shadow-xl text-center">
                Explorar Portafolio
              </Link>
              <Link to="/contacto" className="border border-primary text-primary px-8 py-5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all hover:bg-surface-container-low text-center">
                Contacto
              </Link>
            </div>
            <div className="hidden md:block h-[1px] w-24 bg-outline-variant"></div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-on-surface-variant font-bold">
              {site.location}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 pt-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="h-[340px] md:h-[420px] lg:h-[360px] rounded-3xl overflow-hidden border border-outline-variant/20 bg-surface-container-high shadow-sm">
              {photoError ? (
                <div className="h-full w-full flex flex-col items-center justify-center px-8 text-center bg-[linear-gradient(160deg,rgba(239,224,205,0.9),rgba(241,237,231,0.65))]">
                  <p className="font-serif text-3xl text-primary">Tu foto aquí</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mt-4 max-w-xs">
                    Añade tu imagen en <span className="font-bold text-primary">public/photos/profile.jpg</span> y aparecerá en esta portada.
                  </p>
                </div>
              ) : (
                <img
                  src={profilePhoto}
                  alt="Foto de Adrián Quiroga"
                  className="h-full w-full object-cover"
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>

            <div className="relative bg-surface-container-high p-8 md:p-10 rounded-3xl border border-outline-variant/20 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-5">
                Sobre mí
              </p>
              <p className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-8">
                Me gusta construir cosas desde cero, entender cómo funcionan y disfrutar el proceso.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Suelo moverme cómodo entre <span className="font-bold text-primary">Linux, C, C++, Java, SQL y la web</span>, con interés por herramientas simples y bien hechas.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Si algo me interesa, intento hacerlo yo mismo: por aprender, por curiosidad y porque me lo paso bien construyendo.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Ahora busco <span className="font-bold text-primary">proyectos y trabajo</span> donde pueda aportar criterio técnico, constancia y ganas de seguir creciendo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[300px]">
          {/* Large Visual Card */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-3xl bg-[#251912] min-h-[560px] md:min-h-0">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, rgba(239,224,205,0.3), transparent 22%), radial-gradient(circle at 78% 18%, rgba(172,145,129,0.18), transparent 18%), linear-gradient(140deg, #1f140e 0%, #3d2b1f 45%, #6d6354 100%)',
              }}
            />
            <div className="absolute left-6 right-6 top-6 md:left-auto md:right-8 md:top-8 grid grid-cols-2 gap-3 md:w-[min(48%,320px)]">
              {[
                ['Open source', 'Qué me interesa'],
                ['Linux', 'Dónde trabajo'],
                ['C y C++', 'Con qué disfruto'],
                ['Proyectos reales', 'Qué busco'],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/55 mb-2">{subtitle}</p>
                  <p className="font-serif text-xl md:text-2xl text-white leading-tight">{title}</p>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
            <div className="absolute left-6 right-6 bottom-6 md:left-10 md:right-10 md:bottom-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] bg-primary text-on-primary px-3 py-1 inline-block mb-4">Ahora mismo</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white font-semibold">Me motiva construir, entender y mejorar</h3>
                <p className="text-sm text-white/70 mt-3 max-w-md">
                  Disfruto especialmente los proyectos donde puedo tocar la base técnica, aprender haciendo y aportar desde el código, no solo desde el discurso.
                </p>
              </div>
              <Link
                to="/proyectos"
                className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-4 md:row-span-2 bg-primary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-on-primary shadow-inner min-h-[420px] md:min-h-0">
            <div>
              <div className="flex justify-between items-start mb-12">
                <h4 className="font-serif text-3xl font-bold">Ecosistema Técnico</h4>
                <Terminal className="w-10 h-10 text-on-primary-container" />
              </div>
              <ul className="space-y-6">
                <li className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">OS / Workflow</span>
                  <span className="font-serif text-xl">Debian + Hyprland (Wayland)</span>
                </li>
                <li className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">Entorno de Desarrollo</span>
                  <span className="font-serif text-xl">Neovim, Git y terminal</span>
                </li>
                <li className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">Lenguajes</span>
                  <span className="font-serif text-xl">C, C++, Java y JavaScript</span>
                </li>
                <li>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">Web / Datos</span>
                  <span className="font-serif text-xl">HTML, CSS, SQL y frontend clásico</span>
                </li>
              </ul>
            </div>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mt-8 text-center border-t border-white/5 pt-4 italic">Stack real que uso a menudo</p>
          </div>

          {/* Focus Card */}
          <div className="md:col-span-6 bg-tertiary-container rounded-3xl p-8 md:p-12 flex flex-col justify-center relative group min-h-[280px]">
            <div className="absolute top-8 right-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Code className="w-24 h-24" />
            </div>
            <p className="font-serif text-3xl text-white font-bold leading-tight relative z-10">
              Open source, Linux y software hecho con intención.
            </p>
            <p className="text-sm mt-6 text-white/65 max-w-xl relative z-10 leading-relaxed">
              Me interesan especialmente los proyectos donde se valora entender la base técnica, iterar rápido y mantener el control sobre lo que se construye.
            </p>
          </div>

          {/* Mini Brand Card */}
          <div className="md:col-span-3 bg-surface-container-highest rounded-3xl p-8 flex flex-col items-center justify-center text-center min-h-[220px]">
            <p className="font-serif text-6xl font-bold italic text-primary">USC</p>
            <p className="text-[10px] tracking-widest uppercase text-on-surface-variant mt-2">Facultade de Informática</p>
          </div>

          {/* CTA Mini Card */}
          <Link to="/contacto" className="md:col-span-3 bg-secondary-container rounded-3xl p-8 flex flex-col justify-between group hover:bg-primary transition-all duration-500 min-h-[220px]">
            <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            <div>
              <p className="font-serif text-xl font-bold group-hover:text-white transition-colors">¿Colaboramos?</p>
              <p className="text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-white/70 transition-colors">Escríbeme hoy</p>
            </div>
          </Link>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="w-full bg-primary-container text-white py-24 px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-12 relative z-10">
              Lo que <br /><span className="italic font-normal">puedo aportar</span>
            </h2>
            <div className="absolute -top-10 -left-10 text-[200px] font-serif font-bold text-white/5 pointer-events-none select-none italic">AQ</div>
            <p className="text-lg text-on-primary-container leading-relaxed max-w-xl">
              No me interesa vender humo. Me interesa aprender rápido, tocar código de verdad y sacar proyectos adelante. Disfruto especialmente cuando puedo empezar algo desde cero, entender cada capa y mejorarlo iterando.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: '01', title: 'Open Source', desc: 'Me gusta aprender leyendo, probando y construyendo sobre herramientas abiertas que realmente puedo entender.' },
              { num: '02', title: 'Linux', desc: 'Trabajo a gusto en Linux y disfruto ajustando mi entorno para que sea cómodo, rápido y útil de verdad.' },
              { num: '03', title: 'Desde Cero', desc: 'Si algo me interesa, prefiero intentarlo yo mismo: aunque salga regular al principio, aprendo mucho más haciéndolo.' },
              { num: '04', title: 'Trabajo Real', desc: 'Busco proyectos donde pueda seguir creciendo y aportar con código, constancia y buen criterio técnico.' }
            ].map((item) => (
              <div key={item.num}>
                <span className="text-xs tracking-[0.3em] uppercase text-on-primary-container/60 block mb-4">{item.num} / {item.title}</span>
                <h4 className="font-serif text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-on-primary-container/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
