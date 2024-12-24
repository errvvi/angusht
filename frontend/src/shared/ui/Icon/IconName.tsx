import Telegram from "../../assets/svg/icon-telegram.svg";
import Fnl2 from "../../assets/sponsor/fnl.png";
import TwoLiga from "../../assets/leagueLogo/2nd-league-logo-2022.png";
import FootballMania from "../../assets/sponsor/footbal.png";
import Kelme from "../../assets/sponsor/kelme.png";
import TelegramWhite from "../../assets/svg/iconWhite-telegram.svg";
import Vector from "../../assets/svg/Vector.svg";
import Fnl from "../../assets/leagueLogo/ФНЛ.png";
import Sports from "../../assets/sponsor/sports_logo.png";
import Leon from "../../assets/sponsor/ЛЕОН.png";
import LeonBets from "../../assets/sponsor/leonbets.png";
import FlagRussian from "../../assets/other/flagRussian.png";
import BurgerMenu from "../../assets/svg/burgerMenu.svg";
import Beton from "../../assets/sponsor/Betonmobile_logo.png";
import Rat from "../../assets/sponsor/rating.png";
import Rating from "../../assets/sponsor/rb-full.png";
import Metaratings from "../../assets/svg/Metaratings.svg";

export type IconType =
  | "Telegram"
  | "TelegramWhite"
  | "Vector"
  | "Fnl"
  | "Sports"
  | "Leon"
  | "LeonBets"
  | "FlagRussian"
  | "BurgerMenu"
  | "Kelme"
  | "Fnl2"
  | "FootballMania"
  | "TwoLiga"
  | "Beton"
  | "Rat"
  | "Metarate"
  | "Rating";

export const IconName: Partial<Record<IconType, JSX.Element>> = {
  Telegram: <Telegram />,
  TelegramWhite: <TelegramWhite />,
  Vector: <Vector />,
  Fnl: <img src={Fnl} />,
  Sports: <img src={Sports} />,
  Leon: <img src={Leon} />,
  LeonBets: <img src={LeonBets} />,
  FlagRussian: <img src={FlagRussian} />,
  Fnl2: <img src={Fnl2} />,
  Kelme: <img src={Kelme} />,
  FootballMania: <img src={FootballMania} />,
  TwoLiga: <img src={TwoLiga} />,
  Beton: <img src={Beton} alt="Betonmobile" />,
  BurgerMenu: <BurgerMenu />,
  Metarate: <Metaratings />,
  Rat: <img src={Rat} alt="RB" />,
  Rating: <img src={Rating} alt="RB" />,
};
