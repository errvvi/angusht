import Telegram from "../../assets/svg/icon-telegram.svg";
import Vk from "../../assets/svg/icon-vk.svg";
import Vector from "../../assets/svg/Vector.svg";

export type IconType = "Telegram" | "Vector";

export const IconName: Record<IconType, JSX.Element> = {
  Telegram: <Telegram />,
  Vector: <Vector />,
};
