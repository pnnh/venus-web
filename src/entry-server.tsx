import React from "react";
import * as ReactDOMServer from 'react-dom/server';
import { HomePage } from './pages/home';
import html from "html";

const isProduction = process.env.NODE_ENV === 'production'

export function render(url: string) {

  console.log('rendering', url)

  let pageHtml = ""
  if (url === "/") {

    pageHtml = ReactDOMServer.renderToStaticMarkup(<HomePage />);
  }

  if (!isProduction) {
    pageHtml = html.prettyPrint(pageHtml, { indent_size: 4 });
  }


  return pageHtml
}


