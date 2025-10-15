const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password123') {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { login };


