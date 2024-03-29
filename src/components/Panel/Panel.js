import React from 'react';
import './Panel.css'
import ReactDOMServer from 'react-dom/server'



class Panel extends React.Component {


  render(){
    //removes book button altogether if button text field is empty. test
    var bookBtn;
    if (this.props.panel.buttonText){
      bookBtn = <a className="fh-button-true-flat-color fh-size--small book-btn" href={this.props.panel.bookingLink}>{this.props.panel.buttonText}</a>
    } else {
      bookBtn = ""
    }

    return(
      <div className={"image-button -" +  this.props.panel.width + " -" + this.props.panel.height + " panel"} target="_blank" >
        <a className="imgLink" href={this.props.panel.bookingLink}><span class='bgimage' style={{backgroundImage: `url(${this.props.panel.imageURL})`}}></span></a>
        <span class="tour-info">
          <span class="title">{this.props.panel.title}</span><br/>
          <span class="subtitle">{this.props.panel.subtitle}</span>
        </span>
          {bookBtn}
      </div>
    )
  }
}


export default Panel;
