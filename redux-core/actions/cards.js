import types from './types';
import * as api from 'api/card';
const {card} = types;

export const getAllCards = () => {
  return {
    type: card.ALL,
    payload: api.getAllCards(),
  };
};

export const getCard = id => {
  return {
    type: card.BY_ID,
    payload: api.getCard(id),
  };
};

export const getCardsByDeck = id => {
  return {
    type: card.BY_DECK,
    payload: api.getCardsByDeck(id),
  };
};

export const removeCard = id => {
  return {
    type: card.REMOVE,
    payload: api.removeCard(id),
  };
};

export const addCard = newCard => {
  return {
    type: card.ADD,
    payload: api.addCard(newCard),
  };
};

export const editCard = editedCard => {
  return {
    type: card.EDIT,
    payload: api.editCard(editedCard),
  };
};