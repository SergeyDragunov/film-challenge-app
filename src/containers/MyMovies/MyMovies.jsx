import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Material UI

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Movie from '../../components/Movie/Movie';
import Page from '../../components/Page/Page'
import PageHeader from '../../components/PageHeader/PageHeader'

import contentActions from '../../actions/content';

const styles = {
};

class MyMovies extends Component {
	componentDidMount() {
		const { getAll } = this.props;

		getAll();
	}

	render() {
		const { movies } = this.props;
		
		return (
			<Page>
				<PageHeader>
					My Movies
				</PageHeader>
				<Grid container spacing={4}>
					{
						movies.map(movie => 
							<Grid sm={4} item key={movie.id}>
								<Movie movie={movie} menu={true} />
							</Grid>
						)
					}
				</Grid>
			</Page>
		)
	}
}

MyMovies.propTypes = {
	classes: PropTypes.object,
	movies: PropTypes.array.isRequired,
	getAll: PropTypes.func.isRequired
}

MyMovies = withStyles(styles)(MyMovies);

const mapStateToProps = ({ movies, content }) => ({
	movies: content.data,
})

const mapDispatchToProps = {
	getAll: contentActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies);