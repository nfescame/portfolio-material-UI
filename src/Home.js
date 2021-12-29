import React from "react";
import { makeStyles } from "@material-ui/core";

import DrawerComponent from "./components/drawer";
import AppBarComponent from "./components/appBar";
import ProjectsComponents from "./components/projects";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* appBar */}
      <AppBarComponent />
      {/* drawer */}
      <DrawerComponent />
      {/* projects */}
      <ProjectsComponents />
    </div>
  );
}
