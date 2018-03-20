import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter history={createHistory()}>
        <App/>
    </BrowserRouter>), document.getElementById('root'));

registerServiceWorker();
