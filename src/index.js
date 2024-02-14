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

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// =================================================================================================

// Below code writen by Mehboob Shaikh

// import React from 'react';
// import ReactDOM from'react-dom';
// import el from './App'
// let el = React.createElement('h5',null,"Hello Mehboob Shaikh")
// ReactDOM.render(el,document.getElementById('root')) 


// import App from './App';
// ReactDOM.render(<App/>,document.getElementById('root')) 

//11-02-2024

// import App from './App1';
// ReactDOM.render(<App/>,document.getElementById('root'))

// how to use props by function base component

// import Student from './functionbase';
// import ReactDom from 'react-dom';
// ReactDom.render(<Student name="Mehboob" surname="Shaikh"/>,document.getElementById('root'))



// 12/02/2024

//Composing Component

// import ReactDOM from "react-dom";
// import Mall from "./mall";

// ReactDOM.render(<Mall />,document.getElementById('root'))


// import el from './App2'
// import ReactDOM from 'react-dom';

// ReactDOM.render(el,document.getElementById('root'))


// import App from "./App3";
// import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

//=============================================================
//    this is for children
// import App from "./App4";
// import ReactDOM from "react-dom";

// ReactDOM.render(<App> children </App>, document.getElementById("root"));


//=============================================================

// this is for state, state like a props we can modify and it's only for class base component

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App5';

ReactDOM.render(<App location="Mumbai" />, document.getElementById("root"));