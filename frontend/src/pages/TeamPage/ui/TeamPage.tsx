import { PersonCard } from "@/shared/ui/PersonCard/PersonCard";
import cls from "./TeamPage.module.scss";
import React, { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ClassNames } from "@/shared/lib/classNames";
import { Link } from "react-router-dom";

function TeamPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const links = [
    ["/team", "РУКОВОДСТВО КЛУБА"],
    ["/team/coachingStaff", "ТРЕНЕРСКИЙ ШТАБ"],
    ["/team/footballers", "СОСТАВ КОМАНДЫ"],
  ];

  const [PersonCards, SetPersonCards] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/*optional config */);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await axios.get(
        "https://65fb4f6c14650eb21009ceba.mockapi.io/api/HumanCard"
      );
      SetPersonCards(data);
    };
    getCards();
  }, []);

  return (
    <div>
      <div ref={parent} className="flex flex-wrap gap-10 justify-center mt-10">
        <nav className=" flex jus w-full">
          <ul className="flex ml-24 font-personCard  h-20 text-white uppercase font-bold gap-32">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={ClassNames(
                    "pt-4 pb-4 pl-9 pr-9 text-xl select-none",
                    { [cls.active]: currentPath === link[0] },
                    []
                  )}
                  to={link[0]}
                >
                  {link[1]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {PersonCards.slice(0, 4).map((person) => (
          <PersonCard
            img={person.img}
            jobTitle={person.jobTitle}
            fio={person.FIO}
            id={person.id}
            Role={person.Role}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
