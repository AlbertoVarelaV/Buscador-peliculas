import moviesReducer from '../../../config/reducers/moviesReducer';
import { types } from '../../../config/types/types.ts';

test('should return the initial state after reset', () => {
  const currentState = {
    movies: {
      page: 2,
      results: [],
      total_pages: 105,
      total_results: 2100,
    },
  };
  
  const action = {
    type: types.resetMovies,
    payload: {}
  };
  expect(moviesReducer(undefined, {})).toEqual(moviesReducer(currentState, action));
});