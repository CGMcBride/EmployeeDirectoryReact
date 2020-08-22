import React from 'react';
import './App.css';
import Search from './components/Search'
import Directory from './components/Directory'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
      </header>
      <Search />
      <Directory />
    </div>
  );
}


export default App;
