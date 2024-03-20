import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Table } from "@/widgets/Table/ui/Table";
function HomePage() {
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
    <div className="bg-customGreen flex flex-col">
      <div className="Articles-part">
        <Link to={"/news"}>
          <div className="ml-12 flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              НОВОСТИ КЛУБА
            </span>
          </div>
        </Link>

        <div
          ref={parent}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12"
        >
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
      <Table />
    </div>
  );
}

export default HomePage;
