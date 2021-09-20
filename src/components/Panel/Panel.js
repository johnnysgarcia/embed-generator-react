import React from 'react';
import './Panel.css'
import ReactDOMServer from 'react-dom/server'



class Panel extends React.Component {


  render(){
    //removes book button altogether if button text field is empty. test
    var bookBtn;
    if (this.props.panel.buttonText){
      bookBtn = <span className="fh-button-true-flat-color fh-size--small book-btn">{this.props.panel.buttonText}</span>
    } else {
      bookBtn = ""
    }

    return(
      <a className={"image-button -" +  this.props.panel.width + " -" + this.props.panel.height + " panel"} target="_blank" style={{backgroundImage: `url(${this.props.panel.imageURL})`}} href={this.props.panel.bookingLink}>
          <span className="tour-info"><span class="title">{this.props.panel.title}</span><br/>
            <span class="subtitle">{this.props.panel.subtitle}</span>
          </span>
          {bookBtn}
      </a>
    )
  }
}


export default Panel;
