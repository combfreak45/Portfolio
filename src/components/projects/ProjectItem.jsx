import TimelineLine from '../shared/TimelineLine';
import ProjectTags from './ProjectTags';
import CaseStudy from '../shared/CaseStudy';

const linkIconClass = "text-slate-400 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200 transition-colors";

export default function ProjectItem({ id, item }) {
  return (
    <div id={id} className="flex gap-5">
      <TimelineLine id={`${id}-timeline`} />
      <div id={`${id}-card`} className="pb-10 flex-1 min-w-0">
        <div
          id={`${id}-content`}
          className="rounded-lg border border-slate-900/[0.06] dark:border-slate-100/[0.06] bg-slate-900/[0.02] dark:bg-slate-100/[0.02] px-4 py-3"
        >
          <div id={`${id}-header`} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
            <span id={`${id}-title`} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </span>
              {item.link && (
                <a
                  id={`${id}-link`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} source code`}
                  className={linkIconClass}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}
              {item.demo && (
                <a
                  id={`${id}-demo`}
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} live demo`}
                  className={linkIconClass}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              )}
            </span>
            <span id={`${id}-date`} className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
              {item.date}
            </span>
          </div>
          <p id={`${id}-desc`} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
            {item.description}
          </p>
          <ProjectTags id={`${id}-tags`} tags={item.tags} />
          {item.caseStudy && <CaseStudy id={`${id}-case-study`} data={item.caseStudy} />}
        </div>
      </div>
    </div>
  );
}
