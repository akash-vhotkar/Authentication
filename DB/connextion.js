const mangoose = require('mongoose');
const URI = "mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/test?retryWrites=true&w=majority";


const connectDB = async () => {
    await mangoose.connect(URI)
    console.log("the db connection was succesfull");
}

module.exports = connectDB;