export default function Section({ id, children }) {
  return (
    <section id={id} className="w-full max-w-3xl mx-auto px-6 py-16">
      {children}
    </section>
  );
}
