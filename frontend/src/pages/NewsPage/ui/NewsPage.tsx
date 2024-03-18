import { ArticleCard } from "@/widgets/ArticleCard/ui/ArticleCard";
import React from "react";

function NewsPage() {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
  );
}

export default NewsPage;
