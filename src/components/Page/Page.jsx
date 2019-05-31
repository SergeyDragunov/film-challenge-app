import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SearchInput from "../../components/SearchInput/SearchInput";

const useStyles = makeStyles({
	pageHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "20px 0px"
	},
	pageHeading: {
		color: "#ffffff"
	}
});

export const Page = props => <div>{props.children}</div>;

export const PageHeader = props => {
	const classes = useStyles();

	return (
		<div className={classes.pageHeader}>
			<Typography variant="h4" component="h2" className={classes.pageHeading}>
				{props.children}
			</Typography>
			<SearchInput />
		</div>
	);
};