import Section from '../shared/Section';
import SectionHeading from '../shared/SectionHeading';

export default function Skills({ id, data }) {
  return (
    <Section id={id}>
      <SectionHeading id={`${id}-heading`}>Skills</SectionHeading>
      <div id={`${id}-list`} className="flex flex-col gap-3">
        {data.map((group) => (
          <div key={group.category} className="flex gap-4">
            <span className="text-xs text-slate-400 dark:text-slate-500 w-20 shrink-0 pt-0.5">
              {group.category}
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-300">
              {group.items.join(' · ')}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
