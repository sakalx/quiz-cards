import {AsyncStorage} from 'react-native';
import DefaultData from './default-data';

export async function getAllDecks() {
  const defaultDataKeys = Object.keys(DefaultData);
  const defaultValue = defaultDataKeys.map(
      key => [key, JSON.stringify(DefaultData[key])]);

  const keys = await AsyncStorage.getAllKeys();
  const response = await AsyncStorage.multiGet(keys);

  //await AsyncStorage.multiRemove(keys);
  if (response.length > 0) {
    return response.map(storageData => JSON.parse(storageData[1]));
  } else {
    await AsyncStorage.multiSet(defaultValue);
    return getAllDecks();
  }
}

export async function getDeck(id) {
  const response = await AsyncStorage.getItem(id);
  return JSON.parse(response);
}

export async function removeDeck(id) {
  await AsyncStorage.removeItem(id);
  return id;
}

export async function removeCard(deckId, cardId) {
  const deck = await getDeck(deckId);

  deck.questions[cardId] = undefined;
  delete deck.questions[cardId];

  AsyncStorage.mergeItem(deckId, JSON.stringify(deck));
  return deck;
}

export async function addDeck({
                                id = (+new Date()).toString(16),
                                title,
                                description,
                                questions = {},
                              }) {
  const newDeck = {
    [id]: {id, title, description, questions},
  };

  await AsyncStorage.setItem(id, JSON.stringify(newDeck));
  return newDeck;
}

export async function addcard({
                                deckId,
                                cardId = (+new Date()).toString(16),
                                question,
                                answer,
                              }) {
  const deck = await getDeck(deckId);

  deck.questions = {
    ...deck.questions,
    [cardId]: {cardId, question, answer},
  };

  await AsyncStorage.mergeItem(deckId, JSON.stringify(deck));
  return deck;
}

export async function editDeck({id, title, description}) {
  const deck = await getDeck(id);

  deck.title = title;
  deck.description = description;

  AsyncStorage.setItem(id, JSON.stringify(deck));
  return deck;
}

export async function editCard({deckId, cardId, question, answer}) {
  const deck = await getDeck(deckId);

  deck.questions[cardId] = {
    question,
    answer,
  };

  AsyncStorage.mergeItem(deckId, JSON.stringify(deck));
  return deck;
}