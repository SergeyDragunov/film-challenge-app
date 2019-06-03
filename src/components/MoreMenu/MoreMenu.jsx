import React from "react";
import PropTypes from "prop-types";

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
	popper: {
		zIndex: 100
	},
	paper: {
		minWidth: 120
	},
	menuItem: {
		justifyContent: "center"
	}
}));

const MoreMenu = props => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen(prevOpen => !prevOpen);
	};

	const handleClose = event => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	return (
		<div>
			<IconButton
				className={props.classNameButton}
				ref={anchorRef}
				aria-owns={open ? "menu-list-grow" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<MoreIcon />
			</IconButton>
			<Popper
				className={classes.popper}
				open={open}
				anchorEl={anchorRef.current}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom" ? "center top" : "center bottom"
						}}
					>
						<Paper className={classes.paper} id="menu-list-grow" square>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList>
									{["Edit", "Delete"].map((item, index) => (
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
											key={index}
										>
											{item}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

MoreMenu.propTypes = {
	classNameButton: PropTypes.string
};

export default MoreMenu;
