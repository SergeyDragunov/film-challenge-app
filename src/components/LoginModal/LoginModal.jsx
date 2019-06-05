import React from 'react';

// Material UI

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import Modal from '../Modal/Modal';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';

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
		textTransform: 'none',
		fontFamily: 'inherit',
		fontSize: "20px"
	},
	loginInfo: {
		padding: "32px 0px 0px",
		fontSize: "20px"
	},
	loginText: {
		color: "#AEAEAE",
		fontSize: 'inherit'
	},
	signUplink: {
		marginLeft: 10
	},
	recoverLink: {
		color: "#777"
	}
}));

const fakeUrl = 'javascript:;';

export default () => {
	const classes = useStyles();

	return (
		<Modal className={classes.loginModal}>
			<Grid className={classes.logoWrapper} container justify="center">
				<Grid item>
					<Logo />
				</Grid>
			</Grid>
			<Input id="username" label="Username" type="text" />
			<Input id="password" label="Password" type="password" />
			<Button className={classes.button} variant="contained" color="primary" fullWidth>Login</Button>
			<Grid container justify="space-between" className={classes.loginInfo}>
				<Typography className={classes.loginText}>
					Don't have account? 
					<Link href={fakeUrl} className={classes.signUplink}>Sign up</Link>
				</Typography>
				<Link href={fakeUrl} className={classes.recoverLink}>Recover Password</Link>
			</Grid>
		</Modal>
	)
}