import React from 'react'
import ReactDOM from 'react-dom'
import Embed from '../Embed/Embed.js'
import FormHolder from '../FormHolder/FormHolder.js'
import './EmbedGenerator.css'
import ReactDOMServer from 'react-dom/server'


const defaultPanel = {
  title: 'Snorkeling Excursion!',
  subtitle: 'The best snorkeling in the entire world',
  imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2018/08/shutterstock_664589182.jpg',
  bookingLink: 'fareharbor.com',
  width: 'half',
  height: 'tall',
  buttonText: 'Book Now'
}

class EmbedGenerator extends React.Component{
constructor(props){
  super(props)
  this.state = {
    dynamicPanels: [
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
  }
  this.addPanel = this.addPanel.bind(this);
  this.removePanel = this.removePanel.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.renderCode = this.renderCode.bind(this);
  this.handleShiftLeft = this.handleShiftLeft.bind(this);
  this.handleShiftRight = this.handleShiftRight.bind(this);

}

//takes in object with name value pair, and updates state.

//next step, update this so it updates the correct item in the dynamic panels array insteam of the total state
handleChange(name, value, index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  dynamicPanelsCopy[index][name] = value;
  this.setState({dynamicPanels: dynamicPanelsCopy})
  this.renderCode()
}

addPanel(){
  const tempDynamicPanels = this.state.dynamicPanels;
  tempDynamicPanels.push(defaultPanel);
  this.setState({dynamicPanels : tempDynamicPanels})
  this.renderCode()
}

removePanel(){
  const tempDynamicPanels = this.state.dynamicPanels;
  tempDynamicPanels.pop();
  this.setState({dynamicPanels : tempDynamicPanels})
  this.renderCode()
}

renderCode(){
  const htmlContents = ReactDOMServer.renderToString(<Embed panel={this.state.dynamicPanels}/>);
  this.setState({htmlContents: htmlContents})
}

handleShiftLeft(index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  if (dynamicPanelsCopy[index - 1] === undefined){
    alert('cant do that')
  } else {
  let tempPanel = dynamicPanelsCopy[index]
  dynamicPanelsCopy[index] = dynamicPanelsCopy[index - 1];
  dynamicPanelsCopy[index - 1] = tempPanel;
  this.setState({dynamicPanels: dynamicPanelsCopy})
}
}

handleShiftRight(index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  if (dynamicPanelsCopy[index + 1] === undefined){
    alert('cant do that')
  } else {
    let tempPanel = dynamicPanelsCopy[index]
    dynamicPanelsCopy[index] = dynamicPanelsCopy[index + 1];
    dynamicPanelsCopy[index + 1] = tempPanel;
    this.setState({dynamicPanels: dynamicPanelsCopy})
  }
}

render(){
  return (
    <div id="pagearea">
    <FormHolder embed={this.state.dynamicPanels} onChange={this.handleChange} onShiftLeft={this.handleShiftLeft} onShiftRight={this.handleShiftRight}/>
    <center><a className="fh-button-true-flat-green fh-shape--round" onClick={this.addPanel}>Add Panel</a>
    <a className="fh-button-true-flat-red fh-shape--round" onClick={this.removePanel}>Remove Panel</a></center>
    <h2>Embed Preview</h2>
    <Embed panel={this.state.dynamicPanels}/>
    <h2>Copy and paste this code</h2>
     <center>
       <div>
         <textarea id="afil_code" rows="25" disabled="true" value={this.state.htmlContents}>
         </textarea>
       </div>

     </center>
    </div>
  )

}

}
export default EmbedGenerator
