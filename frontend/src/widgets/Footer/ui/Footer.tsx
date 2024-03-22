import { Icon } from "@/shared/ui";

export const Footer = () => {
  return (
    <div className="text-xs flex justify-between items-center  max-sm:text-small  ">
      <div className="">
        <p className="text-white font-black leading-3 text-center">
          © 1993-2024.
          <br /> АНО ФК <br /> «Ангушт».
        </p>
      </div>
      <div>
        <p className="text-white font-black  leading-3 text-center">
          При полном или частичном копировании <br /> информации ссылка на сайт
          обязательна.
        </p>
      </div>
      <div>
        <a href="https://t.me/fc_angusht_nazran" target="_blank">
          <Icon className="max-sm:w-5" type="TelegramWhite" />
        </a>
      </div>

      <div>
        <Icon className="w-20 max-sm:w-16" type="FlagRussian" />
      </div>
    </div>
  );
};
