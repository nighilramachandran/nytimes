import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import {
  ArticleApiResponse,
  ArticleResult,
  RequestStatus,
} from "../../interfaces";
import { api } from "../../utils/api";

interface InitialState {
  status: RequestStatus;
  articles: ArticleResult[];
  validPagesId: number[];
}

const initialState: InitialState = {
  status: "nothing",
  articles: [],
  validPagesId: [],
};

const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  reducers: {
    setStatus: (state, { payload }: PayloadAction<RequestStatus>) => {
      state.status = payload;
    },
    setArticles: (state, { payload }: PayloadAction<ArticleResult[]>) => {
      state.articles = payload;
    },
    setValidPagesId: (state, { payload }: PayloadAction<number[]>) => {
      state.validPagesId = payload;
    },
  },
});

export const { setStatus, setArticles, setValidPagesId } = ArticleSlice.actions;

export const FetchPopularArticles =
  (param: string): AppThunk =>
  async (dispatch) => {
    dispatch(setStatus("loading"));
    try {
      const { data } = await api.get<ArticleApiResponse>(
        `svc/mostpopular/v2/viewed/${param}.json`
      );
      if (data.status === "OK") {
        dispatch(setArticles(data?.results));
        const pageIds = data.results.map((result) => result.id);
        dispatch(setValidPagesId(pageIds));
        dispatch(setStatus("data"));
      } else {
        dispatch(setStatus("error"));
      }
    } catch {
      dispatch(setStatus("error"));
    }
  };

export default ArticleSlice;
