import { StateSchema } from "@/app/Provider";

export const getDataArticles = (state: StateSchema) =>
  state.article.articles || [];
