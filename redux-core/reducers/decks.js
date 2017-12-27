import types from '../actions/types';

function decks(state = {}, action) {
  const {deck, FULFILLED} = types;
  const {type, payload = {}} = action;

  const updatedData = {
    ...state,
    ...payload,
  };

  switch (type) {
    case deck.ALL + FULFILLED:
      return updatedData;

    case deck.BY_ID + FULFILLED:
      return {...payload};

    case deck.ADD + FULFILLED:
      return updatedData;

    case deck.EDIT + FULFILLED:
      return updatedData;

    case deck.REMOVE + FULFILLED:
      return updatedData;
  }
  return state;
}

export default decks;