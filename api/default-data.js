export const defaultDecks = {
  'deckJsID': {
    id: 'deckJsID',
    title: 'JavaScript',
    description: 'Increase your JS skill',
  },
  'deckReactID': {
    id: 'deckReactID',
    title: 'React',
    description: 'How good you know React',
  },
};

export const defaultCards = {
  cardID1: {
    id: 'cardID1',
    parentDeck: 'deckReactID',
    question: 'What is React?',
    answer: 'A library for managing user interfaces',
  },
  cardID2: {
    id: 'cardID2',
    parentDeck: 'deckReactID',
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event',
  },
  cardID3: {
    id: 'cardID3',
    parentDeck: 'deckJsID',
    question: 'What is a closure?',
    answer: 'The combination of a function and the lexical environment within which that function was declared.',
  },
};
