const connectToMongo = require('./db')
const express = require('express')
connectToMongo()
const app = express()
const port = 5000
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use('/api', require('./routes/upload'))
app.use('/api/displayposts', require('./routes/displayposts'))
app.use('/api/authorize', require('./routes/authorize'))
app.use('/api/displayprofile', require('./routes/displayprofile'))
app.use('/api/dp', require('./routes/dp'))

app.listen(port, () => {
  console.log(`OtakuGallery listening at http://localhost:${port}`)
})