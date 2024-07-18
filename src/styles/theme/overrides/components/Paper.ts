import { Components, Theme } from "@mui/material/styles";

export const paperOverride: Components<Theme> = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: "none",
        padding: theme.spacing(2),

        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1),
        },

        borderRadius: theme.shape.borderRadius * 4,
      }),
    },

    variants: [
      {
        props: { variant: "outlined" },
        style: ({ theme }) => ({
          position: "relative",
          color: theme.palette.text.primary,
          backgroundImage:
            "linear-gradient(199.24deg, #F26722 1%, #F26623 5.95%, #F2622A 9.91%, #F15C35 13.87%, #F05343 17.83%, #EF4652 21.79%, #EE3260 25.75%, #ED1B68 27.73%, #DB2B6F 39.61%, #B04182 63.37%, #6352A0 98.02%, #5E53A3 100%)",
          border: "none",
          borderRadius: theme.shape.borderRadius * 4,
          overflow: "hidden",
          zIndex: "0",
          padding: theme.spacing(2),
          "&:before": {
            content: "''",
            position: "absolute",
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
            backgroundColor: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius * 4,
            boxSizing: "border-box",
            zIndex: "-1",
          },
        }),
      },
    ],
  },
};
