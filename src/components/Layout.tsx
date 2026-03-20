import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-low/80 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-6 max-w-[1440px] mx-auto">
        <Link to="/" className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-primary">
          ARCHITECT & ENGINEER
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-xs tracking-widest uppercase transition-colors duration-300 font-bold",
                location.pathname === link.path 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-sm text-xs font-bold tracking-widest uppercase transition-opacity active:opacity-70">
          Descargar CV
        </button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#1c1c18] border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-16 w-full max-w-[1440px] mx-auto">
        <div className="mb-10 md:mb-0 text-center md:text-left">
          <p className="font-serif italic text-white text-2xl font-bold">Adrián Quiroga Linares</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-on-primary-container/50 mt-3">
            © 2024 Engineering Portfolio. Precision Crafted.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {['LinkedIn', 'GitHub', 'Instagram', 'Email'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-[10px] tracking-[0.3em] uppercase text-on-primary-container opacity-60 hover:opacity-100 transition-all hover:-translate-y-0.5"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
