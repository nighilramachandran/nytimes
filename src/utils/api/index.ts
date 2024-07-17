import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nytimes.com/",
  headers: {},
  params: {
    "api-key": process.env.REACT_APP_API_KEY,
  },
});
