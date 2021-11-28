const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// Body Parser
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.log(`DB Connection Error : ${err.message}`));

/* app.get('/', (req, res) => {
    res.send('Hello World!');
}); */

// ROUTES
const allRoutes = require('./routes/allRoutes');
app.use('/api', allRoutes);

// LISTENING
const PORT = 3000;
app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`));