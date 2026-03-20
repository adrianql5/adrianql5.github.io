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
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">Sobre mí</p>
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-primary leading-none">
              Adrián Quiroga Linares
            </h1>
          </div>
          <div className="md:w-1/3 mb-4">
            <p className="text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant pl-6">
              Construir cosas útiles desde cero y entender por qué funcionan es lo que más me engancha de programar.
            </p>
          </div>
        </div>
      </header>

      {/* About Summary */}
      <section className="bg-surface-container-low py-20 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl text-primary mb-6">Sobre mí</h2>
            <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant">Lugo · Santiago de Compostela · USC</p>
          </div>
          <div className="md:col-span-8">
            <div className="bg-surface p-10 rounded-lg border border-outline-variant/10">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-primary">Grado en Ingeniería Informática</h3>
                  <p className="text-on-surface-variant font-medium">Universidade de Santiago de Compostela (USC) · ETSE</p>
                </div>
                <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded text-xs font-bold tracking-widest uppercase">
                  2023 — 2027
                </span>
              </div>
              <div className="max-w-3xl space-y-6 text-on-surface-variant leading-loose">
                <p>
                  Actualmente curso el Grado en Ingeniería Informática en la ETSE, donde adquiero y consolido una sólida base técnica en algoritmia, arquitectura de sistemas y desarrollo de software.
                </p>
                <p>
                  Soy de Lugo y ahora paso esta etapa en Santiago de Compostela, combinando la formación universitaria con una práctica constante orientada a seguir mejorando como programador a través de proyectos reales.
                </p>
                <p>
                  Fuera del código también busco mantener ese equilibrio con otros intereses que forman parte de mi día a día, como el gimnasio, el esquí, el pádel, viajar y salir de fiesta de vez en cuando.
                </p>
              </div>
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

      {/* Personal Section */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto py-20">
        <div className="relative bg-primary-container text-white p-12 md:p-24 rounded-3xl overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-on-primary-container mb-6">Qué valoro</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">Programar para construir cosas que sirvan</h2>
              <p className="text-lg text-on-primary-container leading-relaxed">
                Lo que más me engancha de la programación no es escribir código por escribirlo, sino usarlo para hacer herramientas, proyectos o sistemas que sean útiles. Me gusta empezar desde cero, pelearme con los problemas de verdad y entender por qué una solución funciona en lugar de quedarme solo con que “más o menos tira”.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-white/6 p-8 md:p-10 text-white/85 backdrop-blur-md">
              <p className="text-[10px] tracking-[0.32em] uppercase text-white/50 mb-4">Entorno de trabajo</p>
              <h3 className="font-serif text-2xl text-white mb-3">Debian + Hyprland para el día a día</h3>
              <p className="text-sm leading-relaxed text-white/70 max-w-lg mb-8">
                Un entorno configurado a medida, ligero y muy centrado en flujo de trabajo, terminal y control fino del sistema.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 font-mono text-xs">
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">DISTRO</p>
                  <p>Debian GNU/Linux forky/sid x86_64</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">DE / WM</p>
                  <p>Hyprland 0.50.1 (Wayland)</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">KERNEL</p>
                  <p>Linux 6.18.15+deb14-amd64</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">SHELL</p>
                  <p>zsh 5.9</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">TERMINAL</p>
                  <p>kitty 0.45.0</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <p className="text-white/45 mb-1">FONT</p>
                  <p>FantasqueSansMNFM-Bold (14pt)</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-xs text-white/65 sm:grid-cols-2">
                <p><span className="text-white/40">Tema:</span> Tokyonight-Dark</p>
                <p><span className="text-white/40">Cursor:</span> Bibata-Modern-Ice</p>
                <p><span className="text-white/40">Equipo:</span> Inspiron 16 5630</p>
                <p><span className="text-white/40">CPU:</span> Intel Core i7-1360P</p>
                <p><span className="text-white/40">GPU:</span> Iris Xe Graphics</p>
                <p><span className="text-white/40">Pantalla:</span> 1920x1200 @ 60Hz</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
