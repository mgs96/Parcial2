import React from 'react';
import {createPost} from './../../helpers.jsx';

class NewPost extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      title: '',
      desc: ''
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
    const post = {
      title: this.state.title,
      desc: this.state.desc,
      date: new Date().toString()
    }
    createPost(post)
      .then((post) => {
        console.log(post);
        this.setState({
          title: '',
          desc: ''
        })
      });
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
    const style = {
      margin: 12,
    };
    
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Crear post</h2>
    		<form>
    		  <TextField
            hintText="Titulo del post"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          
          <br />
          
          <TextField 
            value={this.state.desc}     
            onChange={this.handleChange} 
            name="desc"    
            hintText="Descripción" 
            multiLine={true}
            rows={1}
            rowsMax={20}
          />
          <br />
          
          <RaisedButton label="Primary" primary={true} style={style} onClick={this.handleSubmit} />
        </form>
      </div>
      );
  }
}

export default NewPost;