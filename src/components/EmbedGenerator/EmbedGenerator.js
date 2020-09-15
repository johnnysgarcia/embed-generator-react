import React from 'react'
import ReactDOM from 'react-dom'
import Embed from '../Embed/Embed.js'
import FormHolder from '../FormHolder/FormHolder.js'
import '../App/App.css';


//these are being used only to decide how many forms to render, change later
const panel = {

}

const embed = [panel, panel
];


const dynamicPanels = [
  {
    title: 'Snorkeling Excursion!',
    subtitle: 'The best snorkeling in the entire world',
    imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182.jpg',
    bookingLink: 'fareharbor.com',
    width: 'half',
    height: 'tall',
    buttonText: 'Book Now'
  },
  {
    title: 'Snorkeling Excursion!',
    subtitle: 'The best snorkeling in the entire world',
    imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182.jpg',
    bookingLink: 'fareharbor.com',
    width: 'half',
    height: 'tall',
    buttonText: 'Book Now'
  }
]

class EmbedGenerator extends React.Component{
constructor(props){
  super(props)
  this.state = {
    dynamicPanels: [
      {
        title: 'Snorkeling Excursion 0!',
        subtitle: 'The best snorkeling in the entire world',
        imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182.jpg',
        bookingLink: 'fareharbor.com',
        width: 'half',
        height: 'tall',
        buttonText: 'Book Now'
      },
      {
        title: 'Snorkeling Excursion 1!',
        subtitle: 'The best snorkeling in the entire world',
        imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182.jpg',
        bookingLink: 'fareharbor.com',
        width: 'half',
        height: 'tall',
        buttonText: 'Book Now'
      }
    ]
  }
  this.handleChange = this.handleChange.bind(this);
}

//takes in object with name value pair, and updates state.

//next step, update this so it updates the correct item in the dynamic panels array insteam of the total state
handleChange(name, value, index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  dynamicPanelsCopy[index][name] = value;
  console.log(dynamicPanelsCopy);
  this.setState({dynamicPanels: dynamicPanelsCopy})
}

render(){
  return (
    <div>
    <FormHolder embed={this.state.dynamicPanels} onChange={this.handleChange}/>

    <Embed panel={this.state.dynamicPanels}/>
    </div>
  )

}

}
export default EmbedGenerator
