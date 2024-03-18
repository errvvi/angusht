import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import React, { useEffect } from "react";

function NewsPage() {
  return (
    <div className="bg-customGreen">
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ml-12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default NewsPage;
