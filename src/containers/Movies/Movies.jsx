import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Movie from '../../components/Movie/Movie';
import Page from '../../components/Page/Page'
import PageHeader from '../../components/PageHeader/PageHeader'

import moviesActions from '../../actions/movies';
import contentActions from '../../actions/content';

const styles = {
};

class Movies extends Component {
	componentDidMount() {
		const { location, getAllAPIMovies, getAllMyMovies } = this.props;

		if (location.pathname.includes('/my-movies')) {
			getAllMyMovies();
		} else {
			getAllAPIMovies();
		}
	}

	render() {
		const { movies } = this.props;

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

Movies = withStyles(styles)(Movies);

const mapStateToProps = ({ movies }) => ({
	movies: movies.data
})

const mapDispatchToProps = {
	getAllAPIMovies: moviesActions.getAll,
	getAllMyMovies: contentActions.getAll
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);