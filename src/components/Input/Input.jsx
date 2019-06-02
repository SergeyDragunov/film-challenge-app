import React from "react";
import PropTypes from 'prop-types';

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
	formControl: {
    height: "60px",
		
		marginBottom: "20px"
	},
	label: {
		color: "#888",
		fontFamily: "inherit",
		fontSize: "20px",
		"&$focused": {
			color: "#fff"
		}
	},
	input: {
		backgroundColor: theme.palette.secondary.light,
		borderRadius: 0,
		color: "#fff",
		fontFamily: "inherit",
	},
	focused: {}
}));

const Input = props => {
	const classes = useStyles();

	return (
		<FormControl
			classes={{ root: classes.formControl }}
			variant="filled"
			fullWidth
		>
			<InputLabel
				classes={{
					root: classes.label,
					focused: classes.focused
				}}
				htmlFor={props.id}
			>
				{props.label}
			</InputLabel>
			<FilledInput
				id={props.id}
				classes={{
					root: classes.input
				}}
				type={props.type}
				disableUnderline={true}
			/>
		</FormControl>
	);
};

Input.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
}

export default Input;