import { articleState } from "@/entities/ArticleCard/model/types/article";
import { matchState } from "@/entities/MatchTable/model/types/matches";
import { personCardState } from "@/entities/PersonCard/model/types/personCard";

export interface StateSchema {
  article: articleState;
  match: matchState;
  person: personCardState;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: StateSchema;
}
