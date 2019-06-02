import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Movie from '../../components/Movie/Movie';
import Page from '../../components/Page/Page'
import PageHeader from '../../components/PageHeader/PageHeader'

const styles = {
};

class Movies extends Component {
	render() {
		// const { classes } = this.props;

		return (
			<Page>
				<PageHeader>
					Top rated movies
				</PageHeader>
				<Grid container spacing={4}>
					<Grid sm={4} item>
						<Movie />
					</Grid>
					<Grid sm={4} item>
						<Movie />
					</Grid>
					<Grid sm={4} item>
						<Movie />
					</Grid>
				</Grid>
			</Page>
		)
	}
}

export default withStyles(styles)(Movies);