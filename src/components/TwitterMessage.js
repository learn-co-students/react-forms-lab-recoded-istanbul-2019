import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg : ''
    };
  }

  handelChange = event =>{
    this.setState({
      msg : event.target.value
    }
    )

  }
  render() {
    let counterChar = this.props.maxChars - this.state.msg.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.msg} onChange={this.handelChange}/>
        <h3>
        only {counterChar} characters left 
        </h3>
      </div>
    );
  }
}

export default TwitterMessage;
