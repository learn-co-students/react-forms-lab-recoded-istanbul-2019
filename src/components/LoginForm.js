import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : ''
    };
  }
  changeHandle = event => {
   
    this.setState({
      [event.target.name ]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
   if(this.state.username !== '' && this.state.password !== ''){
     this.props.handleLogin(this.state)
  }}
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={e=>this.changeHandle(e)} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={e => this.changeHandle(e)} id="password" name="password" type="password" />
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
