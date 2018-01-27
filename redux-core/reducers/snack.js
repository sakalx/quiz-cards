import types from '../actions/types';

const initState = {
  openSnack: false,
  duration: null,
  content: null,
};

function snack(state = initState, action) {
  const {snack} = types;
  const {type, payload: {openSnack, content, duration} = {}} = action;

  switch (type) {
    case snack.SHOW:
      return {
        openSnack,
        content,
        duration,
      };

    case snack.HIDE:
      return {
        ...state,
        openSnack: false,
      };
  }
  return state;
}

export default snack;