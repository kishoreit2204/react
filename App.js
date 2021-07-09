import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {Route, Switch} from 'react-router-dom';
import LoginForm from './component/LoginForm';
import Home from './component/Home';

class App extends React.Component {
  render(){
    return(
      <Switch>
      <div>
        <Navbar />
        <div>
        <Route path="/LoginForm" component={LoginForm}/>
        <Route path="/" component={Home}/>
      </div>
      </div>
      </Switch>
    )
  }
  
}

export default App;
