import Tag from '../shared/Tag';

export default function ProjectTags({ id, tags }) {
  if (!tags?.length) return null;
  return (
    <div id={id} className="flex flex-wrap gap-1.5 mt-2">
      {tags.map((tag, i) => (
        <Tag id={`${id}-${i}`} key={tag} label={tag} />
      ))}
    </div>
  );
}
