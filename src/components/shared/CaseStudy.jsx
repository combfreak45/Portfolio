import { useState } from 'react';

const ROWS = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'outcome', label: 'Outcome' },
];

export default function CaseStudy({ id, data }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <button
        id={`${id}-toggle`}
        onClick={() => setExpanded(v => !v)}
        className="mt-3 text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        {expanded ? 'collapse ↑' : 'case study ↓'}
      </button>
      {expanded && (
        <div id={`${id}-content`} className="mt-3 flex flex-col gap-2.5">
          {ROWS.map(({ key, label }) => (
            <div key={key} className="flex gap-4">
              <span className="text-xs text-slate-400 dark:text-slate-500 w-16 shrink-0 pt-0.5">
                {label}
              </span>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {data[key]}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
