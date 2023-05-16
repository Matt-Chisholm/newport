import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
  Button,
  Avatar,
} from "@mui/material";
import Grow from "@mui/material/Grow";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState("front");

  const selectedStyle = {
    color: "#0acfcf",
    borderBottom: "2px solid #0acfcf",
    borderTop: "2px solid #0acfcf",
    borderRadius: "0px",
  };

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
              Skills
            </Typography>
          </CardContent>
        </Card>
        <Grid
          container
          justifyContent='center'
          spacing={2}
          sx={{ marginBottom: "2rem" }}>
          <Grid item xs={12} md={4}>
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedSkill("front")}
              sx={{
                marginTop: "0rem",
                fontFamily: "Dosis",
                ...(selectedSkill === "front" && selectedStyle),
              }}
              fullWidth>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  color: "#0ddada",
                  opacity: "90%",
                }}>
                Front-End
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedSkill("back")}
              sx={{
                marginTop: "0rem",
                fontFamily: "Dosis",
                ...(selectedSkill === "back" && selectedStyle),
              }}
              fullWidth>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  color: "#0ddada",
                  opacity: "90%",
                }}>
                Back-End
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedSkill("data")}
              sx={{
                marginTop: "0rem",
                fontFamily: "Dosis",
                ...(selectedSkill === "data" && selectedStyle),
              }}
              fullWidth>
              <Typography
                sx={{
                  fontFamily: "Dosis",
                  color: "#0ddada",
                  opacity: "90%",
                }}>
                Database
              </Typography>
            </Button>
          </Grid>
        </Grid>
        {selectedSkill === "front" && (
          <Grow in={true} timeout={1200} style={{ transformOrigin: "0 0 0" }}>
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    HTML
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/color/48/000000/html-5--v1.png'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    Javascript
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/color/48/000000/javascript--v1.png'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    React
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/officel/480/null/react.png'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    React Native
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/color/48/000000/react-native.png'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    Tailwind
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=png'
                  />
                </Box>
              </Grid>

              <Grid item xs={4} sm={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
                  <Typography
                    sx={{
                      fontFamily: "Dosis",
                      color: "#0ddada",
                      opacity: "90%",
                    }}>
                    Material UI
                  </Typography>
                  <Avatar
                    sx={{ width: "3rem", height: "3rem", marginTop: "1rem" }}
                    src='https://img.icons8.com/color/48/000000/material-ui.png'
                  />
                </Box>
              </Grid>
            </Grid>
          </Grow>
        )}

        {selectedSkill === "back" && (
          <Grow in={true} timeout={1200} style={{ transformOrigin: "0 0 0" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "1rem",
                justifyContent: "flex-end",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  Node
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/color/48/000000/nodejs.png'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  Express
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/office/480/null/express-js.png'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  Ruby
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/color/48/000000/ruby-programming-language.png'
                />
              </Box>
            </Box>
          </Grow>
        )}
        {selectedSkill === "data" && (
          <Grow in={true} timeout={1200} style={{ transformOrigin: "0 0 0" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "1rem",
                justifyContent: "flex-end",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  MongoDB
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/color/48/000000/mongodb.png'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  PostgreSQL
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/color/48/000000/postgreesql.png'
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontFamily: "Dosis",
                    color: "#0ddada",
                    opacity: "90%",
                    marginRight: "1rem",
                  }}>
                  Firestore
                </Typography>
                <Avatar
                  sx={{
                    width: "3rem",
                    height: "3rem",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                  src='https://img.icons8.com/color/48/000000/firebase.png'
                />
              </Box>
            </Box>
          </Grow>
        )}
      </Container>
    </Grow>
  );
}
