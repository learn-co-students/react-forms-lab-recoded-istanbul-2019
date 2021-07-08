import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message : '',
      numitem : 280
    };
  }

  handleChange =(event)=>{
    this.setState({
      message:event.target.value
    })
    const n = this.state.numitem
    this.setState({
        numitem:n - this.state.message.length
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleChange(event)}/>
        {this.state.numitem}
      </div>
    );
  }
}

export default TwitterMessage;
