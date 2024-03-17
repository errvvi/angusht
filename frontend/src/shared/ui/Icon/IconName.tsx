import Telegram from "../../assets/svg/icon-telegram.svg";
import Vk from "../../assets/svg/icon-vk.svg";
import Youtube from "../../assets/svg/icon-youtube.svg";

export type IconType = "Telegram" | "Vk" | "Youtube";

export const IconName: Record<IconType, JSX.Element> = {
  Telegram: <Telegram />,
  Vk: <Vk />,
  Youtube: <Youtube />,
};
