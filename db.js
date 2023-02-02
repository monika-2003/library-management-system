const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const uri = "mongodb://127.0.0.1:27017/libraryManagement";

const mongoDB = async()=> {
    await mongoose.connect(uri, {useNewUrlParser: true} , async(err, result)=> {
        if(err) console.log("ERROR-->",err);

        else {
            console.log("CONNECTED");
        }
    })
}

module.exports = mongoDB