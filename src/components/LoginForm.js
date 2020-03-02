import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handelChange = event =>{
    this.setState({ [event.target.name] : event.target.value })
  }

  handelSubmit = event => {
    event.preventDefault()
    if(this.state.username != "" && this.state.password != ""){
    this.props.handleLogin(this.state)
    }

  }

  render() {
    return (
      <form onSubmit = {this.handelSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.handelChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.handelChange} type="password" />
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
