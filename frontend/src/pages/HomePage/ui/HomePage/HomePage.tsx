import { useEffect, useState } from "react";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Link } from "react-router-dom";
import { Table } from "@/widgets/Table/ui/Table";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getArticles } from "../../model/service/getArticles";
import { useSelector } from "react-redux";
import { getDataArticles } from "@/entities/ArticleCard/model/selectors/getDataArticles";
import { getArticlesInited } from "@/entities/ArticleCard/model/selectors/getArticlesInited";
import { HomePageArticles } from "../HomePageArticles/HomePageArticles";
import { getMatches } from "../../model/service/getMatches";
import { HomePageMatches } from "../HomePageMatches/HomePageMatches";
import { getDataMatches } from "@/entities/MatchTable/model/selectors/getDataMatches";
function HomePage() {
  const articles = useSelector(getDataArticles);
  const matches = useSelector(getDataMatches);
  const inited = useSelector(getArticlesInited);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!inited) {
      dispatch(getArticles());
    }
  }, [inited, articles]);
  useEffect(() => {
    if (!inited) {
      dispatch(getMatches());
    }
  }, [inited, matches]);

  return (
    <div className="bg-customGreen flex flex-col">
      <HomePageArticles data={articles} />

      <HomePageMatches data={matches} />

      <section className="tournament-table">
        <Link to={"/season"}>
          <div className="flex items-center gap-3 cursor-pointer">
            <Icon type="Vector" />
            <span className="font-black text-white text-2xl">
              ТУРНИРНАЯ ТАБЛИЦА
            </span>
          </div>
        </Link>
        <Table />
      </section>
    </div>
  );
}

export default HomePage;
