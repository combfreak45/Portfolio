export default function HeroBio({ id, bio }) {
  return (
    <p id={id} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 max-w-lg">
      {bio}
    </p>
  );
}
