import { ThunkConfig } from "@/app/Provider";
import { ArticleCardProps } from "@/entities/ArticleCard/ui/ArticleCard";
import { PersonProps } from "@/entities/PersonCard/ui/PersonCard";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface getPersonsParams {
  params?: string;
}

export interface GetFetchPersons {
  articles: PersonProps[];
  msg: string;
}

export const getPersons = createAsyncThunk<any, void, ThunkConfig<string>>(
  "persons/getPersons",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const { data } = await axios.get<GetFetchPersons>(
        `https://65fb4f6c14650eb21009ceba.mockapi.io/api/HumanCard`
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.data.msg);
    }
  }
);
