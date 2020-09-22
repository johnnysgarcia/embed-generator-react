import React from 'react'
import './Embed.css'
import Panel from '../Panel/Panel'
import ReactDOMServer from 'react-dom/server'


class Embed extends React.Component {
  render(){
    return (
      <div id="content-container">
      <link rel="stylesheet" href={"https://fh-kit.com/buttons/v2/?red=cc0000&orange=ff6000&green=3AB134&color=" + this.props.color} type="text/css" media="screen" />
      <div id="fh-image-button-container">
        {this.props.panel.map((item, index) => (<Panel panel={item} index={index} panelRoundness={this.props.panelRoundness} buttonRoundness={this.props.buttonRoundness}/>))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
      .fh-button-true-flat-color.fh-size--small { border-radius: ${this.props.buttonRoundness} !important}
    `}} />
      </div>


    )
  }
}


export default Embed
