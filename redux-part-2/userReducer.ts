import * as redux from 'redux';
//  1. creating reducers
//  2. creating store and attaching reducers
//  3. subscribing to the store
//  4. dispatching actions

export type userStateTypes = { name: string | null; address: string | null };

export type userReducerActionTypes = {
  type: string;
  payload: Partial<userStateTypes>;
};

const initialState: userStateTypes = {
  name: '',
  address: '',
};

const userReducer = (state = initialState, action: userReducerActionTypes) => {
  if (action.type === 'UPDATE_USER') {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return state;
  }
};

export default userReducer;
