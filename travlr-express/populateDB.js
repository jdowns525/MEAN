require('./app_server/models/db');
const Trip = require('./app_server/models/trips');
const fs = require('fs');

const populate = async () => {
  try {
    await Trip.deleteMany({});
    console.log('Old trips removed.');

    const data = fs.readFileSync('trips.json', 'utf8');
    const trips = JSON.parse(data);

    await Trip.insertMany(trips);
    console.log('New trips added.');
    process.exit(0);
  } catch (err) {
    console.error('Error populating the database:', err);
    process.exit(1);
  }
};

populate();



