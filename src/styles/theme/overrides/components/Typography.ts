import { Components, Theme } from "@mui/material/styles";

export const typographyOverride: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: "400px",
        fontSize: "12px",
      }),
      h2: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: "36px",
        fontWeight: 700,
      }),
      body1: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: "26px",
      }),
      body2: ({ theme }) => ({
        fontSize: "20px",
        color: theme.palette.text.secondary,
      }),
    },
    variants: [
      {
        props: { color: "gradient" },
        style: () => ({
          background:
            "-webkit-linear-gradient( #EF4652 0, #ff003e 25.21%, #e21a67 33.24%, #B04182 47.01%, #6352A0 67.09%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }),
      },
    ],
  },
};
