const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

const fetchuser = require('../middleware/fetchuser');
router.get('/posts', fetchuser, async (req, res) => {
    try {
      const images = await Image.find({ user: req.user.id });
      res.status(200).json({ message: 'User images fetched successfully.', data: images });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error.' });
    }
  });
  

module.exports = router;