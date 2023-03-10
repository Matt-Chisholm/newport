import React from "react";
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
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#0ddada",
              padding: "0.3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                fontFamily: "Dosis",
                color: "black",
                opacity: "90%",
                fontSize: "1.5rem",
              }}>
              Frontend
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#0ddada",
              padding: "0.3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                fontFamily: "Dosis",
                color: "black",
                opacity: "90%",
                fontSize: "1.5rem",
              }}>
              Backend
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#0ddada",
              padding: "0.3rem",
              marginBottom: "1rem",
              display: "inline-block",
            }}>
            <Typography
              variant='h5'
              gutterBottom
              sx={{
                fontFamily: "Dosis",
                color: "black",
                opacity: "90%",
                fontSize: "1.5rem",
              }}>
              Database
            </Typography>
          </Box>
        </Box>
      </Container>
    </Grow>
  );
}
