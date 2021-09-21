import React from 'react'
import './Embed.css'
import Panel from '../Panel/Panel'
import ReactDOMServer from 'react-dom/server'


//cycles through embed prop, creating panels for each object
class Embed extends React.Component {

  constructor(props){
    super(props)
    this.generateHTML = this.generateHTML.bind(this)
  }

  generateHTML(){
  }

  render(){
    return (
      <div id="content-container">
      <link rel="stylesheet" href={"https://fh-kit.com/buttons/v2/?red=cc0000&orange=ff6000&green=3AB134&color=" + this.props.color} type="text/css" media="screen" />
      <div id="fh-image-button-container">
        {this.props.panel.map((item, index) => (<Panel panel={item} index={index} panelRoundness={this.props.panelRoundness} buttonRoundness={this.props.buttonRoundness}
           titleFontSize={this.props.titleFontSize} subtitleFontSize={this.props.subtitleFontSize}/>))}
      </div>
      {/* Only working way i found to override button styles from stylesheet, manually appends this html into DOM , insert new CSS for button margin here */}
      <style dangerouslySetInnerHTML={{__html: `
      .fh-button-true-flat-color.fh-size--small { border-radius: ${this.props.buttonRoundness} !important; font-size: ${this.props.buttonSize} !important; margin: 0% 3.5% 15px 3.5% !important;}
      .title {font-size: ${this.props.titleFontSize} !important}
      .subtitle {font-size: ${this.props.subtitleFontSize} !important}
      .panel {border-radius: ${this.props.panelRoundness} !important}
    `}} />
      </div>


    )
  }
}


export default Embed
