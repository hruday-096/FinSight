const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB ');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
})
