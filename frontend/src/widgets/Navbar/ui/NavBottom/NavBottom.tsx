import React from "react";
import cls from "./NavBottom.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ClassNames } from "@/shared/lib/classNames";

const links = [
  ["/", "Главная"],
  ["/news", "Новости"],
  ["/season", "Сезон"],
  ["/team", "Команда"],
  ["/club", "Клуб"],
  ["/media", "Медиа"],
];

export const NavBottom = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className={cls.nav}>
      <ul className="flex justify-around items-center h-20 text-white uppercase font-bold">
        {links.map((link) => (
          <li>
            <div
              className={ClassNames(
                "p-4 select-none",
                { [cls.active]: currentPath === link[0] },
                []
              )}
            >
              <Link to={link[0]}>{link[1]}</Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
