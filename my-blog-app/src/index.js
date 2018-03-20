import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>),
    document.getElementById('root'));

registerServiceWorker();
