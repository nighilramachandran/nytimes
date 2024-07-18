import React from "react";
import NyLogo from "../../../components/assets/NyLogo";
import { AppBar, Box, Toolbar } from "@mui/material";
import {
  appBarStyles,
  headerStyles,
  logoWrapperStyles,
} from "../../../styles/header";
import { ChangeThemeButton } from "../../../components/Buttons/ChangeThemeButton";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ ...appBarStyles }}>
      <Toolbar disableGutters sx={{ ...headerStyles }}>
        <Box sx={{ ...logoWrapperStyles }}>
          <NyLogo />
        </Box>
        <ChangeThemeButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
