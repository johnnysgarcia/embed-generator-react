import React from 'react';
import './Panel.css'
import ReactDOMServer from 'react-dom/server'



class Panel extends React.Component {

  render(){
    var styles = {
      borderRadius: `${this.props.panelRoundness}`,
      backgroundImage: `url(${this.props.panel.imageURL})`
    }

    return(
      <a className={"image-button -" +  this.props.panel.width + " -" + this.props.panel.height} target="_blank" style={styles} href={this.props.panel.bookingLink}>
          <span className="tour-info">{this.props.panel.title}<br/>
            <span>{this.props.panel.subtitle}</span>
          </span>
          {/* dont know why button roundness doesn't work, this doesn't work */}
          <span className="fh-button-true-flat-color fh-size--small book-btn">{this.props.panel.buttonText}</span>
          {}
      </a>
    )
  }
}


export default Panel;
