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
    <div className="max-w-sm sm:max-w-md">
      <form onSubmit={handleSearch}>
        <div className="w-full relative z-10 flex space-x-3 px-2 py-1 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
          <div className="flex-[1_0_0%]">
            <label htmlFor="hs-search-article" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search for news</span></label>
            <input
              type="text"
              name="hs-search-article"
              id="hs-search-article"
              className="outline-none py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Search for news"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-[0_0_auto]">
            <button type="submit" className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsSearch;