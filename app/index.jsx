import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import Start from './components/pages/Start.jsx';
import App from './components/pages/App.jsx';
import Links from './components/pages/Links.jsx';

ReactDOM.render(
    <Router history={createHistory({ queryKey: false })} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ Start } />
        <Route path="/app" component={ App } />
        <Route path="/links" component={ Links } />
    </Router>,
    document.getElementById('app')
);

/*
import Start from './components/Start.jsx';

ReactDOM.render(<Start />, document.getElementById('app'));
*/
