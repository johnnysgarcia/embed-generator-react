import React from 'react'
import './Form.css'
import Panel from '../Panel/Panel.js'
import ReactDOM from 'react-dom'



const buttonContainer = document.getElementById('portal-root');

class Form extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

//creates a name value pair for the input that changed, passes it up as an object
  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.props.onChange(name, value, this.props.index)
  }

  render(){
    return (

      <form id="embedForm" onChange={this.handleChange}>
          <div id="newItem">
          <label>Tour title:</label><br/>
      <input type="text" name="title" id="tourTitle"  required></input><br/>
      <label>Tour subtitle:</label><br/>
      <input type="text" name="subtitle" id="tourSubtitle"  required></input><br/>
      <label>Image URL:</label><br/>
      <input type="text" name="imageURL" id="tourImage" required></input><br/>
      <label>Booking URL:</label><br/>
      <input type="text" name="bookingLink" id="tourBooking" required></input><br/>
      <div class="radio">
         <div>
           <label>Panel Width:</label><br/>
           <label>1/3</label><input type="radio" name="width" value="third" required></input>
           <label>1/2</label><input type="radio" name="width" value="half" required></input>
           <label>2/3</label><input type="radio" name="width" value="twothirds" required></input>
           <label>Full</label><input type="radio" name="width" value="full" required></input><br/>
         </div>
         <div>
            <label>Panel Height:</label><br/>
            <label>Tall</label><input type="radio" name="height" value="tall" required></input>
            <label>Medium</label><input type="radio" name="height" value="medium" required></input>
            <label>Short</label><input type="radio" name="height" value="short"  required></input>
        </div>
        <div>
          <label>Button Text:</label><br/>
          <input type="text" name="buttonText" id="buttonText"></input>
        </div>
      </div>
    </div>
  </form>

    )
  }
}

export default Form
