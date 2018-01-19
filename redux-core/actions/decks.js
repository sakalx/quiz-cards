import types from './types';
import * as api from 'api/api-storage';

const {deck} = types;

export const getAllDecks = () => {
  return {
    type: deck.ALL,
    payload: api.getAllDecks(), // [{deck}, {deck}, {deck}]
  };
};

export const getDeck = id => {
  return {
    type: deck.BY_ID,
    payload: api.getDeck(id), // {deck}
  };
};

export const removeDeck = id => {
  return {
    type: deck.REMOVE,
    payload: api.removeDeck(id), // id
  };
};

export const editDeck = editedDeck => {
  return {
    type: deck.EDIT,
    payload: api.editDeck(editedDeck), // {edited Deck}
  };
};