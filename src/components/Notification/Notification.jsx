import React from "react";

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NotificationIcon from '@material-ui/icons/Notifications';

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
      		Note archived
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

const Notification = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  const status = 'error';

	return (
		<Snackbar
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
    	<NotificationContent
	    	status={status}
    		onClose={handleClose}
    	/>
    </Snackbar>
	)
}

export default Notification;