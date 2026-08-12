import useActiveSection from '../../hooks/useActiveSection';

const LINKS = [
  { label: 'About', href: '#hero', id: 'hero' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const SECTION_IDS = LINKS.map(l => l.id);

export default function NavLinks({ id }) {
  const active = useActiveSection(SECTION_IDS);

  return (
    <nav id={id} className="hidden sm:flex items-center gap-6">
      {LINKS.map((link) => (
        <a
          id={`${id}-${link.label.toLowerCase()}`}
          key={link.label}
          href={link.href}
          className={`text-sm transition-colors ${
            active === link.id
              ? 'text-slate-900 dark:text-slate-100'
              : 'text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100'
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
