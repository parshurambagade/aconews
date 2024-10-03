import exp from "constants";

export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface NewsData {
  articles: Article[];
}

export interface useTopHeadlinesTypes {
  selectedCategory: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setNews: React.Dispatch<React.SetStateAction<Article[]>>;
}

export interface CategoriesContainerProps {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}
