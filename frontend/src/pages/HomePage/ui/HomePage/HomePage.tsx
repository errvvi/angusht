import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Table } from "@/widgets/Table/ui/Table";
import { MatchTable } from "@/shared/ui/MatchTable/MatchTable";
function HomePage() {
  const [articles, setArticles] = useState([]);
  const [matchs, setMatchs] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          "https://65fb4f6c14650eb21009ceba.mockapi.io/api/articles"
        );
        const articles = response.data;
        setArticles(articles);

        const responseMatches = await axios.get(
          "https://65f85cccdf151452460f3434.mockapi.io/api/matchtimetable"
        );
        const matches = responseMatches.data;
        setMatchs(matches);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getArticles();
  }, []); // ИМИТАЦИЯ

  return (
    <div className="bg-customGreen flex flex-col">
      <div className="Articles-part">
        <Link to={"/news"}>
          <div className=" flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              НОВОСТИ КЛУБА
            </span>
          </div>
        </Link>

        <article
          ref={parent}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12 font-article"
        >
          {articles
            .slice(-6)
            .reverse()
            .map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                img={article.img}
              />
            ))}
        </article>
      </div>
      <div ref={parent} className="flex flex-col">
        <div className="w-full flex  ">
          <div className="flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              РАСПИСАНИЕ МАТЧЕЙ
            </span>
          </div>
        </div>
        <div className="my-10 ml-28 grid grid-cols-1 lg:grid-cols-2  ">
          {matchs.slice(0, 4).map((match) => (
            <MatchTable
              key={match.id}
              tour={match.tour}
              data={match.data}
              score={match.score}
              teamOne={match.teamOne}
              teamTwo={match.teamTwo}
            />
          ))}
        </div>
      </div>

      <div className="tournament-table">
        <Link to={"/season"}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              ТУРНИРНАЯ ТАБЛИЦА
            </span>
          </div>
        </Link>
        <Table />
      </div>
    </div>
  );
}

export default HomePage;
