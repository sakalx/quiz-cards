import {combineReducers} from 'redux';
import decks from './decks';
import snack from './snack';
import spinner from './spinner';

export default combineReducers({decks, snack, spinner});