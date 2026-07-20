const techGroups = [
  { label: 'lenguajes', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'] },
  { label: 'web', items: ['HTML / CSS', 'Tailwind CSS', 'Astro', 'Node.js'] },
  { label: 'datos', items: ['PostgreSQL', 'MariaDB', 'Docker'] },
  { label: 'gráficos', items: ['OpenGL'] },
  { label: 'herramientas', items: ['Git', 'Bash / Linux', 'Neovim', 'VS Code'] },
  { label: 'ia para programar', items: ['Claude Code', 'Codex'] },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <header className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row gap-10 items-end">
          <div className="flex-1">
            <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-primary leading-none">
              Adrián Quiroga Linares
            </h1>
          </div>
          <div className="md:w-1/3 mb-4">
            <p className="text-on-surface-variant leading-relaxed italic border-l-2 border-outline-variant pl-6">
              Entender por qué algo funciona me engancha más que el propio código.
            </p>
          </div>
        </div>
      </header>

      {/* About Summary */}
      <section className="bg-surface-container-low py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-primary leading-tight">Grado en Ingeniería Informática</h2>
              <p className="text-on-surface-variant font-medium mt-3">Universidade de Santiago de Compostela (USC) · ETSE</p>
            </div>
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded text-xs font-bold tracking-widest uppercase shrink-0">
              2023 — 2027
            </span>
          </div>
          <div className="bg-surface p-10 rounded-lg border border-outline-variant/10 space-y-6 text-on-surface-variant leading-loose">
            <p>
              Curso el Grado en Ingeniería Informática en la ETSE (USC). Entre asignaturas de algoritmia, sistemas y desarrollo de software, lo que más se me queda es lo que monto por mi cuenta fuera de clase.
            </p>
            <p>
              Soy de Lugo, aunque ahora vivo en Santiago de Compostela por la carrera. Casi siempre tengo algún proyecto personal a medio construir — es ahí donde se me queda lo que aprendo.
            </p>
            <p>
              Empecé con Windows. Al entrar en la carrera me pasé a Linux, con Debian y Hyprland como entorno de cada día, y ahora mismo trabajo en macOS — pero le sigo teniendo mucho cariño a aquel montaje.
            </p>
            <p>
              Fuera del código: gimnasio, esquí, pádel, viajar y salir de fiesta de vez en cuando.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-primary">Stack Tecnológico</h2>
            <p className="text-on-surface-variant mt-4 max-w-md">
              Lo que he usado de verdad en los proyectos y prácticas que tengo montados, no una lista de aspiraciones.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {techGroups.map((group) => (
              <div key={group.label} className="border-t border-outline-variant pt-4">
                <p className="font-mono text-xs text-on-surface-variant mb-3">{group.label}</p>
                <p className="font-serif text-xl md:text-2xl text-primary leading-snug">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
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
                Sobre todo, construir cosas útiles que la gente pueda usar: bien hechas, eficientes, sin desperdicio. Y entender cómo y por qué funcionan, no solo que “más o menos tiran”.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0d1712] overflow-hidden font-mono text-xs shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1e3a2f]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#722f37]" aria-hidden="true" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#6b4423]" aria-hidden="true" />
                <span className="ml-2 text-white/50">adrian@macbook-pro</span>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[#9fd9b4] mb-5">❯ neofetch</p>
                <dl className="space-y-2">
                  {[
                    ['OS', 'macOS 26.5.2 (Tahoe)'],
                    ['Modelo', 'MacBook Pro 14" · M5 Pro nanotexturizado'],
                    ['WM', 'yabai + skhd (BSP, inspirado en Hyprland)'],
                    ['Shell', 'zsh + starship'],
                    ['Terminal', 'Ghostty (Flexoki Dark)'],
                    ['Editor', 'Neovim (Catppuccin Macchiato)'],
                    ['Font', 'JetBrains Mono (14pt)'],
                    ['CPU', 'Apple M5 Pro (15 núcleos)'],
                    ['GPU', 'Apple M5 Pro (integrada)'],
                    ['RAM', '24 GB'],
                    ['Display', '3024×1964 Retina'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex gap-3">
                      <dt className="text-[#c9a876] w-16 shrink-0">{label}</dt>
                      <dd className="text-[#e8e4d9]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
