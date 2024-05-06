import { Icon } from "@/shared/ui";
import { MatchTable } from "@/entities/MatchTable/ui/MatchTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { getMatches } from "@/pages/HomePage/model/service/getMatches";
import { useSelector } from "react-redux";
import { getDataMatches } from "@/entities/MatchTable/model/selectors/getDataMatches";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getArticlesInited } from "@/entities/ArticleCard/model/selectors/getArticlesInited";
import { getMatchesInited } from "@/entities/MatchTable/model/selectors/getMatchesInited";

export const MatchTimetable = () => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  const matches = useSelector(getDataMatches);
  const inited = useSelector(getMatchesInited);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!inited) {
      dispatch(getMatches());
    }
  }, [inited, matches]);
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex px-28 max-520:px-4 max-smallScr:px-1 ">
        <div className="flex items-center gap-3 cursor-pointer">
          <Icon type="Vector" />
          <span className="font-black text-white text-2xl max-md:text-xl max-sm:text-base ">
            РАСПИСАНИЕ МАТЧЕЙ
          </span>
        </div>
      </div>

      <article
        ref={parent}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 "
      >
        {matches.map((match) => (
          <MatchTable
            key={match.id}
            tour={match.tour}
            data={match.data}
            score={match.score}
            teamOne={match.teamOne}
            teamTwo={match.teamTwo}
          />
        ))}
      </article>
    </section>
  );
};
