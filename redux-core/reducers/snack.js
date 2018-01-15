import types from '../actions/types';

const initState = {
  isVisible: false,
  duration: null,
  content: null,
};

function snack(state = initState, action) {
  const {snack} = types;

  const {type, payload:{duration, content}={}} = action; 

  switch (type) {
    case snack.SHOW:
      return {
        ...state,
        isVisible: true,
        duration,
        content, 
      };

case snack.HIDE:
      return {
       ...state,
       isVisible: false,
      };
  }
  return state;
}

export default snack;