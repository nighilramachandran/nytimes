import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FetchPopularArticles } from "../redux/reducers/article";
import CustomSelect from "../components/select/CustomSelect";
import { Grid } from "@mui/material";
import ArticleSection from "../sections/home/ArticleSection";
import { LoadingBox } from "../components/loading-box";

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
    <LoadingBox status={status === "data" ? "data" : "loading"}>
      <Grid container spacing={3}>
        <Grid item sx={{ marginLeft: "auto" }}>
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
    </LoadingBox>
  );
};

export default Home;
