import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
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
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}>
          <Button
            color='inherit'
            className='nav-button'
            onClick={() => setSelectedSkill("front")}
            sx={{
              marginRight: "8rem",
              fontFamily: "Dosis",
              ...(selectedSkill === "front" && selectedStyle),
            }}>
            <Typography
              sx={{
                fontFamily: "Dosis",
                color: "#0ddada",
                opacity: "90%",
              }}>
              Front-End
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}>
          <Button
            color='inherit'
            className='nav-button'
            onClick={() => setSelectedSkill("back")}
            sx={{
              marginRight: "8rem",
              marginTop: "1rem",
              fontFamily: "Dosis",
              ...(selectedSkill === "back" && selectedStyle),
            }}>
            <Typography
              sx={{
                fontFamily: "Dosis",
                color: "#0ddada",
                opacity: "90%",
              }}>
              Back-End
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}>
          <Button
            color='inherit'
            className='nav-button'
            onClick={() => setSelectedSkill("data")}
            sx={{
              marginRight: "8rem",
              marginTop: "1rem",
              fontFamily: "Dosis",
              ...(selectedSkill === "data" && selectedStyle),
            }}>
            <Typography
              sx={{
                fontFamily: "Dosis",
                color: "#0ddada",
                opacity: "90%",
              }}>
              Database
            </Typography>
          </Button>
        </Box>
      </Container>
    </Grow>
  );
}
