import React from "react";
import Link from "next/link";
import { Article } from "@/types";
import Image from "next/image";
import { ARTICLE_SOURCE_PROFILE } from "@/constants";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link className=" group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]" href={article.url}>
      <div className="aspect-w-16 aspect-h-11">
        <Image className="w-full object-cover rounded-xl" height={200} width={300} src={article.image} alt={article.title} />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white line-clamp-2">
          {article.title}
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-400 line-clamp-3">
          {article.description}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <Image className="rounded-full w-auto" height={32} width={32} src={ARTICLE_SOURCE_PROFILE} alt="Image Description" />
        <div>
          <h5 className="text-sm text-gray-800 dark:text-gray-200 truncate-2">{article.source.name}</h5>
          <p className="text-xs text-gray-500 truncate-3">{new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;