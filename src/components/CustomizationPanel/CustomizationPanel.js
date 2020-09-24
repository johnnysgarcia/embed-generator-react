import React from 'react'
import ReactDOM from 'react-dom'
import './CustomizationPanel.css'

import { ChromePicker } from 'react-color'


class CustomizationPanel extends React.Component{
constructor(props){
  super(props)
  this.state  = {
    panelRoundness: 50
  }
  this.changePanelRoundness = this.changePanelRoundness.bind(this)
}

changePanelRoundness(event){

}



render(){
    return(
      <div id="customizationPanel">
      <div id="chromePicker">
        <label>Button Color:</label>
        <ChromePicker color={this.props.color} onChange={this.props.onChange}/>
      </div>
      <div id="sliders">
        <label>Panel Roundness:</label>
        <input type="range" min="0" max="35" value={this.props.panelRoundness} class="slider" onChange={this.props.changePanelRoundness}></input>
        <label>Button Roundness:</label>
        <input type="range" min="0" max="50" value={this.props.panelRoundness} class="slider" onChange={this.props.changeButtonRoundness}></input>
        <label>Title Font Size:</label>
        <input type="range" min=".5" max="3"  value={this.props.titleFontSize} class="slider" step="0.1" onChange={this.props.changeTitleFontSize}></input>
        <label>Subtitle Font Size:</label>
        <input type="range" min=".5" max="2"  class="slider" step="0.1" onChange={this.props.changeSubtitleFontSize}></input>
        <label>Button Size:</label>
        <input type="range" min="15" max="30"  class="slider"  onChange={this.props.changeButtonSize}></input>
      </div>
      </div>

    )
  }
}

export default CustomizationPanel
