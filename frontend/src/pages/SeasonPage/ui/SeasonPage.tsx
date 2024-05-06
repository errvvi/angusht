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
    <section>
      <div className="flex justify-start ml-24 max-sm:ml-8 max-520:ml-4 max-smallScr:ml-1">
        <nav className=" flex jus w-full">
          <ul className="flex  h-20 font-personCard text-white uppercase font-bold gap-32 max-sm:gap-14 max-smallScr:gap-10">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={ClassNames(
                    "py-4 px-9 text-xl select-none max-md:text-lg max-md:px-3 max-md:py-4 max-sm:text-base max-sm:px-3 max-sm:py-3  max-smallScr:text-xs max-smallScr:py-2 max-smallScr:px-2",
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
    </section>
  );
}

export default SeasonPage;
