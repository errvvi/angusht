import React, { FC } from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id?: string;
  img?: string;
  title?: string;
  content?: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  img,
  title,
  content,
}) => {
  return (
    <Link
      className="hover:scale-105 transform transition duration-300 "
      to={`/article/${id}`}
    >
      <div className="max-w-sm bg-white my-5 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
        <img className="rounded-t-lg artimg" src={img} alt="" />
        <div className="p-2 h-36 flex flex-col">
          <h1 className="text-customGreen mb-2 text-2xl font-bold tracking-tight">
            {title}
          </h1>

          <div className="">
            <p className="text-black">{content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
