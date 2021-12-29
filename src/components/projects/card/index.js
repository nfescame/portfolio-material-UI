import React from "react";

import { makeStyles } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import ModalComponent from "../../modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 8,
  },

  grow: {
    flexGrow: 1,
  },
  media: {
    height: 150,
  },
});

export default function CardComponent({ item }) {
  const classes = useStyles();
  const [openDetails, setOpenDetails] = React.useState(false);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.image} title='Image' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {item.title}
          </Typography>
          {openDetails ? (
            <ModalComponent
              subTitle={item.subTitle}
              description={item.description}
            />
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={item.pathRepo} target='_blank'>
          GitHub
        </Link>
        <Link href={item.path} target='_blank'>
          Deploy
        </Link>

        <div className={classes.grow} />

        <Button
          size='small'
          color='primary'
          onClick={() => setOpenDetails(openDetails ? false : true)}
        >
          info
        </Button>
      </CardActions>
    </Card>
  );
}
