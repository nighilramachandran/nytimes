import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";

const Home: React.FC = () => {
  // Dispatchers
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    dispatch(FetchPopularArticles());
  }, [dispatch]);

  return <div></div>;
};

export default Home;
