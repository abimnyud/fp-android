const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// BODY PARSER
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(`DB Connection Error : ${err.message}`));

// CATALOGS ROUTES
const catalogsRoutes = require('./routes/catalogs');
app.use('/catalogs', catalogsRoutes);

// AUTH ROUTES
const auth = require('./routes/auth');
app.use('/auth', auth);

// LISTENING
const PORT = 3000;
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`));