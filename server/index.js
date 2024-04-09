// server/app.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const cors = require('cors'); 

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
