import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value:""
    };
  }

  handleChange=(event)=>{
    this.setState({
      value:event.target.value
    })
  }
  render() {
    console.log(this.state.value.length);
    
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" maxLength={this.props.maxChars} name="message" id="message" />
        <p>{280-this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
