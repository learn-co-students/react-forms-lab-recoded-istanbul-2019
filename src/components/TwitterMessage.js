import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value : "",
      remindCharacter: 280
    };
  }

  handelChange = event => {
    this.setState({value : event.target.value})
    this.setState({remindCharacter : 280 - event.target.value.length })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange = {this.handelChange} />
        <p>{this.state.remindCharacter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
