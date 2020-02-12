import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { AuthStore } from './context';

ReactDOM.render(<AuthStore ><App /></AuthStore>, document.getElementById('root'));