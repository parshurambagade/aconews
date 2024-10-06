import { GNEWS_SEARCH_URL } from "@/constants";
import ArticlesContext from "@/contexts/ArticlesContext";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { NewsSearchProps } from "@/types";

const NewsSearch: React.FC<NewsSearchProps> = ({ setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setSearchedArticles } = useContext(ArticlesContext)!;
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      try {
        setIsLoading(true);
        const response = await fetch(GNEWS_SEARCH_URL + searchTerm);
        const json = await response.json();
        setSearchedArticles(json?.articles || []);
        router.push("/search");
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="w-full py-3 pl-4 pr-12 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-600"
          placeholder="Search for news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition duration-150 ease-in-out dark:text-gray-300 dark:hover:text-blue-400"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default NewsSearch;
