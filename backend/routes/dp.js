const express = require('express');
const multer = require('multer');
const router = express.Router();
const User = require('../models/Users');
// const upload = multer({ dest: 'uploads' });
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/.(jpg|jpeg|png|JPEG|PNG|JPG)$/)) {
            return cb(new Error('Please upload an image file'));
        }
        cb(undefined, true);
    }
});

const fetchuser = require('../middleware/fetchuser');

router.post('/uploadDisplayPicture', upload.single('displayPicture'), fetchuser, async (req, res) => {
    const file = req.file; // the uploaded file
    try {
        // eslint-disable-next-line no-unused-vars
        console.log(file)
        const user = await User.findById(req.user.id);
        user.displayPicture = req.file.buffer;
        await user.save();

        console.log('Display picture saved successfully');
        res.send('Display picture uploaded and saved to database successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while uploading the display picture');
    }
});



// Define route for fetching display picture
router.get('/fetchDisplayPicture', fetchuser, async (req, res) => {

    try {
        const user = await User.findById(req.user.id);
        if (!user.displayPicture) {
            return res.status(404).json({ message: 'Display picture not found for the user' });
        }
        const bufferToBase64 = Buffer.from(user.displayPicture).toString('base64')
        console.log(bufferToBase64)
        //res.set('Content-Type', 'image/png');
        res.send(bufferToBase64);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
