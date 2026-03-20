export const site = {
  name: 'Adrián Quiroga Linares',
  shortName: 'Adrián Quiroga',
  email: 'adrian.quiroga@rai.usc.es',
  github: 'https://github.com/adrianql5',
  linkedin: 'https://linkedin.com/in/adrian-quiroga-linares-3b2569317',
  repository: 'https://github.com/adrianql5/adrianql5.github.io',
  location: 'Santiago de Compostela, España',
  university: 'Universidade de Santiago de Compostela',
};

export const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Proyectos', path: '/proyectos' },
  { name: 'Sobre mí', path: '/sobre-mi' },
  { name: 'Contacto', path: '/contacto' },
];

export const footerLinks = [
  { name: 'GitHub', href: site.github },
  { name: 'LinkedIn', href: site.linkedin },
  { name: 'Repositorio', href: site.repository },
  { name: 'Email', href: `mailto:${site.email}` },
];
