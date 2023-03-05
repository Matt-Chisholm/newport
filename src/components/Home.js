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
        <Typography variant='h4' gutterBottom sx={{ fontFamily: "Dosis" }}>
          Matt Chisholm {bull} Web and Mobile Developer
        </Typography>
        <Avatar
          alt='Matt Chisholm'
          src={"https://avatars.githubusercontent.com/u/88512443?v=4"}
          sx={{ width: 150, height: 150 }}
        />
      </CardContent>
    </React.Fragment>
  );
  return (
    <Container maxWidth='md' sx={{ backgroundColor: "rgb(18, 17, 17)" }}>
      <Card
        sx={{
          p: 2,
          m: 2,
          color: "#689da7",
          borderRadius: "3em",
          backgroundColor: "rgb(18, 17, 17)",
          width: "80%",
          height: "80%",
        }}
        elevation={3}
        className='top-card'>
        {card}
      </Card>
    </Container>
  );
}
