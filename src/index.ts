
import express from 'express';
import { renderToString } from 'vue/server-renderer'
const app = express();
//
//import Top from './pages/App';
import { createApp } from './pages/App'
import {AboutCreateApp} from './pages/About';
import {ContactCreateApp} from './pages/Contact';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// route
//app.use('/api/common', commonRouter);

//MPA
app.get('/about', async (req: any, res: any) => {
  try {
    const { app } = AboutCreateApp()
    const html = await renderToString(app, {})
    res.send(html); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/contact', async (req: any, res: any) => {
  try {
    const { app } = ContactCreateApp()
    const html = await renderToString(app, {})
    res.send(html); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/', async (req: any, res: any) => {
  try {
    const { app } = createApp()
    const html = await renderToString(app, {})
    res.send(html); 
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');

export default app;