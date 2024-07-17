import React from "react";
import NyLogo from "../../../components/assets/NyLogo";
import { AppBar, Box, Toolbar } from "@mui/material";
import {
  appBarStyles,
  headerStyles,
  logoWrapperStyles,
} from "../../../styles/header";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Box sx={{ ...logoWrapperStyles }}>
          <NyLogo />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
