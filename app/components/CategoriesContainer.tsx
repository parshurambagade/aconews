import { CategoriesContainerProps } from "@/types";
import React from "react";

const CategoriesContainer = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesContainerProps) => {
  return (
    <div className="py-3 flex flex-wrap -m-1">
      {categories.map((category: string) => (
        <div key={category} className="p-1">
          <button
            onClick={() => setSelectedCategory(category)}
            className={`transition-all duration-300 ease-in-out inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border ${
              selectedCategory === category
                ? " border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500"
                : "border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800"
            } disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
          >
            <span className="py-2 px-3">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoriesContainer;