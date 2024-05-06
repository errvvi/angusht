import { Icon } from "@/shared/ui/Icon/Icon";
import { Logo } from "../../../../shared/ui/Logo/Logo";
import { NavBottom } from "../NavBottom/NavBottom";
import cls from "./Navbar.module.scss";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { BurgerMenu } from "@/widgets/BurgerMenu/ui/BurgerMenu";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 447 });
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const toggleBurgerMenu = () => {
    setIsOpenBurger(!isOpenBurger);
  };
  return (
    <div className={cls.navbar}>
      <a href="https://leon.ru/" target="_blank">
        <Icon type="LeonBets" />
      </a>

      <div className="container mx-3">
        <div className={cls.wrap}>
          <div className="flex gap-5 mt-3">
            <Link to={"/"}>
              <Logo />
            </Link>

            <div className="flex flex-col gap-3 ">
              <h1 className="text-customGreen font-black text-2xl max-sm:text-xl max-smallScr:text-base ">
                АНО ФК “АНГУШТ”
              </h1>
              <h2 className="text-customGreen font-black max-smallScr:text-xs">
                ОФИЦИАЛЬНЫЙ САЙТ
              </h2>
            </div>
          </div>

          <div className="flex gap-1 mb-9 items-end">
            {isMobile ? (
              <BurgerMenu
                isOpen={isOpenBurger}
                onClick={() => toggleBurgerMenu()}
              />
            ) : (
              <a href="https://t.me/fc_angusht_nazran" target="_blank">
                <Icon type="Telegram" />
              </a>
            )}
          </div>
        </div>
      </div>
      <NavBottom />
    </div>
  );
};
