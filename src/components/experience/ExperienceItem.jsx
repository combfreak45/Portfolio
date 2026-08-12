import TimelineLine from '../shared/TimelineLine';
import ExperienceProject from './ExperienceProject';

function ExperienceRole({ id, role }) {
  return (
    <div id={id} className="mb-5 last:mb-0">
      <div id={`${id}-header`} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <span id={`${id}-title`} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {role.title}
        </span>
        <span id={`${id}-date`} className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
          {role.date}
        </span>
      </div>
      {role.description && (
        <p id={`${id}-desc`} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
          {role.description}
        </p>
      )}
      {role.projects?.length > 0 && (
        <div id={`${id}-projects`} className="space-y-3 mt-3">
          {role.projects.map((project, i) => (
            <ExperienceProject id={`${id}-project-${i}`} key={project.name} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceItem({ id, item, active = false }) {
  return (
    <div id={id} className="flex gap-5">
      <TimelineLine id={`${id}-timeline`} active={active} />
      <div id={`${id}-content`} className="pb-10 flex-1 min-w-0">
        <span id={`${id}-company`} className="text-base font-semibold text-slate-900 dark:text-slate-100 block mb-4">
          {item.company}
        </span>
        <div id={`${id}-roles`} className="flex flex-col">
          {item.roles.map((role, i) => (
            <ExperienceRole id={`${id}-role-${i}`} key={`${role.title}-${i}`} role={role} />
          ))}
        </div>
      </div>
    </div>
  );
}
