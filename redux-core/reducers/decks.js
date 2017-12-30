import types from '../actions/types';

function decks(state = {}, action) {
  const {deck, FULFILLED} = types;
  const {type, payload = {}} = action;

  switch (type) {
    case deck.ALL + FULFILLED:
      return {...payload};

    case deck.BY_ID + FULFILLED:
      return {...payload};

    case deck.ADD + FULFILLED:
      return {...payload};

    case deck.EDIT + FULFILLED:
      return {...payload};

    case deck.REMOVE + FULFILLED:
      return {...payload};
  }
  return state;
}

export default decks;