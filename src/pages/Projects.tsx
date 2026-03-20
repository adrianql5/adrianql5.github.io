import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code, Database, Globe, Layers, Terminal } from 'lucide-react';
import ProjectDetail from '../components/ProjectDetail';

const projects = [
  {
    id: 'caminovivo',
    category: 'Sistemas Distribuidos',
    title: 'CaminoVivo',
    desc: 'Plataforma de gestión y seguimiento en tiempo real para infraestructuras críticas, utilizando arquitecturas de microservicios escalables.',
    image: 'https://picsum.photos/seed/caminovivo/800/600',
    tags: ['Go', 'PostgreSQL', 'Docker']
  },
  {
    id: 'hyperdebian',
    category: 'DevOps & OS',
    title: 'HyperDebian',
    desc: 'Custom kernel y optimización de sistema base para entornos de alta disponibilidad y baja latencia.',
    image: 'https://picsum.photos/seed/hyperdebian/800/600',
    dark: true,
    tags: ['C', 'Bash', 'Linux']
  },
  {
    id: 'survivor',
    category: 'C++ / Graphics',
    title: 'Survivor Project',
    desc: 'Motor de simulación estocástica para escenarios de supervivencia urbana.',
    image: 'https://picsum.photos/seed/survivor/800/600',
    tags: ['C++', 'OpenGL']
  },
  {
    id: 'apuntesweb',
    category: 'Web Architecture',
    title: 'ApuntesWeb',
    desc: 'Sistema de gestión de conocimiento descentralizado con soporte Markdown y sincronización offline-first.',
    image: 'https://picsum.photos/seed/apuntes/800/600',
    tags: ['React', 'Node.js', 'P2P']
  },
  {
    id: 'shaderssea',
    category: 'GLSL / Mathematics',
    title: 'ShadersSea',
    desc: 'Exploración matemática de superficies fluidas mediante fragment shaders.',
    image: 'https://picsum.photos/seed/shaders/800/600',
    dark: true,
    tags: ['GLSL', 'Math']
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
            <img 
              src={projects[0].image} 
              alt={projects[0].title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
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
          <div className="aspect-video bg-primary-container/50 rounded-xl"></div>
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
