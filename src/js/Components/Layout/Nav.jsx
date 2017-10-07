import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Protected from './../Pages/Protected.jsx'
import Public from './../Pages/Public.jsx'

class Login extends React.Component {
  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    
    <MenuItem primaryText="Inicio"  containerElement={<Link to="/" />}/>
    <MenuItem primaryText="Protegido"     containerElement={<Link to="/protected" />}/>
    <MenuItem primaryText="Publico" containerElement={<Link to="/public" />}/>
    
  </IconMenu>
);

class Nav extends React.Component {
	constructor () {
		super();
		
    this.state = {
    	logged: true
    }
	}
	
	render() {
		return ( 
			<nav>
  			<AppBar
            title="Title"
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
            showMenuIconButton={false}
          />
			</nav>
		);
	}
}

export default Nav;
