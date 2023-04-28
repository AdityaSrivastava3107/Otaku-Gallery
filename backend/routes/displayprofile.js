const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const User = require('../models/Users');

// route for updating user profile
router.put('/profile', fetchuser, async (req, res) => {
  try {
    const { name, bio } = req.body;
    if(!name)
    {
      throw new Error("Name cannot be empty.")
    }
    // Update the user's display name and picture in the database
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, bio },
      { new: true }
    );

    res.status(200).json({ message: 'Profile updated successfully.', data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

//route for fetching and displaying profile details
router.get('/profile', fetchuser, async (req, res) => {
    try {
      // Fetch the user data from the database
      const user = await User.findById(req.user.id);
  
      res.status(200).json({ message: 'Profile fetched successfully.',  data: {
        displayName: user.displayName,
        displayPicture: user.displayPicture,
      },});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error.' });
    }
  });

module.exports = router;
