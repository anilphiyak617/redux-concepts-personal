// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
const redux = require('redux');

// attaching reducers to the store
const reducer = (state = { count: 0 }, action) => {
  console.log(action);
  if (action.type == 'increase') {
    return { ...state, count: state.count + 1 };
  }
  if (action.type == 'decrease') {
    return { ...state, count: state.count + 1 };
  }

  console.log('invalid action type');
};

const reducerVal = (state = { count: 0 }, action) => {
  console.log(action);
  if (action.type == 'increase') {
    return { ...state, count: state.count + 6 };
  }
  if (action.type == 'decrease') {
    return { ...state, count: state.count + 6 };
  }

  console.log('invalid action type');
};
// creating store
const store = redux.createStore(reducerVal);
// subscribing to the store actions
const storeSubscriber = () => {
  console.log('storeSubscriber');
  store.getState();
};
store.subscribe(storeSubscriber);
// // dispatching actions '
store.dispatch({ type: 'increase' });
store.dispatch({ type: 'decrease' });
