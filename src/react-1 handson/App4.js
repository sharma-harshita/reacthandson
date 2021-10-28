
import React from 'react';
import '../App.css';

export default class App4 extends React.Component {
  render() {
    return (
        <div className="comp comp2">
            <h1>This is created using class Component</h1>
            <p className="hello">This is done using external CSS</p>
            <p style={ {color: 'blue'} }>
                This is done using inline CSS
            </p>
        </div>
    );
  }
}