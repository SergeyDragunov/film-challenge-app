import React from "react";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles(theme => ({
	input: {
		display: "none"
	},
	uploadButton: {
		height: "60px",
		paddingLeft: 12,
		paddingRight: 20,
		borderRadius: 0,
		marginBottom: 20,
		backgroundColor: theme.palette.secondary.light,
		fontFamily: "inherit"
	},
	uploadButtonLabel: {
		color: "#888",
		justifyContent: "space-between",
		textTransform: 'none',
    fontWeight: 400,
		fontSize: 20
	},
	icon: {
		color: "#000"
	}
}));

const UploadButton = () => {
	const classes = useStyles();

	return (
		<div>
			<input
				accept="image/*"
				className={classes.input}
				id="outlined-button-file"
				multiple
				type="file"
			/>
			<label htmlFor="outlined-button-file">
				<Button 
					component="span" 
					classes={{
						root: classes.uploadButton,
						label: classes.uploadButtonLabel
					}} 
					fullWidth
				>
					Movie poster
					<CloudUploadIcon className={classes.icon} />
				</Button>
			</label>
		</div>
	);
};

export default UploadButton;
