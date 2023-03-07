import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: "transparent",
          color: "#0acfcf",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            alignContent: "space-around",
          }}>
          <Typography
            variant='h4'
            component='div'
            sx={{ flexGrow: 1, fontFamily: "Dosis", marginLeft: "8rem" }}>
            Matt Chisholm
          </Typography>
          <Button
            color='inherit'
            sx={{ marginRight: "8rem", fontFamily: "Dosis" }}>
            Home
          </Button>
          <Button
            color='inherit'
            sx={{ marginRight: "8rem", fontFamily: "Dosis" }}>
            Projects
          </Button>
          <Button
            color='inherit'
            sx={{ marginRight: "50vw", fontFamily: "Dosis" }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
