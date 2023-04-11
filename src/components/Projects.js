import React from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  Avatar,
  Button,
  Grid,
  Slider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grow from "@mui/material/Grow";

const projects = [
  {
    name: "React Tetris",
    description:
      "A working Tetris game built in the browser with React, custom hooks and Styled-Components.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
    url: "https://github.com/Matt-Chisholm/react-tetris",
  },
  {
    name: "Tracks",
    description:
      "A mobile app for users to track their paths when on hikes built with React Native and MongoDB.",
    image:
      "https://globalnews.ca/wp-content/uploads/2016/06/160608_barber-greene_nu.jpg?quality=85&strip=all",
    url: "https://github.com/Matt-Chisholm/Track-App",
  },
  {
    name: "Paw-Five",
    description:
      "A specialized training app for dogs built with React, Express, Bootstrap, Axios and a voice recognition API called Wit.ai.",
    image:
      "https://github.com/Matt-Chisholm/Paw-Five/raw/master/docs/readme.md/home.gif?raw=true",
    url: "https://github.com/Matt-Chisholm/Paw-Five",
  },
];

export default function Projects() {
  const [index, setIndex] = React.useState(0);

  const handleSliderChange = (event, newIndex) => {
    setIndex(newIndex);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Container>
          {isMobile ? (
            <Slider
              value={index}
              onChange={handleSliderChange}
              aria-label='project slider'
              sx={{ display: { xs: "block", md: "none" }, color: "#0ddada" }}
              max={projects.length - 1}
            />
          ) : (
            <div></div>
          )}
          {isMobile &&
            projects.map((project, i) => {
              if (i === index) {
                return (
                  <Grid item key={i} xs={12}>
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
                          onClick={() => window.open(project.url, "_blank")}>
                          <Typography
                            variant='h5'
                            gutterBottom
                            sx={{
                              fontFamily: "TiltWarp",
                              color: "#0ddada",
                              opacity: "70%",
                            }}>
                            {project.name}
                          </Typography>
                          <Avatar
                            alt={project.name}
                            src={project.image}
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
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              }
              return null;
            })}

          {!isMobile ? (
            <Grid container spacing={3}>
              {projects.map((project, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
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
                        onClick={() => window.open(project.url, "_blank")}>
                        <Typography
                          variant='h5'
                          gutterBottom
                          sx={{
                            fontFamily: "TiltWarp",
                            color: "#0ddada",
                            opacity: "70%",
                          }}>
                          {project.name}
                        </Typography>
                        <Avatar
                          alt={project.name}
                          src={project.image}
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
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </Container>
      </Container>
    </Grow>
  );
}
