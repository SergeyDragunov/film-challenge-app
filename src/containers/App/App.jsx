import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import Movies from '../Movies/Movies';

import LoginModal from '../../components/LoginModal/LoginModal.jsx';

const useStyles = makeStyles(theme => ({
  app: {
  	minHeight: "100vh",
  	backgroundColor: theme.palette.primary.light
  }
}));

export default () => {
	const classes = useStyles();

	return (	
		<div className={classes.app}>
			<Header />
			<Drawer />
			<Container>
				<Route path="/" exact component={Movies} />
			</Container>
			<LoginModal />
		</div>
	)
}