import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      callback: props.handleLogin,
      username: undefined,
      password: undefined
    };
  }

  handleChange = (e) => {
    return this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    return (this.state.username && this.state.password) && this.state.callback({ username: this.state.username, password: this.state.password });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;