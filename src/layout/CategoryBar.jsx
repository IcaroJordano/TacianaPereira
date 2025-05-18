import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

const CategoryBar = ({ image, text }) => {

  const { allCategories,selectedCategory, setSelectedCategory } = useContext(SearchContext);


  return (
    <div className="w-full">
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex shadow-md   ps-2 text-xs text-neutral-600 overflow-x-auto px-2   mt-4 font-semibold  scroll-smooth   "
      >
        <p
          onClick={() => {
            setSelectedCategory('');
          }}
          className={`px-8 cursor-pointer py-1 lg:pb-4 text-center  border-rose-400 ${
            selectedCategory == '' ? "text-rose-400 border-b-2" : ""
          }`}
        >
          Todos
        </p>
        {allCategories.map((category,index)=>(

        <p
          onClick={() => {
            setSelectedCategory(category.category);
          }}
          className={`px-8 cursor-pointer py-1 text-center  border-rose-400 ${
            selectedCategory == category.category ? "text-rose-400 border-b-2" : ""
          }`}
        >
          {category.category}
        </p>
        )

        ) }
      </div>
    </div>
  );
};

export default CategoryBar;
