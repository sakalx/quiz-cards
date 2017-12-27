import types from './types';
import * as api from 'api/deck';
const {deck} = types;

export const getAllDecks = () => {
  return {
    type: deck.ALL,
    payload: api.getAllDecks(),
  };
};

export const getDeck = id => {
  return {
    type: deck.BY_ID,
    payload: api.getDeck(id),
  };
};

export const removeDeck = id => {
  return {
    type: deck.REMOVE,
    payload: api.removeDeck(id),
  };
};

export const addDeck = newDeck => {
  return {
    type: deck.ADD,
    payload: api.addDeck(newDeck),
  };
};

export const editDeck = editedDeck => {
  return {
    type: deck.EDIT,
    payload: api.editDeck(editedDeck),
  };
};