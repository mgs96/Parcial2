import React from 'react';
import {auth} from './../../helpers.jsx';

class Users extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      email: '',
      password: ''
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
    
    auth(this.state.email,this.state.password)
    .then((user) => {
      //console.log(user);
      this.setState({
        email: '',
        password: ''
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  componentDidMount() {
    const usersRef = firebase.database().ref().child('users');
    usersRef.on('value', (snapshot) => {
      let users = snapshot.val();
      let newState = [];
      for (let user in users) {
          console.log(user);
        newState.push({
          id:message,
          name: messages[message].name,
          mail: messages[message].mail,
          message: messages[message].message
        });
      }
      this.setState({
        messages: newState
      })
    })
  }
  
  render() {
    return (
      <div>
      <h2>Create users</h2>
    		<form onSubmit={this.handleSubmit}>
    		  Email   
          <input value={this.state.email}    
                onChange={this.handleChange} 
                name="email"    
                type="email" 
                placeholder="email@domain.com"/>
                
          <br />
          
          Password    
          <input value={this.state.password}     
                onChange={this.handleChange} 
                name="password"    
                type="password" 
                placeholder="password" />
          <br />
          
          Name   
          <input value={this.state.name}    
                onChange={this.handleChange} 
                name="name"    
                type="text" 
                placeholder="Name"/>
                
          <br />
          
          <button>Create!</button>
        </form>
      </div>
      );
  }
}

export default Users;