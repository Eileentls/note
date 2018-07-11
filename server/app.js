import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('views', path.resolve(__dirname, '../dist'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.use('/api', routes);

app.get('*', (req, res) => {
  res.render('index.html');
});

app.listen(8000, () => console.log(`app is running on ${port}`));
