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
    <nav className="fixed top-0 w-full z-50 border-b border-outline-variant/60 bg-surface/80 backdrop-blur-xl">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5">
        <div className="flex flex-row justify-between items-center gap-4">
          <Link to="/" className="min-w-0">
            <p className="font-serif text-lg md:text-xl font-semibold tracking-tight text-on-surface">
              {site.shortName}
            </p>
          </Link>

          <div className="hidden md:flex items-center space-x-10 font-mono text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition-colors duration-300",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                ~{link.path === '/' ? '/inicio' : link.path}
              </Link>
            ))}
          </div>

          <a
            href={`mailto:${site.email}`}
            className="hidden sm:inline-block text-center shrink-0 bg-primary text-on-primary px-5 md:px-6 py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-90 active:opacity-70"
          >
            Contactar
          </a>
        </div>

        <div className="md:hidden mt-4">
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "rounded-md border px-4 py-2 text-center transition-colors",
                  location.pathname === link.path
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-outline-variant bg-surface-container-low text-on-surface-variant"
                )}
              >
                ~{link.path === '/' ? '/inicio' : link.path}
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
    <footer className="w-full bg-surface-container-low border-t border-outline-variant/60">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.9fr]">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl text-on-surface font-semibold">{site.name}</p>
          <p className="text-sm text-on-surface-variant mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            Código, sistemas y herramientas que hago para entender cómo funcionan por dentro.
          </p>
          <p className="font-mono text-[11px] text-on-surface-variant/60 mt-6">
            © {new Date().getFullYear()}
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="font-mono text-[11px] text-on-surface-variant/60 mb-5">## navegación</p>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="font-mono text-[11px] text-on-surface-variant/60 mb-5">## contacto</p>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
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
