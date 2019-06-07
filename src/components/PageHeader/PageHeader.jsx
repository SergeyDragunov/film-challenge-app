import React from "react";
import PropTypes from 'prop-types';

// Material UI

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// import SearchInput from "../../components/SearchInput/SearchInput";

const useStyles = makeStyles({
	pageHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "30px 0px 60px"
	},
	pageHeading: {
		color: "#ffffff"
	}
});


const PageHeader = props => {
	const classes = useStyles();

	return (
		<div className={classes.pageHeader}>
			<Typography variant="h4" component="h2" className={classes.pageHeading}>
				{props.children}
			</Typography>
			{/*<SearchInput />*/}
		</div>
	);
};

PageHeader.propTypes = {
	children: PropTypes.node
}

export default PageHeader;