import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";
import { ChangeThemeButton } from "./components/buttons/ChangeThemeButton";

const Home: React.FC = () => {
  // Dispatchers
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    dispatch(FetchPopularArticles());
  }, [dispatch]);

  return <div>{/* <ChangeThemeButton /> */}</div>;
};

export default Home;
