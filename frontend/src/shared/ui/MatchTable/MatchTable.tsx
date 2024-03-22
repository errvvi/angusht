import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
import { Team } from "../Team/Team";
import { TeamType } from "../Team/TeamName";
interface MatchTimetableProps {
  tour?: number;
  data?: string;
  score?: string;
  teamOne?: string;
  teamTwo?: string;
}
export const MatchTable: FC<MatchTimetableProps> = ({
  tour = 1,
  data = "23.03.24",
  score = "0 : 0",
  teamOne = "FC_Forte",
  teamTwo = "FC_Angusht",
}) => {
  const spanText = "<span class=' text-small leading-3'>";

  const teamNames = {
    "Alania-2": `АЛАНИЯ <br/> ${spanText}(Владикавказ)</span>`,
    Astrakhan: `АСТРАХАНЬ <br/> ${spanText}(Астрахань)</span>`,
    "Biolog-Novokubansk": `БИОЛОГ НОВОКУБАНСК <br/> ${spanText}(п.Прогресс)</span>`,
    "Dinamo_Mahachkala-2": `ДИНАМО-2 <br/> ${spanText}(Махачкала)</span>`,
    Dinamo_Stavropol: `ДИНАМО СТАВРОПОЛЬ <br/> ${spanText}(Ставрополь)</span>`,
    Druzhba: `ДРУЖБА <br/> ${spanText}(Майкоп)</span>`,
    Angusht: `Ангушт <br/> ${spanText}(Назрань)</span>`,
    FC_Forte: `ФОРТЕ <br/> ${spanText}(Таганрог)</span>`,
    "FC_Rostov-2": `РОСТОВ-2 <br/> ${spanText}(Ростов-на-Дону)</span>`,
    fkNartLogo: `Ангушт <br/> ${spanText}(Назрань)</span>`,
    Kuban_Holding: `КУБАНЬ ХОЛДИНГ <br/> ${spanText}(ст.Павловская)</span>`,
    Legion: `ЛЕГИОН ДИНАМО <br/> ${spanText}(Махачкала)</span>`,
    Pobeda: `ПОБЕДА <br/> ${spanText}(Хасавюрт)</span>`,
    Rubin_Yalta: `РУБИН ЯЛТА <br/> ${spanText}(Ялта)</span>`,
    Sevastopol: `СЕВАСТОПОЛЬ <br/> ${spanText}(Севастополь)</span>`,
    Spartak_Nalchik: `СПАРТАК-НАЛЬЧИК <br/> ${spanText}(Нальчик)</span>`,
    Stroitel: `СТРОИТЕЛЬ <br/> ${spanText}(Каменск-Шахтинский)</span>`,
    FC_Nart: `НАРТ <br/> ${spanText}(Черкесск)</span>`,
  };
  //@ts-ignore
  const TeamOneText = teamNames[teamOne];
  //@ts-ignore
  const TeamTwoText = teamNames[teamTwo];
  return (
    <div className="font-tableFont flex flex-col  bg-white max-w-md rounded-md px-6 my-5 py-2 border-x-2 border-t-4 border-t-1 border-matchTimetable border-solid">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center text-center">
          <span className="text-xl font-medium">{tour}-Й ТУР</span>
          <span className="text-xs font-medium">{data}</span>
        </div>
      </div>

      <div className="flex justify-around items-center max-h-32">
        <div className="flex flex-col justify-center items-center max-w-28">
          <Team className="w-20" type={`${teamOne as TeamType}`} />
          <span
            className="font-medium text-xs flex flex-col text-center"
            dangerouslySetInnerHTML={{ __html: TeamOneText }}
          ></span>
        </div>

        <div className="flex text-center mt-5">
          <span className="font-bold text-xl tracking-0.5">{score}</span>
        </div>

        <div className="flex flex-col justify-center items-center max-w-28">
          <Team className="w-20" type={`${teamTwo as TeamType}`} />
          <div className="max-w-24">
            <span
              className="font-medium flex flex-col  text-center text-xs"
              dangerouslySetInnerHTML={{ __html: TeamTwoText }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
