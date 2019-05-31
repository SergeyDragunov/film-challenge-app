import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "#2B2C3B"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nav: {
    flexGrow: 1,
    height: "96px"
  },
  link: {
    color: "#ffffff",
    padding: "0px 20px"
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
  }, 
];

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.nav}>
          {
            navItems.map(item =>
              <Link className={classes.link} component={RouterLink} to={item.href} key={item.title}>
                {item.title}
              </Link>
            )
          }
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;