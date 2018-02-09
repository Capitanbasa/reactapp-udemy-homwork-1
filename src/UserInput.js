import React, { Component } from 'react';
class UserInput extends Component {
    render() {
        const style = {
            color : '#000',
            fontSize : '18px',
            padding : '10px',
            textAlign : 'center',
        }
        const labalstyle = {
            fontSize : '20px'
        }
      return (
        <div className="input">
            <label style={labalstyle}>username: </label>
          <input className="btn" style={style} onChange={this.props.change} value={this.props.username} />
        </div>
      );
    }
  }
  
  export default UserInput;