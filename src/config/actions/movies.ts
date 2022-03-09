import { types } from '../types/types.ts';
import { axiosInstance, apiKey, language } from '../api/api.ts';

export const searchMovies = (movies) => ({
  type: types.searchMovies,
  payload: movies,
});
export const resetMovies = (movies) => ({
  type: types.resetMovies,
  payload: movies,
});

export const startSearchMovies = (query, page = 1) => async (dispatch) => {
  try {
    if (query !== '') {
      const movies = await axiosInstance.get('/search/movie', {
        params: {
          query,
          page,
          api_key: apiKey,
          language,
        },
      });
      dispatch(searchMovies(movies.data));
    } else {
      dispatch(resetMovies());
    }
  } catch (error) {
    dispatch(resetMovies());
  }
};
