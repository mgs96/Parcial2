import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, IndexRoute} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';	
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Style     from                '../css/style.scss';
import Main      from            './Components/Main.jsx';
import Public    from    './Components/Pages/Public.jsx';
import Protected from './Components/Pages/Protected.jsx';

const Root = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router >
      <Route path="/" component={Main}>
        <IndexRoute component={Protected} />
        <Route path="about" component={Public} />
      </Route>
    </Router>
  </MuiThemeProvider>
) 
 
ReactDOM.render(<Root />, document.getElementById('app'));