import { FC } from "react";
import { Link } from "react-router-dom";

export interface ArticleCardProps {
  id?: string;
  video?: string;
  img?: string;
  title?: string;
  content?: string;
  poster?: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  img,
  title,
  content,
  video,
  poster,
}) => {
  return (
    <Link
      className="hover:scale-105 transform transition duration-300 m-auto  "
      to={`/article/${id}`}
    >
      <article className="max-w-sm bg-white my-5 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 max-sm:max-w-xs">
        {video ? (
          <img className="rounded-t-lg artimg" alt="" src={poster}></img>
        ) : (
          <img className="rounded-t-lg artimg" src={img} alt="" />
        )}

        <div className="p-2 h-36 flex flex-col max-sm:h-28">
          <h1 className="text-customGreen mb-2 text-2xl font-bold tracking-tight max-sm:text-xl">
            {title}
          </h1>

          <div className="">
            <p className="text-black">{content}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
