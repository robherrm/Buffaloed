import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import Homepage from './homepage/Homepage';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: {firstName: '', lastName: '', email: ''}
    }
    this.setUser = this.setUser.bind(this);
  }
  setUser(user){
    this.setState({
      user: user
    })
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" render={()=> <Homepage /> }/>
            <Route path="/login" render={()=> <Login setUser={this.setUser}  /> }/>
         </div>
         </Router>
      </div>
    );
  }
}

export default App;
