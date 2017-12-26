import {AsyncStorage} from 'react-native';

export const key = {
  CARDS: 'QuizCards:cards',
  DECKS: 'QuizCards:decks',
};

export async function getAll(key, defaultData) {
  try {
    const response = await AsyncStorage.getItem(key);

    if (response !== null) {
      return await JSON.parse(response);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(defaultData));
      return getAll(key, defaultData);
    }
  } catch (err) {
    console.log(err);
  }
}

export const getById = (id, getData) => getData().then(response => response[id]);

export async function remove(key, id, getData) {
  const response = await getData();

  const remove = id => {
    response[id] = undefined;
    delete response[id];
  };

  Array.isArray(id)
      ? id.forEach(remove)
      : remove(id);

  await AsyncStorage.setItem(key, JSON.stringify(response));
  return await getData();
}

export async function add(key, newData, getData) {
  await AsyncStorage.mergeItem(key, newData);
  return await getData();
}

export async function edit(key, editedData, getData) {
  const response = await getData();
  const newData = {
    ...response,
    ...editedData,
  };

  await AsyncStorage.setItem(key, JSON.stringify(newData));
  return await getData();
}