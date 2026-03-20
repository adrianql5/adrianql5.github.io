import { useState } from 'react';
import { Terminal } from 'lucide-react';
import ProjectDetail from '../components/ProjectDetail';

const projects = [
  {
    id: 'caminovivo',
    category: 'Sistemas Distribuidos',
    title: 'CaminoVivo',
    desc: 'Plataforma de gestión y seguimiento en tiempo real para infraestructuras críticas, utilizando arquitecturas de microservicios escalables.',
    visual: 'radial-gradient(circle at top left, rgba(239,224,205,0.45), transparent 20%), linear-gradient(135deg, #213234 0%, #3d2b1f 55%, #81756e 100%)',
    tags: ['Go', 'PostgreSQL', 'Docker'],
    year: '2025',
    highlights: [
      'Diseño modular orientado a servicios con separación clara entre captura, procesamiento y panel de control.',
      'Persistencia y observabilidad pensadas para operar con métricas, eventos y trazas desde el primer despliegue.',
    ],
  },
  {
    id: 'hyperdebian',
    category: 'DevOps & OS',
    title: 'HyperDebian',
    desc: 'Custom kernel y optimización de sistema base para entornos de alta disponibilidad y baja latencia.',
    visual: 'radial-gradient(circle at 20% 20%, rgba(239,224,205,0.08), transparent 18%), linear-gradient(145deg, #141414 0%, #26170c 45%, #3d2b1f 100%)',
    dark: true,
    tags: ['C', 'Bash', 'Linux'],
    year: '2024',
    highlights: [
      'Ajuste de servicios, arranque y herramientas de shell para reducir fricción en el entorno diario.',
      'Automatización de setup y mantenimiento para que el sistema sea reproducible en máquinas nuevas.',
    ],
  },
  {
    id: 'survivor',
    category: 'C++ / Graphics',
    title: 'Survivor Project',
    desc: 'Motor de simulación estocástica para escenarios de supervivencia urbana.',
    visual: 'radial-gradient(circle at 75% 20%, rgba(239,224,205,0.2), transparent 22%), linear-gradient(135deg, #0c1d1f 0%, #213234 60%, #675d4e 100%)',
    tags: ['C++', 'OpenGL'],
    year: '2024',
    highlights: [
      'Simulación con foco en rendimiento y estructuras de datos pensadas para iteraciones continuas.',
      'Exploración de representación gráfica ligera para visualizar estados complejos sin sobrecargar el motor.',
    ],
  },
  {
    id: 'apuntesweb',
    category: 'Web Architecture',
    title: 'ApuntesWeb',
    desc: 'Sistema de gestión de conocimiento descentralizado con soporte Markdown y sincronización offline-first.',
    visual: 'radial-gradient(circle at 20% 80%, rgba(61,43,31,0.18), transparent 18%), linear-gradient(140deg, #f1ede7 0%, #efe0cd 45%, #ac9181 100%)',
    tags: ['React', 'Node.js', 'P2P'],
    year: '2025',
    highlights: [
      'Interfaz rápida para escribir, organizar y consultar contenido técnico sin depender de una sola máquina.',
      'Diseño orientado a sincronización tolerante a conexiones inestables y uso local prioritario.',
    ],
  },
  {
    id: 'shaderssea',
    category: 'GLSL / Mathematics',
    title: 'ShadersSea',
    desc: 'Exploración matemática de superficies fluidas mediante fragment shaders.',
    visual: 'radial-gradient(circle at 50% 20%, rgba(239,224,205,0.16), transparent 18%), linear-gradient(160deg, #0c1d1f 0%, #213234 50%, #675d4e 100%)',
    dark: true,
    tags: ['GLSL', 'Math'],
    year: '2024',
    highlights: [
      'Uso de shaders como laboratorio visual para entender fenómenos continuos y transformaciones matemáticas.',
      'Priorización de composiciones compactas y control explícito sobre color, ritmo y movimiento.',
    ],
  }
];

const otherDevelopments = [
  { num: '01', title: 'Ixildu Hasiko Da', desc: 'Algoritmos de procesamiento de señal para la detección de umbrales sonoros en entornos públicos.' },
  { num: '02', title: 'Chat P2P', desc: 'Protocolo de comunicación punto a punto encriptado sin servidor central, implementando DHT.' },
  { num: '03', title: 'Monopoly Java', desc: 'Implementación completa de lógica de negocio orientada a objetos con patrones de diseño avanzados.' },
  { num: '04', title: 'Nextpreso', desc: 'Engine de renderizado minimalista para blogs técnicos estáticos de alto rendimiento.' },
  { num: '05', title: 'Compilador D', desc: 'Analizador léxico y sintáctico para un subconjunto del lenguaje D orientado a arquitectura x86.' }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
      <header className="mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-on-surface-variant mb-4">Portfolio 2024</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-primary mb-8">
          Proyectos Seleccionados
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Una colección de sistemas de alto rendimiento y herramientas de desarrollo diseñadas con precisión técnica y enfoque en la optimización.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        {/* Main Project Card */}
        <div 
          onClick={() => openProject(projects[0])}
          className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-4">
              {projects[0].category}
            </span>
            <h2 className="font-serif text-4xl text-primary font-bold mb-6">{projects[0].title}</h2>
            <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
              {projects[0].desc}
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-highest">
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ backgroundImage: projects[0].visual }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-transparent to-transparent" />
            <div className="absolute left-8 bottom-8 flex gap-2 flex-wrap">
              {projects[0].tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dark Side Card */}
        <div 
          onClick={() => openProject(projects[1])}
          className="md:col-span-4 bg-primary-container rounded-3xl p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-primary transition-colors"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-on-primary-container font-bold block mb-4">
              {projects[1].category}
            </span>
            <h2 className="font-serif text-4xl font-bold mb-6">{projects[1].title}</h2>
            <p className="text-on-primary-container leading-relaxed">
              {projects[1].desc}
            </p>
          </div>
          <div className="flex justify-end">
            <Terminal className="w-16 h-16 text-on-primary-container opacity-20" />
          </div>
        </div>

        {/* Smaller Grid Cards */}
        <div 
          onClick={() => openProject(projects[2])}
          className="md:col-span-4 bg-surface-container-highest rounded-3xl p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-6">
            {projects[2].category}
          </span>
          <h2 className="font-serif text-4xl text-primary font-bold mb-8">{projects[2].title}</h2>
          <div className="h-[1px] w-24 bg-outline-variant mb-8"></div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {projects[2].desc}
          </p>
        </div>

        <div 
          onClick={() => openProject(projects[3])}
          className="md:col-span-4 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold block mb-4">
            {projects[3].category}
          </span>
          <h2 className="font-serif text-3xl text-primary font-bold mb-6">{projects[3].title}</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
            {projects[3].desc}
          </p>
        </div>

        <div 
          onClick={() => openProject(projects[4])}
          className="md:col-span-4 bg-tertiary-container rounded-3xl p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-tertiary transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block mb-4">
            {projects[4].category}
          </span>
          <h2 className="font-serif text-3xl font-bold mb-6">{projects[4].title}</h2>
          <div
            aria-hidden="true"
            className="aspect-video rounded-xl border border-white/10"
            style={{ backgroundImage: projects[4].visual }}
          />
        </div>
      </div>

      {/* Other Developments */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-xs tracking-[0.3em] uppercase text-on-surface-variant font-bold">Otros Desarrollos</h3>
          <div className="h-[1px] flex-1 mx-8 bg-outline-variant/30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {otherDevelopments.map((item) => (
            <div key={item.num} className="group">
              <span className="text-xs font-serif italic text-primary/40 block mb-4">{item.num}</span>
              <h4 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ProjectDetail 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        project={selectedProject} 
      />
    </div>
  );
}
