const mongoose = require('mongoose');
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;
const cors =require('cors')
app.use(cors())
app.use(express.json())

async function startApplication() {
  try {
    // Connect to MongoDB
    await connectToMongo();
    // console.log("Connected to MongoDB!");

    // Perform some database operations (Sample: Create a new document)
    const SampleModel = mongoose.model('Sample', new mongoose.Schema({ 'name': String }));
    const newSampleDoc = new SampleModel({ name: 'Sample Document' });
    await newSampleDoc.save();

    // Do not close the MongoDB connection here
  } catch (error) {
    console.error("Error in application:", error);
    // Handle the error, for example, exit the application
    process.exit(1); // Exit the application with a non-zero status code
  }
}

// Call startApplication to connect to MongoDB and perform database operations
startApplication();

// Express
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
