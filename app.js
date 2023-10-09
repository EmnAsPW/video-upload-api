
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
require("dotenv").config();
const videoRoutes = require('./routes/videoRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://emonsourov:haCSbuZrobyBXent@videodb.m3rgdgm.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', videoRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
