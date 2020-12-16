/* work on combining all reducers for the entire app
  and have the following code  */

//Step 4
//Step 4.1: Combining Reducers using Redux's combineReducers
import { combineReducers } from 'redux';

//Step 4.2 loading all reducers
import postReducer from './postReducer'; 

//Step 4.3 combine all reducers into one big object for store
const rootReducer = combineReducers({
  posts: postReducer
  // other reducers can come here
});

export default rootReducer; 