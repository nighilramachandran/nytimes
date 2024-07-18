import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { Container } from "@mui/material";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ padding: "20px 0px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
