import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: Setup the the Redux Store here
import { createStore, applyMiddleware } from 'redux';

// Step 5: planning to pass rootReducer into createStore method as arg
import rootReducer from './reducers'; 

// Step 6:  Provide the store data to the entire app 
import { Provider } from 'react-redux'; 

// Step 14:
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// Step 2: creating Store and save it in a const
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //this needs a special argument called 'reducer'

//Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components 
//that needs to access it without the need to pass props.
//Provider should be imported from react-redux 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>    { /* this is how we have to provide store data to the app */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
