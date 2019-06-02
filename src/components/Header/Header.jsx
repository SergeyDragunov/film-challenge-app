import React from "react";
import { NavLink } from "react-router-dom";
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
    "&:hover": {
      backgroundColor: "#2E74C4"
    }
  },
  avatar: {
    height: "59px",
    width: '59px',
    marginLeft: "70px"
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

const MyLink = props => (
  <NavLink
    exact
    to={props.to}
    className={props.className}
    activeClassName="selected"
  >
    {props.children}
  </NavLink>
);

const AuthControls = () => {
  const classes = useStyles();

  return (
    <div>
      <Button color="inherit" className={classes.loginButton}>
        Login
      </Button>
      <Button variant="contained" className={classes.signUpButton}>
        Sign up
      </Button>
    </div>
  )
}

const UserHeader = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Button
        variant="contained"
        color="primary"
        className={classes.addMovieButton}
      >
        <AddIcon />
        Add movie
      </Button>
      <Avatar
        alt="Remy Sharp"
        src={profileImg}
        className={classes.avatar}
      />
    </Grid>
  )
}

const Header = () => {
  const classes = useStyles();

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
              component={MyLink}
              to={item.href}
              key={item.title}
              underline="none"
            >
              {item.title}
            </Link>
          ))}
        </Grid>
        <div className={classes.headerSide}>
          {false ? <UserHeader/> : <AuthControls />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
