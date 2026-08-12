import Section from '../shared/Section';
import HeroName from '../hero/HeroName';
import HeroBio from '../hero/HeroBio';
import HeroLinks from '../hero/HeroLinks';

export default function Hero({ id, data }) {
  return (
    <Section id={id}>
      <div id={`${id}-content`} className="pt-6">
        <HeroName id={`${id}-name`} name={data.name} title={data.title} available={data.available} />
        <HeroBio id={`${id}-bio`} bio={data.bio} />
        <HeroLinks id={`${id}-links`} links={data.links} resumeUrl={data.resumeUrl} />
      </div>
    </Section>
  );
}
