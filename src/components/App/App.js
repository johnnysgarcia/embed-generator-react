import React from 'react';
import logo from '../../logo.svg';
import EmbedGenerator from '../EmbedGenerator/EmbedGenerator.js'
import './App.css'


function App() {
  return (
    <div className="App">
      <header id="App-header">
      <link rel="stylesheet" href="https://fh-kit.com/buttons/v2/?red=cc0000&orange=ff6000&green=3AB134&color=cc0000" type="text/css" media="screen" />
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
