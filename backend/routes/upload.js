const express = require('express');
const multer = require('multer');
const mongodb = require('mongodb');
const fs = require('fs');
const router = express.Router();
const upload = multer({ dest: 'uploads/' }); 
const mongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/?directConnection=true&tls=false&readPreference=primary';


 //Image file uploading route
router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file; 
  mongoClient.connect(url, function(err, client) {
    if (err) throw err;

    const db = client.db('mydatabase');
    const collection = db.collection('files');

    fs.readFile(file.path, function(err, data) {
      if (err) throw err;

      const binaryData = new mongodb.Binary(data);

      const document = {
        filename: file.originalname,
        data: binaryData
      };

      collection.insertOne(document, function(err, result) {
        if (err) throw err;

        console.log('File saved successfully');
        client.close();

        res.send('File uploaded and saved to database successfully!');
      });
    });
  });
});
module.exports = router;
