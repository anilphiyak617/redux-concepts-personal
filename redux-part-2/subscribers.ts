import { postReducerActionTypes } from './postsReducer';
import store from './store';

import { userReducerActionTypes } from './userReducer';
const subscriber1 = () => {
  console.log('this is the subscriber-1', store.getState());
};
const subscriber2 = () => {
  console.log('this is the subscriber-2', store.getState());
};

store.subscribe(subscriber1);
store.subscribe(subscriber2);

const action: userReducerActionTypes = {
  type: 'UPDATE_USER',
  payload: { name: 'karan', address: 'darjeeling' },
};
store.dispatch(action);

const postAction: postReducerActionTypes = {
  type: 'ADD_POST',
  payload: {
    content: 'this is my post conten .......',
    title: 'Giving my All',
  },
};
store.dispatch(postAction);
