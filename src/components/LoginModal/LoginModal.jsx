import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Material UI

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Modal from "../Modal/Modal";
import Logo from "../Logo/Logo";
import Input from "../Input/Input";
import ProgressButton from '../ProgressButton/ProgressButton';

import { login } from "../../actions/user";

const useStyles = makeStyles(theme => ({
	loginModal: {
		fontFamily: "'Hind', sans-serif"
	},
	logoWrapper: {
		marginBottom: "97px"
	},
	button: {
		height: 60,
		borderRadius: 0,
		textTransform: "none",
		fontFamily: "inherit",
		fontSize: "20px"
	},
	loginInfo: {
		padding: "32px 0px 0px",
		fontSize: "20px"
	},
	loginText: {
		color: "#AEAEAE",
		fontSize: "inherit"
	},
	signUplink: {
		marginLeft: 10,
		fontSize: 'inherit'
	},
	recoverLink: {
		color: "#777",
		fontSize: 'inherit'
	}
}));

// const fakeUrl = "javascript:;";

const LoginModal = ({ login, user, history, location }) => {
	const classes = useStyles();
	const { loggingIn, loggedIn, error } = user.settings;
	const [loginValue, setValue] = React.useState({ username: "", password: "" });
	const { from: fromPath } = location.state || { from: { pathname: "/" } };

	if (loggedIn && location.state && !location.state.from) {
    setTimeout(() => history.goBack(), 1000)
  } else if (fromPath && loggedIn) {
  	return <Redirect to={fromPath} />
  }

	const handleChange = e => {
		setValue({
			...loginValue,
			[e.target.name]: e.target.value 
		})
	};

	const handleSubmit = () => {
		if (loginValue.username && loginValue.password) {
			login(loginValue);
		}
	}

	return (
		<Modal className={classes.loginModal}>
			<form action="">
				<Grid className={classes.logoWrapper} container justify="center">
					<Grid item>
						<Logo />
					</Grid>
				</Grid>
				<Input
					id="username"
					label="Username"
					type="text"
					value={loginValue.username}
					onChange={handleChange}
				/>
				<Input
					id="password"
					label="Password"
					type="password"
					value={loginValue.password}
					onChange={handleChange}
				/>
				<ProgressButton
					className={classes.button}
					loading={loggingIn}
					success={loggedIn}
					error={!!error}
					onClick={handleSubmit}
				>
					Login
				</ProgressButton>
				<Grid container justify="space-between" className={classes.loginInfo}>
					<Typography className={classes.loginText}>
						Don't have account?
						<Typography component="span" className={classes.signUplink} color="primary">
							Sign up
						</Typography>
					</Typography>
					<Typography className={classes.recoverLink}>
						Recover Password
					</Typography>
				</Grid>
			</form>
		</Modal>
	);
};

LoginModal.propTypes = {
	user: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
	user: user
});

const mapDispatchToProps = {
	login
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginModal);
