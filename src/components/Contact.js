import React from "react";
import { useState, useRef } from "react";
import { TextField, Button, Container } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleFormSubmit}>
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
          id='name'
          label='Name'
          variant='outlined'
          sx={{ width: "40%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <TextField
          id='email'
          label='Email'
          variant='outlined'
          sx={{ width: "40%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <TextField
          id='message'
          label='Message'
          variant='outlined'
          multiline
          rows={4}
          sx={{ width: "40%", marginBottom: "1rem", backgroundColor: "grey" }}
        />
        <Button
          variant='contained'
          type='submit'
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
