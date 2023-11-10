import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// const colors2 = {
//   brand: {
//     50: "#8080B3",
//     100: "#565695",
//     200: "#343477",
//     300: "#1A1A59",
//     400: "#09093B",
//   },
// };

const colors = {
  primary: {
    50: "#f4f8f5",
    100: "#d5e4d7",
    200: "#b0cdb4",
    300: "#8eae93",
    400: "#7f9b83",
    500: "#6b836e",
    600: "#5a6e5d",
    700: "#48584b",
    800: "#3d4b3f",
    900: "#2c362d",
  },
  secondary: {
    "50": "#f6f8f6",
    "100": "#dce2dd",
    "200": "#bec8bf",
    "300": "#9aaa9c",
    "400": "#869988",
    "500": "#6b836e",
    "600": "#5a6e5d",
    "700": "#48594a",
    "800": "#3d4b3f",
    "900": "#2c362d"
  },
  dark: {
    "50": "#f7f7f7",
    "100": "#e0e0e1",
    "200": "#c5c5c8",
    "300": "#a5a6a9",
    "400": "#939498",
    "500": "#7b7d82",
    "600": "#68696f",
    "700": "#53545b",
    "800": "#45474f",
    "900": "#31333c"
  }
}

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
