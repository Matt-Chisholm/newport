import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useMediaQuery, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GiHamburgerMenu } from "react-icons/gi";
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (screen) => {
    setSelectedScreen(screen);
    setAnchorEl(null);
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
            <div>
              <Button
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleClick}>
                <GiHamburgerMenu size='2rem' color='#0acfcf' />
              </Button>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                color='inherit'
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={() => handleClose("home")}>Home</MenuItem>
                <MenuItem onClick={() => handleClose("projects")}>
                  Projects
                </MenuItem>
                <MenuItem onClick={() => handleClose("skills")}>
                  Skills
                </MenuItem>
                <MenuItem onClick={() => handleClose("contact")}>
                  Contact
                </MenuItem>
              </Menu>
            </div>
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
                onClick={() => setSelectedScreen("skills")}
                sx={{
                  marginRight: "8rem",
                  fontFamily: "Dosis",
                  ...(selectedScreen === "skills" && selectedStyle),
                }}>
                Skills
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
