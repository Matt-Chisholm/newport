import * as React from "react";
import { Container, Typography } from "@mui/material";

export default function HomePage() {

  console.log('hello');

  const a = 'x';
  return (
    <Container maxWidth='md'>
      <Typography variant='h4' gutterBottom>
        Matt Chisholm&nbsp;&bull;&nbsp;Web and Mobile Developer
      </Typography>
      <Typography variant='body1' gutterBottom>
        Hi, I'm Matt! I'm a developer based in Victoria, BC, and I work with
        React, React Native, JavaScript, and TypeScript to build web and mobile
        apps.
      </Typography>
    </Container>
  );
}
