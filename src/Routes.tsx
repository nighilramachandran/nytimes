import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./widgets/layouts";
import Home from "./pages/Home";
import DynamicPage from "./pages/[id]";

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path=":id" element={<DynamicPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
