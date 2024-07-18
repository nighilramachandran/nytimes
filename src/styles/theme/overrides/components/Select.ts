import { Components, Theme } from "@mui/material/styles";

export const selectOverride: Components<Theme> = {
  MuiSelect: {
    styleOverrides: {
      standard: ({ theme }) => ({
        ":focus": {
          backgroundColor: "transparent",
        },
      }),
      outlined: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),

      select: ({ theme }) => ({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        height: "25px",
        minWidth: "100px",
      }),
    },
    defaultProps: {
      disableUnderline: true,
      variant: "standard",
    },
    variants: [
      {
        props: { className: "outlined-gradient" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          backgroundImage:
            "linear-gradient(199.24deg, #F26722 1%, #F26623 5.95%, #F2622A 9.91%, #F15C35 13.87%, #F05343 17.83%, #EF4652 21.79%, #EE3260 25.75%, #ED1B68 27.73%, #DB2B6F 39.61%, #B04182 63.37%, #6352A0 98.02%, #5E53A3 100%)",
          textAlign: "center",
          paddingLeft: "10px",
          border: "none",
          overflow: "hidden",
          zIndex: "0",
          "&:before": {
            content: "''",
            position: "absolute",
            top: "1px",
            right: "1px",
            bottom: "1px",
            left: "1px",
            backgroundColor: theme.palette.background.default,
            borderRadius: "5px",
            boxSizing: "border-box",
            zIndex: "-1",
          },
          "&:hover": {
            border: "none",
            outline: "none",
          },
          "&:focus": {
            outline: "none",
            border: "none",
          },
        }),
      },
    ],
  },
};
