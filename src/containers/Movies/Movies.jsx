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

const styles = {
};

class Movies extends Component {
	componentDidMount() {
		this.props.getAll();
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
	getAll: moviesActions.getAll
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);