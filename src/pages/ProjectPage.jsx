import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import Tag from '../components/shared/Tag';

function findProject(slug) {
  for (const item of projectsData) {
    if (item.slug === slug) return { project: item, type: 'personal' };
  }
  for (const company of experienceData) {
    for (const role of company.roles) {
      for (const project of role.projects) {
        if (project.slug === slug)
          return { project, type: 'experience', company: company.company, role: role.title.trim() };
      }
    }
  }
  return null;
}

const CASE_STUDY_ROWS = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'outcome', label: 'Outcome' },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const result = findProject(slug);

  if (!result) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">Project not found.</p>
        <Link to="/" className="text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
          ← Back to portfolio
        </Link>
      </div>
    );
  }

  const { project, type, company, role } = result;
  const name = project.title || project.name;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-slate-900 dark:text-slate-100 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-10"
        >
          ← Back to portfolio
        </Link>

        <div className="mb-1">
          {type === 'experience' ? (
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {company} · {role}
            </span>
          ) : (
            <span className="text-xs text-slate-400 dark:text-slate-500">Personal Project</span>
          )}
        </div>

        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">{name}</h1>

        {project.date && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-6">{project.date}</p>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Source code
          </a>
        )}

        {Array.isArray(project.description) && project.description.length > 0 && (
          <ul className="mb-8 space-y-2 list-none">
            {project.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                {point}
              </li>
            ))}
          </ul>
        )}

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tags.map((tag, i) => (
              <Tag key={i} label={tag} />
            ))}
          </div>
        )}

        {project.caseStudy && (
          <div className="border-t border-slate-100 dark:border-slate-800 pt-8">
            <h2 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
              Case Study
            </h2>
            <div className="flex flex-col gap-5">
              {CASE_STUDY_ROWS.map(({ key, label }) => (
                <div key={key} className="flex gap-6">
                  <span className="text-xs text-slate-400 dark:text-slate-500 w-16 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.caseStudy[key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
