import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: this.props.maxChars,
      value: '',
      counter: this.props.maxChars
    };
  }

  handleChange = (event) => {
    const { key: eventKey, target: { value: eventValue } } = event;
    let { countStateHolder, maxChars } = this.state;
    return this.setState(
      (prev) => {
        return {
          ...prev,
          value: eventValue,
          counter: maxChars - eventValue.length
        }
      }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          value={this.state.value}
          maxLength={this.state.maxChars}
          onChange={this.handleChange}
        //tabIndex="0"
        />
        <p>Only {this.state.counter} character left for you to use! Use your words wisely! and</p>
      </div>
    );
  }
}
export default TwitterMessage;