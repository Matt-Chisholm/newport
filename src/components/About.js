import React from "react";
import { Typography, Box, Container, Avatar } from "@mui/material";
import Grow from "@mui/material/Grow";

export default function About() {
  const bull = <span className='bullet'>•</span>;
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#232424",
      }}>
      <Grow in={true} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#232424",
            height: "40",
            width: "40vw",
          }}>
          <Typography
            variant='h7'
            sx={{
              fontFamily: "Dosis",
              color: "grey",
              opacity: "90%",
              marginBottom: "2rem",
              marginRight: "20rem",
            }}>
            About Me
          </Typography>
          <Typography
            variant='h4'
            sx={{
              fontFamily: "Dosis",
              color: "white",
              opacity: "90%",
              marginBottom: "2rem",
            }}>
            Hello! I'm Matt Chisholm.
          </Typography>
          <Typography
            variant='h5'
            sx={{
              fontFamily: "TiltWarp",
              color: "white",
              opacity: "70%",
              marginBottom: "2rem",
            }}>
            Avid learner, problem solver, and front end developer.
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontFamily: "Dosis",
              color: "white",
              opacity: "90%",
              marginBottom: "2rem",
            }}>
            I am a Front End Developer with a bootcamp background and a passion
            for UX. Great UI is what drew me to development initially and I
            haven't looked back. I am a tenacious self starter who is detail and
            results oriented, and love working personably in teams and with
            clients. What I love most about development is the constant
            challenge and growth it provides, while providing an opportunity to
            learn each day. I am currently volunteering my time to several
            applications for non profit organizations and freelancing while i
            continue my career journey.
          </Typography>
        </Box>
      </Grow>
    </Container>
  );
}
