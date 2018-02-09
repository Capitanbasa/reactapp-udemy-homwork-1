import React, { Component } from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import './App.css';

class App extends Component {
  state = {
    username : 'default username'
  }
  changeHandler = (username) => {
    this.setState({username : username.target.value});
  }

  
  render() {
    return (
      <div className="App">
        <UserInput change={this.changeHandler.bind(this)} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
