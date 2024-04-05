import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { articleReducer, personCardReducer } from "@/entities";
import { matchReducer } from "@/entities/MatchTable/model/slice/matchTableSlice";

export const createStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    article: articleReducer,
    match: matchReducer,
    person: personCardReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    // devTools: DEV,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
