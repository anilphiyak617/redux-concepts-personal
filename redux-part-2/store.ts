import * as redux from 'redux';
import userReducer from './userReducer';
import postReducer from './postsReducer';

// creating reducer
const rootReducer = redux.combineReducers({
  user: userReducer,
  post: postReducer,
});
console.log('this is store-module');
// attaching the root reducer
const store = redux.createStore(rootReducer);

export default store;
