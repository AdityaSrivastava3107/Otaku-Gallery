const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const app = express()
const port = 5000
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use('/api', require('./routes/upload'))

app.listen(port, () => {
  console.log(`OtakuGallery listening at http://localhost:${port}`)
})