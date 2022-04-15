import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layouts/header';
import './styles/main.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header />
  </div>
);
