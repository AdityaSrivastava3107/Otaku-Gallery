const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // specify the directory where uploaded files should be stored


const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer
});

const File = mongoose.model('File', fileSchema);

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file; // the uploaded file
  console.log(file)
  try {
    const data = await fs.readFile(file.path);

    const document = new File({
      filename: file.originalname,
      data: data
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