const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const router = express.Router();
const File = require('../models/Files')
const upload = multer({ dest: 'uploads/' }); // specify the directory where uploaded files should be 
const fetchuser = require('../middleware/fetchuser')


router.post('/upload', upload.single('file'), fetchuser, async (req, res) => {
  const file = req.file; // the uploaded file
  try {
    const data = await fs.readFile(file.path);
    const { description } = req.body;
    console.log(req.user)
    const document = new File({
      filename: file.originalname,
      data: data,
      description : description,
      userId : req.user.id
    });

    await document.save();

    console.log('File saved successfully');
    res.send('File uploaded and saved to database successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while uploading the file');
  }
});



 module.exports = router;