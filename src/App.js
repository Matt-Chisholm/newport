import * as React from "react";
import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import "./fonts/Dosis-Regular.ttf";
import "./fonts/Rubik80sFade-Regular.ttf";
import "./fonts/TiltWarp-Regular.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(8, 28, 44)",
    },
    secondary: {
      main: "#090979",
    },
  },
  mode: "dark",
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='main-container'>
        <NavBar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}
