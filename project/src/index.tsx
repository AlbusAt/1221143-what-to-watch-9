import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  GENRE: 'Drama',
  YEAR: 2014,
  TITLE: 'The Grand Budapest Hotel',
};

ReactDOM.render(
  <React.StrictMode>
    <App title={Setting.TITLE} genre={Setting.GENRE} year={Setting.YEAR} />
  </React.StrictMode>,
  document.getElementById('root'));
