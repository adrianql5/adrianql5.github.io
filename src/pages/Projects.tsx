import { useState } from 'react';
import { Terminal } from 'lucide-react';
import apunteswebImage from '../assets/projects/apuntesweb.png';
import ProjectDetail from '../components/ProjectDetail';
import shadersseaImage from '../assets/projects/shaderssea.png';

const projects = [
  {
    id: 'caminovivo',
    category: 'Sistemas Distribuidos',
    title: 'CaminoVivo',
    desc: 'Plataforma de gestión y seguimiento en tiempo real para infraestructuras críticas, utilizando arquitecturas de microservicios escalables.',
    visual: '#213234',
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
    visual: '#26170c',
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
    visual: '#0c1d1f',
    tags: ['C++', 'OpenGL'],
    year: '2024',
    highlights: [
      'Simulación con foco en rendimiento y estructuras de datos pensadas para iteraciones continuas.',
      'Exploración de representación gráfica ligera para visualizar estados complejos sin sobrecargar el motor.',
    ],
  },
  {
    id: 'apuntesweb',
    category: 'Astro / Documentation',
    title: 'ApuntesWeb',
    desc: 'Sitio estático de apuntes de Ingeniería Informática construido para publicar contenido en GitHub Pages sin depender de backend.',
    visual: `url(${apunteswebImage})`,
    tags: ['Astro', 'Starlight', 'Python', 'GitHub Pages'],
    year: '2025',
    highlights: [
      'Base en Astro con Starlight para generar una web de documentación estática con sidebar, tabla de contenidos, buscador y estructura jerárquica por curso y asignatura.',
      'Pipeline de ingesta en Python que copia apuntes Markdown e imágenes, reescribe rutas, añade frontmatter y adapta el contenido al formato que espera Starlight.',
      'Soporte de fórmulas con KaTeX durante la build y despliegue automático en GitHub Pages con GitHub Actions y configuración `site`/`base` para servir desde `/ApuntesWeb`.',
    ],
  },
  {
    id: 'shaderssea',
    category: 'C++ / OpenGL',
    title: 'ShadersSea',
    desc: 'Escena 3D interactiva en la que un faro protege una isla de oleadas crecientes de barcos enemigos mediante disparo y control de cámara.',
    visual: `url(${shadersseaImage})`,
    dark: true,
    tags: ['C++17', 'OpenGL', 'GLFW3', 'TinyObjLoader'],
    year: '2024',
    highlights: [
      'Skybox con transición entre ambiente diurno y nocturno, junto con iluminación dinámica ligada al faro para reforzar la lectura espacial.',
      'Sistema de oleadas con dificultad progresiva, disparo de proyectiles y detección de colisiones para sostener el bucle de juego.',
      'Dos modos de control: disparo con cruceta y cámara libre, además de carga de modelos `.obj` mediante TinyObjLoader.',
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
          className="md:col-span-8 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors"
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
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ background: projects[0].visual }}
          />
            <div className="absolute inset-0 bg-primary/20" />
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
          className="md:col-span-4 bg-primary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-primary transition-colors"
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
          className="md:col-span-4 bg-surface-container-highest rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
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
          className="md:col-span-4 bg-surface-container-low rounded-3xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[280px]"
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
          className="md:col-span-4 bg-tertiary-container rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white group cursor-pointer hover:bg-tertiary transition-colors min-h-[280px]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold block mb-4">
            {projects[4].category}
          </span>
          <h2 className="font-serif text-3xl font-bold mb-6">{projects[4].title}</h2>
          <div
            aria-hidden="true"
            className="aspect-video rounded-xl border border-white/10 bg-center bg-cover bg-no-repeat"
            style={{ background: projects[4].visual }}
          />
        </div>
      </div>

      {/* Other Developments */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <h3 className="text-xs tracking-[0.3em] uppercase text-on-surface-variant font-bold">Otros Desarrollos</h3>
          <div className="h-[1px] flex-1 sm:mx-8 bg-outline-variant/30"></div>
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
