import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Items from './sections/Items/Items';
import ShyBall from './sections/ShyBall';

function App() {
  return (
    <div className="container">
      <div className='section-clock'> <Clock /> </div>
      <div className='section-items'> <Items /></div>
      <div className='section-ball'> <ShyBall /></div>
    </div>
  );
}

export default App;
