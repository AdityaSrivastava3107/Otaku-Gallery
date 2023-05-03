const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const User = require('../models/Users');

// route for updating user profile
router.put('/updateprofile', fetchuser, async (req, res) => {
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
      const bufferToBase64 = Buffer.from(user.displayPicture).toString('base64')
      res.status(200).json({ message: 'Profile fetched successfully.',  data: {
        displayName: user.name,
        displayBio : user.bio ,
        displayPicture : bufferToBase64
      },});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error.' });
    }
  });

  // router.put('/displaypicture', fetchuser, async (req, res) => {
  //   try {
  //     const user = await User.findById(req.user.id);
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found.' });
  //     }
  //     console.log(req.body)
  //     user.displayPicture = req.body.displayPicture;
  //     console.log(user.displayPicture)
  //     await user.save();
  
  //     res.status(200).json({ message: 'User display picture updated successfully.' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Server error.' });
  //   }
  // });

  // router.get('/fetchdisplaypicture', fetchuser, async (req, res) => {
  //   console.log('a')
  //   try {
  //     const user = await User.findById(req.user.id).select('displayPicture');
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found.' });
  //     }

  //     res.status(200).json({ message: 'User DisplayPicture fetched successfully.', data: user.displayPicture });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Server error.' });
  //   }
  // });

module.exports = router;
