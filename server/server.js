const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes');

// 1. Initialize App FIRST
const app = express();

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

// 2. Local Server Setup (This runs only on your laptop)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// 3. Export App LAST (This is what Vercel needs)
module.exports = app;