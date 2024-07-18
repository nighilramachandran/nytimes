import { ThemeOptions } from "@mui/material/styles";
import { componetnsOverrides } from "./overrides/components";
import { typographyStylesOverrides } from "./overrides/components/TypographyFontStyle";
import { typographyOverride } from "./overrides/components/Typography";
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: "#414141",
      secondary: "#B1B5C3",
    },
    background: {
      default: "#F5F8FE",
      header: "#F5F8FE",
    },
    primary: {
      main: "#d6357e",
    },
  },
  // shape: { ...shapOverrides },
  typography: { ...typographyStylesOverrides, ...typographyOverride },

  components: {
    ...componetnsOverrides,
  },
};

export default lightThemeOptions;
