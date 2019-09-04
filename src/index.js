import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/spectre.css/dist/spectre.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './routing/Root.js';


ReactDOM.render(< Root/>, document.getElementById('root'));

serviceWorker.unregister();
