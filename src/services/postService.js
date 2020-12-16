// Step 12: Work on Service layer and its methods
import axios from 'axios';
import { ADD_POST } from "../actions/types";

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = (formData) => {
  return (dispatch) => {
    console.log(dispatch);
    // AJAX call to add a post
    return axios.post(POSTS_API_URL, formData )
      .then(response => {
        console.log(response);
        dispatch({
          type: ADD_POST,
          payload: {
            id: response.data.id,
            title: response.data.title,
            body: response.data.body
          }
        });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
};
