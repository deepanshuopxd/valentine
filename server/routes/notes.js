const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// POST /api/notes — save a new note
router.post('/', async (req, res) => {
  try {
    const { senderName, recipientName, dayName, message } = req.body;

    if (!senderName || !dayName || !message) {
      return res.status(400).json({ error: 'senderName, dayName, and message are required.' });
    }

    const note = new Note({ senderName, recipientName, dayName, message });
    await note.save();

    res.status(201).json({ success: true, note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/notes — fetch all notes (optional, for viewing saved notes)
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/notes/:dayName — fetch notes by day
router.get('/day/:dayName', async (req, res) => {
  try {
    const notes = await Note.find({ dayName: req.params.dayName }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;