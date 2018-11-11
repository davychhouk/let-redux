import { combineReducers } from 'redux';
import PlayReducer from './play-reducer';

const rootReducer = combineReducers({
  play: PlayReducer
});

export default rootReducer;
