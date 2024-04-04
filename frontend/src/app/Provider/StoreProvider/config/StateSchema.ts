import { articleState } from "@/entities/ArticleCard/model/types/article";
import { matchState } from "@/entities/MatchTable/model/types/matches";

export interface StateSchema {
  article: articleState;
  match: matchState;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
}
