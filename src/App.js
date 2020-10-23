import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    value: "",
    number:0
  };

  counter = (event) => {
    this.setState({
      value: event.target.value,
      number:event.target.value.length,
    });
  };

  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.value} onChange={this.counter.bind(this)} ></textarea>
        <div className="counter">{this.state.number}</div>
      </div>
    );
  }
}

export default App;
