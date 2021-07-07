import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    if(this.state.password && this.state.username){
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={(e)=>this.setState({username: e.target.value})}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={(e)=>this.setState({password: e.target.value})}
            />
          </label>
        </div>
        <div>
          <button type="submit"  onClick={this.handleSubmit} >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
