import { CategoriesContainerProps } from "@/types";
import React from "react";

const CategoriesContainer = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: CategoriesContainerProps) => {
  return (
    <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
      {categories.map((category: string) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-colors duration-200`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoriesContainer;
