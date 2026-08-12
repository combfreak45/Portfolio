export default function HeroName({ id, name, title, available }) {
  return (
    <div id={id} className="mb-4">
      <h1 id={`${id}-heading`} className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
        {name}
      </h1>
      <p id={`${id}-title`} className="text-base text-slate-500 dark:text-slate-400 mt-1">
        {title}
      </p>
      {available && (
        <span id={`${id}-available`} className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for freelance
        </span>
      )}
    </div>
  );
}
