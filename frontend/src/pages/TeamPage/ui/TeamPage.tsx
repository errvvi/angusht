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
      "https://65f85cccdf151452460f3434.mockapi.io/api/articles",
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
                "",
                { [cls.active]: activeFilter === `${item[1]}` },
                []
              )}
              onClick={() => handleFilterClick(`${item[1]}`)}
            >
              {item[0]}
            </button>
          ))}
        </div>
        <div className="flex justify-between">
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
          <div>
            <div className="flex flex-col">
              <span className="text-white">Вратари</span>
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
            <div className="">
              <span className="text-white">Защитники</span>
              {PersonCards.map((player) => {
                if (player.playerPosition === "def") {
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
            <div className="">
              <span className="text-white">Полузащитники</span>
              {PersonCards.map((player) => {
                if (player.playerPosition === "middef") {
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
            <div className="">
              <span className="text-white">Нападающие</span>
              {PersonCards.map((player) => {
                if (player.playerPosition === "forward") {
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
        )}
      </div>
    </div>
  );
}

export default TeamPage;
