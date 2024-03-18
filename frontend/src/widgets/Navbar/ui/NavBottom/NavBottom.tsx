import React from "react";
import cls from "./NavBottom.module.scss";
import { Link, useLocation } from "react-router-dom";
import { ClassNames } from "@/shared/lib/classNames";

export const NavBottom = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className={cls.nav}>
      <ul className="flex justify-around items-center h-20 text-white uppercase font-bold">
        <li>
          <div
            className={ClassNames(
              "p-4 ",
              {
                [cls.active]: currentPath === "/",
              },
              []
            )}
          >
            <Link to="/">Главная</Link>
          </div>
        </li>
        <li>
          <div
            className={ClassNames(
              "p-4",
              {
                [cls.active]: currentPath === "/news",
              },
              []
            )}
          >
            <Link to="/news">Новости</Link>
          </div>
        </li>
        <li>
          <div
            className={ClassNames(
              "p-4 ",
              {
                [cls.active]: currentPath === "/season",
              },
              []
            )}
          >
            <Link to="/season">Cезон</Link>
          </div>
        </li>
        <li>
          <div
            className={ClassNames(
              "p-4 ",
              {
                [cls.active]: currentPath === "/team",
              },
              []
            )}
          >
            <Link to="/team">Команда</Link>
          </div>
        </li>
        <li>
          <div
            className={ClassNames(
              "p-4",
              {
                [cls.active]: currentPath === "/club",
              },
              []
            )}
          >
            <Link to="/club">Клуб</Link>
          </div>
        </li>
        <li>
          <div
            className={ClassNames(
              "p-4 ",
              {
                [cls.active]: currentPath === "/media",
              },
              []
            )}
          >
            <Link to="/media">Медиа</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
