import React, { useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

class Login extends React.Component {

  state = {
      credentials: {
          username: '',
          password: ''
      }
  };

  handleChange = e => {
      this.setState({
          credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
          }
      });
  };

  login = e => {
      e.preventDefault();

      axiosWithAuth()
          .post('/login', this.state.credentials)
          .then(res => {
              console.log(res)
              localStorage.setItem('token', res.data.payload);
              this.props.history.push('/bubbles')
          })
          .catch(err => {
              console.log({err})
          })
  }

  render() {
      return (
          <>
              <form className='login' onSubmit={this.login}>
                  <input
                      type="text"
                      name="username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                  />
                  <input
                      type="password"
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                  />
                  <button>Log in</button>
              </form>
          </>
      )


  }

}

export default Login; 
//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.