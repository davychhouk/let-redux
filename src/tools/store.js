// ប្រើ dependencies ដែលយើងបានបញ្ចូល
// និងទាញ reducers មកប្រើ
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

// ពពួក tools ផ្សេងៗដែលយើងប្រើមកជួយក្នុងការសរសរកូដរបស់យើង
// ឧទាហរណ៍ redux_devtools
const enhancers = [];

// ទិន្នន័យចាប់ផ្ដើមដំបូងដែលយើងចង់ឲ្យមាននៅក្នុង store
const initialState = {};

// ពួក middleware ផ្សេងៗដូចជា redux-thunk,
// redux-logger ជាដើម
const middleware = [createLogger()];

// បើសិនជាដំណើរការជា dev mode
// បញ្ចូល redux-devtools
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

// ដើម្បីបញ្ចូល enhancers និង middleware
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// បង្កើត store ដោយប្រើ createStore
// ទទួល reducers, initialState និង enhancers ផ្សេងៗ
const store = createStore(rootReducer, initialState, composedEnhancers);
console.log('store', store.getState());

// ដើម្បីងាយស្រួលប្រើ state និង dispatch an action
const dispatch = store.dispatch;
const getState = store.getState;

// បញ្ចេញឲ្យយកទៅប្រើកន្លែងផ្សេងបាន
export { dispatch, getState };
export default store;
