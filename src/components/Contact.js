import React from "react";
import { useState, useRef } from "react";
import { TextField, Button, Container } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const [formStatus, setFormStatus] = React.useState("Send");
  const [error, setError] = React.useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const from_name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const templateParams = {
      from_name,
      email,
      message,
    };
    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then((result) => {
        if (result.status === 200) {
          setFormStatus("Sent!");
          e.target.reset();
        } else {
          setError("Something went wrong. Please try again later.");
          setFormStatus("Send");
        }
      });
  };

  return (
    <form onSubmit={onSubmit}>
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
          {formStatus}
        </Button>
      </Container>
    </form>
  );
}
