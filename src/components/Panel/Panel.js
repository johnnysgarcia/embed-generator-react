import React from 'react';
import './Panel.css'
import ReactDOMServer from 'react-dom/server'



class Panel extends React.Component {

  renderHTML(){
      console.log("Hi BICH")
  }

  render(){
    return(
      <a className={"image-button -" +  this.props.panel.width + " -" + this.props.panel.height} target="_blank" style={{backgroundImage: `url(${this.props.panel.imageURL})`}} href={this.props.panel.bookingLink}>
          <span className="tour-info">{this.props.panel.title}<br/>
            <span>{this.props.panel.subtitle}</span>
          </span>
          <span className="fh-button-true-flat-color fh-size--small book-btn">{this.props.panel.buttonText}</span>
      </a>
    )
  }
}


export default Panel;
