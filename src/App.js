import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    repeater: "" 
  };
  
   repeat = (event) => {
    this.setState({       
      repeater: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.repeat} placeholder="Empieza a escribir algo"/>
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;
