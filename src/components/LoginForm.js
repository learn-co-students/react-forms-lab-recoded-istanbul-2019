import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handelAllChanges= event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handelSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password)
    return this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handelAllChanges} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handelAllChanges} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button onSubmit={this.props.handleLogin} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
