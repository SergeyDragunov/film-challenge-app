import React from "react";

// Material UI

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import DatePicker from "../DatePicker/DatePicker";
import UploadButton from "../UploadButton/UploadButton";

const useStyles = makeStyles(theme => ({
	title: {
		marginBottom: 60,
		color: "#fff",
		textAlign: "center"
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
	const [newMovie, setValues] = React.useState({
		title: "",
		casts: "",
		releaseDate: null,
		poster: '',
		overview: ""
	});

	const handleChange = e => {
		setValues({
			...newMovie,
			[e.target.name]: e.target.value 
		});
	};

	const handleFileChange = file => {
		setValues({
			...newMovie,
			poster: file
		});
	}

	const handleDateChange = date => {
		setValues({
			...newMovie,
			releaseDate: date
		});
	};

	const handleSubmit = () => {
		
	}

	return (
		<Modal className={classes.addMovieTitle}>
			<form action="">
				<Typography variant="h5" component="h2" className={classes.title}>
					New movie
				</Typography>
				<Input
					id="title"
					label="Movie Title"
					type="text"
					value={newMovie.title}
					onChange={handleChange}
				/>
				<Input
					id="casts"
					label="Casts"
					type="select"
					value={newMovie.casts}
					onChange={handleChange}
				/>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<DatePicker value={newMovie.releaseDate} onChange={handleDateChange} />
					</Grid>
					<Grid item sm={6}>
						<UploadButton name='poster' value={newMovie.poster} onChange={handleFileChange} />
					</Grid>
				</Grid>
				<Input
					id="overview"
					label="Movie overview"
					type="textarea"
					onChange={handleChange}
				/>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<Button className={classes.button} fullWidth>
							Cancel
						</Button>
					</Grid>
					<Grid item sm={6}>
						<Button
							className={classes.button}
							variant="contained"
							color="primary"
							fullWidth
							onClick={handleSubmit}
						>
							Add Movie
						</Button>
					</Grid>
				</Grid>
			</form>
		</Modal>
	);
};
