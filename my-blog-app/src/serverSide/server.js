import React, {Component} from 'react';
import {renderToString}  from 'react-dom/server'
import express from 'express';
import App from '../App';
import serverTemplate from './serverTemplate';


const app = express();

app.get('/', function(req, res) {
    res.send(serverTemplate(renderToString(<App/>)));
})

app.listen(3001);