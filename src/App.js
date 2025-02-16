import React from 'react';
import './App.css';
import Page_name from './Components/Header';
import Social_icons from './Components/Social_icons';


function App() {
  return (
    <div className="App">
      <div className='Header'>
      <Page_name />
      <Social_icons />
      </div>
    </div>
  );
}

export default App;
