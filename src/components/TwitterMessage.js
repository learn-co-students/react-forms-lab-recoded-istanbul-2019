import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  handleMessageChange = event => {
    
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message"
         id="message" 
         value={this.state.message}
          onChange={event =>{ 
            if(event.target.value.length <= this.props.maxChars){
             this.handleMessageChange(event)}}} 
         />
          <p>{this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
