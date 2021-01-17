import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from './Pages/list';
import Details from './Pages/details';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Rick and Morty API
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/:id" component={Details} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
