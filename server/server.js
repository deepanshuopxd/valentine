const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use('/api/notes', notesRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ message: '💝 Valentine Week API is running!' });
});

app.listen(PORT, () => {
  console.log(`💝 Server running on http://localhost:${PORT}`);
});