
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
import 'dotenv/config'
//
import Top from './pages/App';
import About from './pages/about';
import Login from './pages/Login';
import Contact from './pages/Contact';
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// API
app.use('/api/common', commonRouter);

//MPA
app.get('/about', (req: any, res: any) => {
  try {
    res.send(renderToString(About()));
  } catch (error) {
    res.sendStatus(500);
  }
});
app.get('/login', (req: any, res: any) => {
  try {res.send(renderToString(Login()));} catch (error) { res.sendStatus(500); }
});
app.get('/contact', (req: any, res: any) => {
  try {
    res.send(renderToString(Contact()));
  } catch (error) {
    res.sendStatus(500);
  }
});
//Contact
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