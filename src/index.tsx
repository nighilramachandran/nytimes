import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import PrivateRoutes from "./Routes";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ThemeProviders from "./providers/ThemeProviders";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";

// create root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProviders>
      <CssBaseline enableColorScheme />
      <MotionLazyContainer>
        <PrivateRoutes />
      </MotionLazyContainer>
    </ThemeProviders>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
