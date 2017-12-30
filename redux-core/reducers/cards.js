import types from '../actions/types';

function cards(state = {}, action) {
  const {card, FULFILLED} = types;
  const {type, payload = {}} = action;

  switch (type) {
    case card.ALL + FULFILLED:
      return {...payload};

    case card.BY_ID + FULFILLED:
      return {...payload};

    case card.BY_DECK + FULFILLED:
      return {...payload};

    case card.ADD + FULFILLED:
      return {...payload};

    case card.EDIT + FULFILLED:
      return {...payload};

    case card.REMOVE + FULFILLED:
      return {...payload};
  }
  return state;
}

export default cards;