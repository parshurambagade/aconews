"use client";

import { useState } from "react";
import { Article } from "@/types";
import useTopHeadlines from "@/hooks/useTopHeadlines";
import { categories } from "@/constants";
import CategoriesContainer from "@/app/components/CategoriesContainer";
import ArticlesContainer from "@/app/components/ArticlesContainer";
import ShimmerArticlesContainer from "@/app/components/shimmer/ShimmerArticlesContainer";

export default function Home() {
  const [news, setNews] = useState<Article[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  const [isLoading, setIsLoading] = useState(true);

  useTopHeadlines({ setIsLoading, setNews, selectedCategory });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto py-0 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <CategoriesContainer
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />


          {
          isLoading ? (
            <ShimmerArticlesContainer />
          ) : !news ? <h2>Something went wrong,please try again later!</h2> : (
            <ArticlesContainer news={news} />
          )}
        </div>
      </main>
    </div>
  );
}
