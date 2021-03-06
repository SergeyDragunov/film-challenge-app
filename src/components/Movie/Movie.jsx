import React from "react";
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MoreMenu from "../MoreMenu/MoreMenu";

const useStyles = makeStyles(theme => ({
  card: {
    height: 223,
    width: 386,
    overflow: "visible",
    position: "relative",
    marginTop: "72px",
    marginBottom: "40px",
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
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "0 2px 15px 0 rgba(0,0,0,0.5)"
  },
  cardContent: {
    position: "relative",
    paddingTop: 26,
    paddingRight: 23
  },
  moreButton: {
    position: "absolute",
    top: 2,
    right: 20,
    padding: 3
  },
  title: {
    fontSize: 24,
    marginBottom: 8
  },
  rating: {
    position: "relative",
    marginTop: 5,
    color: "#64D899",
    fontSize: 12,
    "&:after": {
      position: "absolute",
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
    lineHeight: 1.2
  }
}));

const Movie = ({ movie, menu }) => {
  const classes = useStyles();
  const { id, title, poster, overview, releaseDate, rating } = movie;

  return (
    <Card className={classes.card} data-test="movie">
      <Grid container direction="row" wrap="nowrap">
        <Grid item sm={6}>
          {
            poster ?
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt={title + " poster"}
              image={poster}
              title={title + " poster"}
            /> :
            <div className={classes.cardMedia}></div>
          }
        </Grid>
        <Grid item sm={6}>
          <CardContent className={classes.cardContent}>
            {(id && menu) && <MoreMenu classNameButton={classes.moreButton} movieId={id} />}
            <Grid
              container
              alignItems="flex-start"
              justify="space-between"
              wrap="nowrap"
            >
              {
                title &&
                <Typography className={classes.title} variant="h5" component="h2">
                  <LinesEllipsis
                    title={title}
                    text={title}
                    maxLine='2'
                    basedOn='letters'
                  />
                </Typography>
              }
              {
                rating && 
                <Typography
                  className={classes.rating}
                  variant="body2"
                  component="span"
                >
                  {rating}
                </Typography>
              }
            </Grid>
            <Typography className={classes.date} variant="body2" component="div">
              {releaseDate}
            </Typography>
            {
              overview &&
              <Typography className={classes.text} variant="body2" component="div">
                <LinesEllipsis
                  title={overview}
                  text={overview}
                  maxLine='4'
                  basedOn='letters'
                />
              </Typography>
            }
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    rating: PropTypes.string
  }).isRequired,
  menu: PropTypes.bool
}

export default Movie;
