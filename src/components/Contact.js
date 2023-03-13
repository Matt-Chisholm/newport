import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grow,
  Box,
  Avatar,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import "../css/NavBar.css";
import ok from "../fonts/ok.png";

export default function Contact() {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formStatus, setFormStatus] = useState("Send");
  const [error, setError] = useState(null);
  console.log(errors);

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
            marginTop: "-3rem",
          }}>
          Send me an email
        </Typography>
        {formStatus === "Send" && (
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
                flexDirection: "row",
              }}>
              <Avatar
                sx={{ width: 60, height: 60, opacity: "60%" }}
                alt='LinkedIn'
                className='links'
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/matt-chisholm10/",
                    "_blank"
                  )
                }
                src={
                  "https://img.icons8.com/color/48/null/linkedin-circled--v1.png"
                }
              />
              <Avatar
                sx={{ width: 60, height: 60, opacity: "60%" }}
                alt='GitHub'
                className='links'
                onClick={() =>
                  window.open("https://github.com/Matt-Chisholm", "_blank")
                }
                src={"https://img.icons8.com/ios-glyphs/60/null/github.png"}
              />
            </Box>
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
        )}
        {formStatus === "Sent!" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              mt: 4,
            }}>
            <Typography variant='subtitle1' sx={{ color: "success.main" }}>
              {formStatus}
            </Typography>
            <Box sx={{ ml: 1, justifyContent: "center", alignItems: "center" }}>
              <Typography variant='subtitle2' sx={{ color: "whitesmoke" }}>
                <br />
                Thanks for reaching out! I'll get back to you as soon as I can.
                <br />
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    opacity: "100%",
                    alignSelf: "center",
                    marginLeft: "43%",
                    marginTop: "5rem",
                  }}
                  alt='Success'
                  src={ok}
                />
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Grow>
  );
}
