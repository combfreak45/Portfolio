import Section from '../shared/Section';
import SectionHeading from '../shared/SectionHeading';
import ProjectItem from '../projects/ProjectItem';

export default function Projects({ id, data }) {
  return (
    <Section id={id}>
      <SectionHeading id={`${id}-heading`}>Projects</SectionHeading>
      <div id={`${id}-timeline`} className="flex flex-col">
        {data.map((item, i) => (
          <ProjectItem id={`${id}-item-${i}`} key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    </Section>
  );
}
