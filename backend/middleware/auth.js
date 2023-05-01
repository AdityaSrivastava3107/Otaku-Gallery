const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const auth = async (req, res, next) => {
  try {
    // extract the token from the Authorization header
    const token = req.header('auth-token').replace('Bearer ', '');

    // verify the token and extract the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error();
    }

    // attach the token and user to the request object
    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized.' });
  }
};

module.exports = auth;