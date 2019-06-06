import React from "react";
import PropTypes from 'prop-types';

// Material UI
  
import { KeyboardDatePicker } from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";

// Date picker

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const styles = theme => ({
  formControl: {
    marginBottom: 20
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
    fontFamily: "inherit",
  }
});


const Calendar = ({ classes, onChange, value, ...rest }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    	<KeyboardDatePicker
        {...rest}
        autoOk
        className={classes.formControl}
        label="Date of launch"
        format="MM/dd/yyyy"
        inputVariant="filled"
        clearable
        value={value}
        invalidDateMessage="Invalid Date Format - mm/dd/yyyy"
        InputLabelProps={{
          classes: {
            root: classes.label,
            focused: classes.focused
          }
        }}
        InputProps={{ 
          className: classes.input,
          disableUnderline: true  
        }}
        onChange={date => onChange(date)}
      />
    </MuiPickersUtilsProvider>
  )
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func
};

export default withStyles(styles)(Calendar);
