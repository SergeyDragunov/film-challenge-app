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

const skeleton = [];

for (let i = 0; i < 12; i++) {
	skeleton.push({});
}

class Movies extends Component {
	componentDidMount() {
		const { getAll } = this.props;

		getAll();
	}

	render() {
		const movies = this.props.movies.length ? this.props.movies : skeleton;

		return (
			<Page>
				<PageHeader>
					Top rated movies
				</PageHeader>
				<Grid container spacing={4}>
					{
						movies.map((movie, index) => 
							<Grid sm={4} item key={index}>
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
	classes: PropTypes.object,
	movies: PropTypes.array.isRequired,
	getAll: PropTypes.func.isRequired
}

Movies = withStyles(styles)(Movies);

const mapStateToProps = ({ movies, content }) => ({
	movies: movies.data,
})

const mapDispatchToProps = {
	getAll: moviesActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);