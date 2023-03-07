import React from "react";
import { Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(8, 28, 44)",
        height: "40",
        width: "40vw",
        marginLeft: "30vw",
      }}>
      <Typography
        variant='h3'
        sx={{
          fontFamily: "Dosis",
          color: "white",
          opacity: "90%",
          marginBottom: "2rem",
        }}>
        Hello! I'm Matt Chisholm.
      </Typography>
      <Typography
        variant='h4'
        sx={{
          fontFamily: "Dosis",
          color: "white",
          opacity: "90%",
          marginBottom: "2rem",
        }}>
        Avid learner, problem solver, and full stack developer.
      </Typography>
      <Typography
        variant='h5'
        sx={{
          fontFamily: "Dosis",
          color: "white",
          opacity: "90%",
          marginBottom: "2rem",
        }}>
        I am a Full-Stack Developer with a bootcamp background and a passion for
        UX. Great UI is what drew me to development initially and I haven't
        looked back. I am a tenacious self starter who is detail and results
        oriented, and love working personably in teams and with clients. What I
        love most about development is the constant challenge and growth it
        provides, while providing an opportunity to learn each day. I am
        currently volunteering my time to several applications for non profit
        organizations and freelancing while i continue my career journey.
      </Typography>
    </Box>
  );
}
