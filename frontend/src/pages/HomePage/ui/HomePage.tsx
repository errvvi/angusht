import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Link } from "react-router-dom";
import { Sponsors } from "@/widgets/Sponsors/ui/Sponsors";

function HomePage() {
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
    <div className="bg-customGreen flex flex-col gap-14">
      <div className="Articles-part">
        <Link to={"/news"}>
          <div className="ml-12 flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              НОВОСТИ КЛУБА
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12">
          {articles
            .slice(-6)
            .reverse()
            .map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
              />
            ))}
        </div>
      </div>

      <Sponsors />
    </div>
  );
}

export default HomePage;
