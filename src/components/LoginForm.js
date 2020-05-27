import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      letterCount: 0,
    };
  }


  handleInputChange = event => {

    this.setState({
        [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={(event) => {
          event.preventDefault();
          if((this.state.username.length!=0&&this.state.password.length!=0)){
          console.log("logged in")
          this.props.handleLogin()
        }}}

        >
        <div>
          <label>
            Username:
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
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
