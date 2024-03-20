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

import Alaniya2 from "../../assets/teams/Alaniya-2.png";
import Astrakhan from "../../assets/teams/Astrakhan.png";
import BiologNovokubansk from "../../assets/teams/Biolog-Novokubansk.png";
import Dinamo_Mahachkala from "../../assets/teams/Dinamo_Mahachkala.png";
import DinamoStavropol from "../../assets/teams/Dinamo-Stavropol.png";
import Druzhba from "../../assets/teams/Druzhba.png";
import FC_Angusht from "../../assets/teams/FC_Angusht.png";
import FC_Forte from "../../assets/teams/FC_Forte.png";
import fc_Rostov2 from "../../assets/teams/fc_Rostov-2.png";
import fkNartLogo from "../../assets/teams/fk-nart-logo.png";
import Kuban_Xolding from "../../assets/teams/Kuban_Xolding.png";
import Legion from "../../assets/teams/Legion.png";
import Pobeda from "../../assets/teams/Pobeda.png";
import Rubin_Yalta from "../../assets/teams/Rubin_Yalta.png";
import Sevastopol from "../../assets/teams/Sevastopol.png";
import Spartak_Nalchik from "../../assets/teams/Spartak_Nalchik.png";

import FlagRussian from "../../assets/flagRussian.png";

// export type IconType =
//   | "Telegram"
//   | "TelegramWhite"
//   | "Vector"
//   | "TwoLiga"
//   | "SportMaster"
//   | "Fnl"
//   | "Sisrus"
//   | "Sports"
//   | "Leon"
//   | "LeonBets"
//   | "FlagRussian"
//   | "Alaniya"
//   | "Astrakhan"
//   | "BiologNovokubansk"
//   | "Dinamo_Mahachkala"
//   | "DinamoStavropol"
//   | "Druzhba"
//   | "FC_Angusht"
//   | "FC_Forte"
//   | "fc_Rostov2"
//   | "fkNartLogo"
//   | "Kuban_Xolding"
//   | "Legion"
//   | "Pobeda"
//   | "Rubin_Yalta"
//   | "Sevastopol"
//   | "Spartak_Nalchik";
export type IconType = string;

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

  Alaniya2: <img src={Alaniya2} />,
  Astrakhan: <img src={Astrakhan} />,
  BiologNovokubansk: <img src={BiologNovokubansk} />,
  Dinamo_Mahachkala: <img src={Dinamo_Mahachkala} />,
  DinamoStavropol: <img src={DinamoStavropol} />,
  Druzhba: <img src={Druzhba} />,
  FC_Angusht: <img src={FC_Angusht} />,
  FC_Forte: <img src={FC_Forte} />,
  fc_Rostov2: <img src={fc_Rostov2} />,
  fkNartLogo: <img src={fkNartLogo} />,
  Kuban_Xolding: <img src={Kuban_Xolding} />,
  Legion: <img src={Legion} />,
  Pobeda: <img src={Pobeda} />,
  Rubin_Yalta: <img src={Rubin_Yalta} />,
  Sevastopol: <img src={Sevastopol} />,
  Spartak_Nalchik: <img src={Spartak_Nalchik} />,
};
