import types from '../actions/types';

function spinner(state = {}, action) {
  const {SPINNER} = types;
  const {type, payload: {id, value} = {}} = action;

  switch (type) {
    case SPINNER:
      return {
        ...state,
        [id]: value,
      };
  }
  return state;
}

export default spinner;