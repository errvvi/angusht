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
    <div className="flex flex-col w-72 max-sm:w-64">
      <img className="object-cover artimg" src={img} alt="photo" />
      <div className="h-36 flex flex-col justify-start items-center gap-4 bg-white rounded-b-lg max-sm:text-xs max-sm:h-28 ">
        <p className="text-sm text-center font-personCard font-semibold max-sm:text-xs">
          {jobTitle}
        </p>
        <h3 className="text-2xl font-personCard text-center font-bold max-sm:text-xl">
          {fio}
        </h3>
      </div>
    </div>
  );
};
