import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
  Link,
  Divider,
  Collapse,
  Button,
} from "@material-ui/core";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import CodeIcon from "@material-ui/icons/Code";
import SchoolIcon from "@material-ui/icons/School";

import FormDialog from "./form/index";

import { AuthContext } from "../../context/index";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  divider: {
    marginBottom: 20,
    marginTop: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "none",
  },
  listItemText: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function DrawerComponent() {
  const { appBarOpen, competencias } = React.useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  return (
    <Box m={2} p={1}>
      {appBarOpen ? (
        <Drawer
          className={classes.drawer}
          variant='permanent'
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <Link
                href='https://profiles.ironhack.com/nilton-escame'
                target='_blank'
              >
                <ListItem button>
                  <ListItemIcon>
                    <SchoolIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ironhack"}
                  />
                </ListItem>
              </Link>
              <Divider className={classes.divider} />
              <ListItem button>
                <FormDialog />
              </ListItem>
              <Divider className={classes.divider} />

              <ListItem>
                <Button onClick={handleClick}>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText primary='Skills' />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Button>
              </ListItem>

              <Collapse in={open} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {competencias.cards.map((item) => {
                    return (
                      <Button sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                      </Button>
                    );
                  })}
                </List>
              </Collapse>
              <Divider className={classes.divider} />
            </List>
          </Box>
        </Drawer>
      ) : null}
    </Box>
  );
}
