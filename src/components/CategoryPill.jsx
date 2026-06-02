import { Star } from "lucide-react";

export default function CategoryPill({
  title,
  active,
}) {
  return (
    <button
      className={`
        flex items-center justify-center gap-2
        px-4 sm:px-5 lg:px-6
        py-2.5
        rounded-full
        border
        text-sm sm:text-base
        transition-all
        ${
          active
            ? "bg-black text-white border-black"
            : "bg-white text-gray-700 border-gray-200"
        }
      `}
    >
      {active && <Star size={14} />}
      <span>{title}</span>
    </button>
  );
}