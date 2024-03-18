import Telegram from "../../assets/svg/icon-telegram.svg";
import Vk from "../../assets/svg/icon-vk.svg";
import Youtube from "../../assets/svg/icon-youtube.svg";
import Vector from "../../assets/svg/Vector.svg";

export type IconType = "Telegram" | "Vk" | "Youtube" | "Vector";

export const IconName: Record<IconType, JSX.Element> = {
  Telegram: <Telegram />,
  Vk: <Vk />,
  Youtube: <Youtube />,
  Vector: <Vector />,
};
