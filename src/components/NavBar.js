import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../css/NavBar.css";

export default function NavBar({ selectedScreen, setSelectedScreen }) {
  const selectedStyle = {
    color: "#0acfcf",
    borderBottom: "2px solid #0acfcf",
    borderTop: "2px solid #0acfcf",
    borderRadius: "0px",
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
            alignContent: isMobile ? "center" : "space-between",
          }}>
          <Typography
            variant='h4'
            component='div'
            sx={{
              flexGrow: 0,
              fontFamily: "Dosis",
              marginRight: isMobile ? "auto" : "12rem",
            }}>
            Matt Chisholm
          </Typography>
          {isMobile && (
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedScreen("home")}
              sx={{
                fontFamily: "Dosis",
                ...(selectedScreen === "home" && selectedStyle),
              }}>
              Home
            </Button>
          )}
          {isMobile && (
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedScreen("projects")}
              sx={{
                fontFamily: "Dosis",
                ...(selectedScreen === "projects" && selectedStyle),
              }}>
              Projects
            </Button>
          )}
          {isMobile && (
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedScreen("contact")}
              sx={{
                fontFamily: "Dosis",
                ...(selectedScreen === "contact" && selectedStyle),
              }}>
              Contact
            </Button>
          )}
          {!isMobile && (
            <>
              <Button
                color='inherit'
                className='nav-button'
                onClick={() => setSelectedScreen("home")}
                sx={{
                  marginRight: "8rem",
                  fontFamily: "Dosis",
                  ...(selectedScreen === "home" && selectedStyle),
                }}>
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
                  marginRight: "auto",
                  fontFamily: "Dosis",
                  ...(selectedScreen === "contact" && selectedStyle),
                }}>
                Contact
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
