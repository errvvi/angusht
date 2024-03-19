import Telegram from "../../assets/svg/icon-telegram.svg";
import TelegramWhite from "../../assets/svg/iconWhite-telegram.svg";
import Vector from "../../assets/svg/Vector.svg";

import TwoLiga from "../../assets/2nd-league-logo-2022.png";
import SportMaster from "../../assets/СПОРТМАСТЕР.png";
import Fnl from "../../assets/ФНЛ.png";
import Sisrus from "../../assets/sisrus_logo.png";
import Sports from "../../assets/sports_logo.png";
import Leon from "../../assets/ЛЕОН.png";
import LeonBets from "../../assets/leonbets.png";

import FlagRussian from "../../assets/flagRussian.png";

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
  | "FlagRussian";

export const IconName: Record<IconType, JSX.Element> = {
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
};
