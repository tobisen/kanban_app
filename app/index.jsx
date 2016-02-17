import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import alt from './lib/alt';
import storage from './lib/storage';
import persist from './lib/persist';

persist(alt, storage, 'app');

import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import Start from './components/pages/Start.jsx';
import App from './components/pages/App.jsx';
import Tutorial from './components/pages/TutorialApp.jsx';

ReactDOM.render(
    <Router history={createHistory({ queryKey: false })} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ Start } />
        <Route path="/app" component={ App } />
        <Route path="/tutorial" component={ Tutorial } />
    </Router>,
    document.getElementById('app')
);

/*
import Start from './components/Start.jsx';

ReactDOM.render(<Start />, document.getElementById('app'));
*/
