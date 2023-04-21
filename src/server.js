const express = require('express');
require('dotenv').config();
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/eventscheduler';

const app = express();
app.use(express.json());

app.use(cors());

// connect to the MongoDB database
//connectDB();

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  client.close();
});


app.use('/events', eventRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
    });

// start the server on port 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
