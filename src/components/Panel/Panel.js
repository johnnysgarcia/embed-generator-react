import React from 'react';
import './Panel.css'
import ReactDOMServer from 'react-dom/server'



class Panel extends React.Component {

  render(){
    var styles = {
      borderRadius: `${this.props.panelRoundness}`,
      backgroundImage: `url(${this.props.panel.imageURL})`
    }

    //removes book button altogether if button text field is empty
    var bookBtn;
    if (this.props.panel.buttonText){
      bookBtn = <span className="fh-button-true-flat-color fh-size--small book-btn" >{this.props.panel.buttonText}</span>
    } else {
      bookBtn = ""
    }

    return(
      <a className={"image-button -" +  this.props.panel.width + " -" + this.props.panel.height} target="_blank" style={styles} href={this.props.panel.bookingLink}>
          <span className="tour-info"><span style={{fontSize: `${this.props.titleFontSize}`}} id="title">{this.props.panel.title}</span><br/>
            <span style={{fontSize: `${this.props.subtitleFontSize}`}} id="subtitle">{this.props.panel.subtitle}</span>
          </span>
          {bookBtn}
      </a>
    )
  }
}


export default Panel;
