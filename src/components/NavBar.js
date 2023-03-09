import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../css/NavBar.css";

export default function NavBar({ selectedScreen, setSelectedScreen }) {
  const selectedStyle = {
    color: "#0acfcf",
    borderBottom: "2px solid #0acfcf",
    borderTop: "2px solid #0acfcf",
    borderRadius: "0px",
  };
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: "transparent",
          color: "#0acfcf",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            alignContent: "space-between",
          }}>
          <Typography
            variant='h4'
            component='div'
            sx={{
              flexGrow: 0,
              fontFamily: "Dosis",
              marginLeft: "10rem",
              marginRight: "12rem",
            }}>
            Matt Chisholm
          </Typography>
          <Button
            color='inherit'
            className='nav-button'
            sx={{
              marginRight: "8rem",
              fontFamily: "Dosis",
              ...(selectedScreen === "home" && selectedStyle),
            }}
            onClick={() => setSelectedScreen("home")}>
            Home
          </Button>
          <Button
            color='inherit'
            className='nav-button'
            onClick={() => setSelectedScreen("projects")}
            sx={{
              marginRight: "8rem",
              fontFamily: "Dosis",
              ...(selectedScreen === "projects" && selectedStyle),
            }}>
            Projects
          </Button>
          <Button
            color='inherit'
            className='nav-button'
            onClick={() => setSelectedScreen("contact")}
            sx={{
              marginRight: "50vw",
              fontFamily: "Dosis",
              ...(selectedScreen === "contact" && selectedStyle),
            }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
