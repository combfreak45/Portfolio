import useActiveSection from '../../hooks/useActiveSection';

const LINKS = [
  { label: 'About', id: 'hero' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const SECTION_IDS = LINKS.map(l => l.id);

export default function NavLinks({ id }) {
  const active = useActiveSection(SECTION_IDS);

  function scrollTo(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav id={id} className="hidden sm:flex items-center gap-6">
      {LINKS.map((link) => (
        <button
          id={`${id}-${link.label.toLowerCase()}`}
          key={link.label}
          onClick={() => scrollTo(link.id)}
          className={`text-sm transition-colors ${
            active === link.id
              ? 'text-slate-900 dark:text-slate-100'
              : 'text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100'
          }`}
        >
          {link.label}
        </button>
      ))}
    </nav>
  );
}

