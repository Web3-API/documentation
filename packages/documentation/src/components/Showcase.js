import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CardLink from "./CardLink";
import BackgroundPolywrap from "../../static/img/polywrapper-hero-blurred.png";
import useThemeContext from "@theme/hooks/useThemeContext";

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const showcaseCards = [
  {
    title: "Concepts",
    description: "Understand the concepts that make Polywrap so unique",
    cta: "Learn",
    link: "/concepts/what-is-polywrap",
  },
  {
    title: "Quick Start",
    description: "Get building right away with our quick start guides",
    cta: "Build",
    link: "/quick-start/integrate-wrappers/install-client",
  },
  {
    title: "Reference",
    description: "Look through reference documentation for all of Polywrap's software",
    cta: "Browse",
    link: "/reference/glossary",
  },
];

export default function Showcase() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isDarkTheme } = useThemeContext();

  return (
    <Box mt={12} marginBottom={6} position="relative" zIndex={0}>
      <Box
        sx={{
          position: "absolute",
          left: "-15vw",
          maxWidth: theme.breakpoints.values.xl,
          opacity: 0.15,
          overflow: "hidden",
          top: "-30vh",
          zIndex: -1,
          "& img": {
            width: "120vw",
          },
        }}
      >
        <img src={BackgroundPolywrap} />
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center">
          Welcome to Polywrap!
        </Typography>
        <Typography mt={4} variant="h5" align="center">
          Polywrap is a development platform that makes it easy to integrate
          web3 protocols into any application, written in any language.
        </Typography>
        <Grid container spacing={4} mt={4}>
          {showcaseCards.map((card) => {
            return (
              <Grid item xs={12} md={4} key={card.title}>
                <CardLink link={card.link} shine>
                  <Typography variant="h5" component="h3" fontWeight="800">
                    {card.title}
                  </Typography>
                  <Box mt={1} color={"var(--ifm-heading-color)"}>
                    <Typography variant="body1">{card.description}</Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography
                      variant="body1"
                      fontWeight="800"
                      className="card-link"
                    >
                      {card.cta} &#8250;
                    </Typography>
                  </Box>
                </CardLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
