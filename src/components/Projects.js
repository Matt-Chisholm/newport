import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import Grow from "@mui/material/Grow";

export default function Projects() {
  return (
    <Grow in={true} timeout={1200} style={{ transformOrigin: "0 0 0" }}>
      <Container
        sx={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
          marginTop: "-3rem",
        }}>
        <Card
          sx={{
            backgroundColor: "transparent",
            padding: "1rem",
            marginBottom: "2rem",
          }}>
          <CardContent>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                fontFamily: "TiltWarp",
                color: "grey",
                opacity: "90%",
              }}>
              A Few Recent Projects
            </Typography>
          </CardContent>
        </Card>
        <Typography
          variant='h7'
          gutterBottom
          sx={{
            fontFamily: "TiltWarp",
            color: "grey",
            opacity: "90%",
            marginTop: "-1rem",
          }}>
          Click for github repos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "transparent",
                padding: "1rem",
                marginBottom: "2rem",
              }}>
              <CardContent>
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://github.com/Matt-Chisholm/react-tetris",
                      "_blank"
                    )
                  }>
                  <Typography
                    variant='h5'
                    gutterBottom
                    sx={{
                      fontFamily: "TiltWarp",
                      color: "#0ddada",
                      opacity: "70%",
                    }}>
                    React Tetris
                  </Typography>
                  <Avatar
                    alt='Tetris'
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png"
                    }
                    sx={{
                      width: 150,
                      height: 150,
                      marginBottom: "1rem",
                    }}
                  />
                </Button>
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{
                    fontFamily: "Dosis",
                    color: "whitesmoke",
                    opacity: "70%",
                  }}>
                  A working Tetris game built in the browser with React, custom
                  hooks and Styled-Components.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "transparent",
                padding: "1rem",
                marginBottom: "2rem",
              }}>
              <CardContent>
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://github.com/Matt-Chisholm/Track-App",
                      "_blank"
                    )
                  }>
                  <Typography
                    variant='h5'
                    gutterBottom
                    sx={{
                      fontFamily: "TiltWarp",
                      color: "#0ddada",
                      opacity: "70%",
                    }}>
                    Tracks
                  </Typography>

                  <Avatar
                    alt='Tracks'
                    src={
                      "https://globalnews.ca/wp-content/uploads/2016/06/160608_barber-greene_nu.jpg?quality=85&strip=all"
                    }
                    sx={{
                      width: 150,
                      height: 150,
                      marginBottom: "1rem",
                    }}
                  />
                </Button>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontFamily: "Dosis",
                    color: "whitesmoke",
                    opacity: "90%",
                  }}>
                  A mobile app for users to track their paths when on hikes,
                  bikerides, roadtrips etc. This app was built with React
                  Native, Expo, MongoDB and the Google Maps API.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "transparent",
                width: "50%",
                padding: "0",
                marginBottom: "2rem",
              }}>
              <CardContent>
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://github.com/Matt-Chisholm/Paw-Five",
                      "_blank"
                    )
                  }>
                  <Typography
                    variant='h5'
                    gutterBottom
                    sx={{
                      fontFamily: "TiltWarp",
                      color: "#0ddada",
                      opacity: "70%",
                    }}>
                    Paw-Five
                  </Typography>

                  <Avatar
                    alt='Tetris'
                    src={
                      "https://github.com/Matt-Chisholm/Paw-Five/raw/master/docs/readme.md/home.gif?raw=true"
                    }
                    sx={{
                      width: 150,
                      height: 150,
                      marginBottom: "1rem",
                    }}
                  />
                </Button>
                <Typography
                  variant='h6'
                  gutterBottom
                  sx={{
                    fontFamily: "Dosis",
                    color: "whitesmoke",
                    opacity: "90%",
                  }}>
                  PAWFIVE is a specialized training app for dogs with multiple
                  features, including voice recognition. The app is built with
                  React, Express, Bootstrap, Axios and a voice recognition API
                  called Wit.ai.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
