import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material UI

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import DatePicker from "../DatePicker/DatePicker";
import UploadButton from "../UploadButton/UploadButton";

import { ID, dateFns } from '../../utils/utils';
import contentActions from "../../actions/content";

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

const AddMovieModal = ({ create, history, match }) => {
	const classes = useStyles();
	const initState = {
		title: "",
		casts: "",
		releaseDate: null,
		poster: "",
		overview: ""
	};

	const [newMovie, setValues] = React.useState(initState);

	React.useEffect(() => { 
		if (localStorage.getItem('content')) {
			setValues(JSON.parse(localStorage.getItem('content')));
		}
	}, []);

	const handleSetValue = data => {
		localStorage.setItem('content', JSON.stringify(data));
		setValues(data);
	}

	const handleChange = e => {
		handleSetValue({
			...newMovie,
			[e.target.name]: e.target.value
		});
	};

	const handleFileChange = file => {
		handleSetValue({
			...newMovie,
			poster: file
		});
	};

	const handleDateChange = date => {
		handleSetValue({
			...newMovie,
			releaseDate: date
		});
	};

	const handleSubmit = () => {
		if (newMovie.title && newMovie.releaseDate && newMovie.poster) {
			create({
				id: ID(),
				title: newMovie.title,
				overview: newMovie.overview,
				poster: newMovie.poster,
				rating: parseInt(Math.random() * 100) + '%',
				releaseDate: dateFns.format(dateFns.date(newMovie.releaseDate), 'MMMM dd, yyyy')
			});

			history.push('/my-movies');

			localStorage.removeItem('content');
		}
	};

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
						<DatePicker
							value={newMovie.releaseDate}
							onChange={handleDateChange}
						/>
					</Grid>
					<Grid item sm={6}>
						<UploadButton
							name="poster"
							onChange={handleFileChange}
						/>
					</Grid>
				</Grid>
				<Input
					id="overview"
					label="Movie overview"
					type="textarea"
					value={newMovie.overview}
					onChange={handleChange}
				/>
				<Grid container spacing={2}>
					<Grid item sm={6}>
						<Button onClick={() => history.goBack()} className={classes.button} fullWidth>
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

AddMovieModal.propTypes = {
	create: PropTypes.func.isRequired,
	content: PropTypes.object.isRequired
};

const mapStateToProps = ({ content }) => ({
	content: content
});

const mapDispatchToProps = {
	create: contentActions.create
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddMovieModal);
