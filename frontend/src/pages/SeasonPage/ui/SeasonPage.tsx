import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import cls from "./SeasonPage.module.scss";
import { ClassNames } from "@/shared/lib/classNames";
function SeasonPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const links = [
    ["/season", "Таблица"],
    ["/season/matchtimetable", "Расписание"],
  ];
  return (
    <div>
      <div className="flex justify-start ml-24">
        <nav className=" flex jus w-full">
          <ul className="flex  h-20 font-personCard text-white uppercase font-bold gap-32">
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
      </div>
      <Outlet />
    </div>
  );
}

export default SeasonPage;
