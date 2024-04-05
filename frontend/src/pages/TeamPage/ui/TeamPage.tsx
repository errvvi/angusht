import { PersonCard } from "@/entities/PersonCard/ui/PersonCard";
import cls from "./TeamPage.module.scss";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ClassNames } from "@/shared/lib/classNames";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { getPersons } from "../model/service/getPersons";
import { useSelector } from "react-redux";
import { getDataPersons } from "@/entities/PersonCard/model/selectors/getDataPersons";
import { getPersonsInited } from "@/entities/PersonCard/model/selectors/getPersonsInited";
interface PersonCard {
  id: number;
  name: string;
  role: string;
}
function TeamPage() {
  const buttons = [
    ["РУКОВОДСТВО КЛУБА", "Rukovodstvo"],
    ["ТРЕНЕРСКИЙ ШТАБ", "Staff"],
    ["СОСТАВ КОМАНДЫ", "player"],
  ];

  const personCards = useSelector(getDataPersons);
  const initedPersonCard = useSelector(getPersonsInited);
  const [parent, enableAnimations] = useAutoAnimate(/*optional config */);
  const [activeFilter, setActiveFilter] = useState("Rukovodstvo");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!initedPersonCard) {
      dispatch(getPersons());
    }
  }, [initedPersonCard, personCards]);
  const handleClick = (param: string) => {
    setActiveFilter(param);
  };

  return (
    <section>
      <div
        ref={parent}
        className="flex flex-col flex-wrap gap-10 justify-center mt-10"
      >
        <div className="flex gap-10 max-sm:gap-2">
          {buttons.map((item) => (
            <button
              className={ClassNames(
                "py-2 px-5 font-tableFont max-sm:py-0.5 px-0.5 max-sm:text-sm",
                { [cls.active]: activeFilter === `${item[1]}` },
                []
              )}
              onClick={() => handleClick(item[1])}
            >
              {item[0]}
            </button>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-16 max-sm:gap-8">
          {activeFilter === "Rukovodstvo" &&
            personCards
              .filter((person) => person.Role === "Rukovodstvo")
              .map((person) => {
                return (
                  <PersonCard
                    key={person.id}
                    img={person.img}
                    jobTitle={person.jobTitle}
                    fio={person.FIO}
                    id={person.id}
                  />
                );
              })}
          {activeFilter === "Staff" &&
            personCards
              .filter((person) => person.Role === "Staff")
              .map((person) => {
                return (
                  <PersonCard
                    key={person.id}
                    img={person.img}
                    jobTitle={person.jobTitle}
                    fio={person.FIO}
                    id={person.id}
                  />
                );
              })}
        </div>
        <div>
          {activeFilter === "player" && (
            <div className="flex flex-col gap-16 ">
              <div className="flex flex-col ">
                <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                  <span className="text-white text-2xl max-sm:text-lg">
                    ВРАТАРИ
                  </span>
                  <div className={cls.TeamLine}></div>
                </div>
                <div className="flex flex-row flex-wrap gap-16 max-sm:gap-12">
                  {personCards.map((player) => {
                    if (player.playerPosition === "goalkeeper") {
                      return (
                        <PersonCard
                          key={player.id}
                          img={player.img}
                          jobTitle={player.jobTitle}
                          fio={player.FIO}
                          id={player.id}
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                  <span className="text-white text-2xl">ЗАЩИТНИКИ</span>
                  <div className={cls.TeamLine}></div>
                </div>
                <div className="flex flex-row flex-wrap gap-16 ">
                  {personCards.map((player) => {
                    if (player.playerPosition === "defender") {
                      return (
                        <PersonCard
                          key={player.id}
                          img={player.img}
                          jobTitle={player.jobTitle}
                          fio={player.FIO}
                          id={player.id}
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <div className="">
                <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                  <span className="text-white text-2xl">ПОЛУЗАЩИТНИКИ</span>
                  <div className={cls.TeamLine}></div>
                </div>
                <div className="flex flex-row flex-wrap gap-16">
                  {personCards.map((player) => {
                    if (player.playerPosition === "midfielder") {
                      return (
                        <PersonCard
                          key={player.id}
                          img={player.img}
                          jobTitle={player.jobTitle}
                          fio={player.FIO}
                          id={player.id}
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <div className="">
                <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                  <span className="text-white text-2xl">НАПАДАЮЩИЕ</span>
                  <div className={cls.TeamLine}></div>
                </div>
                <div className="flex flex-row flex-wrap gap-16">
                  {personCards.map((player) => {
                    if (player.playerPosition === "striker") {
                      return (
                        <PersonCard
                          key={player.id}
                          img={player.img}
                          jobTitle={player.jobTitle}
                          fio={player.FIO}
                          id={player.id}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TeamPage;
