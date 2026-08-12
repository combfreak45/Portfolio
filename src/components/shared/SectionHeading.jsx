export default function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-10"
    >
      {children}
    </h2>
  );
}
