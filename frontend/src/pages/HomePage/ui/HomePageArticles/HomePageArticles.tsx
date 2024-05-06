import { Icon } from "@/shared/ui";
import { ArticleCard } from "@/widgets";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FC } from "react";
import { Link } from "react-router-dom";

interface HomePageArticlesProps {
  data: any[];
}

export const HomePageArticles: FC<HomePageArticlesProps> = ({ data }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <section className="Articles-part">
      <Link to={"/news"}>
        <div className=" flex items-center gap-3 cursor-pointer">
          <Icon type="Vector" />
          <span className="font-black text-white text-2xl">НОВОСТИ КЛУБА</span>
        </div>
      </Link>

      <div
        ref={parent}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-12 font-article max-520:m-auto"
      >
        {data
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
      </div>
    </section>
  );
};
