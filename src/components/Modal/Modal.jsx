import React from 'react';
import PropTypes from 'prop-types';

// Material UI

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    maxWidth: 687,
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  clearButton: {
    position: "absolute",
    top: 32,
    right: 32,
    color: "#fff"
  },
  content: {
    padding: "75px 95px 134px"
  }
}));

const Modal = props => {
  const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Dialog  
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      scroll="body"
      onClose={handleClose}
      classes={{
        paper: classes.paper,
        dialogContent: classes.dialogContent
      }}
      {...props}
    >
      <IconButton className={classes.clearButton} aria-label="Close Modal" onClick={handleClose}>
        <ClearIcon />
      </IconButton>
      <DialogContent className={classes.content}>
        {props.children}
      </DialogContent>
    </Dialog>
  );
}

Modal.propTypes  = {
  children: PropTypes.node
}

export default Modal;