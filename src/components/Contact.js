import React from "react";
import { TextField, Button, Container } from "@mui/material";

export default function Contact() {
  return (
    <form>
      <Container
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#4b6d74",
        }}>
        <TextField
          id='outlined-basic'
          autoComplete='none'
          label='Name'
          variant='outlined'
          sx={{ width: "50%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <TextField
          id='outlined-basic'
          autoComplete='none'
          label='Email'
          variant='outlined'
          sx={{ width: "50%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <TextField
          id='outlined-basic'
          label='Message'
          multiline
          rows={4}
          autoComplete='none'
          variant='outlined'
          sx={{ width: "50%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <Button
          variant='contained'
          sx={{
            width: "2a0%",
            marginBottom: "1rem",
            backgroundColor: "#0acfcf",
            color: "black",
          }}>
          Submit
        </Button>
      </Container>
    </form>
  );
}
