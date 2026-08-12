export default function Tag({ id, label }) {
  return (
    <span
      id={id}
      className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
    >
      {label}
    </span>
  );
}
