import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      message: "",
    };
  }


  handleChange = (event) => {
    let letterCount = (event.target.value).length;
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)}
       maxLength={this.props.maxChars} name="message" id="message" placeholder="enter a message" value={this.state.message} />
     <p>Letters left: {this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
