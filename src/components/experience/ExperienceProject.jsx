import { Link } from 'react-router-dom';
import Tag from '../shared/Tag';

const linkIconClass = "text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 transition-colors";

export default function ExperienceProject({ id, project }) {
  return (
    <div
      id={id}
      className="mb-4 last:mb-0 rounded-lg border border-slate-900/[0.06] dark:border-slate-100/[0.06] bg-slate-900/[0.02] dark:bg-slate-100/[0.02] px-4 py-3"
    >
      <span id={`${id}-name`} className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          {project.name}
        </span>
        {project.slug && (
          <Link
            id={`${id}-detail`}
            to={`/projects/${project.slug}`}
            aria-label={`${project.name} detail page`}
            className={linkIconClass}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        )}
      </span>
      {Array.isArray(project.description) ? (
        <ul id={`${id}-desc`} className="mt-1 space-y-0.5 list-none">
          {project.description.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <p id={`${id}-desc`} className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
          {project.description}
        </p>
      )}
      {project.tags?.length > 0 && (
        <div id={`${id}-tags`} className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.map((tag, i) => (
            <Tag id={`${id}-tag-${i}`} key={tag} label={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
