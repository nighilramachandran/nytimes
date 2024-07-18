import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { FetchPopularArticles } from "./redux/reducers/article";
import CustomSelect from "./components/select/CustomSelect";

const Home: React.FC = () => {
  // states
  const [defaultPeriod, setDefaultPeriod] = useState("1");

  // constants
  const periods = ["1", "7", "30"];

  // dispatchers
  const dispatch = useAppDispatch();

  // effects
  useEffect(() => {
    dispatch(FetchPopularArticles());
  }, [dispatch]);

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
    </div>
  );
};

export default Home;
