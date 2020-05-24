import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
    
  }

  handelMessageChange = event => {
    this.setState({
      message: event.target.value
      
    } , ) 
    console.log(this.state.message)
  } 
  // console.log(event.target.value)
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handelMessageChange(event)} value={this.state.message} type="text" name="message" id="message" />
    <h3>{this.props.maxChars - this.state.message.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
