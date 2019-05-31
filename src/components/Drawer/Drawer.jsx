import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles({
  list: {
    width: 250,
  }
});

const navList = [
	{
		title: "Profile",
		href: "",
		icon: <PersonIcon />
	},
	{
		title: "My Movies",
		href: "",
		icon: <PersonIcon />
	},
	{
		title: "My Movies",
		href: "",
		icon: <PersonIcon />
	},
]


const Nav = () => {
	const classes = useStyles();

	return (
	  <div
	    className={classes.list}
	    role="presentation"
	    // onClick={toggleDrawer(side, false)}
	    // onKeyDown={toggleDrawer(side, false)}
	  >
	    <List>
	      {navList.map((item, index) => (
	        <ListItem button key={item.title}>
	          <ListItemIcon>{item.icon}</ListItemIcon>
	          <ListItemText primary={item.title} />
	        </ListItem>
	      ))}
	    </List>
	  </div>
	)
};

const DrawerNav = () => {
	return (
		<Drawer open={false}>
			<Nav />
	  </Drawer>
	)
}

export default DrawerNav;