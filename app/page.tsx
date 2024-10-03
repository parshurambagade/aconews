'use client'

import { useState} from 'react'
import { motion } from "framer-motion"

interface Article {
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

interface NewsData {
  articles: Article[];
}

export default function Home() {
  // const [news, setNews] = useState<Article[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  const [isLoading, setIsLoading] = useState(false);

  const newsData:NewsData = {articles: [{
    "title": "Marcos, South Korea's Yoon to hold bilateral talks in Manila",
    "description": "South Korean President Yoon Suk Yeol will have a state visit to the Philippines next week at the invitation of President Ferdinand ''Bongbong'' Marcos Jr.",
    "content": "South Korean President Yoon Suk Yeol will have a state visit to the Philippines next week at the invitation of President Ferdinand ''Bongbong'' Marcos Jr.\nMarcos and First Lady Louise ''Liza'' Araneta-Marcos will welcome the South Korean president an... [634 chars]",
    "url": "https://www.gmanetwork.com/news/topstories/nation/922462/marcos-south-korea-s-yoon-to-hold-bilateral-talks-in-manila/story/",
    "image": "https://images.gmanews.tv/webpics/2023/09/2023-09-06T045746Z_141346106_RC2R23AHFUTY_RTRMADP_3_ASEAN-SUMMIT-SOUTHKOREA_2023_09_06_19_55_10.JPG",
    "publishedAt": "2024-10-03T06:49:09Z",
    "source": {
      "name": "GMA News Online",
      "url": "https://www.gmanetwork.com"
    }
  },
  {
    "title": "Guerra Ucraina - Russia, le news di oggi - la Repubblica",
    "description": "Le news in diretta dalla guerra tra Ucraina e Russia",
    "content": "Kiev teme attacchi a rete energetica, trattativa con Aiea per osservatori stranieri alle centrali\nL'Ucraina è in trattative con l'Agenzia internazionale per l'energia atomica (Aiea) per posizionare osservatori stranieri vicino alle sue centrali nucle... [1086 chars]",
    "url": "https://www.repubblica.it/esteri/2024/10/03/diretta/guerra_ucraina_russia_news_oggi-423532682/",
    "image": "https://www.repstatic.it/content/nazionale/img/2024/10/03/012253388-50b8d3c6-8a91-4084-9228-a91345a9c1d1.jpg",
    "publishedAt": "2024-10-03T06:47:29Z",
    "source": {
      "name": "la Repubblica",
      "url": "https://www.repubblica.it"
    }
  }]};

  const categories = ["general", "world", "nation", "business", "technology", "entertainment", "sports", "science", "health"];

  // const filteredNews = activeTab === 'all' 
  //   ? news 
  //   : news.filter(article => article.source.name === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-colors duration-200`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData?.articles?.map((article, index) => (
                <motion.div
                  key={article.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{article.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          {article.source.name}
                        </span>
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>


    </div>
  )
}