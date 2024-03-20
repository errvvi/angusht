import React, { FC } from "react";
import { Icon } from "../Icon/Icon";
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
  const teamNames = {
    Alaniya2: "АЛАНИЯ <br/> <span class='text-xs'>((Владикавказ))</span>",
    Astrakhan: "АСТРАХАНЬ <br/> <span class='text-xs'>(Астрахань)</span>",
    BiologNovokubansk:
      "БИОЛОГ НОВОКУБАНСК <br/> <span class='text-xs'>(п.Прогресс)</span>",
    Dinamo_Mahachkala:
      "ДИНАМО-2 <br/> <span class='text-xs'>(Махачкала)</span>",
    DinamoStavropol:
      "ДИНАМО СТАВРОПОЛЬ <br/> <span class='text-xs'>(Ставрополь)</span>",
    Druzhba: "ДРУЖБА <br/> <span class='text-xs'>(Майкоп)</span>",
    FC_Angusht: "Ангушт <br/> <span class='text-xs'>(Назрань)</span>",
    FC_Forte: "ФОРТЕ <br/> <span class='text-xs'>(Таганрог)</span>",
    fc_Rostov2: "РОСТОВ-2 <br/> <span class='text-xs'>(Ростов-на-Дону)</span>",
    fkNartLogo: "Ангушт <br/> <span class='text-xs'>(Назрань)</span>",
    Kuban_Xolding:
      "КУБАНЬ ХОЛДИНГ <br/> <span class='text-xs'>(ст.Павловская)</span>",
    Legion: "ЛЕГИОН ДИНАМО <br/> <span class='text-xs'>(Махачкала)</span>",
    Pobeda: "ПОБЕДА <br/> <span class='text-xs'>(Хасавюрт)</span>",
    Rubin_Yalta: "РУБИН ЯЛТА <br/> <span class='text-xs'>(Ялта)</span>",
    Sevastopol:
      "СЕВАСТОПОЛЬ <br/> <span class='text-xs'>((Севастополь))</span>",
    Spartak_Nalchik:
      "СПАРТАК-НАЛЬЧИК <br/> <span class='text-xs'>((Нальчик))</span>",
  };
  //@ts-ignore
  const TeamOneText = teamNames[teamOne];
  //@ts-ignore
  const TeamTwoText = teamNames[teamTwo];
  return (
    <div className="flex flex-col gap-2 bg-white max-w-96 rounded-md p-2 border-x-2 border-t-4 border-t-1 border-matchTimetable border-solid">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <span className="text-xl font-medium">{tour}-Й ТУР</span>
        </div>
        <div>
          <span className="text-xs font-medium">{data}</span>
        </div>
      </div>

      <div className="flex justify-around items-center ">
        <div>
          <Icon className="w-20" type={`${teamOne}`} />
          <span
            className="font-medium text-base flex flex-col text-center"
            dangerouslySetInnerHTML={{ __html: TeamOneText }}
          ></span>
        </div>

        <div>
          <span className="font-bold tracking-0.5">{score}</span>
        </div>

        <div>
          <Icon className="w-20" type={`${teamTwo}`} />
          <span
            className="font-medium text-base flex flex-col text-center"
            dangerouslySetInnerHTML={{ __html: TeamTwoText }}
          ></span>
        </div>
      </div>
    </div>
  );
};
