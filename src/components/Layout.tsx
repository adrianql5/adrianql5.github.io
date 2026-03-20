import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { footerLinks, navLinks, site } from '../site';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/10 bg-surface-container-low/85 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Link to="/" className="min-w-0">
            <p className="font-serif text-xl md:text-2xl font-bold tracking-tighter text-primary">
              {site.shortName}
            </p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-on-surface-variant mt-1">
              Software · Sistemas · Linux
            </p>
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

          <a
            href={`mailto:${site.email}`}
            className="w-full sm:w-auto text-center shrink-0 bg-primary text-on-primary px-5 md:px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-90 active:opacity-70"
          >
            Contactar
          </a>
        </div>

        <div className="md:hidden mt-4">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "rounded-full border px-4 py-2 text-center text-[10px] uppercase tracking-[0.25em] font-bold transition-colors",
                  location.pathname === link.path
                    ? "border-primary bg-primary text-white"
                    : "border-outline-variant/50 bg-white/60 text-on-surface-variant"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#1c1c18] border-t border-white/5">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.9fr]">
        <div className="text-center md:text-left">
          <p className="font-serif text-3xl text-white font-semibold">{site.name}</p>
          <p className="text-sm text-on-primary-container/75 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            Portfolio personal orientado a software, sistemas y tooling. Diseño limpio, despliegue estático y base técnica sólida.
          </p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-on-primary-container/45 mt-6">
            © {new Date().getFullYear()} Portfolio personal. Desplegado en GitHub Pages.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-on-primary-container/45 mb-5">Navegación</p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-on-primary-container/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[10px] tracking-[0.3em] uppercase text-on-primary-container/45 mb-5">Contacto</p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-sm text-on-primary-container/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
