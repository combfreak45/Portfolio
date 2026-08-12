import Section from '../shared/Section';
import SectionHeading from '../shared/SectionHeading';
import EducationItem from '../education/EducationItem';

export default function Education({ id, data }) {
  return (
    <Section id={id}>
      <SectionHeading id={`${id}-heading`}>Education</SectionHeading>
      <div id={`${id}-list`} className="flex flex-col">
        {data.map((item, i) => (
          <EducationItem id={`${id}-item-${i}`} key={`${item.institution}-${i}`} item={item} />
        ))}
      </div>
    </Section>
  );
}
