import React from "react";
import PropTypes from "prop-types";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClearIcon from "@material-ui/icons/Clear";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
	buttonProgress: {
    color: "#64D899",
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  buttonSuccess: {
  	backgroundColor: "#64D899"
  },
  buttonError: {
  	backgroundColor: "#FF647C !important",
  	overflow: 'hidden',
  	"&:hover": {
  		backgroundColor: "#FF647C !important"
  	}
  },
  errorIcon: {
  	fontSize: 35
  },
}));

const ProgressButton = props => {
	const classes = useStyles();
	const { loading, success, error, children, className, onClick } = props;

	const [status, setStatus] = React.useState('default');

	React.useEffect(() => {
		if (success) setStatus('success')
		else if (loading) setStatus('loading')
		else if (error) {
			setStatus('error');
			setTimeout(() => {
				setStatus('default')
			}, 2000);
		}
	}, [success, loading, error]);

	const buttonClassname = () => `
		${className}  
		${success ? classes.buttonSuccess : ''} 
		${status === 'error' ? classes.buttonError : ''}`

	return (
		<Button
			disabled={status === 'loading' || status === 'error'}
			className={buttonClassname()}
			variant="contained"
			color="primary"
			onClick={onClick}
			fullWidth
		>
			{
				status === 'error' ? 
				<Slide direction="up" mountOnEnter in={true}>
					<ClearIcon className={classes.errorIcon} />
				</Slide> :
				children
			}
			{loading && <CircularProgress size={24} className={classes.buttonProgress} />}
		</Button>
	)
}

ProgressButton.propTypes = {
	loading: PropTypes.bool.isRequired,
	success: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	children: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export default ProgressButton;