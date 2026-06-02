import CategoryPill from "./CategoryPill";

export default function CategoryList({ categories }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((item, index) => (
        <CategoryPill
          key={item}
          title={item}
          active={index === 0}
        />
      ))}
    </div>
  );
}