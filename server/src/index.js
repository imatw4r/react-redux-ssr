import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public')) // treat public dir as static to the outside world

app.get('*', (req, resp) => {
  const store = createStore();

  resp.send(renderer(req, store))
})

app.listen(8080, () => {
  console.log('Listenisng on port 8080');
})