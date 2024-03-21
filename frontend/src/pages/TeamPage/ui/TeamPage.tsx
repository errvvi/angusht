import { PersonCard } from "@/shared/ui/PersonCard/PersonCard";
import cls from "./TeamPage.module.scss";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ClassNames } from "@/shared/lib/classNames";
interface PersonCard {
  id: number;
  name: string;
  role: string;
}
function TeamPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const buttons = [
    ["РУКОВОДСТВО КЛУБА", "Rukovodstvo"],
    ["ТРЕНЕРСКИЙ ШТАБ", "Staff"],
    ["СОСТАВ КОМАНДЫ", "player"],
  ];

  const [PersonCards, SetPersonCards] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/*optional config */);
  const [activeFilter, setActiveFilter] = useState("Rukovodstvo");

  const fetchCards = async (filterParam: string) => {
    const params = {
      Role: filterParam,
    };

    const { data } = await axios.get(
      "https://65fb4f6c14650eb21009ceba.mockapi.io/api/HumanCard",
      { params }
    );
    SetPersonCards(data);
  };

  useEffect(() => {
    const getCards = async () => {
      fetchCards("Rukovodstvo");
    };

    getCards();
  }, []);

  const handleFilterClick = (filterParam: string) => {
    if (filterParam !== activeFilter) {
      setActiveFilter(filterParam);
      fetchCards(filterParam);
    }
  };

  return (
    <div className="">
      <div
        ref={parent}
        className="flex flex-col flex-wrap gap-10 justify-center mt-10"
      >
        <div className="flex gap-10">
          {buttons.map((item) => (
            <button
              className={ClassNames(
                "pt-2 pb-2 pl-5 pr-5 font-tableFont",
                { [cls.active]: activeFilter === `${item[1]}` },
                []
              )}
              onClick={() => handleFilterClick(`${item[1]}`)}
            >
              {item[0]}
            </button>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-20">
          {PersonCards.map((person) => {
            if (person.Role !== "player") {
              return (
                <PersonCard
                  key={person.id}
                  img={person.img}
                  jobTitle={person.jobTitle}
                  fio={person.FIO}
                  id={person.id}
                />
              );
            }
          })}
        </div>
        {activeFilter === "player" && (
          <div className="flex flex-col gap-16">
            <div className="flex flex-col ">
              <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                <span className="text-white text-2xl">ВРАТАРИ</span>
                <div className={cls.TeamLine}></div>
              </div>
              <div className="flex flex-row gap-20">
                {PersonCards.map((player) => {
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
            <div className="flex flex-col flex-wrap gap-16">
              <div className="flex w-72 flex-col gap-0 mb-10 font-personCard text-center">
                <span className="text-white text-2xl">ЗАЩИТНИКИ</span>
                <div className={cls.TeamLine}></div>
              </div>
              <div className="flex flex-row flex-wrap gap-20">
                {PersonCards.map((player) => {
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
              <div className="flex flex-row flex-wrap gap-20">
                {PersonCards.map((player) => {
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
              <div className="flex flex-row flex-wrap gap-20">
                {PersonCards.map((player) => {
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
  );
}

export default TeamPage;
