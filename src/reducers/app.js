import { appConstants } from '../constants';

const initState = {
	drawer: {
		open: false
	},
	notification: {
		open: false,
		status: '',
		message: ''
	}
}

export default (state = initState, action) => {
	switch(action.type) {
		case appConstants.SET_DRAWER_OPEN: {
			return {
				...state,
				drawer: {
					open: action.open
				}
			}
		}
		case appConstants.SET_NOTIFICATION: {
			return {
				...state,
				notification: {
					open: true,
					status: action.status,
					message: action.message
				}
			}
		}
		case appConstants.DISMISS_NOTIFICATION: {
			return {
				...state,
				notification: {
					...state.notification,
					open: false	
				}
			}
		}
		default: {
			return state;
		}
	}
}