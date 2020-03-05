import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      password: ''
    };
  }

  handleUserName = event => {
    this.setState({
      firstName: event.target.value
    })
  }


  handlePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault()
    // let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let formData = {
      firstName: this.state.firstName,
      password: this.state.password
    }
    if(formData.firstName != '' && formData.password != ''){

      this.props.handleLogin(formData)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
              onChange={event => this.handleUserName(event)} value={this.state.firstName}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange={event => this.handlePassword(event)} value={this.state.password}
             />
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
