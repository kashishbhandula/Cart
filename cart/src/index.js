
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CartItem.css';
import App from './App';//default import only one per module
// import{App as app,Log as log}from'./'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
);


reportWebVitals();
/*
Babel converts JSX to JS

{} use to write Js Expression(code that can be written in single line);

React component should start from capital to differ from html

*/