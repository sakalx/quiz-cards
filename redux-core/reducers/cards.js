import types from '../actions/types';

function cards(state = {}, action) {
  const {card, FULFILLED} = types;
  const {type, payload = {}} = action;

  const updatedData = {
    ...state,
    ...payload,
  };

  switch (type) {
    case card.ALL + FULFILLED:
      return updatedData;

    case card.BY_ID + FULFILLED:
      return {...payload};

    case card.BY_DECK + FULFILLED:
      return {...payload};

    case card.ADD + FULFILLED:
      return updatedData;

    case card.EDIT + FULFILLED:
      return updatedData;

    case card.REMOVE + FULFILLED:
      return updatedData;
  }
  return state;
}

export default cards;