import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CategoryBar = () => {
  const {
    allCategories,
    selectedCategory,
    setSelectedCategory,
  } = useContext(SearchContext);

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();

    const handleResize = () => checkScrollPosition();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [allCategories]);

  return (
    <div className="relative w-full">
      {/* Botões de navegação */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="hidden lg:flex absolute z-10 -left-2 top-1/2 -translate-y-1/2 h-6 w-6 bg-white shadow-md rounded-full items-center justify-center"
        >
          <MdChevronLeft className="text-xl text-gray-500 hover:text-gray-800" />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="hidden lg:flex absolute z-10 -right-6 top-1/2 -translate-y-1/2 h-6 w-6 bg-white shadow-md rounded-full items-center justify-center"
        >
          <MdChevronRight className="text-xl text-gray-500 hover:text-gray-800" />
        </button>
      )}

      {/* Lista de categorias com scroll */}
      <div
        ref={scrollRef}
        onScroll={checkScrollPosition}
        className="flex ps-2 text-xs text-neutral-600 overflow-x-auto px-2 mt-4 font-semibold scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        <p
          onClick={() => setSelectedCategory("")}
          className={`px-8 cursor-pointer py-1  pb-4 text-center border-rose-400 ${
            selectedCategory === "" ? "text-rose-400 border-b-2" : ""
          }`}
        >
          Todos
        </p>
        {allCategories.map((category, index) => (
          <p
            key={index}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-8 cursor-pointer py-1 text-center text-nowrap border-rose-400 ${
              selectedCategory === category.category
                ? "text-rose-400 border-b-2"
                : ""
            }`}
          >
            {category.category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;