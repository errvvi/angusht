import { Icon } from "@/shared/ui/Icon/Icon";
import { Logo } from "../../../../shared/ui/Logo/Logo";
import { NavBottom } from "../NavBottom/NavBottom";
import cls from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <div className="container mx-3">
      <div className={cls.navbar}>
        <div className={cls.wrap}>
          <div className="flex gap-5">
            <Logo />
            <div className="flex flex-col gap-3">
              <h1 className="text-customGreen font-black text-2xl">
                ФУТБОЛЬНЫЙ КЛУБ “АНГУШТ”
              </h1>
              <h2 className="text-customGreen font-black">ОФИЦИАЛЬНЫЙ САЙТ</h2>
            </div>
          </div>

          <div className="flex gap-1 mb-12">
            <a href="/" target="_blank">
              <Icon type="Telegram" />
            </a>
            {/* <a href="/" target="_blank">
              <Icon type="Youtube" />
            </a> */}
            <a href="/" target="_blank">
              <Icon type="Vk" />
            </a>
          </div>
        </div>
        <NavBottom />
      </div>
    </div>
  );
};
