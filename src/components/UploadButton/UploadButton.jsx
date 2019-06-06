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
		width: '90%',
		justifyContent: "space-between",
		textTransform: 'none',
    fontWeight: 400,
		fontSize: 20,
	},
	truncate: {
		width: '70%',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		overflow: 'hidden'
	},
	uploaded: {
		color: '#fff'
	},
	icon: {
		color: "#000"
	}
}));

const UploadButton = props => {
	const classes = useStyles();
	const [name, setName] = React.useState('');

	const handleChange = e => {
		const files = e.target.files;

		if (files.length) {
			const file = files[0];
			if(file && (file.size / Math.pow(1024, 2) < 1)) {
				setName(file.name)
        const imgURL =  window.URL.createObjectURL(file);
				props.onChange(imgURL);
      }
		}
	}

	return (
		<div>
			<input
				accept="image/*"
				className={classes.input}
				id="outlined-button-file"
				multiple
				type="file"
				onChange={handleChange}
			/>
			<label htmlFor="outlined-button-file">
				<Button 
					component="span" 
					classes={{
						root: classes.uploadButton,
						label: classes.uploadButtonLabel + `  ${name && classes.uploaded}`
					}} 
					fullWidth
				>
					<span className={classes.truncate}>
						{name || 'Movie poster'}
					</span>
					<CloudUploadIcon className={classes.icon} />
				</Button>
			</label>
		</div>
	);
};

export default UploadButton;
