import types from '../actions/types';

function decks(state = [], action) {
  const {deck, FULFILLED} = types;
  const {type, payload} = action;

  switch (type) {
    case deck.ALL + FULFILLED:
      return payload;

    case deck.ADD + FULFILLED:
      return [
        ...state,
        payload,
      ];

    case deck.REMOVE + FULFILLED:
      return state.filter(deck => deck.id !== payload);

    case deck.EDIT + FULFILLED:
      return state.map(deck =>
          deck.id === payload.id ? payload : deck,
      );
  }
  return state;
}

export default decks;