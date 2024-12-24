import { TdTag } from "@/shared/ui/td/Td";
import cls from "tailwind.config";

export const Table = () => {
  const thData = ["#", "КОМАНДА", "И", "В", "Н", "П", "РМ", "О"];
  const rowData1 = [32, 22, 5, 5, "68:30", 71];
  const rowData2 = [32, 20, 4, 8, "48:26", 64];
  const rowData3 = [32, 18, 9, 5, "54:31", 63];
  const rowData4 = [32, 18, 6, 8, "57:26", 60];
  const rowData5 = [32, 19, 3, 10, "57:33", 60];
  const rowData6 = [32, 17, 7, 8, "47:30", 58];
  const rowData7 = [32, 13, 9, 10, "44:34", 48];
  const rowData8 = [32, 14, 5, 13, "40:42", 47];
  const rowData9 = [32, 13, 5, 14, "43:47", 44];
  const rowData10 = [32, 13, 3, 16, "41:42", 42];
  const rowData11 = [32, 8, 14, 10, "22:27", 38];
  const rowData12 = [32, 9, 10, 13, "29:37", 37];
  const rowData13 = [32, 10, 7, 15, "47:50", 37];
  const rowData14 = [32, 8, 6, 18, "41:56", 30];
  const rowData15 = [32, 7, 9, 16, "36:49", 30];
  const rowData16 = [32, 4, 5, 23, "24:87", 17];
  const rowData17 = [32, 3, 5, 24, "19:70", 14];

  const www = "text-6xl";
  return (
    <table className=" my-7 font-tableFont shadow-2xl w-full">
      <thead className="text-white bg-green-950 text-3xl">
        {thData.map((data, index) => (
          <th className="text-center py-3 px-6 font-semibold  max-832:px-2 max-832:py-2 max-sm:py-1 max-sm:px-1 max-832:text-lg max-sm:text-sm max-520:text-xs ">
            {data}
          </th>
        ))}
      </thead>
      <tbody>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>1</TdTag>
          <TdTag>Форте (Таганрог) </TdTag>
          {rowData1.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>2</TdTag>

          <TdTag>Рубин Ялта (Ялта)</TdTag>

          {rowData2.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>3</TdTag>

          <TdTag>Динамо Ставрополь (Ставрополь) </TdTag>

          {rowData3.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>4</TdTag>

          <TdTag> Легион (Махачкала)</TdTag>

          {rowData4.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>5</TdTag>

          <TdTag>Ростов-2 (Ростов-на-Дону) </TdTag>

          {rowData5.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>6</TdTag>

          <TdTag> Севастополь (Севастополь)</TdTag>

          {rowData6.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>7</TdTag>

          <TdTag>Строитель (Каменск-Шахтинский) </TdTag>

          {rowData7.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>8</TdTag>

          <TdTag>Астрахань (Астрахань) </TdTag>

          {rowData8.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>9</TdTag>

          <TdTag> Нарт (Черкесск) </TdTag>

          {rowData9.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>10</TdTag>

          <TdTag> Дружба (Майкоп)</TdTag>

          {rowData10.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>11</TdTag>

          <TdTag>Ангушт (Назрань) </TdTag>

          {rowData11.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>12</TdTag>

          <TdTag>Кубань Холдинг (ст.Павловская) </TdTag>

          {rowData12.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>13</TdTag>

          <TdTag> Спартак-Нальчик (Нальчик)</TdTag>

          {rowData13.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>14</TdTag>

          <TdTag>Биолог Новокубанск (п.Прогресс) </TdTag>

          {rowData14.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>15</TdTag>

          <TdTag>Победа (Хасавюрт) </TdTag>

          {rowData15.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>16</TdTag>

          <TdTag>Алания-2 (Владикавказ) </TdTag>

          {rowData16.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>17</TdTag>

          <TdTag>Динамо-2 (Махачкала)</TdTag>

          {rowData17.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
