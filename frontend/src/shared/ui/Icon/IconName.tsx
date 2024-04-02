import Telegram from "../../assets/svg/icon-telegram.svg";
import TelegramWhite from "../../assets/svg/iconWhite-telegram.svg";
import Vector from "../../assets/svg/Vector.svg";

import TwoLiga from "../../assets/leagueLogo/2nd-league-logo-2022.png";
import SportMaster from "../../assets/sponsor/СПОРТМАСТЕР.png";
import Fnl from "../../assets/leagueLogo/ФНЛ.png";
import Sisrus from "../../assets/sponsor/sisrus_logo.png";
import Sports from "../../assets/sponsor/sports_logo.png";
import Leon from "../../assets/sponsor/ЛЕОН.png";
import LeonBets from "../../assets/sponsor/leonbets.png";

import FlagRussian from "../../assets/other/flagRussian.png";

import BurgerMenu from "../../assets/svg/burgerMenu.svg";
export type IconType =
  | "Telegram"
  | "TelegramWhite"
  | "Vector"
  | "TwoLiga"
  | "SportMaster"
  | "Fnl"
  | "Sisrus"
  | "Sports"
  | "Leon"
  | "LeonBets"
  | "FlagRussian"
  | "BurgerMenu";

export const IconName: Partial<Record<IconType, JSX.Element>> = {
  Telegram: <Telegram />,
  TelegramWhite: <TelegramWhite />,
  Vector: <Vector />,
  TwoLiga: <img src={TwoLiga} />,
  SportMaster: <img src={SportMaster} />,
  Fnl: <img src={Fnl} />,
  Sisrus: <img src={Sisrus} />,
  Sports: <img src={Sports} />,
  Leon: <img src={Leon} />,
  LeonBets: <img src={LeonBets} />,
  FlagRussian: <img src={FlagRussian} />,
  BurgerMenu: <BurgerMenu />,
};
