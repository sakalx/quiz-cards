import types from './types';
import * as api from 'api/api-storage';

const {deck} = types;

export const getAllDecks = () => {
  return {
    type: deck.ALL,
    payload: api.getAllDecks(),
  };
};

export const addDeck = newDeck => {
  return {
    type: deck.ADD,
    payload: api.addDeck(newDeck),
  };
};

export const removeDeck = id => {
  return {
    type: deck.REMOVE,
    payload: api.removeDeck(id),
  };
};

export const editDeck = editedDeck => {
  return {
    type: deck.EDIT,
    payload: api.editDeck(editedDeck),
  };
};