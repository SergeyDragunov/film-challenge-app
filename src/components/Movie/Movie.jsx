import React from 'react';

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    height: 223,
    width: 386,
    overflow: 'visible',
    position: 'relative',
    marginTop: '72px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    boxShadow: "0 2px 20px 0 #292B46"
  },
  cardMedia: {
    position: "absolute",
    bottom: 35,
    left: 20,
    height: "260px",
    width: "173px",
    borderRadius: 2,
    boxShadow: "0 2px 15px 0 rgba(0,0,0,0.5)"
  },
  title: {
    fontSize: 24,
    marginBottom: 8
  },
  rating: {
    position: 'relative',
    marginTop: 5,
    color: "#64D899",
    fontSize: 12,
    "&:after": {
      position: 'absolute',
      bottom: -2,
      left: "calc(50% - 4.75px)",
      content: "''",
      height: 2,
      width: 9.5,
      borderRadius: 25,
      backgroundColor: "#64D899"
    }
  },
  date: {
    color: "#BBB",
    fontSize: 12,
    marginBottom: 16 
  },
  text: {
    fontSize: 14.4,
    color: "#BBB",
  }
}));

const Movie = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item sm={6}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item sm={6}>
          <CardContent>
            <Grid container alignItems="flex-start" justify="space-between" wrap="nowrap">
              <Typography className={classes.title} variant="h5" component="h2">
                Alita: Battle angel
              </Typography>
              <Typography className={classes.rating} variant="body2" component="span">
                64%
              </Typography>
            </Grid>
            <Typography className={classes.date} variant="body2" component="p">
              February 14, 2019
            </Typography>
            <Typography className={classes.text} variant="body2" component="p">
              When Alita awakens with no memory of who she is in a future world she does not recognize
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Movie;