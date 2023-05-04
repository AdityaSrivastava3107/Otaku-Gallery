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

router.post('/uploadPost', upload.single('post'), fetchuser, async (req, res) => {
    const file = req.file;
    const { description } = req.body;
     // the uploaded file
    try {
      if (!file) {
        return res.status(400).send('Please upload a file');
      }
        // eslint-disable-next-line no-unused-vars
        console.log(file)
        const user = await User.findById(req.user.id);
        user.post = file.buffer;
        user.description = description;
        await user.save();

        console.log('Post saved successfully');
        res.send('Post uploaded and saved to database successfully!');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while uploading the Post');
    }
});

module.exports = router;