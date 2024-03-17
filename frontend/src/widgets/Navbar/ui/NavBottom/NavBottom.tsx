import React from "react";
import cls from "./NavBottom.module.scss";
import { Link } from "react-router-dom";

export const NavBottom = () => {
  return (
    <nav className={cls.nav}>
      <ul className="flex justify-around items-center h-20 text-white uppercase font-bold">
        <li>
          <div className="p-4 ">
            <Link to="/">Главная</Link>
          </div>
        </li>
        <li>
          <div className="px-4 py-2 bg-white text-black">
            <Link to="/news">Новости</Link>
          </div>
        </li>
        <li>
          <div className="p-4">
            <Link to="/season">Cезон</Link>
          </div>
        </li>
        <li>
          <div className="p-4">
            <Link to="/team">Команда</Link>
          </div>
        </li>
        <li>
          <div className="p-4">
            <Link to="/club">Клуб</Link>
          </div>
        </li>
        <li>
          <div className="p-4">
            <Link to="/media">Медиа</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
