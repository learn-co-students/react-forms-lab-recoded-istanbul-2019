import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      comment:'',
    };
  }
  handleChange = event => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.comment} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.comment.length}characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
