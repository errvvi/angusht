import { Icon } from "@/shared/ui";
import { MatchTable } from "@/shared/ui/MatchTable/MatchTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const MatchTimetable = () => {
  const [matchs, setMatchs] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  useEffect(() => {
    const getMatchs = async () => {
      const { data } = await axios.get(
        "https://65f85cccdf151452460f3434.mockapi.io/api/matchtimetable"
      );
      setMatchs(data);
    };

    getMatchs();
  }, []); // ИМИТАЦИЯ
  return (
    <section className="flex flex-col justify-center items-center gap-4">
      <div className="w-full flex px-28 ">
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
        {matchs.map((match) => (
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
