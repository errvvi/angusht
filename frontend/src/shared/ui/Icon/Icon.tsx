import { type FC } from "react";
import { IconType, IconName } from "./IconName";
import cls from "./Icon.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

interface IconProps {
  type: IconType;
  className?: string;
}

export const Icon: FC<IconProps> = ({ type, className = "" }) => {
  return (
    <div className={ClassNames(cls.icon, {}, [className])}>
      {IconName[type]}
    </div>
  );
};
