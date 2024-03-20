import { type FC } from "react";
import { TeamName, TeamType } from "./TeamName";
import cls from "./Team.module.scss";
import { ClassNames } from "@/shared/lib/classNames";

interface TeamProps {
  type: TeamType;
  className?: string;
}

export const Team: FC<TeamProps> = ({ type, className = "" }) => {
  return (
    <div className={ClassNames(cls.Team, {}, [className])}>
      {TeamName[type]}
    </div>
  );
};
