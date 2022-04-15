import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layouts/header';
import Randomizer from './components/randomizer'
import './styles/main.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header />
    <main className='row'>
      <Randomizer />
    </main>
  </div>
);
