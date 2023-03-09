import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grow,
  Box,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import "../css/NavBar.css";

export default function Contact() {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formStatus, setFormStatus] = useState("Send");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const from_name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const templateParams = { from_name, email, message };
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
    <Grow in={true} timeout={1300}>
      <Container sx={{ maxWidth: "md", py: 8 }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Dosis",
            color: "grey",
          }}>
          Send me an email
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}>
          <Typography variant='subtitle1' sx={{ mb: 2, color: "error.main" }}>
            {error ? error : ""}
          </Typography>
          <TextField
            id='name'
            className='input'
            label='Name'
            variant='outlined'
            sx={{ mb: 2, backgroundColor: "grey", width: "60%" }}
            fullWidth
          />
          <TextField
            id='email'
            label='Email'
            className='input'
            variant='outlined'
            sx={{ mb: 2, backgroundColor: "grey", width: "60%" }}
            fullWidth
          />
          <TextField
            id='message'
            label='Message'
            className='input'
            variant='outlined'
            multiline
            rows={4}
            sx={{ mb: 2, backgroundColor: "grey", width: "60%" }}
            fullWidth
          />
          <Button
            variant='contained'
            type='submit'
            sx={{
              alignSelf: "center",
              backgroundColor: "#0ddada",
              color: "black",
            }}>
            {formStatus}
          </Button>
        </Box>
      </Container>
    </Grow>
  );
}
