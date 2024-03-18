import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import { Icon } from "@/shared/ui/Icon/Icon";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(true);
  const toggleArticles = () => {
    setVisibleArticles(!visibleArticles);
  };
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
      <div className="Articles-part">
        <div
          onClick={toggleArticles}
          className="ml-12 flex items-center gap-3 cursor-pointer"
        >
          <Icon type="Vector" />
          <span className="font-black text-white text-2xl">НОВОСТИ КЛУБА</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12">
          {visibleArticles
            ? articles
                .slice(-6)
                .reverse()
                .map((article) => (
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
