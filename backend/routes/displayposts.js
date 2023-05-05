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
      const { post, description } = user;
      const bufferToBase64 = Buffer.from(post).toString('base64');
      res.json({ post: bufferToBase64, description });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });  

  

module.exports = router;