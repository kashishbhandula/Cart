
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CartItem.css';
import App from './App';//default import only one per module
// import{App as app,Log as log}from'./'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcXbRqK6midW0mskbOf-zJReoNX24h1Vw",
  authDomain: "cart-9fc31.firebaseapp.com",
  projectId: "cart-9fc31",
  storageBucket: "cart-9fc31.appspot.com",
  messagingSenderId: "433109486880",
  appId: "1:433109486880:web:4a86dfa7f4693b858d5b45",
  measurementId: "G-HJ7ZCNMT5Q"
};
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

/*
Babel converts JSX to JS

{} use to write Js Expression(code that can be written in single line);

React component should start from capital to differ from html

*/