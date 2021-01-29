import React from "react";
import ReactWebComponent from 'react-web-component';
import './mycomponent.css';

class MyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState((prev) => ({
      count: prev.count + 1
    }));
  }
  decrement() {
    this.setState((prev) => ({
      count: prev.count - 1
    }));
  }
  render() {
    return (
      <div className='counter-container'>
        <h1>Example of Nested React Web Component</h1>
        <button onClick={() => this.increment()}>up</button>
        <button onClick={() => this.decrement()}>down</button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

ReactWebComponent.create(<MyCounter/>, 'my-counter', false);
