import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { personCardState } from "../types/personCard";
import {
  GetFetchArticles,
  getArticles,
} from "@/pages/HomePage/model/service/getArticles";
import {
  GetFetchPersons,
  getPersons,
} from "@/pages/TeamPage/model/service/getPersons";

export const initialState: personCardState = {
  persons: [],
  inited: false,
};
const personCardSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      getPersons.fulfilled,
      (state, action: PayloadAction<GetFetchPersons>) => {
        // @ts-ignore
        state.persons = action.payload;
        state.inited = true;
      }
    );
  },
});

export const personCardActions = personCardSlice.actions;
export const personCardReducer = personCardSlice.reducer;
