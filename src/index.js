import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));


serviceWorker.unregister();
