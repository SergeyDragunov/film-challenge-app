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
		case contentConstants.REMOVE_EDIT_DATA: {
			return {
				...state,
				editData: {}
			}
		}
		case contentConstants.UPDATE_SUCCESS: {
			return {
				...state,
				data: state.data.map(item => item.id === action.data.id ? action.data : item)
			}
		}
		case contentConstants.DELETE_SUCCESS: {
			console.log(state.data.filter(item => item.id !== action.id))
			return {
				...state,
				data: state.data.filter(item => item.id !== action.id)
			}
		}
		default: {
			return state;
		}
	}
}