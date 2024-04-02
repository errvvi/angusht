import React from "react";
import cls from "./NavBottom.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ClassNames } from "@/shared/lib/classNames";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 447 });
  return (
    <nav className={cls.nav}>
      {!isMobile ? (
        <ul className="flex justify-around items-center h-20 text-white uppercase font-bold">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className={ClassNames(
                  "py-4 px-9 text-xl select-none max-md:text-base max-md:py-2.5 max-md:px-6 max-sm:py-2 max-sm:px-4 max-sm:text-sm ",
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
      ) : null}
    </nav>
  );
};
