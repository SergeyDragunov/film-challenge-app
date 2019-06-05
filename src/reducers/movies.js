import { moviesConstants } from '../constants';

const initState = {
	settings: {
		isFetching: false
	},
	data: []
}

export default (state = initState, action) => {
	switch(action.type) {
		case moviesConstants.GET_MOVIES_REQUEST: {
			return ({
				...state,
				settings: {
					...state.settings,
					isFetching: true
				}
			})
		}
		case moviesConstants.GET_MOVIES_SUCCESS: {
			return ({
				settings: {
					...state.settings,
					isFetching: false
				},
				data: action.data
			})
		}
		case moviesConstants.GET_MOVIES_FAILURE: {
			return ({
				...state,
				settings: {
					...state.settings,
					isFetching: false
				}
			})
		}
		default: {
			return state;
		}
	}
}