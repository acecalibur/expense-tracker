import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app.component';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');
const jsx = (
  <StrictMode>
    <App />
  </StrictMode>
);

render(jsx, rootEl);
reportWebVitals();
