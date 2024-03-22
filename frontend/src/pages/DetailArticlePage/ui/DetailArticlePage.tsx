import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const DetailArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getArticle = async () => {
      const { data } = await axios.get(
        `https://65fb4f6c14650eb21009ceba.mockapi.io/api/articles/${id}`
      );
      setArticle([data]);
    };

    getArticle();
  }, []); // ИМИТАЦИЯ
  return (
    <div
      ref={parent}
      className="flex justify-center items-center mt-5 font-articleTitle font-bold"
    >
      <article>
        {article?.map((item) => (
          // <ArticleCard
          //   key={item.id}
          //   id={item.id}
          //   title={item.title}
          //   content={item.content}
          // />
          <div className="w-full h-auto">
            <img className="w-full h-auto" src={item.img} />
            <div
              style={{
                paddingBottom: "100px",
                flexGrow: 1,
              }}
              className="bg-white rounded-b-3xl  flex flex-col gap-6 p-8 "
            >
              <div>
                <p className="text-3xl font-articleTitle font-bold">
                  {item.title}
                </p>
              </div>

              <div>
                <p className="text-2xl font-articleContent ">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};
