import myListReducer from '../../../config/reducers/myListReducer';
import { types } from '../../../config/types/types.ts';

test('should return the initial state', () => {
  expect(myListReducer(undefined, {})).toEqual({
    myList: [],
  });
});


test('should add element to state', () => {
  const action = {
    type: types.addVote,
    payload: {
        id: 35813,
        overview: "La escritoria de novelas de misterio Cornelia Van Gorde ha alquilado una casa que no hace mucho tiempo fue el escenario de unos horribles crímenes por un psicópata conocido como \"El murciélago\"",
        posterPath: "/3OIQMXttT2h3nvvD0RnJlJhqIZC.jpg",
        releaseDate: "1959-08-09",
        title: "Las garras del murciélago",
        votation: 1
    }
  };

  expect(myListReducer(undefined, action)).toEqual({
    myList: {
      id: 35813,
      overview: "La escritoria de novelas de misterio Cornelia Van Gorde ha alquilado una casa que no hace mucho tiempo fue el escenario de unos horribles crímenes por un psicópata conocido como \"El murciélago\"",
      posterPath: "/3OIQMXttT2h3nvvD0RnJlJhqIZC.jpg",
      releaseDate: "1959-08-09",
      title: "Las garras del murciélago",
      votation: 1
    },
  });
});