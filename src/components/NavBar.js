import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar
        position='static'
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%",
          }}>
          <Button color='inherit'>Projects</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
