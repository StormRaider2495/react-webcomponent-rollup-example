import React from "react";
import './index.css';
import ReactWebComponent from 'react-web-component';
import reportWebVitals from './reportWebVitals';
import './mycomponent';

class Greeting extends React.Component {
  render() {
    return (
      <>
        <h1>Hello, {this.props.name}</h1>
        <div className="container">
          <my-counter></my-counter>
        </div>
      </>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactWebComponent.create(<Greeting name="Mars"></Greeting>, 'web-greeting', false);


