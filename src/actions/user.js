import { authConstants } from '../constants.js';
import userService from '../services/user.js';

export const login = (username, password) => {
	const request = () => ({ type: authConstants.LOGIN_REQUEST });
	const success = user => ({	type: authConstants.LOGIN_SUCCESS, user });
	const failure = error => ({ type: authConstants.LOGIN_FAILURE,	error });

	return (dispatch) => {
		dispatch(request());

		userService.login(username, password)
			.then(
				user => dispatch(success(user)),
				error => dispatch(failure(error))
			);
	}
};

export const logout = () => {
	userService.logout();
	return {type: authConstants.LOGOUT};
};