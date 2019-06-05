import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// Material UI

import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";

import profileImg from '../../assets/images/profile.jpg';
import Logo from '../Logo/Logo';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.secondary.main
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  nav: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    height: "96px"
  },
  link: {
    height: "100%",
    display: "inline-flex",
    position: "relative",
    alignItems: "center",
    padding: "0px 20px",
    color: "#B5B5B5",
    fontWeight: "400",
    fontSize: "20px",
    transition: theme.transitions.create("color"),
    "&:hover": {
      color: "#fff"
    },
    "&::after": {
      content: "''",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      width: "0",
      backgroundColor: "#2E74C4",
      transition: theme.transitions.create("width")
    },
    "&.selected": {
      color: "#ffffff",
      "&::after": {
        width: "100%"
      }
    }
  },
  headerSide: {
    padding: "10px 35px",
    borderLeft: "1px solid #393A48"
  },
  loginButton: {
    height: "50px",
    width: "100px",
    textTransform: "none",
    borderRadius: "25px",
    fontSize: "20px",
    fontWeight: "400"
  },
  signUpButton: {
    height: "50px",
    width: "141px",
    marginLeft: "45px",
    borderRadius: "25px",
    color: "#2E74C4",
    textTransform: "none",
    fontSize: "20px",
    fontWeight: "400",
  },
  addMovieButton: {
    height: "50px",
    width: "134px",
    borderRadius: "2px",
    backgroundColor: "#2E74C4",
    color: "#ffffff",
    textTransform: "none",
    fontWeight: "400",
    transition: theme.transitions.create("backgroundColor"),
    "&:hover": {
      backgroundColor: "#245ea0"
    }
  },
  avatarLink: {
    marginLeft: "70px"
  },
  avatar: {
    height: "59px",
    width: '59px',
  }
}));

const navItems = [
  {
    title: "Top rated",
    href: "/"
  },
  {
    title: "Movies",
    href: "/movies"
  },
  {
    title: "Discover",
    href: "/discover"
  }
];

const AuthControls = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Link
          color="inherit"
          className={classes.loginButton}
          component={RouterLink}
          to={{
            pathname: `/login`,
            state: { modal: true }
          }}
        >
          Login
        </Link>
      </Grid>
      <Button variant="contained" className={classes.signUpButton}>
        Sign up
      </Button>
    </Grid>
  )
}

const UserHeader = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        className={classes.addMovieButton}
        to={{
          pathname: `/add-movie`,
          state: { modal: true }
        }}
      >
        <AddIcon />
        Add movie
      </Button>
      <RouterLink to='/profile' className={classes.avatarLink}>
        <Avatar
          alt="Remy Sharp"
          src={profileImg}
          className={classes.avatar}
        />
      </RouterLink>
    </Grid>
  )
}

const Header = ({ user }) => {
  const classes = useStyles();
  const { loggedIn } = user.settings;

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" component={NavLink} underline="none">
          <Logo />
        </Link>
        <Grid className={classes.nav}>
          {navItems.map(item => (
            <Link
              className={classes.link}
              component={NavLink}
              to={item.href}
              key={item.title}
              underline="none"
            >
              {item.title}
            </Link>
          ))}
        </Grid>
        <div className={classes.headerSide}>
          {loggedIn ? <UserHeader/> : <AuthControls />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Header);
