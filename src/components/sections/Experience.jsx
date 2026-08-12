import Section from '../shared/Section';
import SectionHeading from '../shared/SectionHeading';
import ExperienceItem from '../experience/ExperienceItem';

export default function Experience({ id, data }) {
  return (
    <Section id={id}>
      <SectionHeading id={`${id}-heading`}>Experience</SectionHeading>
      <div id={`${id}-timeline`} className="flex flex-col">
        {data.map((item, i) => (
          <ExperienceItem id={`${id}-item-${i}`} key={`${item.company}-${i}`} item={item} active={i === 0} />
        ))}
      </div>
    </Section>
  );
}
