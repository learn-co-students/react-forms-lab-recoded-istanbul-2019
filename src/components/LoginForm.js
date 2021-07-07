import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: 'name',
      password: 'password'
    };
  }

  inputValue = (e) =>{
    this.setState({
      username: e.target.value,
    })
  }

  inputValueP = (e) =>{
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let formData = { username: this.state.username, password: this.state.password }
    if(this.state.username.length !== 0 && this.state.password.length !== 0){
      this.props.handleLogin(formData)
    }
    
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={e => this.inputValue(e)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={e => this.inputValueP(e)} id="password" name="password" type="password"  value={this.state.password}/>
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
