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
  // ["/media", "Медиа"],
];

export const NavBottom = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className={cls.nav}>
      <ul className="flex justify-around items-center h-20 text-white uppercase font-bold">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className={ClassNames(
                "pt-4 pb-4 pl-9 pr-9 text-xl select-none",
                {
                  [cls.active]:
                    currentPath === link[0] ||
                    currentPath.includes(link[0] + "/"),
                },
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
  );
};
