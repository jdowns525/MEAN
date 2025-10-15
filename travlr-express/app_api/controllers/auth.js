const jwt = require('jsonwebtoken');

const USER = {
  email: 'admin@example.com',
  password: 'admin123'
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, 'MY_SECRET_KEY', { expiresIn: '1h' });
    return res.status(200).json({ token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
};

