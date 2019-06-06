import { contentConstants } from '../constants';

const initState = {
	settings: {
		isFetching: false,
	},
	data: []
}

export default (state = initState, action) => {
	switch(action.type) {
		case contentConstants.GET_CONTENT_REQUEST: {
			return {
				...state,
				settings: {
					...state.settings,
					isFetching: true
				}
			}
		}
		case contentConstants.GET_CONTENT_SUCCESS: {
			return {
				...state,
				settings: {
					...state.settings,
					isFetching: false
				},
				data: action.data
			}
		}
		default: {
			return state;
		}
	}
}