'use client'

import ArticlesContainer from "@/app/components/ArticlesContainer";
import ArticlesContext from "@/contexts/ArticlesContext";
import React, { useContext, useState, useEffect } from "react";
import NewsSearch from "@/app/components/NewsSearch";
import ShimmerArticlesContainer from "@/app/components/shimmer/ShimmerArticlesContainer";

const SearchPage = () => {
  const { searchedArticles } = useContext(ArticlesContext)!;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [searchedArticles]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
   
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Search News</h1>
          <NewsSearch />
        </div>


      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isLoading ? (
          <ShimmerArticlesContainer />
        ) : searchedArticles && searchedArticles.length > 0 ? (
          <ArticlesContainer news={searchedArticles} />
        ) : (
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-600 dark:text-gray-300">No articles found. Try a different search term.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;