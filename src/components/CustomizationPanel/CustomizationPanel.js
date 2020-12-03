import React from 'react'
import ReactDOM from 'react-dom'
import './CustomizationPanel.css'

import { ChromePicker } from 'react-color'


class CustomizationPanel extends React.Component{

render(){
    return(
      <div id="customizationPanel">
      <div id="chromePicker">
        <label>Button Color:</label>
        <ChromePicker color={this.props.color} onChange={this.props.changeColor}/>
      </div>
      <div id="sliders">
        <label>Panel Roundness:</label>
        <input type="range" min="0" max="35" defaultValue="15" class="slider" onChange={this.props.changePanelRoundness}></input>
        <label>Button Roundness:</label>
        <input type="range" min="0" max="50" defaultValue="5" class="slider" onChange={this.props.changeButtonRoundness}></input>
        <label>Title Font Size:</label>
        <input type="range" min="10" max="60"  defaultValue="20" class="slider" step="1" onChange={this.props.changeTitleFontSize}></input>
        <label>Subtitle Font Size:</label>
        <input type="range" min="10" max="35"  defaultValue="15" class="slider" step="1" onChange={this.props.changeSubtitleFontSize}></input>
        <label>Button Size:</label>
        <input type="range" min="10" max="25"  defaultValue="15" class="slider"  onChange={this.props.changeButtonSize}></input>
      </div>
      </div>

    )
  }
}

export default CustomizationPanel
