import { Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { articleReducer } from "@/entities";
import { matchReducer } from "@/entities/MatchTable/model/slice/matchTableSlice";

export const createStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    article: articleReducer,
    match: matchReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    // devTools: DEV,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
