import * as React from "react";
import Navbar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#020024",
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
      </div>
    </ThemeProvider>
  );
}
