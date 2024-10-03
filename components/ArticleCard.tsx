import React from "react";
import Link from "next/link";
import { Article } from "@/types";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={article.url}>
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {article.source.name}
            </span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
