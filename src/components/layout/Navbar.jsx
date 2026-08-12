import { useState } from 'react';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'About', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ id, theme, onToggle, resumeUrl, name }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      id={id}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-slate-100 dark:border-slate-800"
    >
      <div id={`${id}-inner`} className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span id={`${id}-logo`} className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {name}
        </span>
        <div id={`${id}-right`} className="flex items-center gap-4">
          <NavLinks id={`${id}-links`} />
          <ThemeToggle id={`${id}-theme-toggle`} theme={theme} onToggle={onToggle} />
          <button
            id={`${id}-hamburger`}
            className="sm:hidden p-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <div id={`${id}-mobile-menu`} className="sm:hidden border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur">
          <nav className="max-w-3xl mx-auto px-6 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
