import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './containers/App/App'

const theme = createMuiTheme({
  palette: {
    primary: { 
    	light: "#3E3F52",
    	main: "#2B2C3B"
    }
  },
});

ReactDOM.render(
	<Router>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>
, document.getElementById("root"));