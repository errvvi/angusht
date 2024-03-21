import React, { FC } from "react";

interface PersonProps {
  img: string;
  jobTitle?: string;
  fio: string;
  id: string;
  Role?: string;
}

export const PersonCard: FC<PersonProps> = ({ img, jobTitle, fio, id }) => {
  return (
    <div className="flex flex-col w-72">
      <img className="object-cover" src={img} alt="photo" />
      <div className="h-36 flex flex-col justify-start items-center gap-4 bg-white rounded-b-lg">
        <p className="text-sm text-center font-semibold">{jobTitle}</p>
        <h3 className="text-2xl text-center font-bold">{fio}</h3>
      </div>
    </div>
  );
};
