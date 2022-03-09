import localforage from 'localforage';

import { types } from '../types/types.ts';

export const addVote = (votes) => ({
  type: types.addVote,
  payload: votes,
});

export const startAddVote = (vote) => async (dispatch) => {
  const currentVotes = await localforage.getItem('myList') ?? [];

  const index = currentVotes.findIndex((x) => x.id === vote.id);

  if (index === -1) {
    currentVotes.push(vote);
    await localforage.setItem('myList', currentVotes);
    dispatch(addVote(currentVotes));
  } else if (currentVotes[index].votation !== vote.votation) {
    currentVotes[index] = vote;
    await localforage.setItem('myList', currentVotes);
    dispatch(addVote(currentVotes));
  }
};

export const getVotes = (votes) => ({
  type: types.getVotes,
  payload: votes,
});

export const startGetVote = () => async (dispatch) => {
  const currentVotes = await localforage.getItem('myList') ?? [];
  dispatch(getVotes(currentVotes));
};
