import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import React, { useEffect, useState } from "react";

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  useEffect(() => {
    const getArticles = async () => {
      const { data } = await axios.get(
        "https://65f85cccdf151452460f3434.mockapi.io/api/articles"
      );
      setArticles(data);
    };

    getArticles();
  }, []); // ИМИТАЦИЯ
  return (
    <div className="bg-customGreen">
      <div
        ref={parent}
        className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ml-12"
      >
        {articles.reverse().map((article) => (
          <ArticleCard key={article.id} id={article.id} title={article.title} />
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
