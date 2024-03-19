import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(
        "https://65f85cccdf151452460f3434.mockapi.io/api/articles"
      );
      setArticles(data);
    };

    getPosts();
  }, []); // ИМИТАЦИЯ
  return (
    <div className="bg-customGreen">
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ml-12">
        {articles.reverse().map((article) => (
          <ArticleCard key={article.id} id={article.id} title={article.title} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
