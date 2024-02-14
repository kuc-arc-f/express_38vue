
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
//
import Top from './pages/App';
import About from './pages/about';
//const routes = require('./routes/index');
//import testRouter from './routes/test';
//import commonRouter from './routes/common';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// route
//app.use('/', routes);
//app.use('/api/test', testRouter);
//app.use('/api/common', commonRouter);

//MPA
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/', (req: any, res: any) => {
  try {
    res.send(renderToString(Top()));
  } catch (error) {
    res.sendStatus(500);
  }
});


//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

export default app;