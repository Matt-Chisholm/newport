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
  const [selectedSkill, setSelectedSkill] = useState("");

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
        <Grid container justifyContent='center' spacing={2}>
          <Grid item xs={12} md={4}>
            <Button
              color='inherit'
              className='nav-button'
              onClick={() => setSelectedSkill("front")}
              sx={{
                marginTop: "1rem",
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
                marginTop: "1rem",
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
                marginTop: "1rem",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "2rem",
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
                HTML
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/html-5--v1.png'
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
                CSS
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/css3.png'
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
                Javascript
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/javascript--v1.png'
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
                Typescript
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/typescript.png'
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
                React
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/officel/480/null/react.png'
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
                Material UI
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/material-ui.png'
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
                React Native
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/react-native.png'
              />
            </Box>
          </Box>
        )}
        {selectedSkill === "back" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "2rem",
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
                  textAlign: "center",
                }}>
                Python <br /> (in development)
              </Typography>
              <Avatar
                sx={{
                  width: "3rem",
                  height: "3rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
                src='https://img.icons8.com/color/48/000000/python--v1.png'
              />
            </Box>
          </Box>
        )}
        {selectedSkill === "data" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "2rem",
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
        )}
      </Container>
    </Grow>
  );
}
