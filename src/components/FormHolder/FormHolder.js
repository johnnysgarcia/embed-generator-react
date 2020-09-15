import React from 'react'
import './FormHolder.css'
import Form from '../Form/Form.js'


class FormHolder extends React.Component{
  render(){
    return (
      <div id="inputfields">
        {this.props.embed.map((item, index) => {return <Form panel={item} index={index} onChange={this.props.onChange}/>
        })}
      </div>

    )

  }

}

export default FormHolder
