const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/travlr')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

require('./app_api/models/travlr');

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const travelRouter = require('./app_server/routes/travel');
app.use('/', travelRouter);

const apiRouter = require('./app_api/routes/trips');
app.use('/api/trips', apiRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

