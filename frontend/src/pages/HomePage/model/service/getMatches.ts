import { ThunkConfig } from "@/app/Provider";
import { MatchTimetableProps } from "@/entities/MatchTable/ui/MatchTable";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export interface GetFetchMatches {
  matches: MatchTimetableProps[];
  msg: string;
}

export const getMatches = createAsyncThunk<any, void, ThunkConfig<string>>(
  "match/getMatches",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get<GetFetchMatches>(
        // "https://65f85cccdf151452460f3434.mockapi.io/api/matchtimetable"
        "https://65fb776814650eb2100a0163.mockapi.io/api/matches"
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.data.msg);
    }
  }
);
