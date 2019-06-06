import { appConstants } from '../constants';

const initState = {
	drawer: {
		open: false
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
		default: {
			return state;
		}
	}
}