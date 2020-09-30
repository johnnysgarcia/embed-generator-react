import React from 'react'
import './Form.css'
import Panel from '../Panel/Panel.js'
import ReactDOM from 'react-dom'



const buttonContainer = document.getElementById('portal-root');

class Form extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.shiftLeft = this.shiftLeft.bind(this)
    this.shiftRight = this.shiftRight.bind(this)
  }

//creates a name value pair for the input that changed, passes it up as an object
  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.props.onChange(name, value, this.props.index)
  }

  shiftLeft(event){
    this.props.onShiftLeft(this.props.index);
  }

  shiftRight(event){
    this.props.onShiftRight(this.props.index);
  }

  render(){
    return (

      <form id="embedForm" onChange={this.handleChange}>
          <div id="newItem">
          <label>Tour title:</label><br/>
      <input type="text" name="title" id="tourTitle"  value={this.props.panel.title} required></input><br/>
      <label>Tour subtitle:</label><br/>
      <input type="text" name="subtitle" id="tourSubtitle"  value={this.props.panel.subtitle} required></input><br/>
      <label>Image URL:</label><br/>
      <input type="text" name="imageURL" id="tourImage" value={this.props.panel.imageURL} required></input><br/>
      <label>Booking URL:</label><br/>
      <input type="text" name="bookingLink" id="tourBooking" value={this.props.panel.bookingLink}required></input><br/>
      <div class="radio">
         <div>
           <label>Panel Width:</label><br/>
           <label>1/3</label><input type="radio" name="width" value="third" checked={this.props.panel.width === "third"} required></input>
           <label>1/2</label><input type="radio" name="width" value="half" checked={this.props.panel.width === "half"}required></input>
           <label>2/3</label><input type="radio" name="width" value="twothirds" checked={this.props.panel.width === "twothirds"}required></input>
           <label>Full</label><input type="radio" name="width" value="full" checked={this.props.panel.width === "full"}required></input><br/>
         </div>
         <div>
            <label>Panel Height:</label><br/>
            <label>Tall</label><input type="radio" name="height" value="tall" checked={this.props.panel.height === "tall"} required></input>
            <label>Medium</label><input type="radio" name="height" value="medium" checked={this.props.panel.height === "medium"}required></input>
            <label>Short</label><input type="radio" name="height" value="short"  checked={this.props.panel.height === "short"}required></input>
        </div>
        </div>
        <div>
          <label>Button Text:</label><br/>
          <input type="text" name="buttonText" id="buttonText" value={this.props.panel.buttonText} defaultValue="Book Now"></input>
          <a onClick={this.shiftLeft} id="shiftLeft" className="shift">Shift Left</a>
          <a onClick={this.shiftRight} id="shiftRight" className="shift">Shift Right</a>
        </div>

    </div>
  </form>

    )
  }
}

export default Form
