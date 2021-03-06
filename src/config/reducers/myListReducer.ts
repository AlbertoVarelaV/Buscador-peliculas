import { types } from '../types/types.ts';

const initialState = {
  myList: [],
};

export const myListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.addVote:
      return {
        myList: action.payload,
      };
    case types.getVotes:
      return {
        myList: action.payload,
      };

    default:
      return state;
  }
};

export default myListReducer;
