"use client";

import ArticlesContainer from "@/app/components/ArticlesContainer";
import ArticlesContext from "@/contexts/ArticlesContext";
import React, { useContext, useState } from "react";
import NewsSearch from "@/app/components/NewsSearch";
import ShimmerArticlesContainer from "@/app/components/shimmer/ShimmerArticlesContainer";

const SearchPage = () => {
  const { searchedArticles } = useContext(ArticlesContext)!;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Search News
        </h1>
        <div className="mb-12">
          <NewsSearch setIsLoading={setIsLoading} />
        </div>

        {isLoading ? (
          <ShimmerArticlesContainer />
        ) : searchedArticles && searchedArticles.length > 0 ? (
          <ArticlesContainer news={searchedArticles} />
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              No articles found. Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
