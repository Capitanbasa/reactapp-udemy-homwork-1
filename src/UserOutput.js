import React, { Component } from 'react';
class UserOutput extends Component {
    render() {
    const style = {
        color : 'red',
        fontSize : '18px'
    }
      return (
        <div className="output">
          <p style={style}>{this.props.username}</p>
        </div>
      );
    }
  }
  
  export default UserOutput;