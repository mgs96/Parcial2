
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import {login} from './../../helpers.jsx';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
	
    constructor () {
        super();
        this.state = {  
          email: 'administrador@email.com',
          password: 'administrador',
          message:''
       }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
    handleSubmit(e) {
      e.preventDefault();
      login(this.state.email,this.state.password)
      .then((user) => {
        console.log(user);
        this.props.isAuthenticated();
          
      })
      .catch((error) => {
        this.setState({message: error.message});
      })
    }
      
	render() {
	  const style = {
      margin: 12,
    };
	  
		return (
		<article style={{ textAlign: 'center' }}>
		   <h2>Login</h2>
    		<form>
    		  <TextField
            hintText="Introduce tu email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          
          <br />
          
          <TextField
            hintText="Introduce tu contraseña"
            floatingLabelText="Password"
            name="password"    
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          
          <br />
          
          <RaisedButton label="Inicia sesión" primary={true} style={style} onClick={this.handleSubmit} />
        </form>
        
        <p>{this.state.message==='' ? '' : this.state.message}</p>
		</article>
		);
	}
}

export default Login;

