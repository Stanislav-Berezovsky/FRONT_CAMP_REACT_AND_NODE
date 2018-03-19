import express from 'express';
import bodyParser from 'body-parser';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server'
import App from '../components/App';
import serverTemplate from './serverTemplate';


const app = express();

const router = express.Router();

app.use(bodyParser.json());
app.set('port', 3001);
app.get('/', function (req, res) {
    res.send(serverTemplate(renderToString(<App/>)));
})

app.listen(app.get('port'));