import { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { MatchTable } from "@/entities/MatchTable/ui/MatchTable";
import { Icon } from "@/shared/ui";

interface HomePageArticlesProps {
  data: any[];
}
export const HomePageMatches: FC<HomePageArticlesProps> = ({ data }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  return (
    <section ref={parent} className="flex flex-col">
      <div className="w-full flex  ">
        <div className="flex items-center gap-3 cursor-pointer">
          <Icon type="Vector" />
          <span className="font-black text-white text-2xl">
            РАСПИСАНИЕ МАТЧЕЙ
          </span>
        </div>
      </div>
      <div className="my-10 ml-28 grid grid-cols-1 lg:grid-cols-2  ">
        {data.slice(0, 4).map((match) => (
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
    </section>
  );
};
