import { appConstants } from '../constants';

/* Drawer */

export const openDrawer = open => ({
	type: appConstants.SET_DRAWER_OPEN,
	open
})