import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

// Material UI

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './containers/App/App'

import store from './store';

const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

const theme = createMuiTheme({
  palette: {
    primary: { 
    	main: "#2E74C4",
      contrastText: '#fff'
    },
    secondary: {
    	light: "#3E3F52",
    	main: "#2B2C3B"
    }
  },
});

ReactDOM.render(
  <Provider store={store}>
  	<Router history={history}>
  		<CssBaseline />
  		<ThemeProvider theme={theme}>
  			<App />
  		</ThemeProvider>
  	</Router>
  </Provider>
, document.getElementById("root"));