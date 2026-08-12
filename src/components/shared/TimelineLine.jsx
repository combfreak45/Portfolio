export default function TimelineLine({ id, active = false }) {
  return (
    <div id={id} className="relative flex flex-col items-center">
      <div
        id={`${id}-ring`}
        className={`w-3 h-3 rounded-full mt-1 shrink-0 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 ${
          active
            ? 'bg-slate-500 dark:bg-slate-400 ring-slate-300 dark:ring-slate-600'
            : 'bg-slate-300 dark:bg-slate-600 ring-slate-200 dark:ring-slate-700'
        }`}
      />
      <div
        id={`${id}-bar`}
        className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-1.5"
      />
    </div>
  );
}
