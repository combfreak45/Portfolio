import Section from '../shared/Section';
import SectionHeading from '../shared/SectionHeading';
import ContactForm from '../contact/ContactForm';

export default function Contact({ id }) {
  return (
    <Section id={id}>
      <SectionHeading id={`${id}-heading`}>Contact</SectionHeading>
      <p id={`${id}-intro`} className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
        Got a project in mind, a role to discuss, or just want to say hi? I read every message and usually reply within a day.
      </p>
      <ContactForm id={`${id}-form`} />
    </Section>
  );
}
