import { useState, useEffect, useRef } from 'react';
import { facts } from '../../data/facts';

function randomFact(exclude) {
  const pool = facts.filter((f) => f !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function FunFactButton({ id }) {
  const [fact, setFact] = useState(null);
  const timerRef = useRef(null);

  const handleClick = () => {
    clearTimeout(timerRef.current);
    setFact((prev) => randomFact(prev));
    timerRef.current = setTimeout(() => setFact(null), 1000);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div id={id} className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {fact && (
        <div
          id={`${id}-card`}
          className="max-w-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-neutral-900 shadow-lg px-4 py-3"
        >
          <p id={`${id}-card-text`} className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {fact}
          </p>
        </div>
      )}
      <div id={`${id}-wrapper`} className="flex flex-col items-center gap-1">
        <span id={`${id}-label`} className="text-xs text-slate-400 dark:text-slate-500 animate-bounce">
          fun fact?
        </span>
        <div id={`${id}-ring-wrapper`} className="relative flex items-center justify-center">
          <span id={`${id}-ping`} className="absolute inline-flex h-full w-full rounded-full bg-slate-400 dark:bg-slate-500 opacity-30 animate-ping" />
          <button
            id={`${id}-btn`}
            onClick={handleClick}
            aria-label="Random fact about me"
            className="relative w-12 h-12 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-lg shadow-lg hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
          >
            <span id={`${id}-btn-icon`}>✦</span>
          </button>
        </div>
      </div>
    </div>
  );
}
