const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/OtakuGallery?directConnection=true&tls=false&readPreference=primary"
const connectToMongo=async()=>{
    await mongoose.connect(mongoURI)
    console.log("Mongoose Connected");
}
module.exports = connectToMongo;