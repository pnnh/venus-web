
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import express from 'express';
import { HomePage } from './pages/home'; 
import html from "html";
// Create a new express application instance
const app: express.Application = express();


const isProduction = process.env.NODE_ENV === 'production'

app.get('/', (req, res) => {
  let pageHtml = ReactDOMServer.renderToStaticMarkup(<HomePage />);
  if (!isProduction) {
    pageHtml = html.prettyPrint(pageHtml, { indent_size: 4 });
  }
  res.send(pageHtml);
});
app.use('/assets', express.static('assets'))

app.listen(8200, () => {
  console.log('Example app listening on port 8200!');
});
