import React from "react";

// Material UI

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import DatePicker from "../DatePicker/DatePicker";
import UploadButton from '../UploadButton/UploadButton';

const useStyles = makeStyles(theme => ({
	title: {
		marginBottom: 60,
		color: "#fff",
		textAlign: 'center'
	},
	button: {
		height: 60,
		borderRadius: 0,
		textTransform: "none",
		fontFamily: "inherit",
		fontSize: "20px",
		color: "#fff",
		fontWeight: 400
	}
}));

export default () => {
	const classes = useStyles();

	return (
		<Modal
			className={classes.addMovieTitle}
		>
			<Typography variant="h5" component="h2" className={classes.title}>
				New movie
			</Typography>
			<Input id="title" label="Movie Title" type="text" />
			<Input id="casts" label="Casts" type="select" />
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<DatePicker />
				</Grid>
				<Grid item sm={6}>
					<UploadButton />
				</Grid>
			</Grid>
			<Input id="overview" label="Movie overview" type="textarea" />
			<Grid container spacing={2}>
				<Grid item sm={6}>
					<Button className={classes.button} fullWidth>
						Cancel
					</Button>
				</Grid>
				<Grid item sm={6}>
					<Button className={classes.button} variant="contained" color="primary" fullWidth>
						Add Movie
					</Button>
				</Grid>
			</Grid>
		</Modal>
	);
};
