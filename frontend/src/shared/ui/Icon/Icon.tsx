import { type FC } from "react";
import { IconType, IconName } from "./IconName";
import cls from "./Icon.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

interface IconProps {
  type: IconType;
  className?: string;
  onclick?: () => void;
}

export const Icon: FC<IconProps> = ({ type, className = "", onclick }) => {
  return (
    <div onClick={onclick} className={ClassNames(cls.icon, {}, [className])}>
      {IconName[type]}
    </div>
  );
};
