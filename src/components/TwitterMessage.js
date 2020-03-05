import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      yourMessage: ''
    };
  }

  handleMessage = event => {
    if (this.state.yourMessage.length < this.props.maxChars) {
      this.setState({
        yourMessage: event.target.value
      })
    }

  }

  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMessage(event)} value={this.state.yourMessage} />
        <p>{this.props.maxChars - this.state.yourMessage.length} left</p>
      </div>
    );
  }
}

export default TwitterMessage;
