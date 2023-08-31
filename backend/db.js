const mongoose = require('mongoose');

const uri = `mongodb+srv://kesrivastava18:teamkeshav@cluster1.tla04wc.mongodb.net/`
// mongodb+srv://kesrivastava18:teamkeshav@cluster1.tla04wc.mongodb.net/
const connectToMongo = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;


