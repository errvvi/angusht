import { Icon } from "@/shared/ui/Icon/Icon";
import { Logo } from "../../../../shared/ui/Logo/Logo";
import { NavBottom } from "../NavBottom/NavBottom";
import cls from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container mx-3">
        <div className={cls.wrap}>
          <div className="flex gap-5">
            <Logo />
            <div className="flex flex-col gap-3">
              <h1 className="text-customGreen font-black text-2xl">
                АНО ФК “АНГУШТ”
              </h1>
              <h2 className="text-customGreen font-black">ОФИЦИАЛЬНЫЙ САЙТ</h2>
            </div>
          </div>

          <div className="flex gap-1 mb-12">
            <a href="https://t.me/fc_angusht_nazran" target="_blank">
              <Icon type="Telegram" />
            </a>
          </div>
        </div>
      </div>
      <NavBottom />
    </div>
  );
};
