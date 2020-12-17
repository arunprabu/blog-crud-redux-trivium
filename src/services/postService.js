// Step 12: Work on Service layer and its methods
import axios from 'axios';
import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS, GET_POST_BY_ID } from "../actions/types";

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = (formData) => {
  return (dispatch) => {
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

// getPosts 
// Step 18: writing a method to getPosts
export const getPosts = () => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.get(POSTS_API_URL )
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_POSTS,
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


// getPostById
export const getPostById = (postId) => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.get(POSTS_API_URL+'/'+postId )
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_POST_BY_ID,
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

// updatePost
export const updatePost = (postData) => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.put(POSTS_API_URL+'/'+postData.id, postData)
      .then(response => {
        console.log(response);
        dispatch({
          type: EDIT_POST,
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

// deletePost
export const deletePost = (postId) => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.delete(POSTS_API_URL+'/'+postId)
      .then(response => {
        console.log(response);
        dispatch({
          type: DELETE_POST,
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

// searchPost

