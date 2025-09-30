import { Icon } from "./Icon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          hasPrevious
            ? "bg-white text-[rgb(63_9_22)] hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] shadow-md hover:shadow-lg"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        <Icon name="chevronLeft" size="sm" />
        Anterior
      </button>

      <div className="flex items-center gap-1">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
              page === currentPage
                ? "bg-gradient-to-r from-[rgb(63_9_22)] to-[rgb(45_6_15)] text-white shadow-lg"
                : page === "..."
                ? "text-gray-400 cursor-default"
                : "bg-white text-[rgb(63_9_22)] hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] shadow-md hover:shadow-lg"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
          hasNext
            ? "bg-white text-[rgb(63_9_22)] hover:bg-gradient-to-r hover:from-[rgb(240_238_235)] hover:to-[rgb(221_218_212)] shadow-md hover:shadow-lg"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        Próximo
        <Icon name="chevronRight" size="sm" />
      </button>
    </div>
  );
}
