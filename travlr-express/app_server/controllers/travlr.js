const path = require('path');
const fs = require('fs');

exports.index = (req, res) => {
  const tripsPath = path.join(__dirname, '../../data/trips.json');
  const tripsData = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

  res.render('index', {
    title: 'Travlr Getaways',
    tagline: 'Find your next adventure',
    trips: tripsData
  });
};
