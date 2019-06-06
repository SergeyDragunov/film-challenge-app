import { combineReducers } from 'redux';
import app from './app';
import movies from './movies';
import user from './user';
import content from './content';

export default combineReducers({
	app,
	movies,
	user,
	content,
});