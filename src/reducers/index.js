// ប្រើ combineReducers ដែលយើងបានបញ្ចូលពី redux
// និងទាញ reducers មក combine ចូលក្នុង rootReducer
import { combineReducers } from 'redux';
import PlayReducer from './play-reducer';

// បញ្ចូល reducers ទាំងអស់ក្នុង rootReducer
const rootReducer = combineReducers({
  play: PlayReducer
});

// បញ្ចេញឲ្យយកទៅប្រើកន្លែងផ្សេងបាន
export default rootReducer;
