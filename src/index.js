import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'normalize.css';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';

render(
  <>
    <FirebaseContext.Provider value = {{ firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);