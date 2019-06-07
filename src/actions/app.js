import { appConstants } from '../constants';

/* Drawer */

export const openDrawer = open => ({
	type: appConstants.SET_DRAWER_OPEN,
	open
});

/* Notification */

export const setNotification = (status, message) => ({
	type: appConstants.SET_NOTIFICATION,
	status,
	message
});

export const dismissNotification = () => ({
	type: appConstants.DISMISS_NOTIFICATION,
});