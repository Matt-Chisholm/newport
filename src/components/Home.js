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
  const bull = (
    <Box component='span' sx={{ display: "inline-block", mx: "2px" }}>
      &bull;
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant='h1'
          gutterBottom
          sx={{ fontFamily: "Rubik", color: "whitesmoke", opacity: "60%" }}>
          Matt Chisholm
        </Typography>
        <Avatar
          alt='Matt Chisholm'
          src={"https://avatars.githubusercontent.com/u/88512443?v=4"}
          sx={{ width: 150, height: 150 }}
        />
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            fontFamily: "Dosis",
            color: "whitesmoke",
            opacity: "60%",
            marginLeft: "50%",
          }}>
          Web Developer {bull} Software Engineer
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Container maxWidth='md' sx={{ backgroundColor: "rgb(18, 17, 17)" }}>
      <Card
        sx={{
          p: 2,
          m: 2,
          color: "#4b6d74",
          borderRadius: "3em",
          backgroundColor: "rgb(18, 17, 17)",
          width: "80%",
          height: "80%",
          marginRight: "30%",
        }}
        elevation={3}
        className='top-card'>
        {card}
      </Card>
    </Container>
  );
}
