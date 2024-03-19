import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "@/shared/assets/articleImage.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const DetailArticlePage = () => {
  const [article, setArticle] = useState([]);
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getArticle = async () => {
      const { data } = await axios.get(
        `https://65f85cccdf151452460f3434.mockapi.io/api/articles/${id}`
      );
      setArticle([data]);
    };

    getArticle();
  }, []); // ИМИТАЦИЯ
  return (
    <div ref={parent} className="flex justify-center items-center mt-5">
      {article?.map((item) => (
        // <ArticleCard
        //   key={item.id}
        //   id={item.id}
        //   title={item.title}
        //   content={item.content}
        // />
        <div className="w-full h-auto">
          <img className="w-full h-auto" src={img} />
          <div
            style={{ minHeight: "80vh", flexGrow: 1 }}
            className="bg-white rounded-b-3xl  flex flex-col gap-6 p-8 "
          >
            <div>
              <p className="text-3xl font-bold ">{item.title}</p>
            </div>

            <div>
              <p className="text-2xl ">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
