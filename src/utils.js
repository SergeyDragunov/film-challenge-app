import DateFnsUtils from "@date-io/date-fns";

import { API } from './constants';

const dateFns = new DateFnsUtils();

// Parse API data

export const parseData = data => data.map(item => ({
	id: item.id,
	poster: API.POSTER_URL + item.poster_path,
	title: item.title,
	overview: item.overview,
	releaseDate: dateFns.format(dateFns.date(item.release_date), 'MMMM dd, yyyy'),
	rating: item.vote_average * 10 + "%"
}));