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
            backgroundColor: "#0ddada",
            width: "40%",
            padding: "0.5rem",
            marginBottom: "3rem",
            marginLeft: "8rem",
            [theme.breakpoints.up("md")]: {
              width: "14%",
              padding: "0",
              marginLeft: "30rem",
              marginBottom: "0",
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
            Front End Developer
          </Typography>
        </Box>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          alignItems='center'
          spacing={2}
          sx={{
            backgroundColor: "transparent",
            justifyContent: isSmallScreen ? "center" : "space-between",
            flexWrap: "wrap",
            "& .links": {
              cursor: "pointer",
            },
          }}>
          <Avatar
            sx={{ width: 60, height: 60 }}
            alt='LinkedIn'
            className='links'
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/matt-chisholm10/",
                "_blank"
              )
            }
            src={
              "https://img.icons8.com/color/48/null/linkedin-circled--v1.png"
            }
          />
          <Avatar
            sx={{ width: 60, height: 60 }}
            alt='GitHub'
            className='links'
            onClick={() =>
              window.open("https://github.com/Matt-Chisholm", "_blank")
            }
            src={"https://img.icons8.com/ios-glyphs/60/null/github.png"}
          />
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
