import Angusht from "../../assets/teams/FC_Angusht.png";
import Alania from "../../assets/teams/Alaniya-2.png";
import Astrakhan from "../../assets/teams/Astrakhan.png";
import Biolog_Novokubansk from "../../assets/teams/Biolog-Novokubansk.png";
import Stroitel from "../../assets/teams/Stroitel.png";
import Dinamo_Mahachkala_2 from "../../assets/teams/Dinamo_Mahachkala.png";
import Dinamo_Stavropol from "../../assets/teams/Dinamo-Stavropol.png";
import Druzhba from "../../assets/teams/Druzhba.png";
import FC_Forte from "../../assets/teams/FC_Forte.png";
import FC_Rostov from "../../assets/teams/fc_Rostov-2.png";
import FC_Nart from "../../assets/teams/fk-nart-logo.png";
import Legion from "../../assets/teams/Legion.png";
import Pobeda from "../../assets/teams/Pobeda.png";
import RubinYalta from "../../assets/teams/Rubin_Yalta.png";
import Sevastopol from "../../assets/teams/Sevastopol.png";
import Spartak_Nalchik from "../../assets/teams/Spartak_Nalchik.png";
import Kuban_Holding from "../../assets/teams/Kuban_Xolding.png";

export type TeamType =
  | "Angusht"
  | "Alania-2"
  | "Stroitel"
  | "Astrakhan"
  | "Biolog-Novokubansk"
  | "Dinamo_Mahachkala-2"
  | "Dinamo_Stavropol"
  | "Druzhba"
  | "FC_Forte"
  | "FC_Rostov-2"
  | "FC_Nart"
  | "Legion"
  | "Pobeda"
  | "Rubin_Yalta"
  | "Sevastopol"
  | "Spartak_Nalchik"
  | "Kuban_Holding";

export const TeamName: Record<TeamType, JSX.Element> = {
  Angusht: <img src={Angusht} alt="Angusht" />,
  Astrakhan: <img src={Astrakhan} alt="Astrakhan" />,
  "Alania-2": <img src={Alania} alt="Alania" />,
  Sevastopol: <img src={Sevastopol} alt="Sevastopol" />,
  Spartak_Nalchik: <img src={Spartak_Nalchik} alt="Spartak_Nalchik" />,
  Stroitel: <img src={Stroitel} alt="Stroitel" />,
  "Biolog-Novokubansk": (
    <img src={Biolog_Novokubansk} alt="Biolog-Novokubansk" />
  ),
  Dinamo_Stavropol: <img src={Dinamo_Stavropol} alt="Dinamo_Stavropol" />,
  Druzhba: <img src={Druzhba} alt="Druzhba" />,
  "Dinamo_Mahachkala-2": (
    <img src={Dinamo_Mahachkala_2} alt="Dinamo_Mahachkala-2" />
  ),
  Pobeda: <img src={Pobeda} alt="Pobeda" />,
  Rubin_Yalta: <img src={RubinYalta} alt="Rubin_Yalta" />,
  Legion: <img src={Legion} alt="Legion" />,
  FC_Nart: <img src={FC_Nart} alt="FC_Nart" />,
  Kuban_Holding: <img src={Kuban_Holding} alt="Kuban_Holding" />,
  "FC_Rostov-2": <img src={FC_Rostov} alt="FC_Rostov-2" />,
  FC_Forte: <img src={FC_Forte} alt="FC_Forte" />,
};
