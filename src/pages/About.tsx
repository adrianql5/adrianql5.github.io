import { Database, GitBranch, Coffee, Code2, Terminal, Container, PenTool, Layout } from 'lucide-react';

const techStack = [
  { icon: Database, name: 'SQL' },
  { icon: GitBranch, name: 'Git' },
  { icon: Coffee, name: 'Java' },
  { icon: Code2, name: 'C++' },
  { icon: Terminal, name: 'Bash / Linux' },
  { icon: Container, name: 'Docker' },
  { icon: PenTool, name: 'Neovim' },
  { icon: Layout, name: 'VS Code' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <header className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-end">
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">Ingeniero en Formación</p>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-primary leading-none">
              Adrián Quiroga Linares
            </h1>
          </div>
          <div className="md:w-1/3 mb-4">
            <p className="text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant pl-6">
              "La ingeniería no es solo construcción; es la orquestación meticulosa de sistemas que perduran en el tiempo."
            </p>
          </div>
        </div>
      </header>

      {/* Academic Background */}
      <section className="bg-surface-container-low py-20 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl text-primary mb-6">Trayectoria Académica</h2>
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant">Formación Base</p>
          </div>
          <div className="md:col-span-8">
            <div className="bg-surface-container-lowest p-10 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-primary">Grado en Ingeniería Informática</h3>
                  <p className="text-on-surface-variant font-medium">Universidade de Santiago de Compostela (USC)</p>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded text-xs font-bold tracking-widest uppercase">
                  2023 — 2027
                </span>
              </div>
              <p className="text-on-surface-variant leading-loose max-w-2xl">
                Especializándome en la arquitectura de sistemas y el desarrollo de software de bajo nivel. Mi enfoque académico se centra en la optimización de procesos y la comprensión profunda de las estructuras de datos dentro del ecosistema universitario gallego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-primary">Stack Tecnológico</h2>
            <div className="h-1 w-20 bg-primary mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-px bg-outline-variant/20 overflow-hidden rounded-xl border border-outline-variant/10">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-surface p-8 flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-colors">
                <tech.icon className="w-10 h-10 mb-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="font-bold text-primary tracking-tight">{tech.name}</span>
              </div>
            ))}
            <div className="bg-surface p-8 col-span-2 hidden md:flex items-center justify-center bg-surface-container-high italic text-on-surface-variant text-sm px-10 text-center">
              Herramientas seleccionadas por su precisión y capacidad de personalización técnica.
            </div>
          </div>
        </div>
      </section>

      {/* Digital Sovereignty */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto py-20">
        <div className="relative bg-primary-container text-white p-12 md:p-24 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-on-primary-container mb-6">Filosofía de Entorno</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Soberanía Digital</h2>
              <p className="text-lg text-on-primary-container leading-relaxed">
                Mi entorno de trabajo no es una elección casual, sino una declaración de principios. Utilizo <strong>Debian</strong> como cimiento por su estabilidad y compromiso con el software libre, junto a <strong>Hyprland</strong> para una gestión de ventanas eficiente y estéticamente minimalista.
              </p>
            </div>
            <div className="bg-[#1c1c18] p-8 rounded-2xl shadow-2xl border border-white/5 font-mono text-xs text-on-primary-container/80">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2">
                <p><span className="text-blue-400">OS:</span> Debian GNU/Linux 12 (bookworm)</p>
                <p><span className="text-blue-400">WM:</span> Hyprland</p>
                <p><span className="text-blue-400">Terminal:</span> foot</p>
                <p><span className="text-blue-400">Editor:</span> nvim</p>
                <p className="mt-6 text-outline"># Built for speed and focus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
