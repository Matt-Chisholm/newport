import * as React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../css/NavBar.css";

export default function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const card = (
    <React.Fragment>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              backgroundColor: "#0ddada",
              width: "40%",
              padding: "0.5rem",
              marginBottom: "1rem",
              [theme.breakpoints.up("md")]: {
                width: "14%",
                padding: "0",
                marginBottom: "2rem",
              },
            }}>
            <Typography
              variant={isSmallScreen ? "h6" : "h5"}
              gutterBottom
              sx={{
                fontFamily: "Dosis",
                color: "black",
                opacity: "90%",
                fontSize: isSmallScreen ? "1rem" : "1.5rem",
              }}>
              Web & Mobile Developer
            </Typography>
          </Box>
        </Box>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          alignItems='center'
          spacing={2}
          sx={{
            backgroundColor: "transparent",
            justifyContent: isSmallScreen ? "center" : "space-around",
            flexWrap: "wrap",
            "& .links": {
              cursor: "pointer",
            },
          }}>
          <Avatar
            sx={{
              width: isSmallScreen ? 60 : 150,
              height: isSmallScreen ? 60 : 150,
              marginRight: isSmallScreen ? 0 : "6rem",
              marginBottom: isSmallScreen ? "1rem" : 0,
            }}
            alt='Matt Chisholm'
            src={"https://avatars.githubusercontent.com/u/88512443?v=4"}
          />
          <Avatar
            sx={{
              width: 75,
              height: 75,
              marginBottom: "1rem",
              display: isSmallScreen ? "none" : "block",
            }}
            alt='JS'
            src={"https://img.icons8.com/color/48/null/javascript--v1.png"}
          />
          <Avatar
            sx={{
              width: 75,
              height: 75,
              marginBottom: "1rem",
              display: isSmallScreen ? "none" : "block",
            }}
            alt='JS'
            src={"https://img.icons8.com/plasticine/100/null/react.png"}
          />
          <Avatar
            sx={{
              width: 75,
              height: 75,
              marginBottom: "1rem",
              display: isSmallScreen ? "none" : "block",
            }}
            alt='JS'
            src={"https://img.icons8.com/fluency/48/null/typescript--v1.png"}
          />
          <Avatar
            sx={{
              width: 75,
              height: 75,
              marginBottom: "1rem",
              display: isSmallScreen ? "none" : "block",
            }}
            alt='JS'
            src={"https://img.icons8.com/color/48/null/nodejs.png"}
          />
        </Stack>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Container maxWidth='60%' sx={{ backgroundColor: "#232424" }}>
      <Card
        sx={{
          p: 2,
          m: 2,
          color: "#4b6d74",
          backgroundColor: "#232424",
        }}
        elevation={3}
        className='top-card'>
        {card}
      </Card>
    </Container>
  );
}
