interface TagListProps {
  tags: readonly string[];
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  return (
    <div className={className ? `tags ${className}` : "tags"}>
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
