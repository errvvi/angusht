import { ArticleCard } from "@/entities/ArticleCard/ui/ArticleCard";
import axios from "axios";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDataArticles } from "@/entities/ArticleCard/model/selectors/getDataArticles";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getArticles } from "@/pages/HomePage/model/service/getArticles";
import { getArticlesInited } from "@/entities/ArticleCard/model/selectors/getArticlesInited";

function NewsPage() {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const articles = useSelector(getDataArticles);
  const inited = useSelector(getArticlesInited);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!inited) {
      dispatch(getArticles());
    }
  }, [inited, articles]);
  return (
    <section className="bg-customGreen">
      <div
        ref={parent}
        className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12 font-article"
      >
        {articles
          .slice()
          .reverse()
          .map((article) => (
            <ArticleCard
              img={article.img}
              key={article.id}
              id={article.id}
              title={article.title}
            />
          ))}
      </div>
    </section>
  );
}

export default NewsPage;
