import express from 'express';
import {pageRouter} from './pageRouter';
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')))
app.use(pageRouter);

app.listen(3000, () => {
  console.log('server start');
})