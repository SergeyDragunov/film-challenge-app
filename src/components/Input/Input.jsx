import React from "react";
import PropTypes from "prop-types";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import MaterialFilledInput from "@material-ui/core/FilledInput";
import MaterialSelect from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
	formControl: {
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
	focused: {},
	input: {
		height: 60,
		backgroundColor: theme.palette.secondary.light,
		borderRadius: 0,
		color: "#fff",
		fontFamily: "inherit"
	},
	textarea: {
		height: 124,
		backgroundColor: theme.palette.secondary.light,
		borderRadius: 0,
		color: "#fff",
		fontFamily: "inherit"
	},
	arrowIcon: {
		display: "none"
	}
}));

const FilledInput = props => {
	return (
		<MaterialFilledInput
			{...props}
			value={props.value}
			name={props.id}
			id={props.id}
			className={props.className}
			type={props.type}
			disableUnderline={true}
		/>
	);
};

FilledInput.propTypes = {
	className: PropTypes.string
};

const Select = ({ id, type, ...other }) => {
	const classes = useStyles();

	return (
		<MaterialSelect
			classes={{
				icon: classes.arrowIcon
			}}
			input={<FilledInput id={id} className={classes.input} />}
			{...other}
		>
			<MenuItem value="">
				<em>None</em>
			</MenuItem>
			<MenuItem value={'Tom'}>Tom</MenuItem>
			<MenuItem value={'Bob'}>Bob</MenuItem>
			<MenuItem value={'John'}>John</MenuItem>
		</MaterialSelect>
	);
};

const FormControlInput = props => {
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
			{
				props.type === "text" || props.type === "password" ?
				<FilledInput
					id={props.id}
					type={props.type}
					value={props.value}
					className={classes.input}
					onChange={props.onChange}
				/> : 
				props.type === "select" ?
				<Select id={props.id} {...props} /> : 
				props.type === "textarea" ? 
				<FilledInput
					id={props.id}
					type={props.type}
					rows={4}
					value={props.value}
					className={classes.textarea}
					onChange={props.onChange}
					multiline
				/> : 
				null
			}
		</FormControl>
	);
};

FormControlInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func
};

export default React.memo(FormControlInput);
