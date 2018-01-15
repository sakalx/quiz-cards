import types from './types';

const {snack} = types;

export const showSnack = ({duration = 1500, content} = {}) => {

  return {
    type: snack.SHOW,
    payload: {duration, content},
  };
};

export const hideSnack = () => {
  return {
    type: snack.HIDE,
  };
};
