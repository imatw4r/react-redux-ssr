import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public')) // treat public dir as static to the outside world

app.get('/', (req, resp) => {
  const content = renderToString(<Home/>)
  
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script> 
      </body>
    </html>
  ` /** This <script> part will tell to download script from public/bundle.js **/
  resp.send(html)
})

app.listen(8080, () => {
  console.log('Listenisng on port 8080');
})