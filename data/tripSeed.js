const mongoose = require('mongoose');
require('../app_server/models/travel'); // Load the Trip schema

const Trip = mongoose.model('Trip');

mongoose.connect('mongodb://localhost/travlr', { useNewUrlParser: true, useUnifiedTopology: true });

const trips = [
  {
    name: "Gale Reef",
    image: "/images/reef1.jpg",
    description1: "Sed et augue lorem. In sit amet placerat arcu. Mauris volutpat ipsum ac justo mollis vel vestibulum orci gravida.",
    description2: "Sed consequat libero ut turpis venenatis ut aliquam risus semper. Etiam convallis mi vel risus pretium sodales."
  },
  {
    name: "Dawson’s Reef",
    image: "/images/reef2.jpg",
    description1: "Integer magna leo, posuere et dignissim vitae, porttitor at odio.",
    description2: "Morbi aliquet viverra metus eu consectetur. In lorem dui, elementum sit amet convallis ac, tincidunt vel sapien."
  },
  {
    name: "Claire’s Reef",
    image: "/images/reef3.jpg",
    description1: "Donec sed felis risus. Nulla facilisi. Donec a orci tellus, et auctor odio.",
    description2: "Integer purus justo, egestas eu consectetur eu, cursus in tortor. Quisque nec nunc ac mi ultrices iaculis."
  }
];

Trip.deleteMany({})
  .then(() => Trip.insertMany(trips))
  .then(() => {
    console.log("Trips added successfully");
    return mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting trips:", err);
    mongoose.connection.close();
  });

