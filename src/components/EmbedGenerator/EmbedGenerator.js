import React from 'react'
import ReactDOM from 'react-dom'
import Embed from '../Embed/Embed.js'
import FormHolder from '../FormHolder/FormHolder.js'
import CustomizationPanel from '../CustomizationPanel/CustomizationPanel.js'
import './EmbedGenerator.css'
import ReactDOMServer from 'react-dom/server'
import Panel from '../Panel/Panel.js'
import { ChromePicker } from 'react-color'
import download from 'downloadjs'

const panel2 = {
  title: 'Scuba Experience',
  subtitle: 'The best scuba diving around',
  imageURL: 'https://www.leisurepro.com/blog/wp-content/uploads/2010/05/shutterstock_141494932-1-1366x800@2x.jpg',
  bookingLink: 'fareharbor.com',
  width: 'third',
  height: 'tall',
  buttonText: 'Book Now'
}

const panel0 = {
    title: 'Private Sailing Lessons',
    subtitle: 'Learn the ins and outs of sailing',
    imageURL: 'https://i.pinimg.com/originals/1e/42/90/1e42908e712989ecaec19848be0e1d9f.jpg',
    bookingLink: 'fareharbor.com',
    width: 'third',
    height: 'tall',
    buttonText: 'Book Now'
}

const panel1 =  {
        title: 'Kayaking Excursion',
        subtitle: 'See all the sights and sounds as you kayak down a river',
        imageURL: 'https://www.nps.gov/glba/planyourvisit/images/KayakinginGLBA.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
        bookingLink: 'fareharbor.com',
        width: 'third',
        height: 'tall',
        buttonText: 'Book Now'
    }

    const emptyPanel = {
      title: '',
      subtitle: '',
      imageURL: '',
      bookingLink: '',
      width: 'third',
      height: 'tall',
      buttonText: 'Book Now'
    }

class EmbedGenerator extends React.Component{
constructor(props){
  super(props)
  this.state = {
    color: 'ff6000',
    dynamicPanels: [
      panel0,
      panel1,
      panel2
    ],
    htmlContents: "",
    displayCustomization: false,
    panelRoundness: '15px',
    buttonRoundness: '5px',
    titleFontSize: '20px',
    subtitleFontSize: '15px',
    buttonSize: '15px'
  }
  this.addPanel = this.addPanel.bind(this);
  this.removePanel = this.removePanel.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.renderCode = this.renderCode.bind(this);
  this.handleShiftLeft = this.handleShiftLeft.bind(this);
  this.handleShiftRight = this.handleShiftRight.bind(this);
  this.changeButtonColor = this.changeButtonColor.bind(this);
  this.handleToggle = this.handleToggle.bind(this)
  this.setPanelRoundness = this.setPanelRoundness.bind(this)
  this.setButtonRoundness = this.setButtonRoundness.bind(this)
  this.setTitleFontSize = this.setTitleFontSize.bind(this)
  this.setSubtitleFontSize = this.setSubtitleFontSize.bind(this)
  this.setButtonSize = this.setButtonSize.bind(this)
  this.downloadHTML = this.downloadHTML.bind(this)

}

//Generates WYSIWYG code for user to copy and paste
renderCode(){
  var embedCSS = `
  <script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"></script>
<<<<<<< HEAD
 <style> #content-container { min-height: 160px; width: 100%; margin-top: 15px; } #fh-image-button-container { display: -webkit-box;display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row; flex-wrap: wrap; -webkit-box-pack: justify; justify-content: space-between; font-size: 20px; margin: 15px; align-items: flex-start; } #fh-image-button-container .image-button { display: -webkit-box; display: flex;position: relative; -webkit-box-orient: vertical; -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 4px 6px 0 rgb(0 0 0 / 10%); -webkit-box-direction: normal; flex-direction: column; -webkit-box-pack: end; justify-content: center; box-sizing: border-box; margin: 1%; background-position: 50% 50%; background-repeat: no-repeat; border-radius: ${this.state.panelRoundness}; background-size: cover; overflow: hidden; text-decoration: none; -webkit-transition: all 200ms ease; transition: all 200ms ease; } /* fall back widths */ #fh-image-button-container .image-button.-half { flex-basis: 48% !important; } #fh-image-button-container .image-button.-third { flex-basis: 31.3% !important; } #fh-image-button-container .image-button.-twothirds { flex-basis: 64.6666666667%; } #fh-image-button-container .image-button.-full { flex-basis: 100%; } @media only screen and (max-width: 800px) { #fh-image-button-container .image-button.-third { flex-basis: 48% !important; } #fh-image-button-container .image-button.-twothirds { flex-basis: 48% !important; } } .bgimage { display: flex; background-position: center center; background-size: cover; min-height: 10em; filter: brightness(90%); transition: filter 200ms ease; } .image-button:hover > a > span { filter: brightness(110%); } @media only screen and (max-width: 1000px) { .bgimage { min-height: 8em; } } .fh-button-true-flat-color.fh-size--small { border-radius: ${this.state.buttonRoundness} !important; font-size: ${this.state.buttonSize} !important; margin: 0% 3.5% 15px 3.5% !important; } #fh-image-button-container .image-button:hover { box-shadow: 0 4px 16px -1px rgba(0, 0, 0, 0.6); } #fh-image-button-container .badge { position: absolute; top: 0.5em; right: 0.5em; display: inline-block; padding: 0.5em 1em; font-size: 0.6em; color: white; border-radius: 5px; } #fh-image-button-container .tour-info { color: black; line-height: 1em !important; font-size: 1em; padding: 20px 15px !important; text-decoration: none; font-weight: bold; font-family: sans-serif; } .title { flex-basis: 100%; line-height: 1.3; font-size: ${this.state.titleFontSize} !important; } .subtitle { flex-basis: 100%; line-height: 1.2; font-size: ${this.state.subtitleFontSize} !important; } @media (max-width: 500px) { #fh-image-button-container .book-btn { bottom: 0; right: 0; left: 0; box-sizing: border-box; } #fh-image-button-container .image-button.-third { flex-basis: 99% !important; } #fh-image-button-container .image-button.-half{ flex-basis: 99% !important; } #fh-image-button-container .image-button.-twothirds{ flex-basis: 99% !important; } .bgimage { min-height: 10em; } } #fh-image-button-container .tour-info span { font-size: 0.7em; font-weight: normal; text-decoration: none; } </style>
=======
 <style> #content-container { min-height: 160px; width: 100%; margin-top: 15px; } #fh-image-button-container { display: -webkit-box;display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row; flex-wrap: wrap; -webkit-box-pack: justify; justify-content: space-between; font-size: 20px; margin: 15px; align-items: flex-start; } #fh-image-button-container .image-button { display: -webkit-box; display: flex;position: relative; -webkit-box-orient: vertical; -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%), 0 4px 6px 0 rgb(0 0 0 / 10%); -webkit-box-direction: normal; flex-direction: column; -webkit-box-pack: end; justify-content: center; box-sizing: border-box; margin: 1%; background-position: 50% 50%; background-repeat: no-repeat; border-radius: ${this.state.panelRoundness}; background-size: cover; overflow: hidden; text-decoration: none; -webkit-transition: all 200ms ease; transition: all 200ms ease; } /* fall back widths */ #fh-image-button-container .image-button.-half { flex-basis: 48% !important; } #fh-image-button-container .image-button.-third { flex-basis: 31.3% !important; } #fh-image-button-container .image-button.-twothirds { flex-basis: 64.6666666667%; } #fh-image-button-container .image-button.-full { flex-basis: 100%; } @media only screen and (max-width: 800px) { #fh-image-button-container .image-button.-third { flex-basis: 48% !important; } #fh-image-button-container .image-button.-twothirds { flex-basis: 48% !important; } } .bgimage { display: flex; background-position: center center; background-size: cover; min-height: 10em; filter: brightness(80%); transition: filter 200ms ease; } .image-button:hover > a > span { filter: brightness(100%); } @media only screen and (max-width: 1000px) { .bgimage { min-height: 8em; } } .fh-button-true-flat-color.fh-size--small { border-radius: ${this.state.buttonRoundness} !important; font-size: ${this.state.buttonSize} !important; margin: 0% 3.5% 15px 3.5% !important; } #fh-image-button-container .image-button:hover { box-shadow: 0 4px 16px -1px rgba(0, 0, 0, 0.6); } #fh-image-button-container .badge { position: absolute; top: 0.5em; right: 0.5em; display: inline-block; padding: 0.5em 1em; font-size: 0.6em; color: white; border-radius: 5px; } #fh-image-button-container .tour-info { color: black; line-height: 1em !important; font-size: 1em; padding: 20px 15px !important; text-decoration: none; font-weight: bold; font-family: sans-serif; } .title { flex-basis: 100%; line-height: 1.3; font-size: ${this.state.titleFontSize} !important; } .subtitle { flex-basis: 100%; line-height: 1.2; font-size: ${this.state.subtitleFontSize} !important; } @media (max-width: 500px) { #fh-image-button-container .book-btn { bottom: 0; right: 0; left: 0; box-sizing: border-box; } #fh-image-button-container .image-button.-third { flex-basis: 99% !important; } #fh-image-button-container .image-button.-half{ flex-basis: 99% !important; } #fh-image-button-container .image-button.-twothirds{ flex-basis: 99% !important; } .bgimage { min-height: 10em; } } #fh-image-button-container .tour-info span { font-size: 0.7em; font-weight: normal; text-decoration: none; } </style>
>>>>>>> 3fd20bf090ec44b046b3fb56dce333a9c43fa832
`

var htmlContents = `
<link rel="stylesheet" href="https://fh-kit.com/buttons/v2/?color=${this.state.color}" type="text/css" media="screen" />
<div id="content-container">
<div id="fh-image-button-container"> \n \n`
this.state.dynamicPanels.map((item, index) => htmlContents += `<!--Panel ` + (index + 1) + `--> \n` + ReactDOMServer.renderToStaticMarkup(<Panel panel={item} index={index}
   titleFontSize={this.props.titleFontSize} subtitleFontSize={this.props.subtitleFontSize}/>) + `\n \n`);
   htmlContents += ` \n </div> \n </div> \n \n <!--The Following is necessary CSS code to format embed -->`
   htmlContents += embedCSS;
  this.setState({htmlContents: htmlContents})
}

//Generates WYSIWYG code on initial page load
componentDidMount(){
  this.renderCode();
}



//handles changes to forms in form.js, takes in index of panel changed, name of property changed and new value
//updates corresponding value in state.dynamicpanels
handleChange(name, value, index){
  let dynamicPanelsCopy = JSON.parse(JSON.stringify(this.state.dynamicPanels));
  dynamicPanelsCopy[index][name] = value;
  this.setState({dynamicPanels: dynamicPanelsCopy}, () => {
    this.renderCode()
  })
}

//creates a new panel, and pushes it to state.dynamicPanels. Pushes different panels depending on size of current array
addPanel(){
  const dynamicPanelsCopy = this.state.dynamicPanels;
  if (dynamicPanelsCopy.length == 0){
    dynamicPanelsCopy.push(panel0);
  } else if (dynamicPanelsCopy.length == 1){
    dynamicPanelsCopy.push(panel1);
  } else if (dynamicPanelsCopy.length == 2){
    dynamicPanelsCopy.push(panel2);
  } else {
    dynamicPanelsCopy.push(emptyPanel);
  }
  this.setState({dynamicPanels : dynamicPanelsCopy})
  this.renderCode()
}

//pops most recent panel from state.dynamicPanels
removePanel(){
  const dynamicPanelsCopy = this.state.dynamicPanels;
  dynamicPanelsCopy.pop();
  this.setState({dynamicPanels : dynamicPanelsCopy})
  this.renderCode()
}



//swaps objets at positions index and index - 1 in state.dynamicPanels
handleShiftLeft(index){
  let dynamicPanelsCopy = this.state.dynamicPanels;
  if (dynamicPanelsCopy[index - 1] !== undefined){
    let tempPanel = dynamicPanelsCopy[index]
    dynamicPanelsCopy[index] = dynamicPanelsCopy[index - 1];
    dynamicPanelsCopy[index - 1] = tempPanel;
    this.setState({dynamicPanels: dynamicPanelsCopy}, () => {
      this.renderCode()
    })
  }
}

//swaps objets at positions index and index + 1 in state.dynamicPanels
handleShiftRight(index){
  let dynamicPanelsCopy = this.state.dynamicPanels;
  if (dynamicPanelsCopy[index + 1] !== undefined){
    let tempPanel = dynamicPanelsCopy[index]
    dynamicPanelsCopy[index] = dynamicPanelsCopy[index + 1];
    dynamicPanelsCopy[index + 1] = tempPanel;
    this.setState({dynamicPanels: dynamicPanelsCopy}, () => {
      this.renderCode()
    })
  }
}


//toggles view of customizationPanel
handleToggle(){
  this.setState({
    displayCustomization : !this.state.displayCustomization
  })
}

//following set methods take event handlers from customizationPanel, and sets state value for changed properties
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
  val += "px"
  this.setState({
    titleFontSize: val
  })
  this.renderCode()
}

setSubtitleFontSize(event){
  var val = event.target.value;
  val += "px"
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

changeButtonColor(event){
  const newColor = event.hex.substring(1)
  this.setState({
    color: newColor
  })
  this.renderCode()
}

downloadHTML(){
  download(this.state.htmlContents, "custom_embed.txt", "text/plain");
}



render(){
  return (
    <div id="pagearea">
    <link rel="stylesheet" href={"https://fh-kit.com/buttons/v2/?red=cc0000&orange=ff6000&green=3AB134&blue=246BB8"} type="text/css" media="screen" />
    <FormHolder embed={this.state.dynamicPanels} onChange={this.handleChange} onShiftLeft={this.handleShiftLeft} onShiftRight={this.handleShiftRight}/>
    <center >
    <span class="buttonSpan"><a id="removeButton" className="fh-button-outline-blue fh-shape--round button" onClick={this.removePanel}>Remove</a></span>
    <span class="buttonSpan"><a id="addButton" className="fh-button-outline-blue fh-shape--round button" onClick={this.addPanel}>Add</a></span></center>
    <div>
    <center id="customizeButton"> <span ><a className="fh-button-outline-green fh-shape--round" onClick={this.handleToggle}>Customize</a></span>
       { this.state.displayCustomization ? <div id="popover">
         <div id="cover"/>
         <CustomizationPanel color={this.state.color} changeColor={this.changeButtonColor} changeTitleFontSize={this.setTitleFontSize} panelRoundness={this.state.panelRoundness}
         changeSubtitleFontSize={this.setSubtitleFontSize} changePanelRoundness={this.setPanelRoundness} titleFontSize={this.state.titleFontSize}
         subtitleFontSize={this.state.subtitleFontSize} changeButtonRoundness={this.setButtonRoundness} changeButtonSize={this.setButtonSize} buttonSize={this.state.buttonSize}/>
       </div> : null }
       </center>
     </div>
    <h2>Embed Preview</h2>
    <div id="embed"><Embed id="mainEmbed" panel={this.state.dynamicPanels} color={this.state.color} panelRoundness={this.state.panelRoundness} buttonRoundness={this.state.buttonRoundness}
    titleFontSize={this.state.titleFontSize} subtitleFontSize={this.state.subtitleFontSize} buttonSize={this.state.buttonSize}/></div>
    <h2>Output Code</h2>
     <center>
       <div>
         <textarea id="afil_code" rows="25" disabled="true" value={this.state.htmlContents}>
         </textarea>
       </div>
       <span class="buttonSpan"><a className="fh-button-outline-blue fh-shape--round" style={{border: '3px'}} onClick={this.downloadHTML}>Download File</a></span>

     </center>
    </div>
  )

}

}
export default EmbedGenerator
