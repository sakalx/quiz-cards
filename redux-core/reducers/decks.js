import types from '../actions/types';

function decks(state = [], action) {
  const {deck, FULFILLED} = types;
  const {type, payload} = action;

  switch (type) {
    case deck.ALL + FULFILLED:
      return payload;

    case deck.BY_ID + FULFILLED:
      return payload;

    case deck.EDIT + FULFILLED:
      return state.map(deck =>
          deck.id === payload.id ? payload : deck,
      );

    case deck.REMOVE + FULFILLED:
      return state.filter(deck => deck.id !== payload);
  }
  return state;
}

export default decks;