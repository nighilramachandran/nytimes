import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";
import CustomSelect from "./components/select/CustomSelect";
import { Grid, Paper } from "@mui/material";
import ArticleSection from "./sections/home/ArticleSection";

const Home: React.FC = () => {
  // states
  const [defaultPeriod, setDefaultPeriod] = useState("1");

  //selectors
  const { articles, status } = useAppSelector((state) => state.Article);

  // constants
  const periods = ["1", "7", "30"];

  // dispatchers
  const dispatch = useAppDispatch();

  // effects
  useEffect(() => {
    dispatch(FetchPopularArticles(defaultPeriod));
  }, [dispatch, defaultPeriod]);

  // functions
  const handleOptionChange = (val: string) => {
    setDefaultPeriod(val);
  };

  return (
    <Grid container spacing={3}>
      <Grid item>
        <CustomSelect
          options={periods}
          defaultOption={defaultPeriod}
          optionChange={(val) => handleOptionChange(val)}
        />
      </Grid>
      <Grid item>
        <ArticleSection articles={articles} />
      </Grid>
    </Grid>
  );
};

export default Home;
