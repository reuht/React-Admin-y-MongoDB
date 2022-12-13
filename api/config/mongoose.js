const mongoose = require("mongoose"); 
require("dotenv").config(); 

const uri = process.env.BD_URI

// console.log(uri)
const conn = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

mongoose.set('strictQuery', false);

module.exports = conn; 

