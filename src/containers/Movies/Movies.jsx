import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Movie from '../../components/Movie/Movie';
import Page from '../../components/Page/Page'
import PageHeader from '../../components/PageHeader/PageHeader'

import { API } from '../../constants';
import { parseData } from '../../utils';

const styles = {
};

class Movies extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch(API.API_TOP_RATED)
			.then(res => res.json())
			.then(data => 
				this.setState({movies: parseData(data.results)})
			);
	}

	render() {
		// const { classes } = this.props;
		const { movies } = this.state;

		return (
			<Page>
				<PageHeader>
					Top rated movies
				</PageHeader>
				<Grid container spacing={4}>
					{
						movies.map(movie => 
							<Grid sm={4} item key={movie.id}>
								<Movie movie={movie} />
							</Grid>
						)
					}
				</Grid>
			</Page>
		)
	}
}

Movies.propTypes = {
	classes: PropTypes.object
}

export default withStyles(styles)(Movies);