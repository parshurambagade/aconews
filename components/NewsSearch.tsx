import { GNEWS_SEARCH_URL } from '@/constants';
import ArticlesContext from '@/contexts/ArticlesContext';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const NewsSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { setSearchedArticles } = useContext(ArticlesContext)!;
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      try {
        const response = await fetch(GNEWS_SEARCH_URL + searchTerm);
        const json = await response.json();
        setSearchedArticles(json?.articles || []);
        router.push('/search');
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for news..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 text-gray-800 placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
          aria-label="Search"
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default NewsSearch;