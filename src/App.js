import './App.css';
import React, {Component} from 'react';
import TypeAhead from './TypeAhead.js';


class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <TypeAhead />
      </div>
    )
  }
}

export default App;

//CHOKIDAR_USEPOLLING=true yarn start