import React from 'react';
import PropTypes from 'prop-types';

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles(theme => ({
  list: {
    width: 300,
    color: "#fff",
    marginBottom: 200
  },
  icon: {
		color: "#fff"
  },
  paper: {
  	display: "flex",
  	justifyContent: "center",
  	backgroundColor: theme.palette.secondary.main,
  },
  clearButton: {
    position: "absolute",
    top: 31,
    right: 26,
    color: "#fff"
  },
  link: {
  	color: "inherit",
  	textDecoration: "none"
  }
}));

const navList = [
	{
		title: "Profile",
		href: "",
		icon: <PersonIcon />
	},
	{
		title: "My Movies",
		href: "",
		icon: <FavoriteIcon />
	},
	{
		title: "My Movies",
		href: "",
		icon: <SettingsIcon />
	},
]

const Link = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

const ListItemLink = (props) => {
  const { primary, to, icon } = props;
  const classes = useStyles();

  return (
    <li>
      <ListItem button component={Link} to={to}>
	      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Nav = () => {
	const classes = useStyles();
	return (
	  <div
	    className={classes.list}
	    role="navigation"
	  >
	    <List>
	      {navList.map((item, index) => (
	        <ListItemLink to={item.href} primary={item.title} icon={item.icon} key={index} />
	      ))}
	    </List>
	  </div>
	)
};

const DrawerNav = () => {
	const classes = useStyles();

	return (
		<Drawer open={true} classes={{paper: classes.paper}}>
			<IconButton className={classes.clearButton} aria-label="Close Drawer">
        <ClearIcon />
      </IconButton>
			<Nav />
	  </Drawer>
	)
}

export default DrawerNav;