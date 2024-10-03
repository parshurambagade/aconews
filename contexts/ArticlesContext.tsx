'use client';
import { Article } from "@/types";
import { createContext, useState } from "react";

interface ArticlesContextProps {
    articles: Article[];
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
    searchedArticles: Article[];
    setSearchedArticles: React.Dispatch<React.SetStateAction<Article[]>>
}
const ArticlesContext = createContext<ArticlesContextProps | null>(null);

export const ArticlesProvider = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [searchedArticles, setSearchedArticles] = useState<Article[]>([]);
    return (
        <ArticlesContext.Provider value={{ articles, setArticles, searchedArticles, setSearchedArticles}}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext;