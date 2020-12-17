/*
What's a Reducer?
    It is a function that takes the current state and 
    an action that was dispatched as it’s parameters and returns the new state.

*/

import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

// initialState for Posts Feature
const initialState = {
  loading: false,
  error: undefined,
  status: undefined,
  postList: [],
  post: {}
}

// Step 3: Setup Reducer for the store
// Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = initialState, action ) => { // action will have action.type and action.payload

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
      const addPostState = {
        ...state,
        postList: [
          ...state.postList,
          action.payload
        ]
      };
      return addPostState;
      
    case GET_POSTS: 
      // insert the payload into postList of state.
      // why we do like the following? 
      // learn https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns 
      const allPostsState = { 
        ...state,
        postList: action.payload
      }

      return allPostsState;

    case GET_POST_BY_ID: 
      const postState = {
        ...state,
        post: action.payload
      }
      return postState;
      
    case EDIT_POST: 
      const updatedPostState = {
        ...state,
        post: action.payload
      }
      return updatedPostState;

    case DELETE_POST:
      const deletedPostState = {
        ...state,
        post: action.payload
      }
      return deletedPostState;

    default:
      return state;
  }
}

export default postReducer;