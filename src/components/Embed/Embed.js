import React from 'react'
import './Embed.css'
import Panel from '../Panel/Panel'


class Embed extends React.Component {
  render(){
    return (
      <div id="content-container">
      <div id="fh-image-button-container">
      {this.props.panel.map((item, index) => (<Panel panel={item} index={index}/>))}
      </div>
      </div>


    )
  }
}


export default Embed
