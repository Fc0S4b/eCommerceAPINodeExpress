const express = require('express');
const app = express();
require('dotenv').config();
// database
const connectDB = require('./db/connect');

app.use(express.json());

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
