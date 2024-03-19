import { Icon } from "@/shared/ui";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center ">
      <div className="">
        <p className="text-white font-black text-xs leading-3 text-center">
          © 1993-2024.
          <br /> Футбольный клуб <br /> «Ангушт».
        </p>
      </div>
      <div>
        <p className="text-white font-black text-xs leading-3 text-center">
          При полном или частичном копировании <br /> информации ссылка на сайт
          обязательна.
        </p>
      </div>
      <div>
        <a href="https://t.me/fc_angusht_nazran" target="_blank">
          <Icon className="" type="TelegramWhite" />
        </a>
      </div>

      <div>
        <Icon className="w-20" type="FlagRussian" />
      </div>
    </div>
  );
};
