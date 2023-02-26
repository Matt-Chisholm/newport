import * as React from "react";
import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

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
        <Navbar />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}