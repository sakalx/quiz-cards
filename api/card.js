import {add, edit, getAll, getById, key, remove} from './api-storage';
import {defaultCards} from './default-data';

export const getAllCards = () => getAll(key.CARDS, defaultCards);

export const getCard = id => getById(id, getAllCards);

export const removeCard = id => remove(key.CARDS, id, getAllCards);

export const addCard = ({
                          id = (+new Date()).toString(36),
                          parentDeck,
                          question,
                          answer,
                        }) => {

  const newCard = JSON.stringify({
    [id]: {id, parentDeck, question, answer},
  });

  return add(key.CARDS, newCard, getAllCards);
};

export const editCard = ({id, question, answer}) => {
  const editedCard = {
    [id]: {id, question, answer},
  };

  return edit(key.CARDS, editedCard, getAllCards);
};

export async function getCardsByDeck(parentDeckId) {
  const response = await getAllCards();
  let cards = {};

  for (let key in response) {
    if (response[key].parentDeck === parentDeckId ) {
      cards[response[key].id] = response[key];
    }
  }

  return cards
}