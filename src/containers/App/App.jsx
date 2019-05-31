import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import Movies from '../Movies/Movies';

const useStyles = makeStyles({
  app: {
  	minHeight: "100vh",
  	backgroundColor: "#3E3F52"
  }
});

export default () => {
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Header />
			<Drawer />
			<Container>
				<Route path="/" exact component={Movies} />
			</Container>
		</div>
	)
}