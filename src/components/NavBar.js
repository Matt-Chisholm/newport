import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuIcon,
  Box,
} from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar
        position='static'
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          boxShadow: "none",
          marginTop: "1rem",
          backgroundColor: "transparent",
          color: "#689da7",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "none",
            width: "60%",
            fontFamily: "DosisBold",
          }}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>Projects</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
