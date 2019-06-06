import React from 'react';
import { connect } from 'react-redux';
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

import { openDrawer } from '../../actions/app';

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
		href: "/profile",
		icon: <PersonIcon />
	},
	{
		title: "My Movies",
		href: "/my-movies",
		icon: <FavoriteIcon />
	},
	{
		title: "My Movies",
		href: "/my-movies",
		icon: <SettingsIcon />
	},
]

const Link = React.forwardRef((props, ref) => <NavLink {...props} innerRef={ref} />);

const ListItemLink = props => {
  const { primary, to, icon } = props;
  const classes = useStyles();

  return (
    <li>
      <ListItem button component={Link} to={to} onClick={() => props.openDrawer(false)}>
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
  openDrawer: PropTypes.func.isRequired,
};

const Nav = ({ openDrawer }) => {
	const classes = useStyles();
	return (
	  <div
	    className={classes.list}
	    role="navigation"
	  >
	    <List>
	      {navList.map((item, index) => (
	        <ListItemLink to={item.href} primary={item.title} icon={item.icon} key={index} openDrawer={openDrawer} />
	      ))}
	    </List>
	  </div>
	)
};

Nav.propTypes = {
  openDrawer: PropTypes.func.isRequired,
};

const DrawerNav = ({ open, openDrawer }) => {
	const classes = useStyles();

	return (
		<Drawer open={open} classes={{paper: classes.paper}} onClose={() => openDrawer(false)}>
			<IconButton className={classes.clearButton} aria-label="Close Drawer" onClick={() => openDrawer(false)}>
        <ClearIcon />
      </IconButton>
			<Nav openDrawer={openDrawer} />
	  </Drawer>
	)
}

DrawerNav.propTypes = {
	open: PropTypes.bool.isRequired,
	openDrawer: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({
	open: app.drawer.open
})

const mapDispatchToProps = {
	openDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav);