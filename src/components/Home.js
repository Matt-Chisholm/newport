import * as React from "react";
import { Container, Typography, Card, Box, CardContent } from "@mui/material";

export default function HomePage() {
  const bull = (
    <Box component='span' sx={{ display: "inline-block", mx: "2px" }}>
      &bull;
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant='h4' gutterBottom>
          Matt Chisholm {bull} Web and Mobile Developer
        </Typography>
        <Typography variant='body1' gutterBottom>
          Hi, I'm Matt! I'm a developer based in Victoria, BC, and I work with
          React, React Native, JavaScript, and TypeScript to build web and
          mobile apps.
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Container maxWidth='md'>
      <Card
        sx={{ p: 2, m: 2, backgroundColor: "black", color: "whitesmoke" }}
        elevation={3}>
        {card}
      </Card>
    </Container>
  );
}
