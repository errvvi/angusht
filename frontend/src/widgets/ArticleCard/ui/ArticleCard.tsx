import React from "react";
import image from "@/shared/assets/articleImage.png";

export const ArticleCard = () => {
  return (
    <div className="max-w-sm bg-white my-5 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-2">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-900 dark:text-gray">
            Angusht is the best team in the World!
          </h5>
        </a>
      </div>
    </div>
  );
};
