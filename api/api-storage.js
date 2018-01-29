import {AsyncStorage} from 'react-native';
import DefaultData from './default-data';
import storageKey from './constants';

export async function getAllDecks() {
  const {APP_INIT_KEY, NOTIFICATION_KEY} = storageKey;
  const defaultDataKeys = Object.keys(DefaultData);
  const defaultValue = defaultDataKeys.map(
      key => [key, JSON.stringify(DefaultData[key])]);

  const keys = await AsyncStorage.getAllKeys();
  const response = await AsyncStorage.multiGet(keys);

  if (response.length > 2) {
    const decks = response.filter(storageData =>
    storageData[0] !== APP_INIT_KEY && storageData[0] !== NOTIFICATION_KEY).
        map(storageData => JSON.parse(storageData[1]));

    return decks;
  } else {
    await AsyncStorage.multiSet([
      ...defaultValue,
      [APP_INIT_KEY, JSON.stringify('Challenge::app-installed')],
    ]);

    return getAllDecks();
  }
}

export async function getDeck(id) {
  const response = await AsyncStorage.getItem(id);
  return JSON.parse(response);
}

export async function addDeck({id, title, questions, iconColor}) {
  const newDeck = {
    id, title, questions, iconColor,
  };

  AsyncStorage.setItem(id, JSON.stringify(newDeck));
  return newDeck;
}

export async function removeDeck(id) {
  await AsyncStorage.removeItem(id);
  return id;
}

export async function editDeck({id, title, questions, iconColor}) {
  const deck = await getDeck(id);
  const editedDeck = {
    ...deck,
    title,
    iconColor,
    questions: {...questions},
  };

  AsyncStorage.setItem(id, JSON.stringify(editedDeck));
  return editedDeck;
}

export async function resetApp() {
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
  return await  getAllDecks();
}