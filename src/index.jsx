import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

// Material UI

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './containers/App/App'

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);

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
  	<Router>
  		<CssBaseline />
  		<ThemeProvider theme={theme}>
  			<App />
  		</ThemeProvider>
  	</Router>
  </Provider>
, document.getElementById("root"));