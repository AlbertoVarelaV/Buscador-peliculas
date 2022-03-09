import { types } from '../types/types.ts';

const initialState = {
  movies: {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1,
  },
};

export const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.searchMovies:
      return {
        movies: action.payload,
      };
    case types.resetMovies:
      return initialState;

    default:
      return state;
  }
};

export default moviesReducer;
