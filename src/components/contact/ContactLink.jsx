export default function ContactLink({ id, link }) {
  return (
    <a
      id={id}
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
    >
      <span id={`${id}-label`}>{link.label}</span>
      <span id={`${id}-value`} className="text-slate-400 dark:text-slate-500">{link.value}</span>
    </a>
  );
}
