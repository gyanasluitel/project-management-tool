import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/fbConfig";

//with thunk we can return functions inside action creators which can then interact with database
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    )
  );

ReactDOM.render(
    <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config = {{}}
      dispatch = {store.dispatch}
      createFirestoreInstance = {createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
