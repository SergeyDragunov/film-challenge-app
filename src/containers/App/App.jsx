import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// Material UI

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import Notification from '../../components/Notification/Notification';
import Movies from '../Movies/Movies';

import LoginModal from '../../components/LoginModal/LoginModal';
import AddMovieModal from '../../components/AddMovieModal/AddMovieModal';

const styles = theme => ({
  app: {
  	minHeight: "100vh",
  	backgroundColor: theme.palette.secondary.light
  }
});

class App extends Component {
	previousLocation = this.props.location;

	componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
		let { location, classes } = this.props;

	  let isModal = !!(
	    location.state &&
	    location.state.modal &&
	    this.previousLocation !== location
	  );
	  
		return (	
			<div className={classes.app}>
				<Header />
				<Drawer />
				<Container>
					<Switch location={isModal ? this.previousLocation : location}>
						<Route path="/" exact component={Movies} />
					</Switch>
					{isModal ? <Route path="/login" component={LoginModal} /> : null}
					{isModal ? <Route path="/add-movie" component={AddMovieModal} /> : null}
				</Container>
				<Notification />
			</div>
		)
  }
}

export default withRouter(withStyles(styles)(App));