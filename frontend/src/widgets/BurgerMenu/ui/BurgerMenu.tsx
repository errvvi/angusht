import { ClassNames } from "@/shared/lib/classNames";
import { FC } from "react";
import { Link } from "react-router-dom";
import cls from "./BurgerMenu.module.scss";
import { Icon } from "@/shared/ui";
interface BurgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}
const links = [
  ["/", "Главная"],
  ["/news", "Новости"],
  ["/season", "Сезон"],
  ["/team", "Команда"],
  ["/club", "Клуб"],
  // ["/media", "Медиа"],
];

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClick, isOpen }) => {
  const currentPath = location.pathname;
  return (
    <>
      <Icon className="w-12" type="BurgerMenu" onclick={onClick}></Icon>

      {isOpen && (
        <div className={cls.modal} onClick={onClick}>
          <div className={cls.modalContent}>
            <div className="bg-customGreen w-full text-xs text-white flex justify-center items-center gap-2">
              <span>НАШ ТЕЛЕГРАМ:</span>
              <Icon type="TelegramWhite" className="w-4 mt-0.5" />
            </div>
            <nav className="">
              <ul className="flex flex-col  items-start  text-white uppercase font-black ">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className={ClassNames(
                        "py-4 px-9 text-xs text-customGreen select-none  max-md:py-2.5 max-md:px-6 max-sm:py-2 max-sm:px-4 ",
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
            <div className="py-2 bg-customGreen w-full text-tenPx text-white flex justify-center items-center gap-2">
              {/* <span>Полная версия сайта</span> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
  onclick;
};
