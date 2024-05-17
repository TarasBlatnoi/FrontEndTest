"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    text: {
      primary: "#CCC",
    },
    background: {
      default: grey[200],
    },
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[50],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 10,
  },
});

export default theme;
