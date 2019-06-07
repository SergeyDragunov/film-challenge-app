import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NotificationIcon from '@material-ui/icons/Notifications';

import { dismissNotification } from '../../actions/app';

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5),
  },
  success: {
    backgroundColor: "#00C48C",
  },
  error: {
    backgroundColor: "#FF647C",
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  messageIcon: {
  	marginRight: theme.spacing(1)
  }
}));

const NotificationContent = props => {
	const classes = useStyles();
	const { className, message, status, onClose, ...other } = props;

	return (
		<SnackbarContent
      className={classes[status]}
      aria-describedby="message-id"
      message={
      	<span id="message-id" className={classes.message}>
      		<NotificationIcon className={classes.messageIcon} />
      		{message}
      	</span>
      }
      action={
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      }
      {...other}
    />
	)
}

const Notification = ({ status, open,  message, dismissNotification }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dismissNotification()
  }

	return (
		<Snackbar
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
    	<NotificationContent
	    	status={status}
        message={message}
    		onClose={handleClose}
    	/>
    </Snackbar>
	)
}

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dismissNotification: PropTypes.func.isRequired
}

const mapStateToProps = ({ app }) => ({
  open: app.notification.open,
  status: app.notification.status,
  message: app.notification.message
});

const mapDispatchToProps = {
  dismissNotification
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Notification);