import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LogoImg from '../../assets/icons/logo.png';

const useStyles = makeStyles(theme => ({
	logoName: {
		marginLeft: "22px",
		fontSize: "16px",
		color: "#ffffff"
	}
}));

export default () => {
	const classes = useStyles();

	return (
		<Grid container alignItems="center">
			<div>
				<img src={LogoImg} alt="MovieHunt logo" />
			</div>
			<Typography component="p" className={classes.logoName}>
				MovieHunt
			</Typography>
		</Grid>
	)
}