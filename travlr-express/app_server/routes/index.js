const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/travel', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/travel.html'));
});

router.get('/rooms', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/rooms.html'));
});

router.get('/meals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/meals.html'));
});

router.get('/news', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/news.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/contact.html'));
});

module.exports = router;

