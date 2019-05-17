import express from 'express';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public')) // treat public dir as static to the outside world

app.get('/', (req, resp) => {
  resp.send(renderer())
})

app.listen(8080, () => {
  console.log('Listenisng on port 8080');
})