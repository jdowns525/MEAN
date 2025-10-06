require('./app_server/models/db');
require('./app_api/models/trip');
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine (HBS)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// Static assets (your Travlr mockups, css/js/images)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`✅ Express + HBS running at http://localhost:${PORT}`);
});
