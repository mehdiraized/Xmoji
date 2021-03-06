import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import EmojiTab from './Components/EmojiTab';
import { StateProvider } from './Store';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <StateProvider>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/tab" component={EmojiTab} />
    </Router>
  </StateProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
