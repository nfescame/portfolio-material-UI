import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { AuthContext } from "./context/index";

import Home from "./Home";

export default function App() {
  const { darkMode } = React.useContext(AuthContext);
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Fuzzy Bubbles",
        "cursive",
        "Lato",
        "sans",
        "serif",
        "Lora",
        "Noto Serif Display",
        "Pushster",
        "cursive",
        "Zen Antique Soft",
        "Zen Kurenaido",
        "sans",
      ],
    },
    spacing: 4,
    palette: {
      type: darkMode ? "dark" : "light",
      primary: blueGrey,
      secondary: blue,
      background: {
        git: !darkMode ? "#232323" : "#fff",
        dark: darkMode ? "#303030" : "#e5e5e5e5",
        paper: darkMode ? "#232323" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
