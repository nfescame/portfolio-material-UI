import React, { useContext } from "react";
import { makeStyles, Box, Toolbar, Typography, Grid } from "@material-ui/core";

import CardComponent from "./card";

import { AuthContext } from "../../context/index";

const useStyles = makeStyles((theme) => ({
  projects: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
  title: {
    fontWeight: "900",
    textAlign: "center",
  },
}));

export default function ProjectsComponents() {
  const { projects } = useContext(AuthContext);

  const classes = useStyles();
  return (
    <Box className={classes.projects}>
      <Toolbar />
      <Typography className={classes.title} variant='h4' color='textPrimary'>
        Projects
      </Typography>

      <Grid container>
        {projects.cards.map((item, index) => {
          return (
            <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
              <CardComponent item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
