import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));

let initState = {
	settings: {
		loggedIn: false,
		loggingIn: false,
		error: ''
	},
	data: null 
}; 

if (user) {
	initState.settings.loggedIn = true;
	initState.data = user;
}

export default (state = initState, action) => {
	switch(action.type) {
		case authConstants.LOGIN_REQUEST: {
			return {
				...state,
				settings: {
					...state.settings,
					loggingIn: true
				}
			}
		}
		case authConstants.LOGIN_SUCCESS: {
			return {
				...state,
				settings: {
					...state.settings,
					loggingIn: false,
					loggedIn: true
				},
				data: action.data
			}
		}
		case authConstants.LOGIN_FAILURE: {
			return {
				...state,
				settings: {
					...state.settings,
					loggingIn: false,
					loggedIn: false,
					error: action.error
				},
			}
		}
		default: {
			return state;
		}
	}
}