// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//var React = require('react');
//var ReactDOM = require('react-dom');
import React from "react";
import ReactDOM from "react-dom";

//jsx ;- javascrip xml

//ReactDOM.render(<h1>Hello Niraj !</h1>, document.getElementById("root"));

//concept of js to run 
/*var h1 = document.createElement("h1");
h1.innerHTML = "Hello Niraj";
document.getElementById("root").appendChild(h1); */

//////const arr = ['niraj', 'deepak', 'khushboo'];

//in react v16 it's possible for render() without use div<> in html
//to return an array of elemnts;

ReactDOM.render(
  <React.Fragment>
    <h1>Hello Niraj !</h1>
    <p>How are you?</p>
  </React.Fragment>
    
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
