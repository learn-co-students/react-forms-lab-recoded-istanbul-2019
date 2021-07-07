import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handeChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          maxLength={this.props.maxChars}
          value={this.state.message}
          onChange={(event) => {
            this.handeChange(event);
          }}
          type="text"
          name="message"
          id="message"
        />
        <p> {280 - this.state.message.length} letters left </p>
      </div>
    );
  }
}

export default TwitterMessage;
