import { contentConstants } from '../constants';
import { ID } from '../utils/utils';
import { setNotification } from './app';

const mockMovies = [
	{
		id: ID(),
		poster: "https://image.tmdb.org/t/p/w500//pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
		title: "Bohemian Rhapsody",
		overview: "When Alita awakens with no memory of who she is in a future world she does not recognize",
		releaseDate: "February 14, 2018",
		rating: "64%"
	},
	{
		id: ID(),
		poster: "https://image.tmdb.org/t/p/w500//wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
		title: "Robin Hood",
		overview: "When Alita awakens with no memory of who she is in a future world she does not recognize",
		releaseDate: "February 14, 2018",
		rating: "64%"
	},
];

/* Get All Content */

const getAll = () => {
	const request = () => ({ type: contentConstants.GET_CONTENT_REQUEST });
	const success = data => ({ type: contentConstants.GET_CONTENT_SUCCESS, data	});

	return (dispatch) => {
		dispatch(request());

		setTimeout(() => {
			dispatch(success(mockMovies));
		}, 1000);
	}
};

/* Get by ID */

const getById = id => {
	const request = () => ({ type: contentConstants.GET_CONTENT_BY_ID_REQUEST });
	const success = data => ({ type: contentConstants.GET_CONTENT_BY_ID_SUCCESS, data	});

	return (dispatch) => {
		dispatch(request());

		setTimeout(() => {
			dispatch(success(mockMovies.filter(item => item.id === parseInt(id))[0]));
		}, 1000);
	}
}

/* Create Content */

const create = (data) => {
	const request = () => ({ type: contentConstants.CREATE_REQUEST });
	const success = data => ({ type: contentConstants.CREATE_SUCCESS, data });

	return (dispatch) => {
		dispatch(request());

		setTimeout(() => {
			dispatch(setNotification('success', "Movie was succesfully add to movie hunt library"));
			dispatch(success(data));
		}, 1000);
	}
};

/* Update Content */

const update = data => {
	const request = () => ({ type: contentConstants.UPDATE_REQUEST });
	const success = data => ({ type: contentConstants.UPDATE_SUCCESS, data });

	return (dispatch) => {
		dispatch(request());

		setTimeout(() => {
			dispatch(setNotification('success', "Movie was succesfully updated"));
			dispatch(success(mockMovies.map(item => item.id === data.id ? data : item)));
		}, 1000);
	}
};

/* Remove Data to Edit */

const removeEditData = () => ({
	type: contentConstants.REMOVE_EDIT_DATA
})

export default {
	getAll,
	getById,
	create,
	update,
	removeEditData
}