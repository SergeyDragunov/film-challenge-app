import { contentConstants } from '../constants';

const initState = {
	settings: {
		isFetching: false,
		isCreating: false,
		isCreated: false
	},
	data: [],
	editData: {}
}

export default (state = initState, action) => {
	switch(action.type) {
		case contentConstants.GET_CONTENT_BY_ID_REQUEST:
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
		case contentConstants.GET_CONTENT_BY_ID_SUCCESS: {
			return {
				...state,
				settings: {
					...state.settings,
					isFetching: false
				},
				editData: action.data
			}
		}
		case contentConstants.CREATE_REQUEST: {
			return {
				...state,
				settings: {
					...state.settings,
					isCreating: true,
					isCreated: false,
				}
			}
		}
		case contentConstants.CREATE_SUCCESS: {
			return {
				...state,
				settings: {
					...state.settings,
					isCreating: false,
					isCreated: true
				},
				data: [
					...state.data,
					action.data
				]
			}
		}
		default: {
			return state;
		}
	}
}