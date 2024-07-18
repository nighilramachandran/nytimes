import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";
import CustomSelect from "./components/select/CustomeSelect";

const Home: React.FC = () => {
  // Dispatchers
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    dispatch(FetchPopularArticles());
  }, [dispatch]);

  return (
    <div>
      <CustomSelect />
    </div>
  );
};

export default Home;
