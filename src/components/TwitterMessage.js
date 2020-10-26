import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input maxLength={this.props.maxChars} type="text" name="message" id="message"
          value={this.state.message} onChange={(event) => this.handleChange(event)} />
        <span>{280 - this.state.message.length} Chars left</span>
      </div>

    );
  }
}

export default TwitterMessage;
