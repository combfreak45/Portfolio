import Tag from '../shared/Tag';
import CaseStudy from '../shared/CaseStudy';

export default function ExperienceProject({ id, project }) {
  return (
    <div
      id={id}
      className="mb-4 last:mb-0 rounded-lg border border-slate-900/[0.06] dark:border-slate-100/[0.06] bg-slate-900/[0.02] dark:bg-slate-100/[0.02] px-4 py-3"
    >
      <span id={`${id}-name`} className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        {project.name}
      </span>
      <p id={`${id}-desc`} className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
        {project.description}
      </p>
      {project.tags?.length > 0 && (
        <div id={`${id}-tags`} className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.map((tag, i) => (
            <Tag id={`${id}-tag-${i}`} key={tag} label={tag} />
          ))}
        </div>
      )}
      {project.caseStudy && <CaseStudy id={`${id}-case-study`} data={project.caseStudy} />}
    </div>
  );
}
