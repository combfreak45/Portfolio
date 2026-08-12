export default function EducationItem({ id, item }) {
  return (
    <div id={id} className="mb-6 last:mb-0">
      <div id={`${id}-header`} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
        <span id={`${id}-degree`} className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {item.degree}
        </span>
        <span id={`${id}-date`} className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
          {item.date}
        </span>
      </div>
      <span id={`${id}-institution`} className="text-sm text-slate-500 dark:text-slate-400 block mt-0.5">
        {item.institution}
      </span>
      {item.note && (
        <span id={`${id}-note`} className="text-xs text-slate-400 dark:text-slate-500 block mt-0.5">
          {item.note}
        </span>
      )}
    </div>
  );
}
