import React from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { AuthContext } from "../../context/index";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    color: theme.palette.primary.main,
  },
  grow: {
    flexGrow: 1,
  },
  iconGit: {
    color: theme.palette.background.git,
    fontSize: 30,
    marginRight: 15,
  },
  iconLinkedin: {
    color: theme.palette.secondary.main,
    fontSize: 33,
    marginRight: 15,
  },
  title: {
    fontWeight: 900,
    color: theme.palette.primary.main,
  },
}));

export default function AppBarComponent() {
  const { darkMode, setDarkMode, appBarOpen, setAppBarOpen } =
    React.useContext(AuthContext);

  const classes = useStyles();
  return (
    <>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar className={classes.appBar_container}>
          <IconButton
            className={classes.menuButton}
            aria-label='Menu'
            onClick={() => {
              setAppBarOpen(appBarOpen ? false : true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' className={classes.title}>
            Portfolio
          </Typography>
          <div className={classes.grow} />
          <Link href='https://github.com/nfescame' target='_blank'>
            <GitHubIcon className={classes.iconGit} />
          </Link>
          <Link
            href='https://www.linkedin.com/in/nilton-escame/'
            target='_blank'
          >
            <LinkedInIcon className={classes.iconLinkedin} />
          </Link>
          <Switch
            value={darkMode}
            onChange={() => {
              setDarkMode(darkMode ? false : true);
            }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}
