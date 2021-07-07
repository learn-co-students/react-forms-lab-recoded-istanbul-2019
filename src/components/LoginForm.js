import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:"",
    };
  }
  handleFun = (event)=>{
    this.setState({
      [event.target.id]: event.target.value,
      
    })
  }
// prevent = (event) =>{
//   event.preventDefault()
// }


prevent = (event)=>{
  event.preventDefault()
  if (this.state.username  === "" || this.state.password === "") return 
    this.props.handleLogin(this.state)
    

  // if(!this.state.username || !this.state.password){
  // this.props.handleLogin(this.state)
  // }
}

  render() {
    return (
      <form onSubmit={this.prevent}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleFun}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleFun} />
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
