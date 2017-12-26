import {add, edit, getAll, getById, key, remove} from './api-storage';
import {getAllCards, removeCard} from './card';
import {defaultDecks} from './default-data';

export const getAllDecks = () => getAll(key.DECKS, defaultDecks);

export const getDeck = id => getById(id, getAllDecks);

export async function removeDeck(id) {
  const cards = await getAllCards();
  const cardsId = [];

  for (let key in cards) {
    if (cards[key].parentDeck === id) {
      cardsId.push(key);
    }
  }

  removeCard(cardsId);
  return remove(key.DECKS, id, getAllDecks);
}

export const addDeck = ({
                          id = (+new Date()).toString(36),
                          title,
                          description,
                        }) => {

  const newDeck = JSON.stringify({
    [id]: {id, title, description,},
  });

  return add(key.DECKS, newDeck, getAllDecks);
};

export const editDeck = ({id, title, description}) => {
  const editedDeck = {
    [id]: {id, title, description},
  };

  return edit(key.DECKS, editedDeck, getAllDecks);
};