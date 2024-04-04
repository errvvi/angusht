import { StateSchema } from "@/app/Provider";

export const getArticlesInited = (state: StateSchema) =>
  state.article.inited || false;
