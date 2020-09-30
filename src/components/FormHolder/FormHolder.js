import React from 'react'
import './FormHolder.css'
import Form from '../Form/Form.js'



//cycles through embed prop, creating forms for each object
class FormHolder extends React.Component{
  render(){
    return (
      <div id="inputfields">
        {this.props.embed.map((item, index) => {return <Form panel={item} index={index} onChange={this.props.onChange} onShiftLeft={this.props.onShiftLeft} onShiftRight={this.props.onShiftRight}/>
        })}
      </div>

    )

  }

}

export default FormHolder
