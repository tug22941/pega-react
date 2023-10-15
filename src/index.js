//the starting point of every react.js application
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//reactDOM is used to render our application into our realDOM (div with an ID of 'root')
//1) Populate react app: 2) Inject into basic dom
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') //the basic dom is targeted here
)

