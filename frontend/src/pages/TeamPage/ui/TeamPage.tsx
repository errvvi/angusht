import { PersonCard } from "@/shared/ui/PersonCard/PersonCard";
import React from "react";
import photo from "../../../shared/assets/template-photo.png";

function TeamPage() {
  const person = {
    img: "img",
    jobTitle: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
    fio: "ИЛИЕВ БЕСЛАН ИСМАИЛОВИЧ",
    id: "1",
  };
  return (
    <div className="flex flex-wrap gap-10 justify-center mt-10">
      <PersonCard
        img={photo}
        jobTitle={person.jobTitle}
        fio={person.fio}
        id={person.id}
      />
      <PersonCard
        img={photo}
        jobTitle={person.jobTitle}
        fio={person.fio}
        id={person.id}
      />
      <PersonCard
        img={photo}
        jobTitle={person.jobTitle}
        fio={person.fio}
        id={person.id}
      />
      <PersonCard
        img={photo}
        jobTitle={person.jobTitle}
        fio={person.fio}
        id={person.id}
      />
    </div>
  );
}

export default TeamPage;
