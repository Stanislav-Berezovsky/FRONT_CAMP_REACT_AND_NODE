import express from 'express';
import bodyParser from 'body-parser';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from '../routes';
import serverTemplate from './serverTemplate';


const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.set('port', 3001);

app.get('*', function (req, res) {
    const context = {};

    res.send(serverTemplate(renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    )));
})

app.use('/static', express.static('./build/static'));

app.listen(app.get('port'));
console.log('http://localhost:' + app.get('port'));