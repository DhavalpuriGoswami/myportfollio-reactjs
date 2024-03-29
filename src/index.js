import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './style/GlobalStyle'
import Typography from './style/Typography'

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);