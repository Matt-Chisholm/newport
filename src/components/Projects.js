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
    name: "GPT-3",
    description:
      "A React app built for front-end learning purposes, using bare React and CSS.",
    image:
      "https://cosmic-sopapillas-ea591f.netlify.app/static/media/ai.aa60586ba1ba53762d94.png",
    url: "https://cosmic-sopapillas-ea591f.netlify.app/",
  },
  {
    name: "React Tetris",
    description:
      "A working Tetris game built in the browser with React, custom hooks and Styled-Components.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Typical_Tetris_Game.svg/1200px-Typical_Tetris_Game.svg.png",
    url: "https://github.com/Matt-Chisholm/react-tetris",
  },
  {
    name: "ReelSeek",
    description:
      "A movie searching site allowing users to search for their favorite movies, and find where to watch them. Using React and the MovieDB API.",
    image:
      "https://i.insider.com/6408ae7afe06040019bf586d?width=1000&format=jpeg&auto=webp",
    url: "https://rainbow-lolly-580c13.netlify.app/",
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
                color: "#0ddada",
                opacity: "70%",
              }}>
              A Few Recent Projects
            </Typography>
          </CardContent>
        </Card>
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
                      backgroundColor: "#282a2a",
                      padding: "1rem",
                      marginBottom: "2rem",
                      p: 2,
                      m: 2,
                      color: "#4b6d74",
                      backgroundColor: "#282a2a",
                      borderRadius: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Button
                        onClick={() => window.open(project.url, "_blank")}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
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
                          textAlign: "center",
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
