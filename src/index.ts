
import express from 'express';
import { renderToString } from 'vue/server-renderer'
import { createSSRApp } from 'vue'
const app = express();
//
import App from './pages/App.vue';
import AboutApp from './pages/About.vue';
import ContactApp from './pages/Contact.vue';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// route
//app.use('/api/common', commonRouter);

//MPA
app.get('/about', async (req: any, res: any) => {
  try {
    const app = createSSRApp(AboutApp);
    const html = await renderToString(app, {})
    res.send(html); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/contact', async (req: any, res: any) => {
  try {
    const app = createSSRApp(ContactApp);
    const html = await renderToString(app, {})
    res.send(html); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/', async (req: any, res: any) => {
  try {
    const app = createSSRApp(App);
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