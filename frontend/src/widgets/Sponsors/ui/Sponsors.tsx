import { Icon } from "@/shared/ui/Icon/Icon";
import React from "react";

export const Sponsors = () => {
  return (
    <div className="flex flex-col justify-center gap-16">
      <span className="text-center font-black text-white text-3xl">
        ПАРТНЕРЫ LEON-ВТОРАЯ ЛИГА Б
      </span>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-44">
          <a href="#">
            {" "}
            <Icon className="w-16" type="TwoLiga" />
          </a>
          <a href="#">
            {" "}
            <Icon className="w-56 h-7" type="SportMaster" />
          </a>
          <a href="#">
            <Icon className="w-24 h-7" type="Fnl" />
          </a>
        </div>
        <div className="flex justify-center items-center gap-28">
          <a href="#">
            <Icon className="w-56 h-20" type="Sisrus" />
          </a>
          <a href="#">
            <Icon className="w-60 h-20" type="Sports" />
          </a>
          <a href="#">
            <Icon className="w-40" type="Leon" />
          </a>
        </div>
        <Icon type="LeonBets" />
      </div>
    </div>
  );
};
