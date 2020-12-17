import { GET_CONTACTS } from "../actions/types";

const contactsReducer = (state = [], action ) => {
  switch(action.type){  
    case GET_CONTACTS: 
      debugger;
      return action.payload;

    default:
      return state;
  }
}

export default contactsReducer;