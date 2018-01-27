import types from './types';

const {SPINNER} = types;

export const showSpinner = (id, value) => {
  return {
    type: SPINNER,
    payload: {id, value},
  };
};