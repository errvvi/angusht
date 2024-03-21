import React, { FC } from "react";

interface PersonProps {
  img: string;
  jobTitle?: string;
  fio: string;
  id: string;
}

export const PersonCard: FC<PersonProps> = ({ img, jobTitle, fio, id }) => {
  return (
    <div className="flex flex-col w-72">
      <img className="object-cover" src={img} alt="photo" />
      <div className="h-32 flex flex-col justify-start items-center gap-4 bg-white rounded-b-lg">
        <p className="text-xl">{jobTitle}</p>
        <h3 className="text-3xl text-center font-semibold">{fio}</h3>
      </div>
    </div>
  );
};
