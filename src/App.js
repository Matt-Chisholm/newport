import * as React from "react";
import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
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
  const [selectedScreen, setSelectedScreen] = React.useState("home");
  console.log(selectedScreen);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='main-container'>
        <NavBar
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
        />
        <HomePage />
        {selectedScreen === "home" ? <About /> : null}
      </div>
    </ThemeProvider>
  );
}
