import React from 'react'
import ReactDOM from 'react-dom'
import Embed from '../Embed/Embed.js'
import FormHolder from '../FormHolder/FormHolder.js'
import CustomizationPanel from '../CustomizationPanel/CustomizationPanel.js'
import './EmbedGenerator.css'
import ReactDOMServer from 'react-dom/server'
import { ChromePicker } from 'react-color'

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
    color: 'ff6000',
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
        title: 'Kayaking Experience',
        subtitle: 'See all the sights and sounds as you kayak down a river',
        imageURL: 'https://www.nps.gov/glba/planyourvisit/images/KayakinginGLBA.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
        bookingLink: 'fareharbor.com',
        width: 'half',
        height: 'tall',
        buttonText: 'Book Now'
      }
    ],
    htmlContents: "",
    displayCustomization: false,
    panelRoundness: '15px',
    buttonRoundness: '5px',
    titleFontSize: '1em',
    subtitleFontSize: '.7em',
    buttonSize: '20px'
  }
  this.addPanel = this.addPanel.bind(this);
  this.removePanel = this.removePanel.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.renderCode = this.renderCode.bind(this);
  this.handleShiftLeft = this.handleShiftLeft.bind(this);
  this.handleShiftRight = this.handleShiftRight.bind(this);
  this.changeButtonColor = this.changeButtonColor.bind(this);
  this.handleToggle = this.handleToggle.bind(this)
  this.handleClose = this.handleClose.bind(this)
  this.setPanelRoundness = this.setPanelRoundness.bind(this)
  this.setButtonRoundness = this.setButtonRoundness.bind(this)
  this.setTitleFontSize = this.setTitleFontSize.bind(this)
  this.setSubtitleFontSize = this.setSubtitleFontSize.bind(this)
  this.setButtonSize = this.setButtonSize.bind(this)

}

//takes in object with name value pair, and updates state.

//next step, update this so it updates the correct item in the dynamic panels array insteam of the total state
handleChange(name, value, index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  dynamicPanelsCopy[index][name] = value;
  this.setState({dynamicPanels: dynamicPanelsCopy}, () => {
    this.renderCode()
  })
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
  var htmlContents = ReactDOMServer.renderToString(<Embed panel={this.state.dynamicPanels} color={this.state.color}/>);
  htmlContents += `
  <style>#content-container {
    border: 2px rgb(11, 11, 11, .41) solid;
    min-height: 200px;
    width: 100%;
    border-radius: 4px;
    margin-top: 15px;
  }


  #fh-image-button-container {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
          flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
          justify-content: space-between;
  font-size: 20px;
  margin: 15px;
  }

        #fh-image-button-container .image-button {
          display: -webkit-box;
          display: flex;
          position: relative;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
                  flex-direction: column;
          -webkit-box-pack: end;
                  justify-content: flex-end;
          box-sizing: border-box;
          padding: 1em;
          margin: 0.5%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          border-radius: ${this.state.panelRoundness};
          background-size: cover;
          overflow: hidden;
          text-decoration: none;
          -webkit-transition: all 200ms ease;
          transition: all 200ms ease;
          height: 12em; }
          @media (max-width: 800px) {
            #fh-image-button-container .image-button {
              width: 100% !important; } }
          #fh-image-button-container .image-button.-tall {
            height: 17em; }
            #fh-image-button-container .image-button.-medium {
              height: 12em; }
          #fh-image-button-container .image-button.-short {
            height: 7em; }
          #fh-image-button-container .image-button.-half {
            width: 49%; }
          #fh-image-button-container .image-button.-third {
            width: 32.3333333333%; }
          #fh-image-button-container .image-button.-twothirds {
            width: 65.6666666667%; }
            #fh-image-button-container .image-button.-full {
            width: 100%; }
          .fh-button-true-flat-color.fh-size--small { border-radius: ${this.state.buttonRoundness} !important; font-size: ${this.state.buttonSize}}
          #fh-image-button-container .image-button:hover {
            box-shadow: 0 4px 16px -1px rgba(0, 0, 0, 0.6); }
          #fh-image-button-container .image-button:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0px;
            left: 0;
            height: 13em;
            background: -webkit-gradient(linear, left top, left bottom, color-stop(0, transparent), to(black));
            background: -webkit-linear-gradient(top, transparent 0, black 100%);
            background: linear-gradient(to bottom, transparent 0, black 100%); }
          #fh-image-button-container .image-button.-short:before {
              height: 4em;

          }
          #title {
            line-height: 1.3;
            font-size: ${this.state.titleFontSize} !important;
          }
          #subtitle {
            line-height: 1.2;
            font-size: ${this.state.subtitleFontSize} !important
          }
        #fh-image-button-container .badge {
          position: absolute;
          top: 0.5em;
          right: 0.5em;
          display: inline-block;
          padding: 0.5em 1em;
          font-size: 0.6em;
          color: white;
          border-radius: 5px; }
        #fh-image-button-container .tour-info {
          color: white;
          line-height: 1em !important;
          font-size: 1em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 12px rgba(0, 0, 0, 0.6), -10px 6px 40px rgba(0, 0, 0, 0.7), 10px 6px 40px rgba(0, 0, 0, 0.7);
          position: absolute;
          width: 60%;
          text-decoration: none;
          font-weight: bold;
          font-family: sans-serif; }
          @media (max-width: 500px) {
            #fh-image-button-container .tour-info {
              position: relative;
              width: 100%;
              margin-bottom: 1.5em; } }
          #fh-image-button-container .tour-info span {
            font-size: 0.7em;
            font-weight: normal;
            text-decoration: none; }
        #fh-image-button-container .book-btn {
          position: absolute;

          right: 1em; }
          @media (max-width: 500px) {
            #fh-image-button-container .book-btn {
              width: 100%;
              bottom: 0;
              right: 0;
              left: 0;
              box-sizing: border-box; } }</style>
`
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

changeButtonColor(event){
  const newColor = event.hex.substring(1)
  this.setState({
    color: newColor
  })
  this.renderCode()
}

handleToggle(){
  this.setState({
    displayCustomization : !this.state.displayCustomization
  })
}

handleClose(){
  this.setState({
    displayCustomization : false
  })
}

setPanelRoundness(event){
  var val = event.target.value;
  val += "px"
  this.setState({
    panelRoundness: val
  })
  this.renderCode()
}

setButtonRoundness(event){
  var val = event.target.value;
  val += "px"
  this.setState({
    buttonRoundness: val
  })
  this.renderCode()
}

setTitleFontSize(event){
  var val = event.target.value;
  val += "em"
  this.setState({
    titleFontSize: val
  })
  this.renderCode()
}

setSubtitleFontSize(event){
  var val = event.target.value;
  val += "em"
  this.setState({
    subtitleFontSize: val
  })
  this.renderCode()
}

setButtonSize(event){
  var val = event.target.value;
  val += "px"
  this.setState({
    buttonSize: val
  })
  this.renderCode()
}


render(){
  return (
    <div id="pagearea">
    <link rel="stylesheet" href={"https://fh-kit.com/buttons/v2/?red=cc0000&orange=ff6000&green=3AB134"} type="text/css" media="screen" />
    <FormHolder embed={this.state.dynamicPanels} onChange={this.handleChange} onShiftLeft={this.handleShiftLeft} onShiftRight={this.handleShiftRight}/>
    <center>
    <span class='button'><a className="fh-button-true-flat-green fh-shape--round" onClick={this.addPanel}>Add Panel</a></span>
    <span class='button'>  <a className="fh-button-true-flat-red fh-shape--round" onClick={this.removePanel}>Remove Panel</a></span></center><br/>
    <div>
    <center>  <a className="fh-button-true-flat-orange fh-shape--round" onClick={this.handleToggle}>Additional Customization Options</a>

       { this.state.displayCustomization ? <div id="popover">
         <div id="cover"/>
         <CustomizationPanel color={this.state.color} onChange={this.changeButtonColor} changeTitleFontSize={this.setTitleFontSize}
         changeSubtitleFontSize={this.setSubtitleFontSize} changePanelRoundness={this.setPanelRoundness} titleFontSize={this.state.fontSize}
         subtitleFontSize={this.state.subtitleFontSize} changeButtonRoundness={this.setButtonRoundness} changeButtonSize={this.setButtonSize} buttonSize={this.state.buttonSize}/>
       </div> : null }
       </center>
     </div>
    <h2>Embed Preview</h2>
    <Embed id="mainEmbed" panel={this.state.dynamicPanels} color={this.state.color} panelRoundness={this.state.panelRoundness} buttonRoundness={this.state.buttonRoundness}
    titleFontSize={this.state.titleFontSize} subtitleFontSize={this.state.subtitleFontSize} buttonSize={this.state.buttonSize}/>
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
