import { ThunkConfig } from "@/app/Provider";
import { ArticleCardProps } from "@/entities/ArticleCard/ui/ArticleCard";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface GetFetchArticles {
  articles: ArticleCardProps[];
  msg: string;
}

export const getArticles = createAsyncThunk<any, void, ThunkConfig<string>>(
  "article/getarticles",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.get<GetFetchArticles>(
        "https://65fb4f6c14650eb21009ceba.mockapi.io/api/articles"
      );
      return data;
    } catch (e) {
      return rejectWithValue(e.data.msg);
    }
  }
);
