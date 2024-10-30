const jwt = require('jsonwebtoken');
const User = require('../models/User1'); // Import your User model

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the header

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id); // Check if user exists in the database

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    req.user = decoded; // Attach decoded user data to the request
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token' });
    } else {
      return res.status(403).json({ message: 'Authentication error' });
    }
  }
};

module.exports = authenticateToken;
