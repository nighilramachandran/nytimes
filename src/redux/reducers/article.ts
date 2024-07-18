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
}

const initialState: InitialState = {
  status: "nothing",
  articles: [],
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

    // AddTask: (state, { payload }: PayloadAction<TaskItems>) => {
    //   const existingIndex = state.taskItems.findIndex(
    //     (task) => task.title === payload.title
    //   );

    //   if (existingIndex !== -1) {
    //     enqueueSnackbar(`Task with Title ${payload.title} already exist`, {
    //       variant: "error",
    //     });
    //   } else {
    //     const id = uuidv4();
    //     const taskWithIdAndStatus = { ...payload, id, isCompleted: false };
    //     state.taskItems.push(taskWithIdAndStatus);
    //     enqueueSnackbar(`Task Added succesfully`, {
    //       variant: "success",
    //     });
    //   }
    // },
    // ChangeStatus: (
    //   state,
    //   { payload }: PayloadAction<{ id: string; isCompleted: boolean }>
    // ) => {
    //   const index = state.taskItems.findIndex((task) => task.id === payload.id);

    //   if (index !== -1) {
    //     state.taskItems[index].isCompleted = payload.isCompleted;
    //   }
    // },
    // DeleteTask: (state, { payload }: PayloadAction<string>) => {
    //   state.taskItems = state.taskItems.filter((task) => task.id !== payload);
    // },
    // UpdateTask: (state, { payload }: PayloadAction<TaskItems>) => {
    //   const index = state.taskItems.findIndex((task) => task.id === payload.id);
    //   if (index !== -1) {
    //     state.taskItems[index] = payload;
    //   }
    // },
  },
});

export const { setStatus, setArticles } = ArticleSlice.actions;

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
        dispatch(setStatus("data"));
      } else {
        dispatch(setStatus("error"));
      }
    } catch {
      dispatch(setStatus("error"));
    }
  };
export default ArticleSlice;
