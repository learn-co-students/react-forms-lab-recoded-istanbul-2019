import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: '',
      chars:props.maxChars
    };
  }

  liveUpdate = (e) =>{
    let charNums = this.props.maxChars;
    charNums = charNums - e.target.value.length;
    this.setState({
      chars:charNums,
      message: e.target.value
    })
    
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange = {e=>this.liveUpdate(e) } value = {this.state.message}/>
        <h3>{this.state.chars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
