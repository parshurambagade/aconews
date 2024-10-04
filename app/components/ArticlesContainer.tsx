import React from "react";
import { motion } from "framer-motion";
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

const ArticlesContainer = ({news}:{news:Article[]}) => {
  return (
    <div className="max-w-[85rem] px-4 md:px-2  py-6 lg:py-8 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news?.map((article, index) => (
          <motion.div
            key={article.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesContainer;