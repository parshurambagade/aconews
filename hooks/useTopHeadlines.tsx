import { GNEWS_TOP_HEADLINES_URL } from "@/constants";
import { useTopHeadlinesProps} from "@/types";
import { useCallback, useEffect } from "react";

const useTopHeadlines = ({
  setIsLoading,
  setNews,
  selectedCategory,
}: useTopHeadlinesProps) => {
  const fetchTopHeadlines = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(GNEWS_TOP_HEADLINES_URL + selectedCategory);
      const data = await res.json();
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
