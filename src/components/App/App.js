import React from 'react';
import logo from '../../logo.svg';
import EmbedGenerator from '../EmbedGenerator/EmbedGenerator.js'
import './App.css'


function App() {
  return (
    <div className="App">
      <header id="App-header">
        <center>
          <h1> Fareharbor Custom Embed Generator</h1>
        </center>
      </header>
      <EmbedGenerator/>
      <center>
      <footer>
      <h4> Developed by Johnny Garcia</h4>
      </footer>
      </center>
  </div>
  );
}

export default App;
