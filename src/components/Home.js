import * as React from "react";
import {
  Container,
  Typography,
  Card,
  Box,
  CardContent,
  Avatar,
} from "@mui/material";

export default function HomePage() {
  const card = (
    <React.Fragment>
      <CardContent>
        <Container
          sx={{
            backgroundColor: "#0ddada",
            width: "14%",
            padding: "0",
          }}>
          <Typography
            variant='h5'
            gutterBottom
            sx={{
              fontFamily: "Dosis",
              color: "black",
              opacity: "90%",
            }}>
            Front End Developer
          </Typography>
        </Container>
        <Container
          maxWidth='md'
          sx={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Avatar
            alt='Matt Chisholm'
            src={"https://avatars.githubusercontent.com/u/88512443?v=4"}
            sx={{ width: 150, height: 150, marginRight: "6rem" }}
          />
          <Avatar
            alt='JS'
            src={"https://img.icons8.com/color/48/null/javascript--v1.png"}
            sx={{
              width: 75,
              height: 75,
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
          <Avatar
            alt='JS'
            src={"https://img.icons8.com/plasticine/100/null/react.png"}
            sx={{
              width: 75,
              height: 75,
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
          <Avatar
            alt='JS'
            src={"https://img.icons8.com/fluency/48/null/typescript--v1.png"}
            sx={{
              width: 75,
              height: 75,
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
          <Avatar
            alt='JS'
            src={"https://img.icons8.com/color/48/null/nodejs.png"}
            sx={{
              width: 75,
              height: 75,
              marginRight: "1rem",
              marginBottom: "1rem",
            }}
          />
        </Container>
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
