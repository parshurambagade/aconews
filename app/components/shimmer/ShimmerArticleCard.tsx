import React from "react";

const ShimmerArticleCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg">
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4 animate-pulse"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerArticleCard;