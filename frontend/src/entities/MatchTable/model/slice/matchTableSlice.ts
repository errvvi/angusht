import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { matchState } from "../types/matches";
import { GetFetchArticles } from "@/pages/HomePage/model/service/getArticles";
import {
  GetFetchMatches,
  getMatches,
} from "@/pages/HomePage/model/service/getMatches";

export const initialState: matchState = {
  matches: [],
  inited: false,
};
const matchSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    // getMatches: (state, action: PayloadAction<GetFetchMatches>) => {
    //   //@ts-ignore
    //   state.matches = action.payload;
    //   state.inited = true;
    // },
  },
  extraReducers(builder) {
    builder.addCase(
      getMatches.fulfilled,
      (state, action: PayloadAction<GetFetchMatches>) => {
        //@ts-ignore
        state.matches = action.payload;
        state.inited = true;
      }
    );
  },
});

export const matchActions = matchSlice.actions;
export const matchReducer = matchSlice.reducer;
