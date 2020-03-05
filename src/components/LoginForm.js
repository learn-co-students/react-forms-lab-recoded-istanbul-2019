import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      passW: ''
    };
  }

  handleUserNameChange = event =>{
    this.setState({
      userName : event.target.value,

    })
  }

  handlePassChange = event =>{
    this.setState({
      passW : event.target.value,

    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    if(this.state.passW && this.state.userName){
      this.props.handleLogin(this.state)


    }


  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.userName} onChange={this.handleUserNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.passW} onChange={this.handlePassChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
