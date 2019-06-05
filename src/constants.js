/* API constants */

const API_KEY = '5874acfd11651a28c55771624f7021f4'
const API_URL = 'https://api.themoviedb.org/3';
const API_TOP_RATED = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const POSTER_URL = `https://image.tmdb.org/t/p/w500/`;

export const API = {
	API_KEY,
	API_URL,
	API_TOP_RATED,
	POSTER_URL
}