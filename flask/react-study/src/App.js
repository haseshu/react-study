import React, { Component } from 'react';
import './App.css';

import Ranking from './containers/Ranking';
import Nav from './containers/Nav';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import Reboot from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class App extends Component {
  render() {
    return (
      <div className="App" style={{paddingLeft:240}}>
        <Reboot/>
        <AppBar style={{paddingLeft:240}}>
          <Toolbar>
            Yahoo!ショッピングランキング
          </Toolbar>
        </AppBar>

        <Nav />
        <div  style={{marginTop:64, padding:32}}>
        <Switch>
          <Route path="/all" component={Ranking} />
          <Route
          path="/category/1"
          render={()=><Redirect to="/all" />}
          />
          <Route
          path="/category/:id"
          render={
            ({match})=><Ranking categoryId={match.params.id}
            />
          }
          />
        </Switch>        
        </div>
      </div>
    );
  }
}

export default App;
