const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const fetchuser = require('../middleware/fetchuser');

router.get('/fetchPost', fetchuser, async (req, res) => {

  try {
      const user = await User.findById(req.user.id);
      if (!user.post) {
          return res.status(404).json({ message: 'Post not found for the user' });
      }
      const bufferToBase64 = Buffer.from(user.post).toString('base64')
      console.log(bufferToBase64)
      //res.set('Content-Type', 'image/png');
      res.send(bufferToBase64);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

  

module.exports = router;