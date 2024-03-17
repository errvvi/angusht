import { Icon } from "@/shared/ui/Icon/Icon";
import { Logo } from "../../../../shared/ui/Logo/Logo";
import { NavBottom } from "../NavBottom/NavBottom";
import cls from "./Navbar.module.scss";
import { Text } from "@/shared/ui/Text/Text";
export const Navbar = () => {
  return (
    <div className="container">
      <div className={cls.navbar}>
        <div className={cls.wrap}>
          <div className="flex gap-5">
            <Logo />
            <div className="flex flex-col gap-3">
              <Text tag="h1" color="green" className="font-black text-2xl">
                ФУТБОЛЬНЫЙ КЛУБ “АНГУШТ”
              </Text>
              <Text tag="h2" color="green" className="font-black">
                ОФИЦИАЛЬНЫЙ САЙТ
              </Text>
            </div>
          </div>

          <div className="flex gap-1 mb-12">
            <Icon type="Telegram" />
            <Icon type="Youtube" />
            <Icon type="Vk" />
          </div>
        </div>
        <NavBottom />
      </div>
    </div>
  );
};
