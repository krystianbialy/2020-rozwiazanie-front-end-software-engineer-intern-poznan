import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './theme/global';
import { App } from './app.component';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  rootElement
);
