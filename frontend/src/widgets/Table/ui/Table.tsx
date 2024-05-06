import { TdTag } from "@/shared/ui/td/Td";
import cls from "tailwind.config";

export const Table = () => {
  const thData = ["#", "КОМАНДА", "И", "В", "Н", "П", "РМ", "О"];
  const rowData1 = [0, 0, 0, 0, "0:0", 0];
  const rowData2 = [0, 0, 0, 0, "0:0", 0];
  const rowData3 = [0, 0, 0, 0, "0:0", 0];
  const rowData4 = [0, 0, 0, 0, "0:0", 0];
  const rowData5 = [0, 0, 0, 0, "0:0", 0];
  const rowData6 = [0, 0, 0, 0, "0:0", 0];
  const rowData7 = [0, 0, 0, 0, "0:0", 0];
  const rowData8 = [0, 0, 0, 0, "0:0", 0];
  const rowData9 = [0, 0, 0, 0, "0:0", 0];
  const rowData10 = [0, 0, 0, 0, "0:0", 0];
  const rowData11 = [0, 0, 0, 0, "0:0", 0];
  const rowData12 = [0, 0, 0, 0, "0:0", 0];
  const rowData13 = [0, 0, 0, 0, "0:0", 0];
  const rowData14 = [0, 0, 0, 0, "0:0", 0];
  const rowData15 = [0, 0, 0, 0, "0:0", 0];
  const rowData16 = [0, 0, 0, 0, "0:0", 0];
  const rowData17 = [0, 0, 0, 0, "0:0", 0];

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
          <TdTag>Легион (Махачкала)</TdTag>
          {rowData1.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>2</TdTag>

          <TdTag> Форте (Таганрог)</TdTag>

          {rowData2.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>3</TdTag>

          <TdTag> Ангушт (Назрань)</TdTag>

          {rowData3.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>4</TdTag>

          <TdTag> Ростов-2 (Ростов-на-Дону)</TdTag>

          {rowData4.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>5</TdTag>

          <TdTag> Астрахань (Астрахань)</TdTag>

          {rowData5.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>6</TdTag>

          <TdTag> Кубань Холдинг (ст.Павловская)</TdTag>

          {rowData6.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>7</TdTag>

          <TdTag> Динамо Ставрополь (Ставрополь)</TdTag>

          {rowData7.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>8</TdTag>

          <TdTag> Победа (Хасавюрт)</TdTag>

          {rowData8.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>9</TdTag>

          <TdTag> Севастополь (Севастополь)</TdTag>

          {rowData9.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>10</TdTag>

          <TdTag> Спартак-Нальчик (Нальчик)</TdTag>

          {rowData10.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>11</TdTag>

          <TdTag> Биолог Новокубанск (п.Прогресс)</TdTag>

          {rowData11.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>12</TdTag>

          <TdTag> Динамо-2 (Махачкала)</TdTag>

          {rowData12.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>13</TdTag>

          <TdTag> Алания-2 (Владикавказ)</TdTag>

          {rowData13.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>

        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>14</TdTag>

          <TdTag> Нарт (Черкесск)</TdTag>

          {rowData14.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>15</TdTag>

          <TdTag> Дружба (Майкоп)</TdTag>

          {rowData15.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>16</TdTag>

          <TdTag> Рубин Ялта (Ялта)</TdTag>

          {rowData16.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
        <tr className="hover:bg-neutral-300 text-xl bg-white">
          <TdTag>17</TdTag>

          <TdTag> Строитель (Каменск-Шахтинский)</TdTag>

          {rowData17.map((data, index) => (
            <TdTag key={index}>{data}</TdTag>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
