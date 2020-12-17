
import axios from "axios";
import { GET_CONTACTS } from "../actions/types";

const CONTACTS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getContacts = () => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.get(CONTACTS_API_URL )
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_CONTACTS,
          payload: response.data
        });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
};
