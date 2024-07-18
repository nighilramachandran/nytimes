import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";
import CustomSelect from "./components/select/CustomSelect";
import { Paper } from "@mui/material";

const Home: React.FC = () => {
  // states
  const [defaultPeriod, setDefaultPeriod] = useState("1");

  //selectors
  const { articles, status } = useAppSelector((state) => state.Article);

  console.log("articles", articles);

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
    <div>
      <CustomSelect
        options={periods}
        defaultOption={defaultPeriod}
        optionChange={(val) => handleOptionChange(val)}
      />
      {articles?.length > 0 &&
        articles?.map((art) => {
          const imageUrl = art?.media?.[0]?.["media-metadata"]?.[2]?.url;
          return (
            <Paper variant="outlined">
              {imageUrl && (
                <img
                  src={art?.media?.[0]?.["media-metadata"]?.[2]?.url}
                  alt=""
                />
              )}
            </Paper>
          );
        })}
    </div>
  );
};

export default Home;
