import { GNEWS_TOP_HEADLINES_URL } from "@/constants";
import { useTopHeadlinesTypes } from "@/types";
import { useCallback, useEffect } from "react";

const useTopHeadlines = ({
  setIsLoading,
  setNews,
  selectedCategory,
}: useTopHeadlinesTypes) => {
  const fetchTopHeadlines = useCallback(async () => {
    try {
      console.log(process.env.NEXT_PUBLIC_GNEWS_API_KEY);
      setIsLoading(true);
      const res = await fetch(GNEWS_TOP_HEADLINES_URL + selectedCategory);
      const data = await res.json();
      console.log(data);
      setNews(data.articles);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setNews, selectedCategory]);

  useEffect(() => {
    fetchTopHeadlines();
  }, [fetchTopHeadlines, selectedCategory]);
};

export default useTopHeadlines;
