import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }
  handleMessageChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          maxLength={this.props.maxChars}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <p>
          Characters Left: {this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
