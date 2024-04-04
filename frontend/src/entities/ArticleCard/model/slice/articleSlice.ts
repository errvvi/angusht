import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { articleState } from "../types/article";
import {
  GetFetchArticles,
  getArticles,
} from "@/pages/HomePage/model/service/getArticles";

export const initialState: articleState = {
  articles: [],
  inited: false,
};
const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getArticles.fulfilled,
      (state, action: PayloadAction<GetFetchArticles>) => {
        // @ts-ignore
        state.articles = action.payload;
        state.inited = true;
      }
    );
  },
});

export const articleActions = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
