import types from './types';

const {snack} = types;

export const showSnack = ({
                            openSnack,
                            content,
                            duration = 800,
                          } = {}) => {
  return {
    type: snack.SHOW,
    payload: {openSnack, content, duration},
  };
};

export const hideSnack = () => {
  return {
    type: snack.HIDE,
  };
};