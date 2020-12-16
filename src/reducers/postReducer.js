/*
What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

// Step 3: Setup Reducer for the store

// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = [], action ) => { // action will have action.type and action.payload

   // Step 8.1 
  //now it is time to understand the concept called 'Actions'
  //What are Actions? 
  //Actions are plain Javascript objects with a type property. 
  //This type property describes the event that is taking place 
  //in the application. 
  // action.type = Event
  switch(action.type){
    case ADD_POST:
      //Step 8.2 - clarification - of the following code, 
      //action.payload = successful resp from backend upon Add Post. 
      console.log('Saved Successfully!');
      let addPostState = [
        ...state,
        action.payload
      ];
      return addPostState;
    case GET_POSTS: 
      return state;
    case GET_POST_BY_ID: 
      return state;
    case EDIT_POST: 
      return state;
    case DELETE_POST:
      return state;
    default:
      return state;
  }
}

export default postReducer;