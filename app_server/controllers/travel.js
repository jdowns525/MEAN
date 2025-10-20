const axios = require('axios');

const travelList = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/api/trips');
    const trips = response.data;
    res.render('travel-list', { trips });
  } catch (err) {
    console.error('Error loading trips:', err);
    res.render('error', { message: 'Error loading trips' });
  }
};

module.exports = { travelList };

