import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//React Redux
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk'

import {reduxFirestore, getFirestore } from 'redux-firestore'
import {getFirebase, reactReduxFirebase } from 'react-redux-firebase'

//importing firebase configuration
import fbConfig from './store/reducers/config/fbConfig'

const store = createStore(rootReducer, 
   compose (
     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
     reduxFirestore(fbConfig),
     reactReduxFirebase(fbConfig, {userFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true}) //the second parameter prevents rendering to the dome before connecting to firebase
    )
   )
//userFirestoreProfile enable us to access the user profile on the console
store.firebaseAuthIsReady.then(() => {
    
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
 
   })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
