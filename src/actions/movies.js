import { moviesConstants, API } from '../constants';
import { parseData } from '../utils';

/* Get All Movies */

const getAll = () => {
	const request = () => ({ type: moviesConstants.GET_MOVIES_REQUEST });
	const success = data => ({ type: moviesConstants.GET_MOVIES_SUCCESS, data	});
	const failure = error => ({	type: moviesConstants.GET_MOVIES_FAILURE	});

	return (dispatch) => {
		dispatch(request());

		fetch(API.API_TOP_RATED)
			.then(res => res.json())
			.then(data => dispatch(success(parseData(data.results))))
			.catch(error => dispatch(failure(error)))
	}
};

export default {
	getAll,
}