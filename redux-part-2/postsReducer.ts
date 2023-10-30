import { stat } from 'fs';
import * as redux from 'redux';

export type postType = { title: string; content: string };
export type postReducerActionTypes = {type:string,payload:postType}
// Creating reducers
const initialState: postType[] = []; // Initialize the state with an empty array of postType

const postReducer = (
  state = initialState,
  action: postReducerActionTypes
) => {
  if (action.type === 'ADD_POST') {
    // If the action type is 'ADD_POST', return the updated state
    const updatedState = [...state];
    updatedState.push(action.payload);
    return updatedState;
  }

  // If the action type is not 'ADD_POST', return the current state
  return state;
};

export default postReducer;
