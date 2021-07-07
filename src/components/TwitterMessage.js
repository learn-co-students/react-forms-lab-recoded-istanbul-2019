import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }
  handleChange = e => {
    let charValue =
      e.key === "Delete" ? this.state.maxChars + 1 : this.state.maxChars - 1;
    this.setState({
      maxChars: charValue,
      message: e.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          value={this.state.message}
          onChange={e => this.handleChange(e)}
          type="text"
          name="message"
          id="message"
        />
        <h4>{this.state.maxChars}</h4>
        <p>{this.state.message}</p>{" "}
      </div>
    );
  }
}

export default TwitterMessage;
