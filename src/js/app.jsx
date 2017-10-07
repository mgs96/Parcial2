import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';	
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Style     from                '../css/style.scss';
import Main      from            './Components/Main.jsx';

//muiTheme={getMuiTheme(darkBaseTheme)}

const Root = () => (
  <MuiThemeProvider >
    <Router >
      <div>
        <Route path="/" component={Main}/>
      </div>
    </Router>
  </MuiThemeProvider>
) 
 
ReactDOM.render(<Root />, document.getElementById('app'));