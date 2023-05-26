import React from "react";
import { Typography, Box, Container, Grid, useMediaQuery } from "@mui/material";
import Grow from "@mui/material/Grow";
import { useTheme } from "@emotion/react";

export default function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grow in={true} timeout={1000}>
      <Container>
        <Box
          maxWidth='xl'
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#232424",
            padding: "2rem",
            textAlign: "center",
          }}>
          <Typography
            variant='h4'
            sx={{
              fontFamily: "Dosis",
              color: "#0ddada",
              opacity: "90%",
              marginBottom: "2rem",
              alignSelf: "center",
            }}>
            About Me
          </Typography>
          <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginLeft: !isSmallScreen ? "25%" : "0",
                }}>
                <Typography
                  variant='h5'
                  sx={{
                    fontFamily: "Dosis",
                    color: "white",
                    opacity: "90%",
                    marginBottom: "2rem",
                    alignSelf: "center",
                  }}>
                  Hello! I'm Matt Chisholm.
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: "TiltWarp",
                    color: "white",
                    opacity: "70%",
                    marginBottom: "2rem",
                  }}>
                  Avid learner, problem solver, and front end developer.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontFamily: "Dosis",
                    color: "white",
                    opacity: "90%",
                    lineHeight: "1.5rem",
                    marginBottom: "2rem",
                  }}>
                  I am a Web and Mobile developer who graduated from Lighthouse
                  Labs Web Dev bootcamp in 2022. Great UI is what drew me to
                  development initially and I haven't looked back. I am a
                  tenacious self starter who is detail and results oriented, and
                  love working personably in teams and with clients. What I love
                  most about development is the constant challenge and growth it
                  provides, while providing an opportunity to learn each day. I
                  am currently volunteering my time to several applications for
                  non profit organizations and freelancing while I continue
                  searching for challenging and exciting opportunities.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grow>
  );
}
