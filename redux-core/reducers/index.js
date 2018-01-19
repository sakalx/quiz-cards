import {combineReducers} from 'redux';
import decks from './decks';
import snack from './snack';

export default combineReducers({decks, snack});